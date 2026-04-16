import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight, BarChart3, Brain, Cpu, Globe,
  Network, ShieldCheck, Zap, Award, Users, Play, ExternalLink, GraduationCap
} from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

const content = {
  en: {
    badge: "MIIT CERTIFIED · CHINA AI ECOSYSTEM PARTNER · MALAYSIA",
    cta: "Start Your AI Transformation",
    coreMsgPrefix: "AI Adoption Is No Longer Optional —",
    coreMsgSuffix: "It Is the Core Driver of Future Business Survival and Growth.",
    exploreTitle: "Explore",
    exploreSubtitle: "Navigate to any section to learn more",
    navItems: [
      { id: "about", title: "About Us", desc: "Our mission and global standards" },
      { id: "why-choose-us", title: "Why Choose Us", desc: "Certified and proven results" },
      { id: "services", title: "Our Services", desc: "End-to-end AI solutions" },
      { id: "courses", title: "Our Courses", desc: "12 AI certification programmes" },
      { id: "activities", title: "Our Activities", desc: "Events and milestones" },
      { id: "get-started", title: "Get Started", desc: "Begin your transformation" },
    ],
    videoTitle: "AI Transformation",
    videoTitleHighlight: "in Action",
    videoSubtitle: "See real results from real businesses — powered by China's world-leading AI ecosystem and MIIT-certified training.",
    videos: [
      {
        id: "dQw4w9WgXcQ",
        title: "AI Transformation in Malaysian E-Commerce",
        desc: "Watch how MODUS AI helped a leading Malaysian retailer automate operations and achieve 8x productivity.",
      },
      {
        id: "jNQXAC9IVRw",
        title: "China's AI Ecosystem — Powering ASEAN Businesses",
        desc: "An inside look at the world-class AI training infrastructure behind our certification programmes.",
      },
      {
        id: "M7lc1UVf-VE",
        title: "MIIT AIGC Certification: What It Means for Your Business",
        desc: "Understand why MIIT-certified AI talent gives Malaysian companies a decisive competitive edge.",
      },
    ],
    statsTitle: "Measurable",
    statsTitleHighlight: "Impact",
    statsSubtitle: "Backed by China's largest AI training network — 2,600 universities, 300,000+ certified professionals.",
    stats: [
      { value: "5–10x", label: "Productivity Gain" },
      { value: "300K+", label: "Certified Graduates" },
      { value: "2,600", label: "Partner Universities" },
      { value: "100%", label: "Real-World Application" },
    ],
    testimonialTitle: "Client",
    testimonialTitleHighlight: "Success",
    testimonialSubtitle: "Real transformations from Malaysian businesses adopting MIIT-certified AI frameworks.",
    testimonials: [
      {
        quote: "MODUS AI completely overhauled our e-commerce supply chain. What used to take a team of 10 five days is now fully automated and predictive. The MIIT certification gives our team global credibility.",
        author: "Sarah L.",
        role: "Director of Operations, Quantum Retail",
      },
      {
        quote: "We thought AI was a buzzword until MODUS showed us China's real AI ecosystem. Our customer service response time dropped 80% while satisfaction soared — and our team is now AIGC certified.",
        author: "James Wong",
        role: "CEO, NEXA Logistics",
      },
    ],
    footerTitle: "Ready to Lead Malaysia's",
    footerTitleHighlight: "AI Revolution?",
    footerSubtitle: "Join the MODUS AI network — certified by MIIT, powered by China's No.1 AI training ecosystem.",
    footerCta: "Get in Touch",
    headlines: [
      "Transform Malaysia's AI Business Capabilities to Global Standards — Powered by China's World-Leading AI Ecosystem",
      "Elevate Malaysian Companies to World-Class AI Execution Through Industry-Certified Training and Technology Integration",
      "Increase Workforce Productivity by 5–10X Through Applied AI Systems and Automation",
      "Bridge the AI Talent Gap with Real-World Training, Backed by China's No.1 AI Training Institution and MIIT Certification",
      "AI Adoption Is No Longer Optional — It Is the Core Driver of Future Business Survival and Growth",
    ],
  },
  bm: {
    badge: "BERTAULIAH MIIT · RAKAN EKOSISTEM AI CHINA · MALAYSIA",
    cta: "Mulakan Transformasi AI Anda",
    coreMsgPrefix: "Penggunaan AI Bukan Lagi Pilihan —",
    coreMsgSuffix: "Ia Adalah Pemacu Utama Kelangsungan dan Pertumbuhan Perniagaan Masa Depan.",
    exploreTitle: "Jelajahi",
    exploreSubtitle: "Pergi ke mana-mana bahagian untuk mengetahui lebih lanjut",
    navItems: [
      { id: "about", title: "Tentang Kami", desc: "Misi dan standard global kami" },
      { id: "why-choose-us", title: "Mengapa Pilih Kami", desc: "Hasil bersertifikasi dan terbukti" },
      { id: "services", title: "Perkhidmatan Kami", desc: "Penyelesaian AI menyeluruh" },
      { id: "courses", title: "Kursus Kami", desc: "12 program sijil AI" },
      { id: "activities", title: "Aktiviti Kami", desc: "Acara dan pencapaian" },
      { id: "get-started", title: "Mulakan", desc: "Mulakan transformasi anda" },
    ],
    videoTitle: "Transformasi AI",
    videoTitleHighlight: "dalam Tindakan",
    videoSubtitle: "Lihat keputusan sebenar daripada perniagaan sebenar — dikuasakan oleh ekosistem AI terkemuka dunia China dan latihan bertauliah MIIT.",
    videos: [
      {
        id: "dQw4w9WgXcQ",
        title: "Transformasi AI dalam E-Dagang Malaysia",
        desc: "Lihat bagaimana MODUS AI membantu peruncit terkemuka Malaysia mengautomasikan operasi dan mencapai produktiviti 8x.",
      },
      {
        id: "jNQXAC9IVRw",
        title: "Ekosistem AI China — Memperkasa Perniagaan ASEAN",
        desc: "Pandangan dalaman tentang infrastruktur latihan AI bertaraf dunia di sebalik program sijil kami.",
      },
      {
        id: "M7lc1UVf-VE",
        title: "Sijil AIGC MIIT: Maknanya untuk Perniagaan Anda",
        desc: "Fahami mengapa bakat AI bertauliah MIIT memberikan kelebihan daya saing yang kukuh kepada syarikat Malaysia.",
      },
    ],
    statsTitle: "Impak",
    statsTitleHighlight: "Terukur",
    statsSubtitle: "Disokong oleh rangkaian latihan AI terbesar China — 2,600 universiti, 300,000+ profesional bersijil.",
    stats: [
      { value: "5–10x", label: "Peningkatan Produktiviti" },
      { value: "300K+", label: "Graduan Bersijil" },
      { value: "2,600", label: "Universiti Rakan" },
      { value: "100%", label: "Aplikasi Dunia Nyata" },
    ],
    testimonialTitle: "Kejayaan",
    testimonialTitleHighlight: "Klien",
    testimonialSubtitle: "Transformasi sebenar daripada perniagaan Malaysia yang menggunakan rangka kerja AI bertauliah MIIT.",
    testimonials: [
      {
        quote: "MODUS AI telah mengubah sepenuhnya rantaian bekalan e-dagang kami. Apa yang memerlukan pasukan 10 orang selama lima hari kini diautomasikan sepenuhnya. Sijil MIIT memberikan pasukan kami kredibiliti global.",
        author: "Sarah L.",
        role: "Pengarah Operasi, Quantum Retail",
      },
      {
        quote: "Kami fikir AI hanyalah kata-kata trendi sehingga MODUS menunjukkan kepada kami ekosistem AI sebenar China. Masa tindak balas perkhidmatan pelanggan kami menurun 80% manakala kepuasan meningkat — dan pasukan kami kini bersijil AIGC.",
        author: "James Wong",
        role: "Ketua Pegawai Eksekutif, NEXA Logistics",
      },
    ],
    footerTitle: "Bersedia untuk Memimpin",
    footerTitleHighlight: "Revolusi AI Malaysia?",
    footerSubtitle: "Sertai rangkaian MODUS AI — disijilkan oleh MIIT, dikuasakan oleh ekosistem latihan AI No.1 China.",
    footerCta: "Hubungi Kami",
    headlines: [
      "Transformasi Keupayaan Perniagaan AI Malaysia ke Standard Global — Dikuasakan oleh Ekosistem AI Terkemuka Dunia dari China",
      "Tingkatkan Syarikat Malaysia ke Pelaksanaan AI Bertaraf Dunia Melalui Latihan Bersertifikasi dan Integrasi Teknologi",
      "Tingkatkan Produktiviti Tenaga Kerja 5–10X Melalui Sistem AI Gunaan dan Automasi",
      "Hapuskan Jurang Bakat AI dengan Latihan Dunia Nyata, Disokong oleh Institusi Latihan AI No.1 China dan Sijil MIIT",
      "Penggunaan AI Bukan Lagi Pilihan — Ia Adalah Pemacu Utama Kelangsungan dan Pertumbuhan Perniagaan Masa Depan",
    ],
  },
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  about: Globe,
  "why-choose-us": ShieldCheck,
  services: Cpu,
  courses: GraduationCap,
  activities: Network,
  "get-started": Zap,
};

