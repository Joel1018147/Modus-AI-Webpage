import React, { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import {
  ArrowLeft, CheckCircle2, ChevronRight,
  Mail, MapPin, Phone, Send, Award, Globe2, BookOpen, Users, Briefcase, Bot, Camera
} from "lucide-react";
import ribbonImg from "@assets/WhatsApp_Image_2026-04-03_at_5.40.49_PM_1775209677927.jpeg";
import signingImg from "@assets/WhatsApp_Image_2026-04-03_at_5.36.11_PM_1775209677928.jpeg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Details() {
  const [location] = useLocation();

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
                img: ribbonImg,
                caption: "Modus AI Associates Partner Ribbon Cutting Ceremony",
              },
              {
                img: signingImg,
                caption: "Modus AI Associates Partner Signing Witnessed by the 8th Penang Governor Tun Dato' Seri Utama Ahmad Fuzi",
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
                    { icon: Mail, text: "hello@modusai.com.my" },
                    { icon: Phone, text: "Elaine: 017-349001" },
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
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/70">Name</label>
                      <Input
                        className="bg-black/50 border-white/10 focus-visible:border-primary focus-visible:ring-primary/20"
                        placeholder="John Doe"
                        data-testid="form-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/70">Company</label>
                      <Input
                        className="bg-black/50 border-white/10 focus-visible:border-primary focus-visible:ring-primary/20"
                        placeholder="Acme Corp"
                        data-testid="form-company"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/70">Email</label>
                    <Input
                      type="email"
                      className="bg-black/50 border-white/10 focus-visible:border-primary focus-visible:ring-primary/20"
                      placeholder="john@example.com"
                      data-testid="form-email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/70">Message</label>
                    <Textarea
                      className="bg-black/50 border-white/10 focus-visible:border-primary focus-visible:ring-primary/20 min-h-[120px]"
                      placeholder="Tell us about your business goals..."
                      data-testid="form-message"
                    />
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-bold h-12 mt-4 transition-all hover:shadow-[0_0_20px_rgba(0,212,255,0.4)]"
                    data-testid="form-submit"
                  >
                    <Send className="w-4 h-4 mr-2" /> Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </motion.section>

      </main>
    </div>
  );
}
