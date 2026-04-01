import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, BarChart3, Brain, Cpu, Globe, Network, ShieldCheck, Zap } from "lucide-react";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 pb-12 overflow-hidden">
        {/* Animated Background Mesh/Grid */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_40%,transparent_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
          {/* Glowing orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-primary/20 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-secondary/20 rounded-full blur-[100px]"
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-8 flex flex-col items-center text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.div variants={itemVariants} className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-wide">
              MALAYSIA'S PREMIER AI CONSULTANCY
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/60"
            >
              Transforming Malaysia into a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Global AI</span> Powerhouse
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              Empowering companies with applied AI to achieve 5–10x productivity. We don't teach theory — we execute.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link href="/details" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-lg bg-gradient-to-r from-primary to-secondary text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,212,255,0.6)]" data-testid="hero-cta-start">
                Start Your AI Transformation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Messaging Strip */}
      <section className="relative z-20 py-16 bg-gradient-to-r from-background via-card to-background border-y border-white/5">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
          >
            <div className="flex-1 max-w-lg">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-white/90">
                AI adoption is no longer optional — <span className="text-secondary">it is a business necessity.</span>
              </h2>
            </div>
            <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-primary/50 to-transparent"></div>
            <div className="flex-1 max-w-lg">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-white/90">
                Bridge Malaysian businesses to <span className="text-primary">world-class AI execution.</span>
              </h2>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Icon Navigation Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: "about", icon: Globe, title: "About Us", desc: "Our mission and standards", color: "from-primary/20 to-transparent", border: "hover:border-primary", shadow: "hover:shadow-[0_0_25px_rgba(0,212,255,0.3)]" },
              { id: "why-choose-us", icon: ShieldCheck, title: "Why Choose Us", desc: "Practical implementation", color: "from-secondary/20 to-transparent", border: "hover:border-secondary", shadow: "hover:shadow-[0_0_25px_rgba(124,58,237,0.3)]" },
              { id: "services", icon: Cpu, title: "Our Services", desc: "End-to-end AI solutions", color: "from-primary/20 to-transparent", border: "hover:border-primary", shadow: "hover:shadow-[0_0_25px_rgba(0,212,255,0.3)]" },
              { id: "get-started", icon: Zap, title: "Get Started", desc: "Begin your transformation", color: "from-secondary/20 to-transparent", border: "hover:border-secondary", shadow: "hover:shadow-[0_0_25px_rgba(124,58,237,0.3)]" },
            ].map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={`/details#${item.id}`}
                  className={`group relative flex flex-col items-center justify-center p-10 h-full rounded-2xl bg-card/50 border border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-500 ${item.border} ${item.shadow}`}
                  data-testid={`icon-nav-${item.id}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-b ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <item.icon className="w-16 h-16 mb-6 text-muted-foreground group-hover:text-white transition-colors duration-300 relative z-10" />
                  <h3 className="text-xl font-display font-bold text-white mb-2 relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground text-center relative z-10">
                    {item.desc}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats/Impact Section */}
      <section className="py-24 bg-card relative">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Measurable <span className="text-primary">Impact</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">We don't deal in hypotheticals. Our systems are built to deliver concrete ROI from day one.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: "5–10x", label: "Productivity Increase", icon: BarChart3 },
              { value: "100%", label: "Practical Implementation", icon: Network },
              { value: "24/7", label: "Automated Operations", icon: Brain },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="p-8 rounded-2xl bg-background border border-primary/20 flex flex-col items-center justify-center"
              >
                <stat.icon className="w-10 h-10 text-secondary mb-4 opacity-80" />
                <div className="text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-white mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-medium text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Clients Section */}
      <section className="py-20 relative overflow-hidden bg-background border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-8">Trusted by Forward-Thinking Malaysian Enterprises</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale">
            {/* Abstract client logos using text and geometric shapes */}
            {[
              { name: "NEXA Logistics", short: "NEXA" },
              { name: "Apex Financial", short: "APEX" },
              { name: "Quantum Retail", short: "QUANTUM" },
              { name: "Stellar Manufacturing", short: "STELLAR" },
              { name: "Vanguard Tech", short: "VANGUARD" },
            ].map((client, i) => (
              <div key={i} className="text-2xl font-display font-bold tracking-widest flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-foreground/80" />
                {client.short}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-card to-background border-t border-white/5">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Client <span className="text-primary">Success</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Real transformations from Malaysian businesses adopting our AI frameworks.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote: "MODUS AI completely overhauled our e-commerce supply chain. What used to take a team of 10 five days is now fully automated and predictive.",
                author: "Sarah L.",
                role: "Director of Operations, Quantum Retail"
              },
              {
                quote: "We thought AI was just a buzzword until MODUS showed us how to implement it practically. Our customer service response time dropped by 80% while satisfaction soared.",
                author: "James Wong",
                role: "CEO, NEXA Logistics"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="p-8 rounded-2xl bg-background border border-white/10 hover:border-primary/30 transition-colors relative"
              >
                <div className="absolute top-4 left-4 text-6xl text-primary/10 font-serif leading-none">"</div>
                <p className="text-lg text-white/90 relative z-10 mb-6 mt-4">
                  {testimonial.quote}
                </p>
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

    </div>
  );
}