const colorMap: Record<string, { border: string; shadow: string; grad: string; iconColor: string }> = {
  about:          { border: "hover:border-primary",   shadow: "hover:shadow-[0_0_25px_rgba(0,212,255,0.3)]",   grad: "from-primary/20",   iconColor: "text-primary" },
  "why-choose-us":{ border: "hover:border-secondary", shadow: "hover:shadow-[0_0_25px_rgba(124,58,237,0.3)]", grad: "from-secondary/20", iconColor: "text-secondary" },
  services:       { border: "hover:border-primary",   shadow: "hover:shadow-[0_0_25px_rgba(0,212,255,0.3)]",   grad: "from-primary/20",   iconColor: "text-primary" },
  courses:        { border: "hover:border-secondary", shadow: "hover:shadow-[0_0_25px_rgba(124,58,237,0.3)]", grad: "from-secondary/20", iconColor: "text-secondary" },
  activities:     { border: "hover:border-primary",   shadow: "hover:shadow-[0_0_25px_rgba(0,212,255,0.3)]",   grad: "from-primary/20",   iconColor: "text-primary" },
  "get-started":  { border: "hover:border-primary",   shadow: "hover:shadow-[0_0_25px_rgba(0,212,255,0.3)]",   grad: "from-primary/20",   iconColor: "text-primary" },
};

