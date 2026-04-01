import React, { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { ArrowLeft, CheckCircle2, ChevronRight, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Details() {
  const [location] = useLocation();

  useEffect(() => {
    // Check if there's a hash in the URL and scroll to it
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash.substring(1));
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-background text-foreground pb-24">
      <Navbar />

      {/* Floating Back Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Link href="/" className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-md border border-white/10 hover:border-primary hover:bg-primary/10 transition-all duration-300 shadow-lg text-sm font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>

      <main className="container mx-auto px-4 md:px-8 pt-32 max-w-5xl flex flex-col gap-32">
        
        {/* Section 1: About Us */}
        <motion.section
          id="about"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="scroll-mt-32"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-1 w-12 bg-primary"></div>
            <h2 className="text-4xl md:text-5xl font-display font-bold">About <span className="text-primary">Us</span></h2>
          </div>
          
          <div className="p-8 md:p-12 rounded-3xl bg-card border border-white/5 relative overflow-hidden group hover:border-primary/30 transition-colors duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] group-hover:bg-primary/10 transition-colors duration-500"></div>
            
            <div className="relative z-10 text-lg md:text-xl text-muted-foreground leading-relaxed space-y-6">
              <p>
                <strong className="text-white font-display">MODUS AI Associates</strong> is Malaysia's premier AI e-commerce training and transformation company. We don't teach theory — we implement.
              </p>
              <p>
                Our team bridges the gap between Malaysian businesses and global AI execution standards. In a rapidly evolving digital landscape, falling behind on AI adoption means falling behind on business. 
              </p>
              <p>
                Our mission is to elevate Malaysian companies to compete on the world stage using applied, practical AI solutions that drive measurable growth and operational efficiency.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 2: Why Choose Us */}
        <motion.section
          id="why-choose-us"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="scroll-mt-32"
        >
          <div className="flex items-center gap-4 mb-8 justify-end">
            <h2 className="text-4xl md:text-5xl font-display font-bold">Why <span className="text-secondary">Choose Us</span></h2>
            <div className="h-1 w-12 bg-secondary"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Practical AI implementation, not academic theory",
              "Proven 5–10x productivity improvements",
              "Business-oriented approach with real use cases",
              "End-to-end automation systems we build WITH you",
              "Outcomes-first: we measure ROI, not attendance"
            ].map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-white/5 hover:border-secondary/50 hover:bg-secondary/5 transition-all duration-300 group"
              >
                <div className="mt-1 bg-secondary/20 p-2 rounded-full group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  <CheckCircle2 className="w-5 h-5 text-secondary group-hover:text-white" />
                </div>
                <p className="text-lg font-medium text-white/90">{point}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section 3: Our Services */}
        <motion.section
          id="services"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="scroll-mt-32"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-1 w-12 bg-primary"></div>
            <h2 className="text-4xl md:text-5xl font-display font-bold">Our <span className="text-primary">Services</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "AI E-Commerce Training", desc: "Master AI tools specific to scaling online retail and marketplace operations." },
              { title: "Transformation Consulting", desc: "Strategic roadmaps to integrate AI across your entire organizational workflow." },
              { title: "Workforce AI Upskilling", desc: "Turn your current employees into AI-augmented power users." },
              { title: "Automation System Setup", desc: "Custom-built, integrated AI pipelines that run your operations 24/7." }
            ].map((service, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-card border border-white/10 hover:border-primary shadow-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.15)] transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-primary/20 group-hover:bg-primary transition-colors duration-300"></div>
                <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
                <div className="mt-6 flex items-center text-sm font-medium text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Section 4: Get Started */}
        <motion.section
          id="get-started"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="scroll-mt-32"
        >
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-card to-background border border-primary/30 relative overflow-hidden shadow-[0_0_50px_rgba(0,212,255,0.1)]">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMwMGQ0ZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Start Your <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Transformation</span></h2>
                <p className="text-lg text-muted-foreground mb-8">
                  The future of Malaysian business is AI-driven. Don't let your competitors get there first. Contact us today to schedule a consultation.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-white/80">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <span>hello@modusai.com.my</span>
                  </div>
                  <div className="flex items-center gap-4 text-white/80">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <span>+60 3 1234 5678</span>
                  </div>
                  <div className="flex items-center gap-4 text-white/80">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <span>Kuala Lumpur, Malaysia</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-background/50 p-6 md:p-8 rounded-2xl border border-white/10 backdrop-blur-md">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/70">Name</label>
                      <Input className="bg-black/50 border-white/10 focus-visible:border-primary focus-visible:ring-primary/20" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/70">Company</label>
                      <Input className="bg-black/50 border-white/10 focus-visible:border-primary focus-visible:ring-primary/20" placeholder="Acme Corp" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/70">Email</label>
                    <Input type="email" className="bg-black/50 border-white/10 focus-visible:border-primary focus-visible:ring-primary/20" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/70">Message</label>
                    <Textarea className="bg-black/50 border-white/10 focus-visible:border-primary focus-visible:ring-primary/20 min-h-[120px]" placeholder="Tell us about your business goals..." />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-bold h-12 mt-4 transition-all hover:shadow-[0_0_20px_rgba(0,212,255,0.4)]" data-testid="form-submit">
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
