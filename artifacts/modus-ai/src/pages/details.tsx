import React, { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import {
  ArrowLeft, CheckCircle2, ChevronRight,
  Mail, MapPin, Phone, Send, Award, Globe2, BookOpen, Users, Briefcase, Bot, Camera, Loader2,
  ChevronDown
} from "lucide-react";
import launchImg from "@assets/image_1775812766946.png";
import ribbonImg from "@assets/WhatsApp_Image_2026-04-03_at_5.40.49_PM_1775209677927.jpeg";
import signingImg from "@assets/WhatsApp_Image_2026-04-03_at_5.36.11_PM_1775209677928.jpeg";
import coursesImg from "@assets/image_1775812683826.png";
import uniImg from "@assets/image_1775813041771.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const courses = [
  {
    no: "01",
    title: "AI Human Resources Manager",
    summary: "Composite HR management certification for professionals who apply AI technology to talent acquisition, training, performance management, and HR operations. Powered by DeepSeek and MIIT-certified.",
    features: ["DeepSeek-powered HR workflows", "AI-assisted document & recruitment", "Talent management systems", "Performance coaching with AI", "Group company position management"],
    benefits: ["5–10x HR productivity boost", "Global-standard MIIT credential", "AI-driven talent pipeline", "Automated compliance documentation", "Lead digital HR transformation"],
    duration: "40 hours",
    price: "RM 6,000",
    recognition: "MIIT / IITC",
  },
  {
    no: "02",
    title: "AI Application Specialist for the Workplace",
    summary: "AI tool proficiency certification for professionals across core office scenarios including document creation, PPT design, data analysis, customer service, and live-stream operations.",
    features: ["DeepSeek office automation", "AI-powered PPT & visual design", "Workplace data analysis", "Customer service AI integration", "Corporate content & marketing AI"],
    benefits: ["Dramatically reduce repetitive tasks", "Produce professional outputs faster", "Cross-function AI fluency", "Career-accelerating credential", "Applicable across all industries"],
    duration: "30 hours",
    price: "RM 6,000",
    recognition: "MIIT / IITC",
  },
  {
    no: "03",
    title: "AI Financial Manager",
    summary: "Interdisciplinary certification combining financial expertise with AI technology to drive financial digital transformation, including budgeting, risk control, tax compliance, and intelligent audit.",
    features: ["AI-driven budgeting & forecasting", "Intelligent procurement systems", "Tax compliance automation", "AI audit & risk penetration", "Financial data cleaning with DeepSeek"],
    benefits: ["Smarter financial decision-making", "Automated compliance workflows", "Reduced financial risk exposure", "End-to-end cost visibility", "Future-proof finance leadership"],
    duration: "60 hours",
    price: "RM 6,000",
    recognition: "MIIT / IITC",
  },
  {
    no: "04",
    title: "AI Psychological Counseling Consultant",
    summary: "Professional certification combining AI technology with psychological theories to deliver digital mental health support services including AI-assisted therapy, ethics frameworks, and agent-based counseling tools.",
    features: ["AI counseling tool integration", "Ethical AI use in therapy", "Expressive art therapy with AI", "Agent-based consultation systems", "AI knowledge base for counselors"],
    benefits: ["Expand therapeutic reach digitally", "Modern evidence-based practice", "Ethical & compliant AI use", "Build your own counseling agent", "Recognised cross-border credential"],
    duration: "30 hours",
    price: "RM 6,000",
    recognition: "MIIT / IITC",
  },
  {
    no: "05",
    title: "Artificial Intelligence Trainer",
    summary: "Certification of AI product application capabilities covering data management, algorithm configuration, large model principles, and prompting techniques — qualifying holders to train others in AI.",
    features: ["DeepSeek prompting mastery", "Large model principles (50 mins)", "AIGC essential skills", "Algorithm & data configuration", "MIIT intermediate AI certification"],
    benefits: ["Qualify as a certified AI trainer", "Train teams and organisations", "Deep understanding of AI models", "High-demand career positioning", "MIIT & IITC dual recognition"],
    duration: "25 hours",
    price: "RM 6,000",
    recognition: "MIIT / IITC",
  },
  {
    no: "06",
    title: "Agent Builder",
    summary: "Professional certification in building and optimising AI agents using platforms including Coze, FastGPT, and Dify. Covers enterprise agent deployment, RAG design, and knowledge base construction.",
    features: ["Coze & Dify agent development", "RAG design & knowledge bases", "AI agent training & optimisation", "Enterprise multi-platform deployment", "Localised agent construction"],
    benefits: ["Build custom enterprise AI agents", "Automate complex workflows", "Competitive edge in AI engineering", "Deploy production-ready agents", "Emerging, high-value skill set"],
    duration: "30 hours",
    price: "RM 6,000",
    recognition: "MIIT / IITC",
  },
  {
    no: "07",
    title: "AI Product Manager",
    summary: "Full lifecycle AI product management certification covering technology evaluation, user research, commercial value creation, and career development — designed for PMs leading AI-powered products.",
    features: ["AI product lifecycle management", "User insight with DeepSeek", "AI outbound call platform design", "Resume & interview AI prep", "OpenClaw enterprise application"],
    benefits: ["Lead AI product teams", "Market-ready PM credential", "Commercial AI value creation", "Career advancement tools", "Recognised by MIIT & IITC"],
    duration: "35 hours",
    price: "RM 6,000",
    recognition: "MIIT / IITC",
  },
  {
    no: "08",
    title: "AI Data Analyst",
    summary: "Certification for professionals who use AI to deeply analyse enterprise data and provide actionable decision-making insights. Covers Python, MySQL, AI data modelling, and predictive analytics.",
    features: ["Python & MySQL data foundations", "AI data modelling & mining", "Predictive analytics pipelines", "Business intelligence dashboards", "DeepSeek data analysis rules"],
    benefits: ["Data-driven decision authority", "Automate complex reporting", "Predictive business insights", "Cross-industry applicability", "High-demand analytics credential"],
    duration: "40 hours",
    price: "RM 6,000",
    recognition: "MIIT / IITC",
  },
  {
    no: "09",
    title: "AI Marketer",
    summary: "Professional certification in developing and optimising marketing strategies using AI — covering AIGC short video, AI+SEO, content creation, community management, and customer acquisition.",
    features: ["AIGC short video marketing", "AI+SEO content strategy", "Community & social AI tools", "AI-powered ad & copy creation", "Seedance 2.0 video production"],
    benefits: ["Precision customer acquisition", "Automated content at scale", "Measurable campaign ROI", "Modern digital marketing edge", "Career-defining AI credential"],
    duration: "25 hours",
    price: "RM 6,000",
    recognition: "MIIT / IITC",
  },
  {
    no: "10",
    title: "AIGC Application Engineer",
    summary: "Authoritative credential demonstrating mastery of AIGC tool implementation, scenario-based solution design, and business integration — for professionals building with large AI models.",
    features: ["Large model application development", "AIGC tool implementation", "Scenario-based solution design", "Business integration capabilities", "Novice-to-expert learning path"],
    benefits: ["Authoritative professional credential", "Technical AI proficiency proof", "Build complex AI applications", "Business-ready AI engineering", "Valued across all sectors"],
    duration: "30 hours",
    price: "RM 6,000",
    recognition: "MIIT / IITC",
  },
  {
    no: "11",
    title: "OpenClaw Development Engineer",
    summary: "Core skills certification for intelligent agent development, leading the technological revolution in AI application engineering using the OpenClaw platform.",
    features: ["Intelligent agent core development", "AI application engineering", "OpenClaw platform mastery", "Enterprise agent integration", "Emerging AI tech stack"],
    benefits: ["Lead the AI development revolution", "Cutting-edge engineering skills", "High-value niche credential", "Enterprise deployment capability", "Future-proof career path"],
    duration: "20 hours",
    price: "RM 6,000",
    recognition: "MIIT / IITC",
  },
  {
    no: "12",
    title: "OpenClaw Workplace Application Specialist",
    summary: "Become the 'Workplace Intelligent Agent Commander' in the AI era. This certification equips professionals with high-efficiency AI office tools, intelligent workflows, and enterprise automation capabilities.",
    features: ["High-efficiency AI office workflows", "Intelligent workplace automation", "OpenClaw specialist training", "Enterprise AI command skills", "AI-era productivity systems"],
    benefits: ["Transform daily work with AI", "Become indispensable at work", "Lead AI adoption in your team", "Immediate productivity gains", "Workplace leadership credential"],
    duration: "35 hours",
    price: "RM 6,000",
    recognition: "MIIT / IITC",
  },
];