const statIcons = [BarChart3, Users, Network, Brain];

export default function Home() {
  const { lang } = useLang();
  const t = content[lang];

  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  useEffect(() => {
    setHeadlineIndex(0);
  }, [lang]);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % t.headlines.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [t.headlines.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_40%,transparent_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-primary/20 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-secondary/20 rounded-full blur-[100px]"
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-8 flex flex-col items-center text-center">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-5xl">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-wide"
            >
              <Award className="w-4 h-4" />
              {t.badge}
            </motion.div>

            <div className="relative min-h-[8rem] md:min-h-[7rem] mb-6 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={`${lang}-${headlineIndex}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  className="text-xl md:text-3xl lg:text-4xl font-display font-bold leading-snug text-white max-w-4xl"
                >
                  {t.headlines[headlineIndex].split("—").map((part, i, arr) =>
                    i < arr.length - 1 ? (
                      <span key={i}>
                        {part}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">—</span>
                      </span>
                    ) : (
                      <span key={i}>{part}</span>
                    )
                  )}
                </motion.h1>
              </AnimatePresence>
            </div>

            <motion.div variants={itemVariants} className="flex justify-center gap-2 mb-8">
              {t.headlines.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setHeadlineIndex(i)}
                  data-testid={`headline-dot-${i}`}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === headlineIndex ? "bg-primary w-6" : "bg-white/30"
                  }`}
                />
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link
                href="/details"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-lg bg-gradient-to-r from-primary to-secondary text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,212,255,0.6)]"
                data-testid="hero-cta-start"
              >
                {t.cta}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Core Messaging ── */}
      <section className="relative z-20 py-16 bg-gradient-to-r from-background via-card to-background border-y border-white/5">
        <div className="container mx-auto px-4 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl font-display font-semibold text-white/90 max-w-4xl mx-auto"
          >
            {t.coreMsgPrefix}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              {t.coreMsgSuffix}
            </span>
          </motion.p>
        </div>
      </section>

      {/* ── Icon Navigation ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
              {t.exploreTitle} <span className="text-primary">MODUS AI</span>
            </h2>
            <p className="text-muted-foreground">{t.exploreSubtitle}</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {t.navItems.map((item, index) => {
              const Icon = iconMap[item.id];
              const colors = colorMap[item.id];
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <Link
                    href={`/details#${item.id}`}
                    className={`group relative flex flex-col items-center justify-center p-6 h-full rounded-2xl bg-card/50 border border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-500 ${colors.border} ${colors.shadow}`}
                    data-testid={`icon-nav-${item.id}`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-b ${colors.grad} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <Icon className={`w-10 h-10 mb-4 ${colors.iconColor} opacity-60 group-hover:opacity-100 transition-all duration-300 relative z-10 group-hover:scale-110`} />
                    <h3 className="text-sm md:text-base font-display font-bold text-white mb-1 relative z-10 text-center">{item.title}</h3>
                    <p className="text-xs text-muted-foreground text-center relative z-10 hidden md:block">{item.desc}</p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Video Section ── */}
      <section className="py-24 bg-card border-t border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              {t.videoTitle} <span className="text-primary">{t.videoTitleHighlight}</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t.videoSubtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.videos.map((video, i) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,212,255,0.15)] bg-background flex flex-col"
              >
                <div className="relative aspect-video bg-black overflow-hidden">
                  {playingVideo === i ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                      data-testid={`video-embed-${i}`}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />
                      <button
                        onClick={() => setPlayingVideo(i)}
                        data-testid={`video-play-${i}`}
                        className="relative z-10 w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/40 group-hover:shadow-[0_0_30px_rgba(0,212,255,0.6)]"
                      >
                        <Play className="w-6 h-6 text-primary ml-1" />
                      </button>
                    </div>
                  )}
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-primary transition-colors duration-300">
                    {video.title}
                  </h3>
                  <p className="text-sm text-muted-foreground flex-1">{video.desc}</p>
                  <a
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    data-testid={`video-link-${i}`}
                  >
                    Watch on YouTube <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
      </section>

      {/* ── Stats ── */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              {t.statsTitle} <span className="text-primary">{t.statsTitleHighlight}</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t.statsSubtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.stats.map((stat, i) => {
              const Icon = statIcons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="p-8 rounded-2xl bg-card border border-primary/20 flex flex-col items-center justify-center hover:border-primary/50 hover:shadow-[0_0_25px_rgba(0,212,255,0.1)] transition-all duration-300"
                >
                  <Icon className="w-10 h-10 text-secondary mb-4 opacity-80" />
                  <div className="text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider text-center">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-card to-background border-t border-white/5">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              {t.testimonialTitle} <span className="text-primary">{t.testimonialTitleHighlight}</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t.testimonialSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {t.testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="p-8 rounded-2xl bg-background border border-white/10 hover:border-primary/30 transition-colors relative"
              >
                <div className="absolute top-4 left-4 text-6xl text-primary/10 font-serif leading-none">"</div>
                <p className="text-lg text-white/90 relative z-10 mb-6 mt-4">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 border border-secondary/30 flex items-center justify-center text-secondary font-bold font-display">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-white">{testimonial.author}</div>
                    <div className="text-sm text-primary">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer CTA ── */}
      <section className="py-20 bg-background border-t border-white/5 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              {t.footerTitle}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                {t.footerTitleHighlight}
              </span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">{t.footerSubtitle}</p>
            <Link
              href="/details#get-started"
              className="inline-flex items-center gap-2 px-10 py-4 text-lg font-bold rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.5)]"
              data-testid="footer-cta"
            >
              {t.footerCta} <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
