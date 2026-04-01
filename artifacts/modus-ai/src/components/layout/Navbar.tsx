import React, { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { BrainCircuit, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [location, setLocation] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (location !== "/details") {
      setLocation("/details");
      // Wait for page transition then scroll
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "About Us", hash: "about" },
    { label: "Why Choose Us", hash: "why-choose-us" },
    { label: "Our Services", hash: "services" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-primary/20 py-3"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-card border border-primary/30 group-hover:border-primary group-hover:shadow-[0_0_15px_rgba(0,212,255,0.5)] transition-all duration-300">
            <BrainCircuit className="h-6 w-6 text-primary" />
          </div>
          <span className="font-display font-bold text-xl tracking-wider text-foreground">
            MODUS <span className="text-primary">AI</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
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
          <a
            href="/details#get-started"
            onClick={(e) => handleNavClick(e, "get-started")}
            className="relative px-6 py-2 rounded-md bg-primary/10 text-primary font-medium border border-primary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.6)]"
            data-testid="nav-cta-get-started"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-primary/20 overflow-hidden"
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
                className="text-center mt-4 px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold shadow-[0_0_15px_rgba(0,212,255,0.4)]"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
