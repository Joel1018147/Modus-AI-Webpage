import { useLang, type Lang } from "@/contexts/LanguageContext";

/**
 * Site footer — the legal identity of the company, on every page.
 *
 * Added in Run 153 because the site had no <footer> element at all: the only
 * place the entity was named was a JSON-LD `legalName` and one line of prose,
 * both of which said "Modus AI Associates LLP". The SSM record says a sole
 * proprietorship, 202403281139 (003660934-V). A Meta App Review reviewer opens
 * the corporate site and the privacy policy side by side, and two different
 * legal names is where that review stops.
 *
 * The privacy policy currently lives on the M-EasyDo deployment — it is the
 * URL registered against the Meta app. When a corporate policy page exists on
 * this domain, change PRIVACY_URL here and nowhere else.
 */

const PRIVACY_URL = "https://m-easydo-ai-production.up.railway.app/privacy.html";
const CONTACT_EMAIL = "admin@modusaiassociates.com";
const REGISTRATION_NO = "202403281139 (003660934-V)";
const ADDRESS = "25, Jalan TK2/19, Taman Kinrara, Seksyen 2, 47180 Puchong, Selangor, Malaysia";

type FooterCopy = {
  registeredAddress: string;
  registrationNo: string;
  contact: string;
  privacy: string;
  rights: string;
};

const FOOTER_I18N: Record<Lang, FooterCopy> = {
  en: {
    registeredAddress: "Registered address",
    registrationNo: "Business registration no.",
    contact: "Contact",
    privacy: "Privacy Policy",
    rights: "All rights reserved.",
  },
  bm: {
    registeredAddress: "Alamat berdaftar",
    registrationNo: "No. pendaftaran perniagaan",
    contact: "Hubungi",
    privacy: "Dasar Privasi",
    rights: "Hak cipta terpelihara.",
  },
  cn: {
    registeredAddress: "注册地址",
    registrationNo: "商业注册号",
    contact: "联系",
    privacy: "隐私政策",
    rights: "版权所有。",
  },
  id: {
    registeredAddress: "Alamat terdaftar",
    registrationNo: "No. pendaftaran usaha",
    contact: "Kontak",
    privacy: "Kebijakan Privasi",
    rights: "Hak cipta dilindungi undang-undang.",
  },
  vn: {
    registeredAddress: "Địa chỉ đăng ký",
    registrationNo: "Số đăng ký kinh doanh",
    contact: "Liên hệ",
    privacy: "Chính sách bảo mật",
    rights: "Bảo lưu mọi quyền.",
  },
  ar: {
    registeredAddress: "العنوان المسجل",
    registrationNo: "رقم التسجيل التجاري",
    contact: "اتصل بنا",
    privacy: "سياسة الخصوصية",
    rights: "جميع الحقوق محفوظة.",
  },
  th: {
    registeredAddress: "ที่อยู่จดทะเบียน",
    registrationNo: "เลขทะเบียนธุรกิจ",
    contact: "ติดต่อ",
    privacy: "นโยบายความเป็นส่วนตัว",
    rights: "สงวนลิขสิทธิ์",
  },
};

export function Footer() {
  const { lang } = useLang();
  const t = FOOTER_I18N[lang];

  return (
    <footer
      className="border-t border-white/10 bg-background py-12"
      data-testid="site-footer"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-3 text-sm text-muted-foreground">
          <div>
            <div className="font-display font-bold text-white mb-2">
              Modus AI Associates
            </div>
            <div data-testid="footer-registration">
              {t.registrationNo} {REGISTRATION_NO}
            </div>
          </div>

          <div>
            <div className="text-white/80 mb-2">{t.registeredAddress}</div>
            <address className="not-italic" data-testid="footer-address">
              {ADDRESS}
            </address>
          </div>

          <div>
            <div className="text-white/80 mb-2">{t.contact}</div>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-primary hover:underline"
              data-testid="footer-email"
            >
              {CONTACT_EMAIL}
            </a>
            <div className="mt-3">
              <a
                href={PRIVACY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
                data-testid="footer-privacy"
              >
                {t.privacy}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 text-xs text-muted-foreground">
          © 2025–2026 Modus AI Associates. {t.rights}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
