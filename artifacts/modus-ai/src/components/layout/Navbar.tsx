import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang, LANGUAGES, type Lang } from "@/contexts/LanguageContext";

// Served from public/ (not bundled) so the same file backs og:image and the
// Organization schema logo at a stable, un-hashed URL.
const modusLogo = `${import.meta.env.BASE_URL}modus-logo.png`;

type NavLink = { label: string; hash: string };

const NAV_LINKS: Record<Lang, { links: NavLink[]; cta: string }> = {
  en: {
    links: [
      { label: "About Us", hash: "about" },
      { label: "Why Choose Us", hash: "why-choose-us" },
      { label: "Our Services", hash: "services" },
      { label: "Our Courses", hash: "courses" },
      { label: "Our Systems", hash: "systems" },
      { label: "Our Activities", hash: "activities" },
      { label: "Our Socials", hash: "socials" },
    ],
    cta: "Get Started",
  },
  bm: {
    links: [
      { label: "Tentang Kami", hash: "about" },
      { label: "Mengapa Pilih Kami", hash: "why-choose-us" },
      { label: "Perkhidmatan", hash: "services" },
      { label: "Kursus Kami", hash: "courses" },
      { label: "Sistem Kami", hash: "systems" },
      { label: "Aktiviti Kami", hash: "activities" },
      { label: "Sosial Kami", hash: "socials" },
    ],
    cta: "Mulakan",
  },
  cn: {
    links: [
      { label: "关于我们", hash: "about" },
      { label: "为何选择我们", hash: "why-choose-us" },
      { label: "我们的服务", hash: "services" },
      { label: "我们的课程", hash: "courses" },
      { label: "我们的系统", hash: "systems" },
      { label: "我们的活动", hash: "activities" },
      { label: "社交媒体", hash: "socials" },
    ],
    cta: "立即开始",
  },
  id: {
    links: [
      { label: "Tentang Kami", hash: "about" },
      { label: "Mengapa Memilih Kami", hash: "why-choose-us" },
      { label: "Layanan Kami", hash: "services" },
      { label: "Kursus Kami", hash: "courses" },
      { label: "Sistem Kami", hash: "systems" },
      { label: "Aktivitas Kami", hash: "activities" },
      { label: "Media Sosial", hash: "socials" },
    ],
    cta: "Mulai Sekarang",
  },
  vn: {
    links: [
      { label: "Về Chúng Tôi", hash: "about" },
      { label: "Tại Sao Chọn Chúng Tôi", hash: "why-choose-us" },
      { label: "Dịch Vụ", hash: "services" },
      { label: "Khóa Học", hash: "courses" },
      { label: "Hệ Thống", hash: "systems" },
      { label: "Hoạt Động", hash: "activities" },
      { label: "Mạng Xã Hội", hash: "socials" },
    ],
    cta: "Bắt Đầu",
  },
  ar: {
    links: [
      { label: "من نحن", hash: "about" },
      { label: "لماذا تختارنا", hash: "why-choose-us" },
      { label: "خدماتنا", hash: "services" },
      { label: "دوراتنا", hash: "courses" },
      { label: "أنظمتنا", hash: "systems" },
      { label: "أنشطتنا", hash: "activities" },
      { label: "وسائل التواصل", hash: "socials" },
    ],
    cta: "ابدأ الآن",
  },
  th: {
    links: [
      { label: "เกี่ยวกับเรา", hash: "about" },
      { label: "ทำไมต้องเลือกเรา", hash: "why-choose-us" },
      { label: "บริการของเรา", hash: "services" },
      { label: "หลักสูตรของเรา", hash: "courses" },
      { label: "ระบบของเรา", hash: "systems" },
      { label: "กิจกรรมของเรา", hash: "activities" },
      { label: "โซเชียลของเรา", hash: "socials" },
    ],
    cta: "เริ่มต้นใช้งาน",
  },
};

type LangDropdownProps = {
  mobile?: boolean;
  lang: Lang;
  setLang: (l: Lang) => void;
  langOpen: boolean;
  setLangOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function LangDropdown({ mobile, lang, setLang, langOpen, setLangOpen }: LangDropdownProps) {
  const ref = useRef<HTMLDivElement>(null);
  const currentLang = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

  useEffect(() => {
    if (!langOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setLangOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [langOpen, setLangOpen]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setLangOpen((o) => !o)}
        className={cn(
          "flex items-center gap-1.5 rounded-full border border-white/20 font-bold text-white/80 hover:border-primary hover:text-primary transition-all",
          mobile ? "px-2.5 py-1 text-xs" : "px-3 py-1.5 text-xs tracking-wider"
        )}
        data-testid={mobile ? "lang-toggle-mobile" : "lang-toggle"}
      >
        <span className="text-primary">{currentLang.label}</span>
        <ChevronDown className={cn("w-3 h-3 transition-transform", langOpen && "rotate-180")} />
      </button>
      <AnimatePresence>
        {langOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-44 rounded-lg bg-card border border-primary/30 shadow-xl shadow-black/40 overflow-hidden z-50"
          >
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                onMouseDown={(e) => {
                  e.preventDefault();
                  setLang(l.code);
                  setLangOpen(false);
                }}
                className={cn(
                  "w-full flex items-center justify-between px-3 py-2 text-sm text-left transition-colors",
                  l.code === lang
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/80 hover:bg-primary/5 hover:text-primary"
                )}
                data-testid={`lang-option-${l.code}`}
              >
                <span className="flex items-center gap-2">
                  <span className="font-bold w-7">{l.label}</span>
                  <span className={cn("text-xs opacity-80", l.rtl && "font-arabic")}>{l.native}</span>
                </span>
                {l.code === lang && <Check className="w-3.5 h-3.5" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  const [location, setLocation] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { lang, setLang } = useLang();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (location !== "/details") {
      setLocation("/details");
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { links: navLinks, cta: ctaLabel } = NAV_LINKS[lang];

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-background/85 backdrop-blur-md border-primary/20 py-3"
          : "bg-transparent border-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <img
            src={modusLogo}
            alt="Modus AI Associates Logo"
            width={728}
            height={335}
            className="h-10 w-auto object-contain transition-all duration-300 group-hover:opacity-85 group-hover:drop-shadow-[0_0_12px_rgba(212,158,46,0.6)]"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.hash}
              href={`/details#${link.hash}`}
              onClick={(e) => handleNavClick(e, link.hash)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
              data-testid={`nav-link-${link.hash}`}
            >
              {link.label}
            </a>
          ))}

          <LangDropdown lang={lang} setLang={setLang} langOpen={langOpen} setLangOpen={setLangOpen} />

          <a
            href="/details#get-started"
            onClick={(e) => handleNavClick(e, "get-started")}
            className="relative px-6 py-2 rounded-md bg-primary/10 text-primary font-medium border border-primary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,158,46,0.55)]"
            data-testid="nav-cta-get-started"
          >
            {ctaLabel}
          </a>
        </nav>

        {/* Mobile: language dropdown + hamburger */}
        <div className="lg:hidden flex items-center gap-3">
          <LangDropdown mobile lang={lang} setLang={setLang} langOpen={langOpen} setLangOpen={setLangOpen} />
          <button
            className="text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-primary/20 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.hash}
                  href={`/details#${link.hash}`}
                  onClick={(e) => handleNavClick(e, link.hash)}
                  className="text-lg font-medium text-muted-foreground hover:text-primary p-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/details#get-started"
                onClick={(e) => handleNavClick(e, "get-started")}
                className="text-center mt-4 px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold shadow-[0_0_15px_rgba(212,158,46,0.4)]"
              >
                {ctaLabel}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