type FormState = {
  name: string;
  company: string;
  email: string;
  message: string;
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function Details() {
  const [location] = useLocation();
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>({ name: "", company: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Enter a valid email";
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitStatus("loading");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, honeypot: "" }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitStatus("success");
        setForm({ name: "", company: "", email: "", message: "" });
        setTimeout(() => setSubmitStatus("idle"), 6000);
      } else {
        setSubmitStatus("error");
        setErrorMessage(data.error ?? "Failed to send. Please try again.");
      }
    } catch {
      setSubmitStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash.substring(1));
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background text-foreground pb-24">
      <Navbar />

      {/* Floating back button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-md border border-white/10 hover:border-primary hover:bg-primary/10 transition-all duration-300 shadow-lg text-sm font-medium"
          data-testid="back-to-home"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>

      <main className="container mx-auto px-4 md:px-8 pt-32 max-w-5xl flex flex-col gap-32">

        {/* ── About Us ── */}
        <motion.section
          id="about"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="scroll-mt-32"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-1 w-12 bg-primary" />
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              About <span className="text-primary">Us</span>
            </h2>
          </div>

          <div className="p-8 md:p-12 rounded-3xl bg-card border border-white/5 relative overflow-hidden group hover:border-primary/30 transition-colors duration-500 mb-8">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] group-hover:bg-primary/10 transition-colors duration-500" />
            <div className="relative z-10 text-lg md:text-xl text-muted-foreground leading-relaxed space-y-6">
              <p>
                <strong className="text-white font-display">MODUS AI Associates</strong> is Malaysia's gateway to China's world-class AI ecosystem — bridging ASEAN's rapidly growing AI talent gap through certified, practical training and real-world implementation.
              </p>
              <p>
                We are officially partnered with <strong className="text-primary">China's No.1 AI Training Institution</strong>,{" "}
                <a href="https://www.ITCast.cn" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors">www.ITCast.cn</a>
                {" "}— powering Malaysian businesses with the world's leading advanced technology companies.
              </p>
              <p>
                Our programs are certified by <strong className="text-secondary">the Ministry of Industry and Information Technology of the People's Republic of China (MIIT)</strong> — the gold standard in AI certification — ensuring your workforce meets global benchmarks, not just local ones.
              </p>
              <p>
                We focus exclusively on <strong className="text-white">real-world AI application</strong>. No theoretical fluff. Every training module and every consulting engagement we build is designed to deliver measurable ROI from day one.
              </p>
              <p className="font-medium text-white/80">
                Our mission: Elevate every Malaysian company to compete on the world stage using applied, certified AI execution — powered by China's proven ecosystem.
              </p>
            </div>
          </div>

          {/* Credential badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: Award, label: "MIIT Certified", sub: "Ministry of Industry & IT, China" },
              { icon: Globe2, label: "China AI Ecosystem", sub: "No.1 Training Institution Partner" },
              { icon: Users, label: "800,000+ Graduates", sub: "Across 2,600 partner universities" },
            ].map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-primary/20 hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0">
                  <badge.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-display font-bold text-white">{badge.label}</div>
                  <div className="text-xs text-muted-foreground">{badge.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Why Choose Us ── */}
        <motion.section
          id="why-choose-us"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="scroll-mt-32"
        >
          <div className="flex items-center gap-4 mb-8 justify-end">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Why <span className="text-secondary">Choose Us</span>
            </h2>
            <div className="h-1 w-12 bg-secondary" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Award, text: "Industry-certified AI training — AIGC Engineer Certification recognised globally", accent: "secondary" },
              { icon: Globe2, text: "Direct access to China's AI Talent Pool — the world's largest and most advanced", accent: "primary" },
              { icon: Users, text: "Proven ecosystem: 2,600 universities, 300,000+ certified students across Asia", accent: "secondary" },
              { icon: BookOpen, text: "Real business application and automation systems — not academic theory", accent: "primary" },
              { icon: Briefcase, text: "Strong government alignment — TVET integration and national AI policy compliance", accent: "secondary" },
              { icon: Bot, text: "5–10x productivity improvements proven across manufacturing, retail, and logistics", accent: "primary" },
            ].map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`flex items-start gap-4 p-6 rounded-2xl bg-card border border-white/5 hover:border-${point.accent}/50 hover:bg-${point.accent}/5 transition-all duration-300 group`}
              >
                <div className={`mt-1 bg-${point.accent}/20 p-2 rounded-full shrink-0 group-hover:bg-${point.accent}/40 transition-colors duration-300`}>
                  <point.icon className={`w-5 h-5 text-${point.accent}`} />
                </div>
                <p className="text-base font-medium text-white/90 leading-snug">{point.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Our Services ── */}
        <motion.section
          id="services"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="scroll-mt-32"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-1 w-12 bg-primary" />
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Our <span className="text-primary">Services</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: BookOpen,
                title: "AI E-Commerce Training",
                desc: "Master AI tools purpose-built for scaling marketplace operations — from intelligent product listings to automated fulfilment.",
                tag: "Training",
              },
              {
                icon: Award,
                title: "MIIT AIGC Certification",
                desc: "Internationally recognised AI Generative Content Engineer Certification from the Ministry of Industry and Information Technology of the People's Republic of China (MIIT).",
                tag: "Certification",
              },
              {
                icon: Briefcase,
                title: "Corporate AI Transformation",
                desc: "Strategic consulting to integrate AI across your entire organisation — from board-level roadmaps to ground-floor implementation.",
                tag: "Consulting",
              },
              {
                icon: Users,
                title: "Workforce AI Upskilling",
                desc: "Turn your current employees into AI-augmented power users. Structured, role-specific programmes aligned with your company goals.",
                tag: "Upskilling",
              },
              {
                icon: Award,
                title: "Graduation Certification",
                desc: "Ministry of Industry and Information Technology of the People's Republic of China (MIIT) graduates will be listed in the world leading AI talent pool — this is the personal value endorsement.",
                tag: "Certification",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-3xl bg-card border border-white/10 hover:border-primary hover:shadow-[0_0_30px_rgba(0,212,255,0.15)] transition-all duration-500 relative overflow-hidden"
                data-testid={`service-card-${i}`}
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-primary/20 group-hover:bg-primary transition-colors duration-300" />
                <div className="absolute top-4 right-4 px-2 py-0.5 rounded-full text-xs font-medium border border-primary/20 text-primary/70 font-mono">
                  {service.tag}
                </div>
                <div className="mb-4 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                <div className="mt-6 flex items-center text-sm font-medium text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Our Courses ── */}
        <motion.section
          id="courses"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="scroll-mt-32"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-1 w-12 bg-primary" />
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Our <span className="text-primary">Courses</span>
            </h2>
          </div>
          <p className="text-muted-foreground mb-10 text-lg max-w-3xl">
            12 MIIT-certified AI professional programmes. Click any course to see the full summary, features, and benefits.
          </p>

          {/* Desktop table */}
          <div className="hidden md:block rounded-2xl overflow-hidden border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary/10 border-b border-white/10">
                  <th className="text-left px-4 py-4 text-primary font-display font-bold w-6">#</th>
                  <th className="text-left px-4 py-4 text-primary font-display font-bold">Course Title</th>
                  <th className="text-left px-4 py-4 text-primary font-display font-bold">Key Features</th>
                  <th className="text-left px-4 py-4 text-primary font-display font-bold">Core Benefits</th>
                  <th className="text-left px-4 py-4 text-primary font-display font-bold whitespace-nowrap">Duration</th>
                  <th className="text-left px-4 py-4 text-primary font-display font-bold whitespace-nowrap">Price</th>
                  <th className="text-left px-4 py-4 text-primary font-display font-bold">Recognition</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course, i) => (
                  <React.Fragment key={course.no}>
                    <tr
                      className={`border-b border-white/5 cursor-pointer transition-colors duration-200 ${
                        expandedCourse === course.no
                          ? "bg-primary/10"
                          : i % 2 === 0 ? "bg-card/30 hover:bg-primary/5" : "bg-card/10 hover:bg-primary/5"
                      }`}
                      onClick={() => setExpandedCourse(expandedCourse === course.no ? null : course.no)}
                    >
                      <td className="px-4 py-3 text-secondary font-display font-bold">{course.no}</td>
                      <td className="px-4 py-3 font-semibold text-white group">
                        <div className="flex items-center gap-2">
                          <span>{course.title}</span>
                          <ChevronDown className={`w-3 h-3 text-primary transition-transform duration-200 shrink-0 ${expandedCourse === course.no ? "rotate-180" : ""}`} />
                        </div>
                      </td>
                      <td className="px-4 py-3 text-white/60 text-xs">{course.features[0]}<span className="text-primary/60"> +{course.features.length - 1} more</span></td>
                      <td className="px-4 py-3 text-white/60 text-xs">{course.benefits[0]}<span className="text-primary/60"> +{course.benefits.length - 1} more</span></td>
                      <td className="px-4 py-3 text-white/70 whitespace-nowrap">{course.duration}</td>
                      <td className="px-4 py-3 text-secondary font-bold whitespace-nowrap">{course.price}</td>
                      <td className="px-4 py-3">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-xs font-medium">{course.recognition}</span>
                      </td>
                    </tr>
                    <AnimatePresence>
                      {expandedCourse === course.no && (
                        <tr>
                          <td colSpan={7} className="bg-card/60 border-b border-primary/20 p-0">
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
                                <div className="lg:col-span-3">
                                  <p className="text-white/80 text-sm leading-relaxed mb-4 border-l-2 border-primary pl-4">{course.summary}</p>
                                </div>
                                <div>
                                  <h4 className="text-xs font-display font-bold text-primary uppercase tracking-widest mb-3">Features</h4>
                                  <ul className="space-y-1.5">
                                    {course.features.map((f, fi) => (
                                      <li key={fi} className="flex items-start gap-2 text-xs text-white/70">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                                        {f}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="text-xs font-display font-bold text-secondary uppercase tracking-widest mb-3">Benefits</h4>
                                  <ul className="space-y-1.5">
                                    {course.benefits.map((b, bi) => (
                                      <li key={bi} className="flex items-start gap-2 text-xs text-white/70">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-secondary mt-0.5 shrink-0" />
                                        {b}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="flex flex-col gap-3">
                                  <div className="p-4 rounded-xl bg-background border border-white/10 flex flex-col gap-1">
                                    <span className="text-xs text-white/40 uppercase tracking-wider">Exam Schedule</span>
                                    <span className="text-sm text-white/80">Quarterly — 4th weekend of Mar, Jun, Sep & Dec</span>
                                  </div>
                                  <div className="p-4 rounded-xl bg-background border border-secondary/20 flex flex-col gap-1">
                                    <span className="text-xs text-secondary/70 uppercase tracking-wider">Investment</span>
                                    <span className="text-2xl font-display font-bold text-secondary">{course.price}</span>
                                    <span className="text-xs text-white/40">per person · {course.duration}</span>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          </td>
                        </tr>
                      )}
                    </AnimatePresence>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-3">
            {courses.map((course) => (
              <div key={course.no} className="rounded-xl border border-white/10 overflow-hidden">
                <button
                  className={`w-full flex items-center justify-between p-4 text-left transition-colors ${expandedCourse === course.no ? "bg-primary/10" : "bg-card/40 hover:bg-primary/5"}`}
                  onClick={() => setExpandedCourse(expandedCourse === course.no ? null : course.no)}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-secondary font-display font-bold text-sm shrink-0">{course.no}</span>
                    <span className="font-semibold text-white text-sm">{course.title}</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-primary shrink-0 transition-transform ${expandedCourse === course.no ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {expandedCourse === course.no && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 bg-card/20 border-t border-white/10 space-y-4">
                        <p className="text-white/75 text-xs leading-relaxed border-l-2 border-primary pl-3">{course.summary}</p>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <h4 className="text-xs font-bold text-primary mb-2 uppercase tracking-wider">Features</h4>
                            <ul className="space-y-1">
                              {course.features.map((f, fi) => <li key={fi} className="text-xs text-white/60 flex gap-1.5 items-start"><span className="text-primary shrink-0">·</span>{f}</li>)}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-secondary mb-2 uppercase tracking-wider">Benefits</h4>
                            <ul className="space-y-1">
                              {course.benefits.map((b, bi) => <li key={bi} className="text-xs text-white/60 flex gap-1.5 items-start"><span className="text-secondary shrink-0">·</span>{b}</li>)}
                            </ul>
                          </div>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-white/10">
                          <div className="text-xs text-white/50">{course.duration} · Quarterly exams</div>
                          <div className="text-secondary font-display font-bold">{course.price}</div>
                          <span className="text-xs px-2 py-0.5 rounded-full bg-secondary/10 border border-secondary/30 text-secondary">{course.recognition}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── Our Activities ── */}
        <motion.section
          id="activities"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="scroll-mt-32"
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="h-1 w-12 bg-secondary" />
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Our <span className="text-secondary">Activities</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                img: launchImg,
                caption: "Modus AI Associates Official Launching on 8 August 2025.",
              },
              {
                img: ribbonImg,
                caption: "Modus AI Associates Partner Ribbon Cutting Ceremony",
              },
              {
                img: signingImg,
                caption: "Modus AI Associates Partner Signing Witnessed by the 8th Penang Governor Tun Dato' Seri Utama Ahmad Fuzi",
              },
              {
                img: coursesImg,
                caption: "Till June 2025, 5 AI courses were conducted and more to come.",
              },
              {
                img: uniImg,
                caption: "Modus AI Associates is rising with cooperations with outstanding Universities & International Schools in Malaysia.",
              },
            ].map((activity, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group rounded-2xl overflow-hidden border border-white/10 hover:border-secondary/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(124,58,237,0.2)] bg-card"
                data-testid={`activity-card-${i}`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={activity.img}
                    alt={activity.caption}
                    className="w-full object-cover aspect-[16/10] transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-5 flex items-start gap-3">
                  <div className="mt-0.5 shrink-0 w-8 h-8 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center">
                    <Camera className="w-4 h-4 text-secondary" />
                  </div>
                  <p className="text-sm font-medium text-white/80 leading-snug">{activity.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Get Started ── */}
        <motion.section
          id="get-started"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="scroll-mt-32"
        >
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-card to-background border border-primary/30 relative overflow-hidden shadow-[0_0_50px_rgba(0,212,255,0.1)]">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMwMGQ0ZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                  Start Your <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Transformation</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Malaysia's AI future is being written now. Don't let your competitors get there first. Reach out today and we'll provide programs built around your business goals.
                </p>

                <div className="space-y-5">
                  {[
                    { icon: Mail, text: "admin@modusaiassociates.com" },
                    { icon: Phone, text: "Elaine: 017-3490001" },
                    { icon: Phone, text: "Joel: 011-11469065" },
                    { icon: MapPin, text: "Kuala Lumpur, Malaysia" },
                  ].map(({ icon: Icon, text }, i) => (
                    <div key={i} className="flex items-center gap-4 text-white/80">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-background/50 p-6 md:p-8 rounded-2xl border border-white/10 backdrop-blur-md">
                {submitStatus === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-12 gap-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-white">Message Sent!</h3>
                    <p className="text-muted-foreground text-sm max-w-xs">
                      Thank you for reaching out. Our team will get back to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                    {/* Honeypot — hidden from real users */}
                    <input
                      type="text"
                      name="honeypot"
                      style={{ display: "none" }}
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-sm font-medium text-white/70">Name <span className="text-primary">*</span></label>
                        <Input
                          className={`bg-black/50 border-white/10 focus-visible:border-primary focus-visible:ring-primary/20 ${errors.name ? "border-red-500/60" : ""}`}
                          placeholder="John Doe"
                          value={form.name}
                          onChange={handleChange("name")}
                          disabled={submitStatus === "loading"}
                          data-testid="form-name"
                        />
                        {errors.name && <p className="text-xs text-red-400">{errors.name}</p>}
                      </div>
                      <div className="space-y-1">
                        <label className="text-sm font-medium text-white/70">Company</label>
                        <Input
                          className="bg-black/50 border-white/10 focus-visible:border-primary focus-visible:ring-primary/20"
                          placeholder="Acme Corp"
                          value={form.company}
                          onChange={handleChange("company")}
                          disabled={submitStatus === "loading"}
                          data-testid="form-company"
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-white/70">Email <span className="text-primary">*</span></label>
                      <Input
                        type="email"
                        className={`bg-black/50 border-white/10 focus-visible:border-primary focus-visible:ring-primary/20 ${errors.email ? "border-red-500/60" : ""}`}
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={handleChange("email")}
                        disabled={submitStatus === "loading"}
                        data-testid="form-email"
                      />
                      {errors.email && <p className="text-xs text-red-400">{errors.email}</p>}
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-white/70">Message <span className="text-primary">*</span></label>
                      <Textarea
                        className={`bg-black/50 border-white/10 focus-visible:border-primary focus-visible:ring-primary/20 min-h-[120px] ${errors.message ? "border-red-500/60" : ""}`}
                        placeholder="Tell us about your business goals..."
                        value={form.message}
                        onChange={handleChange("message")}
                        disabled={submitStatus === "loading"}
                        data-testid="form-message"
                      />
                      {errors.message && <p className="text-xs text-red-400">{errors.message}</p>}
                    </div>
                    {submitStatus === "error" && (
                      <div className="flex items-start gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                        <span className="shrink-0 mt-0.5">⚠</span>
                        <span>{errorMessage}</span>
                      </div>
                    )}
                    <Button
                      type="submit"
                      disabled={submitStatus === "loading"}
                      className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-bold h-12 mt-4 transition-all hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] disabled:opacity-60 disabled:cursor-not-allowed"
                      data-testid="form-submit"
                    >
                      {submitStatus === "loading" ? (
                        <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...</>
                      ) : (
                        <><Send className="w-4 h-4 mr-2" /> Send Message</>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </motion.section>

      </main>
    </div>
  );
}
