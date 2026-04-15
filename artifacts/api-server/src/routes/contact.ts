import { Router } from "express";
import { Resend } from "resend";

const router = Router();

const resend = new Resend(process.env.RESEND_API_KEY);

const RECIPIENT = "admin@modusaiassociates.com";

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(str: string): string {
  return str.trim().slice(0, 2000);
}

router.post("/contact", async (req, res) => {
  const { name, company, email, message, honeypot } = req.body;

  if (honeypot) {
    res.status(200).json({ success: true });
    return;
  }

  const cleanName = sanitize(name ?? "");
  const cleanCompany = sanitize(company ?? "");
  const cleanEmail = sanitize(email ?? "");
  const cleanMessage = sanitize(message ?? "");

  if (!cleanName || !cleanEmail || !cleanMessage) {
    res.status(400).json({ success: false, error: "Name, email, and message are required." });
    return;
  }

  if (!validateEmail(cleanEmail)) {
    res.status(400).json({ success: false, error: "Please enter a valid email address." });
    return;
  }

  try {
    const { error } = await resend.emails.send({
      from: "MODUS AI Contact Form <onboarding@resend.dev>",
      to: [RECIPIENT],
      replyTo: cleanEmail,
      subject: `New Enquiry from ${cleanName}${cleanCompany ? ` — ${cleanCompany}` : ""}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0f1e; color: #e2e8f0; padding: 32px; border-radius: 12px;">
          <div style="border-bottom: 2px solid #00d4ff; padding-bottom: 16px; margin-bottom: 24px;">
            <h1 style="color: #00d4ff; margin: 0; font-size: 24px;">MODUS AI Associates</h1>
            <p style="color: #94a3b8; margin: 4px 0 0 0; font-size: 14px;">New Contact Form Submission</p>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #94a3b8; font-size: 14px; width: 100px;">Name</td>
              <td style="padding: 10px 0; color: #e2e8f0; font-weight: bold;">${cleanName}</td>
            </tr>
            ${cleanCompany ? `
            <tr>
              <td style="padding: 10px 0; color: #94a3b8; font-size: 14px;">Company</td>
              <td style="padding: 10px 0; color: #e2e8f0;">${cleanCompany}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 10px 0; color: #94a3b8; font-size: 14px;">Email</td>
              <td style="padding: 10px 0;"><a href="mailto:${cleanEmail}" style="color: #00d4ff;">${cleanEmail}</a></td>
            </tr>
          </table>

          <div style="margin-top: 24px; background: #111827; padding: 20px; border-radius: 8px; border-left: 3px solid #7c3aed;">
            <p style="color: #94a3b8; font-size: 12px; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 1px;">Message</p>
            <p style="color: #e2e8f0; margin: 0; line-height: 1.7; white-space: pre-wrap;">${cleanMessage}</p>
          </div>

          <p style="color: #475569; font-size: 12px; margin-top: 32px; text-align: center;">
            Sent via MODUS AI Associates website contact form
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      res.status(500).json({ success: false, error: "Failed to send message. Please try again." });
      return;
    }

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    res.status(500).json({ success: false, error: "An unexpected error occurred. Please try again." });
  }
});

export default router;
