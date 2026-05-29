import React, { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import {
  ArrowLeft, CheckCircle2, ChevronRight,
  Mail, MapPin, Phone, Send, Award, Globe2, BookOpen, Users, Briefcase, Bot, Camera, Loader2,
  ChevronDown, Facebook, Linkedin, Twitter, Instagram
} from "lucide-react";
import launchImg from "@assets/image_1775812766946.png";
import ribbonImg from "@assets/WhatsApp_Image_2026-04-03_at_5.40.49_PM_1775209677927.jpeg";
import signingImg from "@assets/WhatsApp_Image_2026-04-03_at_5.36.11_PM_1775209677928.jpeg";
import coursesImg from "@assets/image_1775812683826.png";
import uniImg from "@assets/image_1775813041771.png";
import southOceanImg from "@assets/WhatsApp_Image_2026-04-20_at_7.10.47_PM_1776706993328.jpeg";
import unitenImg from "@assets/WhatsApp_Image_2026-04-20_at_7.13.18_PM_1776707157909.jpeg";
import uulianTotalImg from "@assets/WhatsApp_Image_2026-04-20_at_7.15.54_PM_1776707269685.jpeg";
import uulianTotal2Img from "@assets/WhatsApp_Image_2026-04-20_at_7.23.19_PM_1776707338608.jpeg";
import ribbonGovernorImg from "@assets/image_(4)_nowatermark.png";
import blnCharityImg from "@assets/charity_1776832653783.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLang } from "@/contexts/LanguageContext";
import { trackViewContent, trackLead, trackContact, trackButtonClick } from "@/lib/tiktok";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const detailsContent = {
  en: {
    backToHome: "Back to Home",
    about: {
      title: "About",
      titleHighlight: "Us",
      ribbonCaption: "MODUS AI Associates ribbon-cutting ceremony witnessed by the 8th Penang Governor, Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak.",
      p1: "MODUS AI Associates is Malaysia's gateway to China's world-class AI ecosystem — bridging ASEAN's rapidly growing AI talent gap through certified, practical training and real-world implementation.",
      p2Prefix: "We are officially partnered with ",
      p2Bold: "China's No.1 AI Training Institution",
      p2Suffix: " — powering Malaysian businesses with the world's leading advanced technology companies.",
      p3Prefix: "Our programs are certified by ",
      p3Bold: "the Ministry of Industry and Information Technology of the People's Republic of China (MIIT)",
      p3Suffix: " — the gold standard in AI certification — ensuring your workforce meets global benchmarks, not just local ones.",
      p4: "We focus exclusively on real-world AI application. No theoretical fluff. Every training module and every consulting engagement we build is designed to deliver measurable ROI from day one.",
      p4Bold: "real-world AI application",
      p5Bold: "Our mission:",
      p5: " Elevate every Malaysian company to compete on the world stage using applied, certified AI execution — powered by China's proven ecosystem.",
      badges: [
        { label: "MIIT Certified", sub: "Ministry of Industry and Information Technology of the People's Republic of China" },
        { label: "China AI Ecosystem", sub: "No.1 Training Institution Partner" },
        { label: "2,600 Partner Universities", sub: "300,000+ Graduates" },
      ],
    },
    why: {
      title: "Why",
      titleHighlight: "Choose Us",
      points: [
        { accent: "secondary", text: "Industry-certified AI training — AIGC Engineer Certification recognised globally" },
        { accent: "primary", text: "Direct access to China's AI Talent Pool — the world's largest and most advanced" },
        { accent: "secondary", text: "Proven ecosystem: 2,600 universities, 300,000+ certified students across Asia" },
        { accent: "primary", text: "Real business application and automation systems — not academic theory" },
        { accent: "secondary", text: "Strong government alignment — TVET integration and national AI policy compliance" },
        { accent: "primary", text: "3–10x productivity improvements proven across manufacturing, retail, and logistics" },
      ],
    },
    services: {
      title: "Our",
      titleHighlight: "Services",
      learnMore: "Learn more",
      items: [
        { icon: BookOpen, title: "AI E-Commerce Training", desc: "Master AI tools purpose-built for scaling marketplace operations — from intelligent product listings to automated fulfilment.", tag: "Training" },
        { icon: Award, title: "MIIT AIGC Certification", desc: "Internationally recognised AI Generative Content Engineer Certification from the Ministry of Industry and Information Technology of the People's Republic of China (MIIT).", tag: "Certification" },
        { icon: Briefcase, title: "Corporate AI Transformation", desc: "Strategic consulting to integrate AI across your entire organisation — from board-level roadmaps to ground-floor implementation.", tag: "Consulting" },
        { icon: Users, title: "Workforce AI Upskilling", desc: "Turn your current employees into AI-augmented power users. Structured, role-specific programmes aligned with your company goals.", tag: "Upskilling" },
        { icon: Award, title: "Graduation Certification", desc: "Ministry of Industry and Information Technology of the People's Republic of China (MIIT) graduates will be listed in the world leading AI talent pool — this is the personal value endorsement.", tag: "Certification" },
      ],
    },
    courses: {
      title: "Our",
      titleHighlight: "Courses",
      subtitle: "12 MIIT-certified AI professional programmes. Click any course to see the full summary, features, and benefits.",
      headers: { no: "#", title: "Course Title", features: "Key Features", benefits: "Core Benefits", duration: "Duration", price: "Price", recognition: "Recognition" },
      featuresLabel: "Features",
      benefitsLabel: "Benefits",
      examScheduleLabel: "Exam Schedule",
      examScheduleValue: "Quarterly — 4th weekend of Mar, Jun, Sep & Dec",
      investmentLabel: "Investment",
      perPerson: "per person",
      moreSuffix: "more",
      items: [
        {
          no: "01", title: "AI Human Resources Manager",
          summary: "Composite HR management certification for professionals who apply AI technology to talent acquisition, training, performance management, and HR operations. Powered by DeepSeek and MIIT-certified.",
          features: ["DeepSeek-powered HR workflows", "AI-assisted document & recruitment", "Talent management systems", "Performance coaching with AI", "Group company position management"],
          benefits: ["3–10x HR productivity boost", "Global-standard MIIT credential", "AI-driven talent pipeline", "Automated compliance documentation", "Lead digital HR transformation"],
          duration: "29h 35m", price: "RM 6,000", recognition: "MIIT / IITC",
        },
        {
          no: "02", title: "AI Application Specialist for the Workplace",
          summary: "AI tool proficiency certification for professionals across core office scenarios including document creation, PPT design, data analysis, customer service, and live-stream operations.",
          features: ["DeepSeek office automation", "AI-powered PPT & visual design", "Workplace data analysis", "Customer service AI integration", "Corporate content & marketing AI"],
          benefits: ["Dramatically reduce repetitive tasks", "Produce professional outputs faster", "Cross-function AI fluency", "Career-accelerating credential", "Applicable across all industries"],
          duration: "Not available", price: "RM 6,000", recognition: "MIIT / IITC",
        },
        {
          no: "03", title: "AI Financial Manager",
          summary: "Interdisciplinary certification combining financial expertise with AI technology to drive financial digital transformation, including budgeting, risk control, tax compliance, and intelligent audit.",
          features: ["AI-driven budgeting & forecasting", "Intelligent procurement systems", "Tax compliance automation", "AI audit & risk penetration", "Financial data cleaning with DeepSeek"],
          benefits: ["Smarter financial decision-making", "Automated compliance workflows", "Reduced financial risk exposure", "End-to-end cost visibility", "Future-proof finance leadership"],
          duration: "Not available", price: "RM 6,000", recognition: "MIIT / IITC",
        },
        {
          no: "04", title: "AI Psychological Counseling Consultant",
          summary: "Professional certification combining AI technology with psychological theories to deliver digital mental health support services including AI-assisted therapy, ethics frameworks, and agent-based counseling tools.",
          features: ["AI counseling tool integration", "Ethical AI use in therapy", "Expressive art therapy with AI", "Agent-based consultation systems", "AI knowledge base for counselors"],
          benefits: ["Expand therapeutic reach digitally", "Modern evidence-based practice", "Ethical & compliant AI use", "Build your own counseling agent", "Recognised cross-border credential"],
          duration: "Not available", price: "RM 6,000", recognition: "MIIT / IITC",
        },
        {
          no: "05", title: "Artificial Intelligence Trainer",
          summary: "Certification of AI product application capabilities covering data management, algorithm configuration, large model principles, and prompting techniques — qualifying holders to train others in AI.",
          features: ["DeepSeek prompting mastery", "Large model principles (50 mins)", "AIGC essential skills", "Algorithm & data configuration", "MIIT intermediate AI certification"],
          benefits: ["Qualify as a certified AI trainer", "Train teams and organisations", "Deep understanding of AI models", "High-demand career positioning", "MIIT & IITC dual recognition"],
          duration: "25h 57m", price: "RM 6,000", recognition: "MIIT / IITC",
        },
        {
          no: "06", title: "Agent Builder",
          summary: "Professional certification in building and optimising AI agents using platforms including Coze, FastGPT, and Dify. Covers enterprise agent deployment, RAG design, and knowledge base construction.",
          features: ["Coze & Dify agent development", "RAG design & knowledge bases", "AI agent training & optimisation", "Enterprise multi-platform deployment", "Localised agent construction"],
          benefits: ["Build custom enterprise AI agents", "Automate complex workflows", "Competitive edge in AI engineering", "Deploy production-ready agents", "Emerging, high-value skill set"],
          duration: "43h 35m", price: "RM 6,000", recognition: "MIIT / IITC",
        },
        {
          no: "07", title: "AI Product Manager",
          summary: "Full lifecycle AI product management certification covering technology evaluation, user research, commercial value creation, and career development — designed for PMs leading AI-powered products.",
          features: ["AI product lifecycle management", "User insight with DeepSeek", "AI outbound call platform design", "Resume & interview AI prep", "OpenClaw enterprise application"],
          benefits: ["Lead AI product teams", "Market-ready PM credential", "Commercial AI value creation", "Career advancement tools", "Recognised by MIIT & IITC"],
          duration: "48h 39m", price: "RM 6,000", recognition: "MIIT / IITC",
        },
        {
          no: "08", title: "AI Data Analyst",
          summary: "Certification for professionals who use AI to deeply analyse enterprise data and provide actionable decision-making insights. Covers Python, MySQL, AI data modelling, and predictive analytics.",
          features: ["Python & MySQL data foundations", "AI data modelling & mining", "Predictive analytics pipelines", "Business intelligence dashboards", "DeepSeek data analysis rules"],
          benefits: ["Data-driven decision authority", "Automate complex reporting", "Predictive business insights", "Cross-industry applicability", "High-demand analytics credential"],
          duration: "27h 10m", price: "RM 6,000", recognition: "MIIT / IITC",
        },
        {
          no: "09", title: "AI Marketer",
          summary: "Professional certification in developing and optimising marketing strategies using AI — covering AIGC short video, AI+SEO, content creation, community management, and customer acquisition.",
          features: ["AIGC short video marketing", "AI+SEO content strategy", "Community & social AI tools", "AI-powered ad & copy creation", "Seedance 2.0 video production"],
          benefits: ["Precision customer acquisition", "Automated content at scale", "Measurable campaign ROI", "Modern digital marketing edge", "Career-defining AI credential"],
          duration: "27h 10m", price: "RM 6,000", recognition: "MIIT / IITC",
        },
        {
          no: "10", title: "AIGC Application Engineer",
          summary: "Authoritative credential demonstrating mastery of AIGC tool implementation, scenario-based solution design, and business integration — for professionals building with large AI models.",
          features: ["Large model application development", "AIGC tool implementation", "Scenario-based solution design", "Business integration capabilities", "Novice-to-expert learning path"],
          benefits: ["Authoritative professional credential", "Technical AI proficiency proof", "Build complex AI applications", "Business-ready AI engineering", "Valued across all sectors"],
          duration: "12h 35m", price: "RM 6,000", recognition: "MIIT / IITC",
        },
        {
          no: "11", title: "OpenClaw Development Engineer",
          summary: "Core skills certification for intelligent agent development, leading the technological revolution in AI application engineering using the OpenClaw platform.",
          features: ["Intelligent agent core development", "AI application engineering", "OpenClaw platform mastery", "Enterprise agent integration", "Emerging AI tech stack"],
          benefits: ["Lead the AI development revolution", "Cutting-edge engineering skills", "High-value niche credential", "Enterprise deployment capability", "Future-proof career path"],
          duration: "12h 17m", price: "RM 6,000", recognition: "MIIT / IITC",
        },
        {
          no: "12", title: "OpenClaw Workplace Application Specialist",
          summary: "Become the 'Workplace Intelligent Agent Commander' in the AI era. This certification equips professionals with high-efficiency AI office tools, intelligent workflows, and enterprise automation capabilities.",
          features: ["High-efficiency AI office workflows", "Intelligent workplace automation", "OpenClaw specialist training", "Enterprise AI command skills", "AI-era productivity systems"],
          benefits: ["Transform daily work with AI", "Become indispensable at work", "Lead AI adoption in your team", "Immediate productivity gains", "Workplace leadership credential"],
          duration: "15h 25m", price: "RM 6,000", recognition: "MIIT / IITC",
        },
      ],
    },
    activities: {
      title: "Our",
      titleHighlight: "Activities",
      items: [
        { img: ribbonImg, caption: "Modus AI Associates Partner Ribbon Cutting Ceremony" },
        { img: signingImg, caption: "Modus AI Associates Partner Signing Witnessed by the 8th Penang Governor Tun Dato' Seri Utama Ahmad Fuzi" },
        { img: uniImg, caption: "Modus AI Associates is rising with cooperations with outstanding Universities & International Schools in Malaysia." },
        { img: coursesImg, caption: "Till June 2025, 5 AI courses were conducted and more to come." },
        { img: launchImg, caption: "Modus AI Associates Official Launching on 8 August 2025." },
        { img: southOceanImg, caption: "Modus AI Associates and South Ocean Technology Sdn Bhd partnership signing — CEO Dato' Dr. Tan BN with CEO Kelvin Lee, 4 June 2026." },
        { img: unitenImg, caption: "Modus AI Associates collaboration with UNITEN (Universiti Tenaga Nasional) — The Energy University." },
        { img: uulianTotalImg, caption: "Xiamen UULIAN GM visiting MODUS Partner Total International Associates." },
        { img: uulianTotal2Img, caption: "Xiamen UULIAN GM visiting MODUS Partner Total International Associates." },
        { img: blnCharityImg, caption: "Modus AI Associates participation in BLN 7th Charity Night." },
      ],
    },
    socials: {
      title: "Our",
      titleHighlight: "Socials",
      subtitle: "Connect with Modus AI Associates across all platforms.",
      followLabel: "Follow us",
      platforms: [
        {
          name: "Facebook",
          handle: "@ModusAIAssociates",
          desc: "Updates, events & announcements",
          url: "https://www.facebook.com/profile.php?id=61572345552403",
          color: "#1877F2",
          colorClass: "blue",
        },
      ],
    },
    contact: {
      title: "Start Your",
      titleHighlight: "Transformation",
      desc: "Malaysia's AI future is being written now. Don't let your competitors get there first. Reach out today and we'll provide programs built around your business goals.",
      contacts: [
        { icon: Mail, text: "admin@modusaiassociates.com" },
        { icon: Phone, text: "Elaine: 017-3490001" },
        { icon: Phone, text: "Joel: 011-11469065" },
        { icon: MapPin, text: "Kuala Lumpur, Malaysia" },
      ],
      form: {
        namePlaceholder: "Your name",
        companyPlaceholder: "Your company name",
        emailPlaceholder: "Your email",
        messagePlaceholder: "Tell us about your AI business needs...",
        nameLabel: "Name",
        companyLabel: "Company",
        emailLabel: "Email",
        messageLabel: "Message",
        submitText: "Send Message",
        sendingText: "Sending...",
        successTitle: "Message Sent!",
        successDesc: "Thank you for reaching out. Our team will get back to you shortly.",
        errors: {
          nameRequired: "Name is required",
          emailRequired: "Email is required",
          emailInvalid: "Enter a valid email",
          messageRequired: "Message is required",
          failed: "Failed to send. Please try again.",
          network: "Network error. Please check your connection and try again.",
        },
      },
    },
  },
  bm: {
    backToHome: "Kembali ke Utama",
    about: {
      title: "Tentang",
      titleHighlight: "Kami",
      ribbonCaption: "Majlis perasmian MODUS AI Associates yang disaksikan oleh Yang Dipertua Negeri Pulau Pinang ke-8, Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak.",
      p1: "MODUS AI Associates ialah pintu gerbang Malaysia ke ekosistem AI bertaraf dunia dari China — merapatkan jurang bakat AI yang semakin melebar di ASEAN melalui latihan dan pelaksanaan praktikal yang bertauliah.",
      p2Prefix: "Kami secara rasmi bermitra dengan ",
      p2Bold: "Institusi Latihan AI No.1 China",
      p2Suffix: " — memperkasakan perniagaan Malaysia dengan syarikat teknologi terkemuka di dunia.",
      p3Prefix: "Program kami disahkan oleh ",
      p3Bold: "Kementerian Perindustrian dan Teknologi Maklumat Republik Rakyat China (MIIT)",
      p3Suffix: " — piawaian emas dalam sijil AI — memastikan tenaga kerja anda memenuhi penanda aras global, bukan sekadar tempatan.",
      p4: "Kami memberi tumpuan eksklusif kepada aplikasi AI dunia sebenar. Tiada teori yang tidak perlu. Setiap modul latihan dan setiap penglibatan perundingan yang kami bina direka untuk menghasilkan pulangan pelaburan yang boleh diukur dari hari pertama.",
      p4Bold: "aplikasi AI dunia sebenar",
      p5Bold: "Misi kami:",
      p5: " Meningkatkan taraf setiap syarikat Malaysia untuk bersaing di pentas dunia menggunakan pelaksanaan AI yang bertauliah dan praktikal — dikuasakan oleh ekosistem terbukti dari China.",
      badges: [
        { label: "Bertauliah MIIT", sub: "Kementerian Perindustrian dan Teknologi Maklumat Republik Rakyat China" },
        { label: "Ekosistem AI China", sub: "Rakan Institusi Latihan No.1" },
        { label: "2,600 Universiti Rakan", sub: "300,000+ Graduan" },
      ],
    },
    why: {
      title: "Mengapa",
      titleHighlight: "Pilih Kami",
      points: [
        { accent: "secondary", text: "Latihan AI bertauliah industri — Sijil Jurutera AIGC diiktiraf secara global" },
        { accent: "primary", text: "Akses langsung ke Kolam Bakat AI China — yang terbesar dan paling maju di dunia" },
        { accent: "secondary", text: "Ekosistem terbukti: 2,600 universiti, 300,000+ pelajar bersijil di seluruh Asia" },
        { accent: "primary", text: "Aplikasi perniagaan sebenar dan sistem automasi — bukan teori akademik" },
        { accent: "secondary", text: "Penjajaran kerajaan yang kukuh — integrasi TVET dan pematuhan dasar AI nasional" },
        { accent: "primary", text: "Peningkatan produktiviti 3–10x terbukti dalam pembuatan, runcit, dan logistik" },
      ],
    },
    services: {
      title: "Perkhidmatan",
      titleHighlight: "Kami",
      learnMore: "Ketahui lebih lanjut",
      items: [
        { icon: BookOpen, title: "Latihan AI E-Dagang", desc: "Kuasai alat AI yang dibina khas untuk mengembangkan operasi pasaran — daripada penyenaraian produk yang pintar kepada pemenuhan automatik.", tag: "Latihan" },
        { icon: Award, title: "Sijil AIGC MIIT", desc: "Sijil Jurutera Kandungan AI Generatif yang diiktiraf secara antarabangsa daripada Kementerian Perindustrian dan Teknologi Maklumat Republik Rakyat China (MIIT).", tag: "Sijil" },
        { icon: Briefcase, title: "Transformasi AI Korporat", desc: "Perundingan strategik untuk mengintegrasikan AI di seluruh organisasi anda — daripada pelan tindakan peringkat lembaga hingga pelaksanaan di lapangan.", tag: "Perundingan" },
        { icon: Users, title: "Peningkatan Kemahiran AI Tenaga Kerja", desc: "Jadikan pekerja sedia ada anda pengguna berkuasa yang dipertingkatkan dengan AI. Program berstruktur dan khusus mengikut peranan yang diselaraskan dengan matlamat syarikat anda.", tag: "Kemahiran" },
        { icon: Award, title: "Sijil Graduasi", desc: "Graduan Kementerian Perindustrian dan Teknologi Maklumat Republik Rakyat China (MIIT) akan disenaraikan dalam kumpulan bakat AI terkemuka di dunia — ini adalah pengesahan nilai peribadi.", tag: "Sijil" },
      ],
    },
    courses: {
      title: "Kursus",
      titleHighlight: "Kami",
      subtitle: "12 program AI profesional bertauliah MIIT. Klik mana-mana kursus untuk melihat ringkasan lengkap, ciri-ciri, dan manfaat.",
      headers: { no: "#", title: "Tajuk Kursus", features: "Ciri-ciri Utama", benefits: "Manfaat Utama", duration: "Tempoh", price: "Harga", recognition: "Pengiktirafan" },
      featuresLabel: "Ciri-ciri",
      benefitsLabel: "Manfaat",
      examScheduleLabel: "Jadual Peperiksaan",
      examScheduleValue: "Suku tahunan — Hujung minggu ke-4 bulan Mac, Jun, Sep & Dis",
      investmentLabel: "Pelaburan",
      perPerson: "seorang",
      moreSuffix: "lagi",
      items: [
        {
          no: "01", title: "Pengurus Sumber Manusia AI",
          summary: "Sijil pengurusan HR komposit untuk profesional yang mengaplikasikan teknologi AI dalam pengambilan bakat, latihan, pengurusan prestasi, dan operasi HR. Dikuasakan oleh DeepSeek dan disahkan oleh MIIT.",
          features: ["Aliran kerja HR berkuasa DeepSeek", "Pembuatan dokumen & pengambilan pekerja AI", "Sistem pengurusan bakat", "Bimbingan prestasi dengan AI", "Pengurusan jawatan syarikat kumpulan"],
          benefits: ["Peningkatan produktiviti HR 3–10x", "Kelayakan standard global MIIT", "Saluran bakat dipacu AI", "Dokumentasi pematuhan automatik", "Memimpin transformasi HR digital"],
          duration: "29j 35m", price: "RM 6,000", recognition: "MIIT / IITC",
        },
        {
          no: "02", title: "Pakar Aplikasi AI untuk Tempat Kerja",
          summary: "Sijil kemahiran alat AI untuk profesional merangkumi senario pejabat teras termasuk pembuatan dokumen, reka bentuk PPT, analisis data, perkhidmatan pelanggan, dan operasi siaran langsung.",
          features: ["Automasi pejabat DeepSeek", "Reka bentuk PPT & visual berkuasa AI", "Analisis data tempat kerja", "Integrasi AI perkhidmatan pelanggan", "Kandungan korporat & pemasaran AI"],
          benefits: ["Kurangkan tugas berulang secara drastik", "Hasilkan output profesional lebih pantas", "Kefasihan AI merentas fungsi", "Kelayakan pemacu kerjaya", "Boleh digunakan dalam semua industri"],
          duration: "Tidak tersedia", price: "RM 6,000", recognition: "MIIT / IITC",
        },
        {
          no: "03", title: "Pengurus Kewangan AI",
          summary: "Sijil antara-disiplin yang menggabungkan kepakaran kewangan dengan teknologi AI untuk memacu transformasi digital kewangan, termasuk belanjawan, kawalan risiko, pematuhan cukai, dan audit pintar.",
          features: ["Belanjawan & ramalan dipacu AI", "Sistem perolehan pintar", "Automasi pematuhan cukai", "Audit AI & penembusan risiko", "Pembersihan data kewangan dengan DeepSeek"],
          benefits: ["Keputusan kewangan yang lebih bijak", "Aliran kerja pematuhan automatik", "Pengurangan pendedahan risiko kewangan", "Keterlihatan kos menyeluruh", "Kepimpinan kewangan tahan masa depan"],
          duration: "Tidak tersedia", price: "RM 6,000", recognition: "MIIT / IITC",
        },
        {
          no: "04", title: "Konsultan Kaunseling Psikologi AI",
          summary: "Sijil profesional yang menggabungkan teknologi AI dengan teori psikologi untuk menyampaikan perkhidmatan kesihatan mental digital termasuk terapi berbantukan AI, rangka kerja etika, dan alat kaunseling berasaskan ejen.",
          features: ["Integrasi alat kaunseling AI", "Penggunaan AI beretika dalam terapi", "Terapi seni ekspresif dengan AI", "Sistem perundingan berasaskan ejen", "Pangkalan pengetahuan AI untuk kaunselor"],
          benefits: ["Perluas jangkauan terapeutik secara digital", "Amalan berasaskan bukti moden", "Penggunaan AI beretika & pematuhan", "Bina ejen kaunseling anda sendiri", "Kelayakan lintas sempadan yang diiktiraf"],
          duration: "Tidak tersedia", price: "RM 6,000", recognition: "MIIT / IITC",
        },
        {
          no: "05", title: "Jurulatih Kecerdasan Buatan",
          summary: "Sijil keupayaan aplikasi produk AI merangkumi pengurusan data, konfigurasi algoritma, prinsip model besar, dan teknik prompting — melayakkan pemegang sijil untuk melatih orang lain dalam AI.",
          features: ["Kemahiran prompting DeepSeek", "Prinsip model besar (50 minit)", "Kemahiran asas AIGC", "Konfigurasi algoritma & data", "Sijil AI pertengahan MIIT"],
          benefits: ["Layak sebagai jurulatih AI bertauliah", "Latih pasukan dan organisasi", "Pemahaman mendalam model AI", "Kedudukan kerjaya yang sangat diperlukan", "Pengiktirafan dua hala MIIT & IITC"],
          duration: "25j 57m", price: "RM 6,000", recognition: "MIIT / IITC",
        },
        {
          no: "06", title: "Pembina Ejen",
          summary: "Sijil profesional dalam membina dan mengoptimumkan ejen AI menggunakan platform termasuk Coze, FastGPT, dan Dify. Merangkumi penempatan ejen perusahaan, reka bentuk RAG, dan pembinaan pangkalan pengetahuan.",
          features: ["Pembangunan ejen Coze & Dify", "Reka bentuk RAG & pangkalan pengetahuan", "Latihan & pengoptimuman ejen AI", "Penempatan berbilang platform perusahaan", "Pembinaan ejen tempatan"],
          benefits: ["Bina ejen AI perusahaan tersuai", "Automatikkan aliran kerja kompleks", "Kelebihan daya saing dalam kejuruteraan AI", "Sebarkan ejen sedia pengeluaran", "Set kemahiran bernilai tinggi yang sedang berkembang"],
          duration: "43j 35m", price: "RM 6,000", recognition: "MIIT / IITC",
        },
        {
          no: "07", title: "Pengurus Produk AI",
          summary: "Sijil pengurusan produk AI kitaran hayat penuh merangkumi penilaian teknologi, penyelidikan pengguna, penciptaan nilai komersial, dan pembangunan kerjaya — direka untuk PM yang memimpin produk berkuasa AI.",
          features: ["Pengurusan kitaran hayat produk AI", "Pandangan pengguna dengan DeepSeek", "Reka bentuk platform panggilan keluar AI", "Persediaan resume & temu duga AI", "Aplikasi perusahaan OpenClaw"],
          benefits: ["Pimpin pasukan produk AI", "Kelayakan PM sedia pasaran", "Penciptaan nilai AI komersial", "Alat kemajuan kerjaya", "Diiktiraf oleh MIIT & IITC"],
          duration: "48j 39m", price: "RM 6,000", recognition: "MIIT / IITC",
        },
        {
          no: "08", title: "Penganalisis Data AI",
          summary: "Sijil untuk profesional yang menggunakan AI untuk menganalisis data perusahaan secara mendalam dan menyediakan pandangan membuat keputusan yang boleh diambil tindakan. Merangkumi Python, MySQL, pemodelan data AI, dan analitik ramalan.",
          features: ["Asas data Python & MySQL", "Pemodelan & perlombongan data AI", "Saluran analitik ramalan", "Papan pemuka perisikan perniagaan", "Peraturan analisis data DeepSeek"],
          benefits: ["Autoriti keputusan berasaskan data", "Automatikkan pelaporan kompleks", "Pandangan perniagaan ramalan", "Kebolehgunaan merentas industri", "Kelayakan analitik yang sangat diperlukan"],
          duration: "27j 10m", price: "RM 6,000", recognition: "MIIT / IITC",
        },
        {
          no: "09", title: "Pemasar AI",
          summary: "Sijil profesional dalam membangun dan mengoptimumkan strategi pemasaran menggunakan AI — merangkumi video pendek AIGC, AI+SEO, penciptaan kandungan, pengurusan komuniti, dan pemerolehan pelanggan.",
          features: ["Pemasaran video pendek AIGC", "Strategi kandungan AI+SEO", "Alat komuniti & sosial AI", "Penciptaan iklan & salinan berkuasa AI", "Pengeluaran video Seedance 2.0"],
          benefits: ["Pemerolehan pelanggan yang tepat", "Kandungan automatik berskala", "ROI kempen yang boleh diukur", "Kelebihan pemasaran digital moden", "Kelayakan AI yang membezakan kerjaya"],
          duration: "27j 10m", price: "RM 6,000", recognition: "MIIT / IITC",
        },
        {
          no: "10", title: "Jurutera Aplikasi AIGC",
          summary: "Kelayakan berwibawa yang menunjukkan penguasaan pelaksanaan alat AIGC, reka bentuk penyelesaian berasaskan senario, dan integrasi perniagaan — untuk profesional yang membina dengan model AI besar.",
          features: ["Pembangunan aplikasi model besar", "Pelaksanaan alat AIGC", "Reka bentuk penyelesaian berasaskan senario", "Keupayaan integrasi perniagaan", "Laluan pembelajaran daripada pemula ke pakar"],
          benefits: ["Kelayakan profesional berwibawa", "Bukti kemahiran teknikal AI", "Bina aplikasi AI kompleks", "Kejuruteraan AI sedia perniagaan", "Dihargai merentas semua sektor"],
          duration: "12j 35m", price: "RM 6,000", recognition: "MIIT / IITC",
        },
        {
          no: "11", title: "Jurutera Pembangunan OpenClaw",
          summary: "Sijil kemahiran teras untuk pembangunan ejen pintar, memimpin revolusi teknologi dalam kejuruteraan aplikasi AI menggunakan platform OpenClaw.",
          features: ["Pembangunan teras ejen pintar", "Kejuruteraan aplikasi AI", "Penguasaan platform OpenClaw", "Integrasi ejen perusahaan", "Tindanan teknologi AI yang sedang berkembang"],
          benefits: ["Pimpin revolusi pembangunan AI", "Kemahiran kejuruteraan terkini", "Kelayakan niche bernilai tinggi", "Keupayaan penempatan perusahaan", "Laluan kerjaya tahan masa depan"],
          duration: "12j 17m", price: "RM 6,000", recognition: "MIIT / IITC",
        },
        {
          no: "12", title: "Pakar Aplikasi Tempat Kerja OpenClaw",
          summary: "Jadilah 'Komander Ejen Pintar Tempat Kerja' dalam era AI. Sijil ini melengkapkan profesional dengan alat pejabat AI kecekapan tinggi, aliran kerja pintar, dan keupayaan automasi perusahaan.",
          features: ["Aliran kerja pejabat AI kecekapan tinggi", "Automasi tempat kerja pintar", "Latihan pakar OpenClaw", "Kemahiran arahan AI perusahaan", "Sistem produktiviti era AI"],
          benefits: ["Transformasikan kerja harian dengan AI", "Jadikan diri anda tidak tergantikan", "Pimpin penggunaan AI dalam pasukan", "Peningkatan produktiviti segera", "Kelayakan kepimpinan tempat kerja"],
          duration: "15j 25m", price: "RM 6,000", recognition: "MIIT / IITC",
        },
      ],
    },
    activities: {
      title: "Aktiviti",
      titleHighlight: "Kami",
      items: [
        { img: ribbonImg, caption: "Majlis Potong Reben Rakan Kongsi Modus AI Associates" },
        { img: signingImg, caption: "Majlis Penandatanganan Rakan Kongsi Modus AI Associates Disaksikan oleh Gabenor Pulau Pinang ke-8 Tun Dato' Seri Utama Ahmad Fuzi" },
        { img: uniImg, caption: "Modus AI Associates semakin berkembang dengan kerjasama bersama Universiti dan Sekolah Antarabangsa terkemuka di Malaysia." },
        { img: coursesImg, caption: "Sehingga Jun 2025, 5 kursus AI telah dijalankan dan lebih banyak akan datang." },
        { img: launchImg, caption: "Pelancaran Rasmi Modus AI Associates pada 8 Ogos 2025." },
        { img: southOceanImg, caption: "Majlis Penandatanganan Perkongsian antara Modus AI Associates dan South Ocean Technology Sdn Bhd — CEO Dato' Dr. Tan BN bersama CEO Kelvin Lee, 4 Jun 2026." },
        { img: unitenImg, caption: "Kerjasama Modus AI Associates dengan UNITEN (Universiti Tenaga Nasional) — The Energy University." },
        { img: uulianTotalImg, caption: "GM Xiamen UULIAN melawat Rakan Kongsi MODUS, Total International Associates." },
        { img: uulianTotal2Img, caption: "GM Xiamen UULIAN melawat Rakan Kongsi MODUS, Total International Associates." },
        { img: blnCharityImg, caption: "Penyertaan Modus AI Associates dalam BLN 7th Charity Night." },
      ],
    },
    socials: {
      title: "Sosial",
      titleHighlight: "Kami",
      subtitle: "Berhubung dengan Modus AI Associates di semua platform.",
      followLabel: "Ikuti kami",
      platforms: [
        {
          name: "Facebook",
          handle: "@ModusAIAssociates",
          desc: "Kemas kini, acara & pengumuman",
          url: "https://www.facebook.com/profile.php?id=61572345552403",
          color: "#1877F2",
          colorClass: "blue",
        },
      ],
    },
    contact: {
      title: "Mulakan",
      titleHighlight: "Transformasi Anda",
      desc: "Masa depan AI Malaysia sedang ditulis sekarang. Jangan biarkan pesaing anda tiba dahulu. Hubungi kami hari ini dan kami akan menyediakan program yang dibina mengikut matlamat perniagaan anda.",
      contacts: [
        { icon: Mail, text: "admin@modusaiassociates.com" },
        { icon: Phone, text: "Elaine: 017-3490001" },
        { icon: Phone, text: "Joel: 011-11469065" },
        { icon: MapPin, text: "Kuala Lumpur, Malaysia" },
      ],
      form: {
        namePlaceholder: "Nama anda",
        companyPlaceholder: "Nama syarikat anda",
        emailPlaceholder: "E-mel anda",
        messagePlaceholder: "Beritahu kami tentang keperluan AI perniagaan anda...",
        nameLabel: "Nama",
        companyLabel: "Syarikat",
        emailLabel: "E-mel",
        messageLabel: "Mesej",
        submitText: "Hantar Mesej",
        sendingText: "Menghantar...",
        successTitle: "Mesej Dihantar!",
        successDesc: "Terima kasih kerana menghubungi kami. Pasukan kami akan menghubungi anda tidak lama lagi.",
        errors: {
          nameRequired: "Nama diperlukan",
          emailRequired: "E-mel diperlukan",
          emailInvalid: "Masukkan e-mel yang sah",
          messageRequired: "Mesej diperlukan",
          failed: "Gagal menghantar. Sila cuba lagi.",
          network: "Ralat rangkaian. Sila semak sambungan anda dan cuba lagi.",
        },
      },
    },
  },
  cn: {
    backToHome: "返回首页",
    about: {
      title: "关于", titleHighlight: "我们",
      ribbonCaption: "MODUS AI Associates 剪彩仪式，由槟城州第八任州元首敦拿督斯里乌达玛阿末·富兹·阿都·拉萨（Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak）见证。",
      p1: "MODUS AI Associates 是马来西亚通往中国世界级人工智能生态系统的门户——通过认证的实战培训和真实落地实施，弥合东盟快速增长的人工智能人才缺口。",
      p2Prefix: "我们正式与 ", p2Bold: "中国第一AI培训机构", p2Suffix: " 建立合作——以全球领先的先进技术企业赋能马来西亚商业。",
      p3Prefix: "我们的项目获得 ", p3Bold: "中华人民共和国工业和信息化部（MIIT）", p3Suffix: " 认证——AI认证的黄金标准——确保您的团队符合全球基准，而非仅仅本地标准。",
      p4: "我们专注于真实场景的AI落地应用。没有空洞的理论。每一个培训模块和咨询项目都为从第一天起交付可衡量的投资回报而设计。",
      p4Bold: "真实场景的AI落地应用",
      p5Bold: "我们的使命：",
      p5: " 通过实战、认证的AI执行能力，提升每一家马来西亚企业在世界舞台上的竞争力——由中国成熟的生态系统提供动力。",
      badges: [
        { label: "MIIT 认证", sub: "中华人民共和国工业和信息化部" },
        { label: "中国 AI 生态", sub: "第一培训机构合作伙伴" },
        { label: "2,600 所合作大学", sub: "30万+ 毕业生" },
      ],
    },
    why: {
      title: "为何", titleHighlight: "选择我们",
      points: [
        { accent: "secondary", text: "行业认证的AI培训——AIGC工程师认证全球公认" },
        { accent: "primary", text: "直接对接中国AI人才库——全球最大、最先进" },
        { accent: "secondary", text: "成熟生态：2,600所大学，30万+亚洲认证学员" },
        { accent: "primary", text: "真实商业应用与自动化系统——而非学术理论" },
        { accent: "secondary", text: "强大的政府对接——TVET整合与国家AI政策合规" },
        { accent: "primary", text: "在制造、零售、物流领域已验证3–10倍生产力提升" },
      ],
    },
    services: {
      title: "我们的", titleHighlight: "服务", learnMore: "了解更多",
      items: [
        { icon: BookOpen, title: "AI 电商培训", desc: "掌握专为扩展电商运营而打造的AI工具——从智能商品上架到自动化履约。", tag: "培训" },
        { icon: Award, title: "MIIT AIGC 认证", desc: "由中华人民共和国工业和信息化部（MIIT）颁发的国际认可AI生成内容工程师认证。", tag: "认证" },
        { icon: Briefcase, title: "企业 AI 转型", desc: "战略咨询，将AI融入整个组织——从董事会路线图到一线落地实施。", tag: "咨询" },
        { icon: Users, title: "员工 AI 技能提升", desc: "让现有员工成为AI增强型高效用户。结构化、按角色定制，与公司目标对齐。", tag: "技能提升" },
        { icon: Award, title: "毕业认证", desc: "MIIT毕业生将被纳入世界领先的AI人才库——这是个人价值的权威背书。", tag: "认证" },
      ],
    },
    courses: {
      title: "我们的", titleHighlight: "课程",
      subtitle: "12个MIIT认证的AI专业项目。点击任一课程查看完整摘要、特点与收益。",
      headers: { no: "#", title: "课程名称", features: "核心特点", benefits: "核心收益", duration: "时长", price: "价格", recognition: "认证" },
      featuresLabel: "特点", benefitsLabel: "收益",
      examScheduleLabel: "考试安排", examScheduleValue: "季度——3月、6月、9月、12月的第4个周末",
      investmentLabel: "投资", perPerson: "每人", moreSuffix: "更多",
      items: [
        { no: "01", title: "AI 人力资源经理", summary: "复合型HR管理认证，面向将AI技术应用于人才招聘、培训、绩效管理与HR运营的专业人员。由DeepSeek驱动并经MIIT认证。", features: ["DeepSeek驱动的HR工作流", "AI辅助文档与招聘", "人才管理系统", "AI绩效辅导", "集团公司岗位管理"], benefits: ["HR生产力提升5–10倍", "全球标准MIIT资质", "AI驱动人才管道", "自动化合规文档", "引领数字HR转型"], duration: "29小时35分", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "02", title: "职场AI应用专家", summary: "面向核心办公场景的AI工具熟练度认证，包括文档撰写、PPT设计、数据分析、客户服务和直播运营。", features: ["DeepSeek办公自动化", "AI驱动的PPT与视觉设计", "职场数据分析", "客户服务AI集成", "企业内容与营销AI"], benefits: ["大幅减少重复任务", "更快产出专业成果", "跨职能AI流利度", "加速职业发展的资质", "适用于所有行业"], duration: "暂未开放", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "03", title: "AI 财务经理", summary: "跨学科认证，将财务专长与AI技术结合，推动财务数字化转型，包括预算、风险控制、税务合规和智能审计。", features: ["AI驱动的预算与预测", "智能采购系统", "税务合规自动化", "AI审计与风险穿透", "DeepSeek财务数据清洗"], benefits: ["更明智的财务决策", "自动化合规工作流", "降低财务风险", "端到端成本可视化", "面向未来的财务领导力"], duration: "暂未开放", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "04", title: "AI 心理咨询顾问", summary: "结合AI技术与心理学理论的专业认证，提供数字化心理健康支持服务，包括AI辅助治疗、伦理框架和基于智能体的咨询工具。", features: ["AI咨询工具集成", "治疗中AI的伦理使用", "AI表达性艺术治疗", "基于智能体的咨询系统", "面向咨询师的AI知识库"], benefits: ["数字化扩展治疗覆盖", "现代循证实践", "伦理合规的AI使用", "构建专属咨询智能体", "跨境认可资质"], duration: "暂未开放", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "05", title: "人工智能训练师", summary: "AI产品应用能力认证，涵盖数据管理、算法配置、大模型原理与提示工程——使持证者具备培训他人AI的资格。", features: ["DeepSeek提示工程精通", "大模型原理（50分钟）", "AIGC核心技能", "算法与数据配置", "MIIT中级AI认证"], benefits: ["成为认证AI训练师", "培训团队与组织", "深度理解AI模型", "高需求职业定位", "MIIT与IITC双认证"], duration: "25小时57分", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "06", title: "智能体开发师", summary: "使用Coze、FastGPT、Dify等平台构建与优化AI智能体的专业认证。涵盖企业智能体部署、RAG设计与知识库构建。", features: ["Coze与Dify智能体开发", "RAG设计与知识库", "AI智能体训练与优化", "企业多平台部署", "本地化智能体构建"], benefits: ["构建定制企业AI智能体", "自动化复杂工作流", "AI工程领域的竞争优势", "部署生产级智能体", "新兴高价值技能"], duration: "43小时35分", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "07", title: "AI 产品经理", summary: "全生命周期AI产品管理认证，涵盖技术评估、用户研究、商业价值创造与职业发展——为领导AI产品的PM设计。", features: ["AI产品全生命周期管理", "DeepSeek用户洞察", "AI外呼平台设计", "简历与面试AI准备", "OpenClaw企业应用"], benefits: ["领导AI产品团队", "市场就绪的PM资质", "创造商业AI价值", "职业晋升工具", "MIIT与IITC认可"], duration: "48小时39分", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "08", title: "AI 数据分析师", summary: "面向使用AI深度分析企业数据并提供可执行决策洞察的专业人员的认证。涵盖Python、MySQL、AI数据建模与预测分析。", features: ["Python与MySQL数据基础", "AI数据建模与挖掘", "预测分析管道", "商业智能仪表板", "DeepSeek数据分析规则"], benefits: ["数据驱动的决策权威", "自动化复杂报表", "预测性业务洞察", "跨行业适用性", "高需求分析资质"], duration: "27小时10分", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "09", title: "AI 营销师", summary: "使用AI开发和优化营销策略的专业认证——涵盖AIGC短视频、AI+SEO、内容创作、社群管理与客户获取。", features: ["AIGC短视频营销", "AI+SEO内容策略", "社群与社交AI工具", "AI驱动的广告与文案", "Seedance 2.0视频制作"], benefits: ["精准客户获取", "规模化自动内容", "可衡量的活动ROI", "现代数字营销优势", "定义职业的AI资质"], duration: "27小时10分", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "10", title: "AIGC 应用工程师", summary: "证明AIGC工具实施、场景化解决方案设计与业务集成精通能力的权威资质——面向使用大模型构建应用的专业人员。", features: ["大模型应用开发", "AIGC工具实施", "场景化解决方案设计", "业务集成能力", "从入门到专家的学习路径"], benefits: ["权威专业资质", "AI技术能力证明", "构建复杂AI应用", "业务就绪的AI工程", "各行业认可"], duration: "12小时35分", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "11", title: "OpenClaw 开发工程师", summary: "面向智能体开发的核心技能认证，使用OpenClaw平台引领AI应用工程的技术革命。", features: ["智能体核心开发", "AI应用工程", "OpenClaw平台精通", "企业智能体集成", "新兴AI技术栈"], benefits: ["引领AI开发革命", "前沿工程技能", "高价值细分资质", "企业部署能力", "面向未来的职业道路"], duration: "12小时17分", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "12", title: "OpenClaw 职场应用专家", summary: "成为AI时代的'职场智能体指挥官'。本认证为专业人员配备高效AI办公工具、智能工作流与企业自动化能力。", features: ["高效AI办公工作流", "智能职场自动化", "OpenClaw专家培训", "企业AI指挥技能", "AI时代生产力系统"], benefits: ["用AI重塑日常工作", "成为不可或缺的人才", "引领团队AI采用", "即时生产力提升", "职场领导力资质"], duration: "15小时25分", price: "RM 6,000", recognition: "MIIT / IITC" },
      ],
    },
    activities: {
      title: "我们的", titleHighlight: "活动",
      items: [
        { img: ribbonImg, caption: "Modus AI Associates 合作伙伴剪彩仪式" },
        { img: signingImg, caption: "Modus AI Associates 合作伙伴签约——由槟城第八任州元首敦拿督斯里乌达玛阿末弗兹见证" },
        { img: uniImg, caption: "Modus AI Associates 与马来西亚顶尖大学及国际学校的合作正在不断扩展。" },
        { img: coursesImg, caption: "截至2025年6月，已开展5期AI课程，更多即将推出。" },
        { img: launchImg, caption: "Modus AI Associates 于2025年8月8日正式启动。" },
        { img: southOceanImg, caption: "Modus AI Associates 与 South Ocean Technology Sdn Bhd 合作签约——CEO Dato' Dr. Tan BN 与 CEO Kelvin Lee，2026年6月4日。" },
        { img: unitenImg, caption: "Modus AI Associates 与 UNITEN（马来西亚国能大学）——能源大学——合作。" },
        { img: uulianTotalImg, caption: "厦门 UULIAN 总经理拜访 MODUS 合作伙伴 Total International Associates。" },
        { img: uulianTotal2Img, caption: "厦门 UULIAN 总经理拜访 MODUS 合作伙伴 Total International Associates。" },
        { img: blnCharityImg, caption: "Modus AI Associates 参与 BLN 第七届慈善之夜。" },
      ],
    },
    socials: {
      title: "我们的", titleHighlight: "社交媒体",
      subtitle: "在所有平台与 Modus AI Associates 保持联系。", followLabel: "关注我们",
      platforms: [
        { name: "Facebook", handle: "@ModusAIAssociates", desc: "更新、活动与公告", url: "https://www.facebook.com/profile.php?id=61572345552403", color: "#1877F2", colorClass: "blue" },
      ],
    },
    contact: {
      title: "开启您的", titleHighlight: "转型之旅",
      desc: "马来西亚的AI未来正在被书写。别让竞争对手抢先一步。今天就联系我们，我们将为您提供围绕业务目标量身定制的项目。",
      contacts: [
        { icon: Mail, text: "admin@modusaiassociates.com" },
        { icon: Phone, text: "Elaine: 017-3490001" },
        { icon: Phone, text: "Joel: 011-11469065" },
        { icon: MapPin, text: "Kuala Lumpur, Malaysia" },
      ],
      form: {
        namePlaceholder: "您的姓名", companyPlaceholder: "您的公司名称", emailPlaceholder: "您的邮箱", messagePlaceholder: "请告诉我们您的AI业务需求……",
        nameLabel: "姓名", companyLabel: "公司", emailLabel: "邮箱", messageLabel: "留言",
        submitText: "发送留言", sendingText: "发送中……", successTitle: "留言已发送！",
        successDesc: "感谢您的联系。我们的团队将很快与您联系。",
        errors: { nameRequired: "姓名为必填项", emailRequired: "邮箱为必填项", emailInvalid: "请输入有效的邮箱", messageRequired: "留言为必填项", failed: "发送失败。请重试。", network: "网络错误。请检查连接并重试。" },
      },
    },
  },
  id: {
    backToHome: "Kembali ke Beranda",
    about: {
      title: "Tentang", titleHighlight: "Kami",
      ribbonCaption: "Upacara pemotongan pita MODUS AI Associates yang disaksikan oleh Gubernur ke-8 Pulau Pinang, Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak.",
      p1: "MODUS AI Associates adalah pintu gerbang Malaysia menuju ekosistem AI kelas dunia milik Tiongkok — menjembatani kesenjangan talenta AI ASEAN yang berkembang pesat melalui pelatihan tersertifikasi yang praktis dan implementasi nyata.",
      p2Prefix: "Kami secara resmi bermitra dengan ", p2Bold: "Lembaga Pelatihan AI No.1 Tiongkok", p2Suffix: " — memberdayakan bisnis Malaysia dengan perusahaan teknologi paling maju di dunia.",
      p3Prefix: "Program kami disertifikasi oleh ", p3Bold: "Kementerian Industri dan Teknologi Informasi Republik Rakyat Tiongkok (MIIT)", p3Suffix: " — standar emas dalam sertifikasi AI — memastikan tenaga kerja Anda memenuhi tolok ukur global, bukan hanya lokal.",
      p4: "Kami fokus secara eksklusif pada penerapan AI dunia nyata. Tanpa teori kosong. Setiap modul pelatihan dan setiap penugasan konsultasi yang kami bangun dirancang untuk memberikan ROI terukur sejak hari pertama.",
      p4Bold: "penerapan AI dunia nyata",
      p5Bold: "Misi kami:",
      p5: " Mengangkat setiap perusahaan Malaysia untuk bersaing di panggung dunia menggunakan eksekusi AI tersertifikasi dan terapan — didukung ekosistem terbukti dari Tiongkok.",
      badges: [
        { label: "Tersertifikasi MIIT", sub: "Kementerian Industri dan Teknologi Informasi Republik Rakyat Tiongkok" },
        { label: "Ekosistem AI Tiongkok", sub: "Mitra Lembaga Pelatihan No.1" },
        { label: "2.600 Universitas Mitra", sub: "300.000+ Lulusan" },
      ],
    },
    why: {
      title: "Mengapa", titleHighlight: "Memilih Kami",
      points: [
        { accent: "secondary", text: "Pelatihan AI tersertifikasi industri — Sertifikasi AIGC Engineer diakui secara global" },
        { accent: "primary", text: "Akses langsung ke Talent Pool AI Tiongkok — yang terbesar dan paling maju di dunia" },
        { accent: "secondary", text: "Ekosistem terbukti: 2.600 universitas, 300.000+ siswa tersertifikasi di Asia" },
        { accent: "primary", text: "Penerapan bisnis nyata dan sistem otomatisasi — bukan teori akademis" },
        { accent: "secondary", text: "Penyelarasan pemerintah yang kuat — integrasi TVET dan kepatuhan kebijakan AI nasional" },
        { accent: "primary", text: "Peningkatan produktivitas 3–10x terbukti di sektor manufaktur, ritel, dan logistik" },
      ],
    },
    services: {
      title: "Layanan", titleHighlight: "Kami", learnMore: "Pelajari lebih lanjut",
      items: [
        { icon: BookOpen, title: "Pelatihan AI E-Commerce", desc: "Kuasai alat AI yang dibangun khusus untuk menskalakan operasi marketplace — dari pendaftaran produk cerdas hingga pemenuhan otomatis.", tag: "Pelatihan" },
        { icon: Award, title: "Sertifikasi AIGC MIIT", desc: "Sertifikasi AI Generative Content Engineer yang diakui internasional dari Kementerian Industri dan Teknologi Informasi Republik Rakyat Tiongkok (MIIT).", tag: "Sertifikasi" },
        { icon: Briefcase, title: "Transformasi AI Korporat", desc: "Konsultasi strategis untuk mengintegrasikan AI ke seluruh organisasi Anda — dari peta jalan tingkat dewan hingga implementasi lapangan.", tag: "Konsultasi" },
        { icon: Users, title: "Peningkatan Skill AI Tenaga Kerja", desc: "Ubah karyawan Anda saat ini menjadi power user yang ditingkatkan AI. Program terstruktur dan spesifik peran yang selaras dengan tujuan perusahaan Anda.", tag: "Peningkatan Skill" },
        { icon: Award, title: "Sertifikasi Kelulusan", desc: "Lulusan Kementerian Industri dan Teknologi Informasi Republik Rakyat Tiongkok (MIIT) akan terdaftar dalam talent pool AI terdepan dunia — ini adalah pengesahan nilai pribadi.", tag: "Sertifikasi" },
      ],
    },
    courses: {
      title: "Kursus", titleHighlight: "Kami",
      subtitle: "12 program AI profesional tersertifikasi MIIT. Klik kursus mana pun untuk melihat ringkasan, fitur, dan manfaat lengkapnya.",
      headers: { no: "#", title: "Judul Kursus", features: "Fitur Utama", benefits: "Manfaat Utama", duration: "Durasi", price: "Harga", recognition: "Pengakuan" },
      featuresLabel: "Fitur", benefitsLabel: "Manfaat",
      examScheduleLabel: "Jadwal Ujian", examScheduleValue: "Triwulanan — akhir pekan ke-4 di bulan Mar, Jun, Sep & Des",
      investmentLabel: "Investasi", perPerson: "per orang", moreSuffix: "lagi",
      items: [
        { no: "01", title: "Manajer Sumber Daya Manusia AI", summary: "Sertifikasi manajemen HR komposit untuk profesional yang menerapkan teknologi AI pada akuisisi talenta, pelatihan, manajemen kinerja, dan operasi HR. Didukung DeepSeek dan tersertifikasi MIIT.", features: ["Alur kerja HR berbasis DeepSeek", "Dokumen & rekrutmen berbantuan AI", "Sistem manajemen talenta", "Pembinaan kinerja dengan AI", "Manajemen posisi grup perusahaan"], benefits: ["Peningkatan produktivitas HR 3–10x", "Kredensial standar global MIIT", "Pipeline talenta digerakkan AI", "Dokumentasi kepatuhan otomatis", "Memimpin transformasi HR digital"], duration: "29j 35m", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "02", title: "Spesialis Aplikasi AI untuk Tempat Kerja", summary: "Sertifikasi kemahiran alat AI untuk profesional di skenario kantor inti termasuk pembuatan dokumen, desain PPT, analisis data, layanan pelanggan, dan operasi siaran langsung.", features: ["Otomatisasi kantor DeepSeek", "Desain PPT & visual berbasis AI", "Analisis data tempat kerja", "Integrasi AI layanan pelanggan", "AI konten & pemasaran korporat"], benefits: ["Mengurangi tugas berulang secara drastis", "Hasilkan output profesional lebih cepat", "Kefasihan AI lintas fungsi", "Kredensial pemicu karier", "Berlaku di semua industri"], duration: "Tidak tersedia", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "03", title: "Manajer Keuangan AI", summary: "Sertifikasi interdisipliner yang menggabungkan keahlian keuangan dengan teknologi AI untuk mendorong transformasi digital keuangan, termasuk anggaran, pengendalian risiko, kepatuhan pajak, dan audit cerdas.", features: ["Anggaran & peramalan berbasis AI", "Sistem pengadaan cerdas", "Otomatisasi kepatuhan pajak", "Audit AI & penetrasi risiko", "Pembersihan data keuangan dengan DeepSeek"], benefits: ["Pengambilan keputusan keuangan lebih cerdas", "Alur kerja kepatuhan otomatis", "Pengurangan paparan risiko keuangan", "Visibilitas biaya end-to-end", "Kepemimpinan keuangan tahan masa depan"], duration: "Tidak tersedia", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "04", title: "Konsultan Konseling Psikologi AI", summary: "Sertifikasi profesional yang menggabungkan teknologi AI dengan teori psikologi untuk memberikan layanan dukungan kesehatan mental digital termasuk terapi berbantuan AI, kerangka etika, dan alat konseling berbasis agen.", features: ["Integrasi alat konseling AI", "Penggunaan AI etis dalam terapi", "Terapi seni ekspresif dengan AI", "Sistem konsultasi berbasis agen", "Basis pengetahuan AI untuk konselor"], benefits: ["Memperluas jangkauan terapi secara digital", "Praktik berbasis bukti modern", "Penggunaan AI etis & patuh", "Bangun agen konseling Anda sendiri", "Kredensial lintas batas yang diakui"], duration: "Tidak tersedia", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "05", title: "Pelatih Kecerdasan Buatan", summary: "Sertifikasi kemampuan aplikasi produk AI mencakup manajemen data, konfigurasi algoritma, prinsip model besar, dan teknik prompting — memenuhi syarat pemegangnya untuk melatih orang lain dalam AI.", features: ["Penguasaan prompting DeepSeek", "Prinsip model besar (50 menit)", "Keterampilan esensial AIGC", "Konfigurasi algoritma & data", "Sertifikasi AI menengah MIIT"], benefits: ["Memenuhi syarat sebagai pelatih AI tersertifikasi", "Latih tim dan organisasi", "Pemahaman mendalam model AI", "Posisi karier permintaan tinggi", "Pengakuan ganda MIIT & IITC"], duration: "25j 57m", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "06", title: "Agent Builder", summary: "Sertifikasi profesional dalam membangun dan mengoptimalkan agen AI menggunakan platform termasuk Coze, FastGPT, dan Dify. Mencakup penyebaran agen perusahaan, desain RAG, dan konstruksi basis pengetahuan.", features: ["Pengembangan agen Coze & Dify", "Desain RAG & basis pengetahuan", "Pelatihan & optimasi agen AI", "Penyebaran multi-platform perusahaan", "Konstruksi agen terlokalisasi"], benefits: ["Bangun agen AI perusahaan kustom", "Otomatisasi alur kerja kompleks", "Keunggulan kompetitif dalam rekayasa AI", "Sebarkan agen siap produksi", "Set keterampilan baru bernilai tinggi"], duration: "43j 35m", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "07", title: "Manajer Produk AI", summary: "Sertifikasi manajemen produk AI siklus hidup penuh mencakup evaluasi teknologi, riset pengguna, penciptaan nilai komersial, dan pengembangan karier — dirancang untuk PM yang memimpin produk berbasis AI.", features: ["Manajemen siklus hidup produk AI", "Wawasan pengguna dengan DeepSeek", "Desain platform panggilan keluar AI", "Persiapan resume & wawancara AI", "Aplikasi perusahaan OpenClaw"], benefits: ["Pimpin tim produk AI", "Kredensial PM siap pasar", "Penciptaan nilai AI komersial", "Alat kemajuan karier", "Diakui oleh MIIT & IITC"], duration: "48j 39m", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "08", title: "Analis Data AI", summary: "Sertifikasi untuk profesional yang menggunakan AI untuk menganalisis data perusahaan secara mendalam dan memberikan wawasan pengambilan keputusan yang dapat ditindaklanjuti. Mencakup Python, MySQL, pemodelan data AI, dan analitik prediktif.", features: ["Dasar data Python & MySQL", "Pemodelan & penambangan data AI", "Pipeline analitik prediktif", "Dashboard kecerdasan bisnis", "Aturan analisis data DeepSeek"], benefits: ["Otoritas keputusan berbasis data", "Otomatisasi pelaporan kompleks", "Wawasan bisnis prediktif", "Dapat diterapkan lintas industri", "Kredensial analitik permintaan tinggi"], duration: "27j 10m", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "09", title: "Pemasar AI", summary: "Sertifikasi profesional dalam mengembangkan dan mengoptimalkan strategi pemasaran menggunakan AI — mencakup video pendek AIGC, AI+SEO, pembuatan konten, manajemen komunitas, dan akuisisi pelanggan.", features: ["Pemasaran video pendek AIGC", "Strategi konten AI+SEO", "Alat AI komunitas & sosial", "Pembuatan iklan & copy berbasis AI", "Produksi video Seedance 2.0"], benefits: ["Akuisisi pelanggan presisi", "Konten otomatis dalam skala", "ROI kampanye yang terukur", "Keunggulan pemasaran digital modern", "Kredensial AI penentu karier"], duration: "27j 10m", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "10", title: "Insinyur Aplikasi AIGC", summary: "Kredensial otoritatif yang menunjukkan penguasaan implementasi alat AIGC, desain solusi berbasis skenario, dan integrasi bisnis — untuk profesional yang membangun dengan model AI besar.", features: ["Pengembangan aplikasi model besar", "Implementasi alat AIGC", "Desain solusi berbasis skenario", "Kemampuan integrasi bisnis", "Jalur belajar pemula-ke-ahli"], benefits: ["Kredensial profesional otoritatif", "Bukti kemahiran teknis AI", "Bangun aplikasi AI kompleks", "Rekayasa AI siap bisnis", "Dihargai di semua sektor"], duration: "12j 35m", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "11", title: "Insinyur Pengembangan OpenClaw", summary: "Sertifikasi keterampilan inti untuk pengembangan agen cerdas, memimpin revolusi teknologi dalam rekayasa aplikasi AI menggunakan platform OpenClaw.", features: ["Pengembangan inti agen cerdas", "Rekayasa aplikasi AI", "Penguasaan platform OpenClaw", "Integrasi agen perusahaan", "Tumpukan teknologi AI baru"], benefits: ["Pimpin revolusi pengembangan AI", "Keterampilan rekayasa mutakhir", "Kredensial niche bernilai tinggi", "Kemampuan penyebaran perusahaan", "Jalur karier tahan masa depan"], duration: "12j 17m", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "12", title: "Spesialis Aplikasi Tempat Kerja OpenClaw", summary: "Jadilah 'Komandan Agen Cerdas Tempat Kerja' di era AI. Sertifikasi ini melengkapi profesional dengan alat kantor AI berefisiensi tinggi, alur kerja cerdas, dan kemampuan otomatisasi perusahaan.", features: ["Alur kerja kantor AI berefisiensi tinggi", "Otomatisasi tempat kerja cerdas", "Pelatihan spesialis OpenClaw", "Keterampilan komando AI perusahaan", "Sistem produktivitas era AI"], benefits: ["Transformasi pekerjaan harian dengan AI", "Jadilah tak tergantikan", "Pimpin adopsi AI di tim Anda", "Peningkatan produktivitas instan", "Kredensial kepemimpinan tempat kerja"], duration: "15j 25m", price: "RM 6,000", recognition: "MIIT / IITC" },
      ],
    },
    activities: {
      title: "Aktivitas", titleHighlight: "Kami",
      items: [
        { img: ribbonImg, caption: "Upacara Pemotongan Pita Mitra Modus AI Associates" },
        { img: signingImg, caption: "Penandatanganan Mitra Modus AI Associates Disaksikan oleh Gubernur Penang ke-8 Tun Dato' Seri Utama Ahmad Fuzi" },
        { img: uniImg, caption: "Modus AI Associates terus berkembang dengan kerja sama bersama Universitas dan Sekolah Internasional terkemuka di Malaysia." },
        { img: coursesImg, caption: "Hingga Juni 2025, 5 kursus AI telah dilaksanakan dan masih banyak lagi yang akan datang." },
        { img: launchImg, caption: "Peluncuran Resmi Modus AI Associates pada 8 Agustus 2025." },
        { img: southOceanImg, caption: "Penandatanganan kemitraan Modus AI Associates dan South Ocean Technology Sdn Bhd — CEO Dato' Dr. Tan BN dengan CEO Kelvin Lee, 4 Juni 2026." },
        { img: unitenImg, caption: "Kolaborasi Modus AI Associates dengan UNITEN (Universiti Tenaga Nasional) — The Energy University." },
        { img: uulianTotalImg, caption: "GM Xiamen UULIAN mengunjungi Mitra MODUS, Total International Associates." },
        { img: uulianTotal2Img, caption: "GM Xiamen UULIAN mengunjungi Mitra MODUS, Total International Associates." },
        { img: blnCharityImg, caption: "Partisipasi Modus AI Associates dalam BLN 7th Charity Night." },
      ],
    },
    socials: {
      title: "Media", titleHighlight: "Sosial",
      subtitle: "Terhubung dengan Modus AI Associates di semua platform.", followLabel: "Ikuti kami",
      platforms: [
        { name: "Facebook", handle: "@ModusAIAssociates", desc: "Pembaruan, acara & pengumuman", url: "https://www.facebook.com/profile.php?id=61572345552403", color: "#1877F2", colorClass: "blue" },
      ],
    },
    contact: {
      title: "Mulai", titleHighlight: "Transformasi Anda",
      desc: "Masa depan AI Malaysia sedang ditulis sekarang. Jangan biarkan pesaing Anda lebih dulu. Hubungi kami hari ini dan kami akan menyediakan program yang dirancang seputar tujuan bisnis Anda.",
      contacts: [
        { icon: Mail, text: "admin@modusaiassociates.com" },
        { icon: Phone, text: "Elaine: 017-3490001" },
        { icon: Phone, text: "Joel: 011-11469065" },
        { icon: MapPin, text: "Kuala Lumpur, Malaysia" },
      ],
      form: {
        namePlaceholder: "Nama Anda", companyPlaceholder: "Nama perusahaan Anda", emailPlaceholder: "Email Anda", messagePlaceholder: "Beritahu kami tentang kebutuhan AI bisnis Anda...",
        nameLabel: "Nama", companyLabel: "Perusahaan", emailLabel: "Email", messageLabel: "Pesan",
        submitText: "Kirim Pesan", sendingText: "Mengirim...", successTitle: "Pesan Terkirim!",
        successDesc: "Terima kasih telah menghubungi kami. Tim kami akan segera menghubungi Anda.",
        errors: { nameRequired: "Nama wajib diisi", emailRequired: "Email wajib diisi", emailInvalid: "Masukkan email yang valid", messageRequired: "Pesan wajib diisi", failed: "Gagal mengirim. Silakan coba lagi.", network: "Kesalahan jaringan. Periksa koneksi Anda dan coba lagi." },
      },
    },
  },
  vn: {
    backToHome: "Về Trang Chủ",
    about: {
      title: "Về", titleHighlight: "Chúng Tôi",
      ribbonCaption: "Lễ cắt băng khánh thành MODUS AI Associates với sự chứng kiến của Thống đốc Penang thứ 8, Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak.",
      p1: "MODUS AI Associates là cánh cửa của Malaysia tới hệ sinh thái AI đẳng cấp thế giới của Trung Quốc — kết nối khoảng cách nhân tài AI đang tăng nhanh tại ASEAN thông qua đào tạo thực tiễn được chứng nhận và triển khai trong thực tế.",
      p2Prefix: "Chúng tôi chính thức hợp tác với ", p2Bold: "Học Viện Đào Tạo AI Số 1 Trung Quốc", p2Suffix: " — tiếp sức cho doanh nghiệp Malaysia bằng các công ty công nghệ tiên tiến hàng đầu thế giới.",
      p3Prefix: "Các chương trình của chúng tôi được chứng nhận bởi ", p3Bold: "Bộ Công Nghiệp và Công Nghệ Thông Tin Cộng Hòa Nhân Dân Trung Hoa (MIIT)", p3Suffix: " — tiêu chuẩn vàng trong chứng nhận AI — đảm bảo lực lượng lao động của bạn đạt chuẩn toàn cầu, không chỉ trong nước.",
      p4: "Chúng tôi tập trung độc quyền vào ứng dụng AI trong thực tế. Không lý thuyết suông. Mỗi mô-đun đào tạo và mỗi dự án tư vấn chúng tôi xây dựng đều được thiết kế để mang lại ROI có thể đo lường ngay từ ngày đầu.",
      p4Bold: "ứng dụng AI trong thực tế",
      p5Bold: "Sứ mệnh của chúng tôi:",
      p5: " Nâng tầm mọi doanh nghiệp Malaysia để cạnh tranh trên đấu trường thế giới bằng việc triển khai AI thực tiễn, được chứng nhận — được hỗ trợ bởi hệ sinh thái đã được chứng minh của Trung Quốc.",
      badges: [
        { label: "Chứng Nhận MIIT", sub: "Bộ Công Nghiệp và Công Nghệ Thông Tin Cộng Hòa Nhân Dân Trung Hoa" },
        { label: "Hệ Sinh Thái AI Trung Quốc", sub: "Đối Tác Học Viện Đào Tạo Số 1" },
        { label: "2.600 Trường Đại Học Đối Tác", sub: "300.000+ Sinh Viên Tốt Nghiệp" },
      ],
    },
    why: {
      title: "Tại Sao", titleHighlight: "Chọn Chúng Tôi",
      points: [
        { accent: "secondary", text: "Đào tạo AI được chứng nhận bởi ngành — Chứng chỉ AIGC Engineer được công nhận toàn cầu" },
        { accent: "primary", text: "Truy cập trực tiếp Nguồn Nhân Tài AI Trung Quốc — lớn nhất và tiên tiến nhất thế giới" },
        { accent: "secondary", text: "Hệ sinh thái đã chứng minh: 2.600 trường đại học, 300.000+ học viên có chứng chỉ trên toàn châu Á" },
        { accent: "primary", text: "Ứng dụng kinh doanh thực tế và hệ thống tự động hóa — không phải lý thuyết học thuật" },
        { accent: "secondary", text: "Liên kết chặt chẽ với chính phủ — tích hợp TVET và tuân thủ chính sách AI quốc gia" },
        { accent: "primary", text: "Cải thiện năng suất 3–10 lần đã được chứng minh trong sản xuất, bán lẻ và logistics" },
      ],
    },
    services: {
      title: "Dịch Vụ", titleHighlight: "Của Chúng Tôi", learnMore: "Tìm hiểu thêm",
      items: [
        { icon: BookOpen, title: "Đào Tạo AI Thương Mại Điện Tử", desc: "Làm chủ các công cụ AI được xây dựng để mở rộng hoạt động marketplace — từ niêm yết sản phẩm thông minh đến hoàn tất đơn hàng tự động.", tag: "Đào Tạo" },
        { icon: Award, title: "Chứng Nhận AIGC MIIT", desc: "Chứng nhận Kỹ Sư AI Generative Content được công nhận quốc tế từ Bộ Công Nghiệp và Công Nghệ Thông Tin Cộng Hòa Nhân Dân Trung Hoa (MIIT).", tag: "Chứng Nhận" },
        { icon: Briefcase, title: "Chuyển Đổi AI Doanh Nghiệp", desc: "Tư vấn chiến lược để tích hợp AI trên toàn tổ chức — từ lộ trình cấp hội đồng đến triển khai cấp nhân viên.", tag: "Tư Vấn" },
        { icon: Users, title: "Nâng Cao Kỹ Năng AI cho Nhân Viên", desc: "Biến nhân viên hiện tại thành người dùng quyền lực được AI hỗ trợ. Các chương trình có cấu trúc, chuyên biệt theo vai trò, phù hợp với mục tiêu công ty bạn.", tag: "Nâng Cao Kỹ Năng" },
        { icon: Award, title: "Chứng Nhận Tốt Nghiệp", desc: "Sinh viên tốt nghiệp Bộ Công Nghiệp và Công Nghệ Thông Tin Cộng Hòa Nhân Dân Trung Hoa (MIIT) sẽ được liệt kê trong nguồn nhân tài AI hàng đầu thế giới — đây là sự xác nhận giá trị cá nhân.", tag: "Chứng Nhận" },
      ],
    },
    courses: {
      title: "Khóa Học", titleHighlight: "Của Chúng Tôi",
      subtitle: "12 chương trình AI chuyên nghiệp được MIIT chứng nhận. Nhấp vào bất kỳ khóa học nào để xem tóm tắt, tính năng và lợi ích đầy đủ.",
      headers: { no: "#", title: "Tên Khóa Học", features: "Tính Năng Chính", benefits: "Lợi Ích Cốt Lõi", duration: "Thời Lượng", price: "Giá", recognition: "Công Nhận" },
      featuresLabel: "Tính Năng", benefitsLabel: "Lợi Ích",
      examScheduleLabel: "Lịch Thi", examScheduleValue: "Hàng quý — cuối tuần thứ 4 của tháng 3, 6, 9 & 12",
      investmentLabel: "Đầu Tư", perPerson: "mỗi người", moreSuffix: "thêm",
      items: [
        { no: "01", title: "Quản Lý Nhân Sự AI", summary: "Chứng nhận quản lý HR tổng hợp cho các chuyên gia áp dụng công nghệ AI vào tuyển dụng nhân tài, đào tạo, quản lý hiệu suất và vận hành HR. Được hỗ trợ bởi DeepSeek và chứng nhận MIIT.", features: ["Quy trình HR sử dụng DeepSeek", "Tài liệu & tuyển dụng hỗ trợ AI", "Hệ thống quản lý nhân tài", "Huấn luyện hiệu suất với AI", "Quản lý vị trí công ty tập đoàn"], benefits: ["Tăng năng suất HR 5–10 lần", "Chứng chỉ MIIT chuẩn toàn cầu", "Đường ống nhân tài do AI dẫn dắt", "Tài liệu tuân thủ tự động", "Dẫn dắt chuyển đổi HR số"], duration: "29g 35p", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "02", title: "Chuyên Gia Ứng Dụng AI cho Nơi Làm Việc", summary: "Chứng nhận thành thạo công cụ AI cho các chuyên gia trên các tình huống văn phòng cốt lõi bao gồm tạo tài liệu, thiết kế PPT, phân tích dữ liệu, dịch vụ khách hàng và vận hành phát trực tiếp.", features: ["Tự động hóa văn phòng DeepSeek", "Thiết kế PPT & hình ảnh bằng AI", "Phân tích dữ liệu nơi làm việc", "Tích hợp AI dịch vụ khách hàng", "AI nội dung & marketing doanh nghiệp"], benefits: ["Giảm đáng kể công việc lặp lại", "Tạo đầu ra chuyên nghiệp nhanh hơn", "Thông thạo AI liên chức năng", "Chứng chỉ tăng tốc sự nghiệp", "Áp dụng cho mọi ngành"], duration: "Chưa có", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "03", title: "Quản Lý Tài Chính AI", summary: "Chứng nhận liên ngành kết hợp chuyên môn tài chính với công nghệ AI để thúc đẩy chuyển đổi số tài chính, bao gồm lập ngân sách, kiểm soát rủi ro, tuân thủ thuế và kiểm toán thông minh.", features: ["Lập ngân sách & dự báo bằng AI", "Hệ thống mua sắm thông minh", "Tự động hóa tuân thủ thuế", "Kiểm toán AI & thâm nhập rủi ro", "Làm sạch dữ liệu tài chính với DeepSeek"], benefits: ["Ra quyết định tài chính thông minh hơn", "Quy trình tuân thủ tự động", "Giảm phơi nhiễm rủi ro tài chính", "Khả năng nhìn thấy chi phí toàn diện", "Lãnh đạo tài chính đón đầu tương lai"], duration: "Chưa có", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "04", title: "Cố Vấn Tư Vấn Tâm Lý AI", summary: "Chứng nhận chuyên nghiệp kết hợp công nghệ AI với lý thuyết tâm lý học để cung cấp dịch vụ hỗ trợ sức khỏe tinh thần kỹ thuật số bao gồm trị liệu hỗ trợ AI, khung đạo đức và công cụ tư vấn dựa trên agent.", features: ["Tích hợp công cụ tư vấn AI", "Sử dụng AI có đạo đức trong trị liệu", "Trị liệu nghệ thuật biểu đạt với AI", "Hệ thống tư vấn dựa trên agent", "Cơ sở kiến thức AI cho cố vấn"], benefits: ["Mở rộng phạm vi trị liệu kỹ thuật số", "Thực hành dựa trên bằng chứng hiện đại", "Sử dụng AI có đạo đức & tuân thủ", "Xây dựng agent tư vấn của riêng bạn", "Chứng chỉ xuyên biên giới được công nhận"], duration: "Chưa có", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "05", title: "Huấn Luyện Viên Trí Tuệ Nhân Tạo", summary: "Chứng nhận khả năng ứng dụng sản phẩm AI bao gồm quản lý dữ liệu, cấu hình thuật toán, nguyên lý mô hình lớn và kỹ thuật prompting — đủ điều kiện để đào tạo người khác về AI.", features: ["Thành thạo prompting DeepSeek", "Nguyên lý mô hình lớn (50 phút)", "Kỹ năng AIGC thiết yếu", "Cấu hình thuật toán & dữ liệu", "Chứng nhận AI trung cấp MIIT"], benefits: ["Đủ điều kiện làm huấn luyện viên AI", "Đào tạo đội nhóm và tổ chức", "Hiểu sâu mô hình AI", "Vị trí nghề nghiệp nhu cầu cao", "Công nhận kép MIIT & IITC"], duration: "25g 57p", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "06", title: "Người Xây Dựng Agent", summary: "Chứng nhận chuyên nghiệp về xây dựng và tối ưu hóa agent AI sử dụng các nền tảng bao gồm Coze, FastGPT và Dify. Bao gồm triển khai agent doanh nghiệp, thiết kế RAG và xây dựng cơ sở kiến thức.", features: ["Phát triển agent Coze & Dify", "Thiết kế RAG & cơ sở kiến thức", "Đào tạo & tối ưu agent AI", "Triển khai đa nền tảng doanh nghiệp", "Xây dựng agent bản địa hóa"], benefits: ["Xây dựng agent AI doanh nghiệp tùy chỉnh", "Tự động hóa quy trình phức tạp", "Lợi thế cạnh tranh trong kỹ thuật AI", "Triển khai agent sẵn sàng sản xuất", "Bộ kỹ năng mới giá trị cao"], duration: "43g 35p", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "07", title: "Quản Lý Sản Phẩm AI", summary: "Chứng nhận quản lý sản phẩm AI toàn vòng đời bao gồm đánh giá công nghệ, nghiên cứu người dùng, tạo giá trị thương mại và phát triển sự nghiệp — được thiết kế cho các PM dẫn dắt sản phẩm AI.", features: ["Quản lý vòng đời sản phẩm AI", "Hiểu biết người dùng với DeepSeek", "Thiết kế nền tảng gọi ra AI", "Chuẩn bị sơ yếu lý lịch & phỏng vấn AI", "Ứng dụng doanh nghiệp OpenClaw"], benefits: ["Dẫn dắt đội nhóm sản phẩm AI", "Chứng chỉ PM sẵn sàng thị trường", "Tạo giá trị AI thương mại", "Công cụ thăng tiến nghề nghiệp", "Được MIIT & IITC công nhận"], duration: "48g 39p", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "08", title: "Phân Tích Viên Dữ Liệu AI", summary: "Chứng nhận cho các chuyên gia sử dụng AI để phân tích sâu dữ liệu doanh nghiệp và cung cấp thông tin chi tiết để ra quyết định khả thi. Bao gồm Python, MySQL, mô hình hóa dữ liệu AI và phân tích dự đoán.", features: ["Nền tảng dữ liệu Python & MySQL", "Mô hình hóa & khai thác dữ liệu AI", "Đường ống phân tích dự đoán", "Bảng điều khiển trí tuệ kinh doanh", "Quy tắc phân tích dữ liệu DeepSeek"], benefits: ["Quyền hạn quyết định dựa trên dữ liệu", "Tự động hóa báo cáo phức tạp", "Hiểu biết kinh doanh dự đoán", "Áp dụng liên ngành", "Chứng chỉ phân tích nhu cầu cao"], duration: "27g 10p", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "09", title: "Nhà Tiếp Thị AI", summary: "Chứng nhận chuyên nghiệp trong việc phát triển và tối ưu hóa các chiến lược tiếp thị bằng AI — bao gồm video ngắn AIGC, AI+SEO, tạo nội dung, quản lý cộng đồng và thu hút khách hàng.", features: ["Tiếp thị video ngắn AIGC", "Chiến lược nội dung AI+SEO", "Công cụ AI cộng đồng & xã hội", "Tạo quảng cáo & văn bản bằng AI", "Sản xuất video Seedance 2.0"], benefits: ["Thu hút khách hàng chính xác", "Nội dung tự động ở quy mô", "ROI chiến dịch có thể đo lường", "Lợi thế tiếp thị số hiện đại", "Chứng chỉ AI định hình sự nghiệp"], duration: "27g 10p", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "10", title: "Kỹ Sư Ứng Dụng AIGC", summary: "Chứng chỉ uy tín thể hiện sự thành thạo trong triển khai công cụ AIGC, thiết kế giải pháp dựa trên kịch bản và tích hợp kinh doanh — dành cho các chuyên gia xây dựng với mô hình AI lớn.", features: ["Phát triển ứng dụng mô hình lớn", "Triển khai công cụ AIGC", "Thiết kế giải pháp dựa trên kịch bản", "Khả năng tích hợp kinh doanh", "Lộ trình học từ tân binh đến chuyên gia"], benefits: ["Chứng chỉ chuyên nghiệp uy tín", "Bằng chứng thành thạo kỹ thuật AI", "Xây dựng các ứng dụng AI phức tạp", "Kỹ thuật AI sẵn sàng kinh doanh", "Có giá trị trên mọi ngành"], duration: "12g 35p", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "11", title: "Kỹ Sư Phát Triển OpenClaw", summary: "Chứng nhận kỹ năng cốt lõi cho phát triển agent thông minh, dẫn đầu cuộc cách mạng công nghệ trong kỹ thuật ứng dụng AI sử dụng nền tảng OpenClaw.", features: ["Phát triển cốt lõi agent thông minh", "Kỹ thuật ứng dụng AI", "Thành thạo nền tảng OpenClaw", "Tích hợp agent doanh nghiệp", "Ngăn xếp công nghệ AI mới nổi"], benefits: ["Dẫn dắt cuộc cách mạng phát triển AI", "Kỹ năng kỹ thuật tiên tiến", "Chứng chỉ ngách giá trị cao", "Khả năng triển khai doanh nghiệp", "Con đường sự nghiệp đón đầu tương lai"], duration: "12g 17p", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "12", title: "Chuyên Gia Ứng Dụng OpenClaw cho Nơi Làm Việc", summary: "Trở thành 'Chỉ Huy Agent Thông Minh Nơi Làm Việc' trong kỷ nguyên AI. Chứng nhận này trang bị cho các chuyên gia công cụ văn phòng AI hiệu suất cao, quy trình thông minh và khả năng tự động hóa doanh nghiệp.", features: ["Quy trình văn phòng AI hiệu suất cao", "Tự động hóa nơi làm việc thông minh", "Đào tạo chuyên gia OpenClaw", "Kỹ năng chỉ huy AI doanh nghiệp", "Hệ thống năng suất kỷ nguyên AI"], benefits: ["Biến đổi công việc hàng ngày bằng AI", "Trở thành không thể thiếu", "Dẫn dắt việc áp dụng AI trong nhóm", "Tăng năng suất ngay lập tức", "Chứng chỉ lãnh đạo nơi làm việc"], duration: "15g 25p", price: "RM 6,000", recognition: "MIIT / IITC" },
      ],
    },
    activities: {
      title: "Hoạt Động", titleHighlight: "Của Chúng Tôi",
      items: [
        { img: ribbonImg, caption: "Lễ Cắt Băng Khánh Thành Đối Tác Modus AI Associates" },
        { img: signingImg, caption: "Lễ Ký Kết Đối Tác Modus AI Associates Có Sự Chứng Kiến của Thống Đốc Penang Đời Thứ 8 Tun Dato' Seri Utama Ahmad Fuzi" },
        { img: uniImg, caption: "Modus AI Associates đang phát triển với sự hợp tác cùng các Trường Đại Học và Trường Quốc Tế xuất sắc tại Malaysia." },
        { img: coursesImg, caption: "Đến tháng 6 năm 2025, đã tiến hành 5 khóa học AI và còn nhiều hơn nữa sẽ đến." },
        { img: launchImg, caption: "Lễ Ra Mắt Chính Thức Modus AI Associates vào ngày 8 tháng 8 năm 2025." },
        { img: southOceanImg, caption: "Lễ ký kết đối tác giữa Modus AI Associates và South Ocean Technology Sdn Bhd — CEO Dato' Dr. Tan BN với CEO Kelvin Lee, ngày 4 tháng 6 năm 2026." },
        { img: unitenImg, caption: "Hợp tác Modus AI Associates với UNITEN (Universiti Tenaga Nasional) — The Energy University." },
        { img: uulianTotalImg, caption: "GM Xiamen UULIAN thăm Đối Tác MODUS, Total International Associates." },
        { img: uulianTotal2Img, caption: "GM Xiamen UULIAN thăm Đối Tác MODUS, Total International Associates." },
        { img: blnCharityImg, caption: "Modus AI Associates tham gia BLN 7th Charity Night." },
      ],
    },
    socials: {
      title: "Mạng Xã Hội", titleHighlight: "Của Chúng Tôi",
      subtitle: "Kết nối với Modus AI Associates trên mọi nền tảng.", followLabel: "Theo dõi chúng tôi",
      platforms: [
        { name: "Facebook", handle: "@ModusAIAssociates", desc: "Cập nhật, sự kiện & thông báo", url: "https://www.facebook.com/profile.php?id=61572345552403", color: "#1877F2", colorClass: "blue" },
      ],
    },
    contact: {
      title: "Bắt Đầu", titleHighlight: "Chuyển Đổi của Bạn",
      desc: "Tương lai AI của Malaysia đang được viết ngay bây giờ. Đừng để đối thủ cạnh tranh đến trước. Hãy liên hệ hôm nay và chúng tôi sẽ cung cấp các chương trình được xây dựng xung quanh mục tiêu kinh doanh của bạn.",
      contacts: [
        { icon: Mail, text: "admin@modusaiassociates.com" },
        { icon: Phone, text: "Elaine: 017-3490001" },
        { icon: Phone, text: "Joel: 011-11469065" },
        { icon: MapPin, text: "Kuala Lumpur, Malaysia" },
      ],
      form: {
        namePlaceholder: "Tên của bạn", companyPlaceholder: "Tên công ty của bạn", emailPlaceholder: "Email của bạn", messagePlaceholder: "Hãy cho chúng tôi biết về nhu cầu AI của doanh nghiệp bạn...",
        nameLabel: "Tên", companyLabel: "Công Ty", emailLabel: "Email", messageLabel: "Tin Nhắn",
        submitText: "Gửi Tin Nhắn", sendingText: "Đang gửi...", successTitle: "Tin Nhắn Đã Gửi!",
        successDesc: "Cảm ơn bạn đã liên hệ. Đội ngũ của chúng tôi sẽ sớm phản hồi.",
        errors: { nameRequired: "Tên là bắt buộc", emailRequired: "Email là bắt buộc", emailInvalid: "Nhập email hợp lệ", messageRequired: "Tin nhắn là bắt buộc", failed: "Gửi không thành công. Vui lòng thử lại.", network: "Lỗi mạng. Vui lòng kiểm tra kết nối và thử lại." },
      },
    },
  },
  ar: {
    backToHome: "العودة إلى الرئيسية",
    about: {
      title: "من", titleHighlight: "نحن",
      ribbonCaption: "حفل قص الشريط لشركة MODUS AI Associates بحضور حاكم بينانغ الثامن، تون داتو سري أوتاما أحمد فوزي عبد الرزاق.",
      p1: "MODUS AI Associates هي بوابة ماليزيا إلى منظومة الذكاء الاصطناعي العالمية في الصين — وتعمل على سد فجوة المواهب المتنامية في مجال الذكاء الاصطناعي في آسيان من خلال التدريب العملي المعتمد والتنفيذ في العالم الحقيقي.",
      p2Prefix: "نحن شركاء رسميون مع ", p2Bold: "مؤسسة التدريب على الذكاء الاصطناعي رقم 1 في الصين", p2Suffix: " — لتمكين الشركات الماليزية بأكبر شركات التكنولوجيا المتقدمة في العالم.",
      p3Prefix: "برامجنا معتمدة من ", p3Bold: "وزارة الصناعة وتكنولوجيا المعلومات في جمهورية الصين الشعبية (MIIT)", p3Suffix: " — المعيار الذهبي في اعتماد الذكاء الاصطناعي — مما يضمن أن قوتك العاملة تلبي المعايير العالمية، وليس المحلية فقط.",
      p4: "نحن نركز حصرياً على تطبيق الذكاء الاصطناعي في العالم الحقيقي. لا نظريات فارغة. كل وحدة تدريبية وكل مشاركة استشارية نبنيها مصممة لتحقيق عائد قابل للقياس من اليوم الأول.",
      p4Bold: "تطبيق الذكاء الاصطناعي في العالم الحقيقي",
      p5Bold: "مهمتنا:",
      p5: " رفع كل شركة ماليزية للتنافس على الساحة العالمية باستخدام تنفيذ الذكاء الاصطناعي المعتمد والتطبيقي — مدعوماً بالنظام البيئي المُثبت في الصين.",
      badges: [
        { label: "معتمد من MIIT", sub: "وزارة الصناعة وتكنولوجيا المعلومات في جمهورية الصين الشعبية" },
        { label: "منظومة الذكاء الاصطناعي الصينية", sub: "شريك مؤسسة التدريب رقم 1" },
        { label: "2,600 جامعة شريكة", sub: "300,000+ خريج" },
      ],
    },
    why: {
      title: "لماذا", titleHighlight: "تختارنا",
      points: [
        { accent: "secondary", text: "تدريب AI معتمد من الصناعة — شهادة مهندس AIGC معترف بها عالمياً" },
        { accent: "primary", text: "وصول مباشر إلى مجمع المواهب الصيني للذكاء الاصطناعي — الأكبر والأكثر تقدماً في العالم" },
        { accent: "secondary", text: "نظام بيئي مُثبت: 2,600 جامعة، 300,000+ طالب معتمد في جميع أنحاء آسيا" },
        { accent: "primary", text: "تطبيق أعمال حقيقي وأنظمة أتمتة — وليس نظرية أكاديمية" },
        { accent: "secondary", text: "محاذاة حكومية قوية — تكامل TVET والامتثال لسياسة الذكاء الاصطناعي الوطنية" },
        { accent: "primary", text: "تحسينات إنتاجية بمقدار 3-10 أضعاف ثبتت في التصنيع والتجزئة واللوجستيات" },
      ],
    },
    services: {
      title: "خدماتنا", titleHighlight: "", learnMore: "اعرف المزيد",
      items: [
        { icon: BookOpen, title: "تدريب AI للتجارة الإلكترونية", desc: "أتقن أدوات الذكاء الاصطناعي المصممة خصيصاً لتوسيع عمليات الأسواق — من قوائم المنتجات الذكية إلى التنفيذ الآلي.", tag: "تدريب" },
        { icon: Award, title: "شهادة AIGC من MIIT", desc: "شهادة مهندس محتوى الذكاء الاصطناعي التوليدي معترف بها دولياً من وزارة الصناعة وتكنولوجيا المعلومات في جمهورية الصين الشعبية (MIIT).", tag: "شهادة" },
        { icon: Briefcase, title: "تحول AI للشركات", desc: "استشارات استراتيجية لدمج الذكاء الاصطناعي عبر مؤسستك بأكملها — من خرائط الطريق على مستوى مجلس الإدارة إلى التنفيذ على المستوى التشغيلي.", tag: "استشارات" },
        { icon: Users, title: "تطوير مهارات AI للقوى العاملة", desc: "حوّل موظفيك الحاليين إلى مستخدمين أقوياء معززين بالذكاء الاصطناعي. برامج منظمة وخاصة بالأدوار تتماشى مع أهداف شركتك.", tag: "تطوير المهارات" },
        { icon: Award, title: "شهادة التخرج", desc: "سيتم إدراج خريجي وزارة الصناعة وتكنولوجيا المعلومات في جمهورية الصين الشعبية (MIIT) في مجمع المواهب الرائد في العالم في مجال الذكاء الاصطناعي — هذا هو تأييد القيمة الشخصية.", tag: "شهادة" },
      ],
    },
    courses: {
      title: "دوراتنا", titleHighlight: "",
      subtitle: "12 برنامجاً مهنياً للذكاء الاصطناعي معتمداً من MIIT. انقر على أي دورة لرؤية الملخص الكامل والميزات والفوائد.",
      headers: { no: "#", title: "عنوان الدورة", features: "الميزات الرئيسية", benefits: "الفوائد الأساسية", duration: "المدة", price: "السعر", recognition: "الاعتراف" },
      featuresLabel: "الميزات", benefitsLabel: "الفوائد",
      examScheduleLabel: "جدول الامتحان", examScheduleValue: "ربع سنوي — عطلة نهاية الأسبوع الرابعة من مارس ويونيو وسبتمبر وديسمبر",
      investmentLabel: "الاستثمار", perPerson: "للشخص", moreSuffix: "أكثر",
      items: [
        { no: "01", title: "مدير الموارد البشرية بالذكاء الاصطناعي", summary: "شهادة إدارة موارد بشرية مركبة للمهنيين الذين يطبقون تقنية الذكاء الاصطناعي على اكتساب المواهب والتدريب وإدارة الأداء وعمليات الموارد البشرية. مدعومة بـ DeepSeek ومعتمدة من MIIT.", features: ["سير عمل HR مدعوم بـ DeepSeek", "المستندات والتوظيف بمساعدة AI", "أنظمة إدارة المواهب", "تدريب الأداء بالذكاء الاصطناعي", "إدارة مناصب شركات المجموعة"], benefits: ["زيادة إنتاجية HR 5–10 أضعاف", "شهادة MIIT بمعايير عالمية", "خط أنابيب المواهب مدفوع بالذكاء الاصطناعي", "توثيق الامتثال الآلي", "قيادة التحول الرقمي للموارد البشرية"], duration: "29س 35د", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "02", title: "أخصائي تطبيقات الذكاء الاصطناعي لمكان العمل", summary: "شهادة كفاءة أدوات الذكاء الاصطناعي للمهنيين عبر سيناريوهات المكتب الأساسية بما في ذلك إنشاء المستندات وتصميم العروض التقديمية وتحليل البيانات وخدمة العملاء وعمليات البث المباشر.", features: ["أتمتة المكتب بـ DeepSeek", "تصميم PPT والعرض المرئي بالذكاء الاصطناعي", "تحليل بيانات مكان العمل", "تكامل AI لخدمة العملاء", "محتوى ومحادثة AI للشركات"], benefits: ["تقليل المهام المتكررة بشكل كبير", "إنتاج مخرجات مهنية أسرع", "طلاقة AI عبر الوظائف", "شهادة معجلة للمسار المهني", "قابلة للتطبيق في جميع الصناعات"], duration: "غير متاح", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "03", title: "مدير مالي بالذكاء الاصطناعي", summary: "شهادة متعددة التخصصات تجمع بين الخبرة المالية وتقنية الذكاء الاصطناعي لدفع التحول الرقمي المالي، بما في ذلك الميزانية ومراقبة المخاطر والامتثال الضريبي والتدقيق الذكي.", features: ["الميزنة والتنبؤ المدفوع بالذكاء الاصطناعي", "أنظمة المشتريات الذكية", "أتمتة الامتثال الضريبي", "تدقيق AI واختراق المخاطر", "تنظيف البيانات المالية بـ DeepSeek"], benefits: ["اتخاذ قرارات مالية أذكى", "سير عمل امتثال آلي", "تقليل التعرض للمخاطر المالية", "رؤية شاملة للتكاليف", "قيادة مالية مستدامة"], duration: "غير متاح", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "04", title: "مستشار الإرشاد النفسي بالذكاء الاصطناعي", summary: "شهادة مهنية تجمع بين تقنية الذكاء الاصطناعي والنظريات النفسية لتقديم خدمات دعم الصحة العقلية الرقمية بما في ذلك العلاج بمساعدة AI وأطر الأخلاق وأدوات الإرشاد القائمة على الوكلاء.", features: ["تكامل أدوات الإرشاد بالذكاء الاصطناعي", "استخدام AI الأخلاقي في العلاج", "العلاج بالفن التعبيري بالذكاء الاصطناعي", "أنظمة استشارة قائمة على الوكلاء", "قاعدة معرفة AI للمستشارين"], benefits: ["توسيع نطاق العلاج رقمياً", "ممارسة حديثة قائمة على الأدلة", "استخدام AI أخلاقي ومتوافق", "بناء وكيل الإرشاد الخاص بك", "شهادة عابرة للحدود معترف بها"], duration: "غير متاح", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "05", title: "مدرب الذكاء الاصطناعي", summary: "شهادة قدرات تطبيق منتجات الذكاء الاصطناعي تغطي إدارة البيانات وتكوين الخوارزميات ومبادئ النموذج الكبير وتقنيات الـ prompting — تؤهل الحاملين لتدريب الآخرين على الذكاء الاصطناعي.", features: ["إتقان prompting لـ DeepSeek", "مبادئ النموذج الكبير (50 دقيقة)", "مهارات AIGC الأساسية", "تكوين الخوارزمية والبيانات", "شهادة AI متوسطة من MIIT"], benefits: ["التأهل كمدرب AI معتمد", "تدريب الفرق والمؤسسات", "فهم عميق لنماذج AI", "موقف وظيفي عالي الطلب", "اعتراف مزدوج من MIIT و IITC"], duration: "25س 57د", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "06", title: "بناء الوكلاء", summary: "شهادة مهنية في بناء وتحسين وكلاء الذكاء الاصطناعي باستخدام منصات بما في ذلك Coze و FastGPT و Dify. تغطي نشر وكلاء المؤسسة وتصميم RAG وبناء قاعدة المعرفة.", features: ["تطوير وكلاء Coze و Dify", "تصميم RAG وقواعد المعرفة", "تدريب وتحسين وكلاء AI", "نشر متعدد المنصات للمؤسسة", "بناء وكلاء محلي"], benefits: ["بناء وكلاء AI مخصصين للمؤسسة", "أتمتة سير العمل المعقد", "ميزة تنافسية في هندسة AI", "نشر وكلاء جاهزين للإنتاج", "مجموعة مهارات ناشئة وعالية القيمة"], duration: "43س 35د", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "07", title: "مدير منتج الذكاء الاصطناعي", summary: "شهادة إدارة منتج AI كاملة دورة الحياة تغطي تقييم التكنولوجيا وأبحاث المستخدم وخلق القيمة التجارية والتطور الوظيفي — مصممة لمديري المنتج الذين يقودون منتجات الذكاء الاصطناعي.", features: ["إدارة دورة حياة منتج AI", "رؤى المستخدم مع DeepSeek", "تصميم منصة المكالمات الصادرة AI", "التحضير للسيرة الذاتية والمقابلة بالذكاء الاصطناعي", "تطبيق المؤسسة OpenClaw"], benefits: ["قيادة فرق منتجات AI", "شهادة PM جاهزة للسوق", "خلق قيمة AI تجارية", "أدوات التقدم الوظيفي", "معترف بها من MIIT و IITC"], duration: "48س 39د", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "08", title: "محلل بيانات الذكاء الاصطناعي", summary: "شهادة للمهنيين الذين يستخدمون AI لتحليل بيانات المؤسسة بعمق وتقديم رؤى قابلة للتنفيذ لاتخاذ القرار. تغطي Python و MySQL ونمذجة بيانات AI والتحليلات التنبؤية.", features: ["أساسيات بيانات Python و MySQL", "نمذجة وتعدين البيانات بالذكاء الاصطناعي", "خطوط أنابيب التحليلات التنبؤية", "لوحات معلومات ذكاء الأعمال", "قواعد تحليل البيانات DeepSeek"], benefits: ["سلطة قرار مبنية على البيانات", "أتمتة التقارير المعقدة", "رؤى الأعمال التنبؤية", "قابلية التطبيق عبر الصناعات", "شهادة تحليلات عالية الطلب"], duration: "27س 10د", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "09", title: "مسوق الذكاء الاصطناعي", summary: "شهادة مهنية في تطوير وتحسين استراتيجيات التسويق باستخدام AI — تغطي فيديو AIGC القصير و AI+SEO وإنشاء المحتوى وإدارة المجتمع واكتساب العملاء.", features: ["تسويق فيديو AIGC قصير", "استراتيجية محتوى AI+SEO", "أدوات AI للمجتمع والاجتماعي", "إنشاء إعلانات ونصوص بالذكاء الاصطناعي", "إنتاج فيديو Seedance 2.0"], benefits: ["اكتساب العملاء بدقة", "محتوى آلي على نطاق واسع", "عائد استثمار حملة قابل للقياس", "ميزة التسويق الرقمي الحديثة", "شهادة AI تحدد المسار المهني"], duration: "27س 10د", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "10", title: "مهندس تطبيقات AIGC", summary: "شهادة موثوقة تظهر إتقان تنفيذ أدوات AIGC وتصميم الحلول القائمة على السيناريو وتكامل الأعمال — للمهنيين الذين يبنون باستخدام نماذج AI كبيرة.", features: ["تطوير تطبيقات النموذج الكبير", "تنفيذ أدوات AIGC", "تصميم حلول قائمة على السيناريو", "قدرات تكامل الأعمال", "مسار التعلم من المبتدئ إلى الخبير"], benefits: ["شهادة مهنية موثوقة", "إثبات الكفاءة التقنية في AI", "بناء تطبيقات AI معقدة", "هندسة AI جاهزة للأعمال", "مقدرة في جميع القطاعات"], duration: "12س 35د", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "11", title: "مهندس تطوير OpenClaw", summary: "شهادة المهارات الأساسية لتطوير الوكلاء الأذكياء، قيادة الثورة التكنولوجية في هندسة تطبيقات AI باستخدام منصة OpenClaw.", features: ["تطوير أساسي للوكيل الذكي", "هندسة تطبيقات AI", "إتقان منصة OpenClaw", "تكامل الوكيل المؤسسي", "مكدس تقنية AI ناشئ"], benefits: ["قيادة ثورة تطوير AI", "مهارات هندسية متطورة", "شهادة متخصصة عالية القيمة", "قدرة نشر المؤسسة", "مسار وظيفي مستدام"], duration: "12س 17د", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "12", title: "أخصائي تطبيقات OpenClaw لمكان العمل", summary: "كن 'قائد الوكيل الذكي في مكان العمل' في عصر الذكاء الاصطناعي. تجهز هذه الشهادة المهنيين بأدوات مكتبية AI عالية الكفاءة وسير عمل ذكي وقدرات أتمتة المؤسسة.", features: ["سير عمل مكتب AI عالي الكفاءة", "أتمتة مكان العمل الذكية", "تدريب أخصائي OpenClaw", "مهارات قيادة AI للمؤسسة", "أنظمة إنتاجية لعصر AI"], benefits: ["تحويل العمل اليومي بالذكاء الاصطناعي", "كن لا غنى عنك في العمل", "قيادة اعتماد AI في فريقك", "مكاسب إنتاجية فورية", "شهادة قيادة في مكان العمل"], duration: "15س 25د", price: "RM 6,000", recognition: "MIIT / IITC" },
      ],
    },
    activities: {
      title: "أنشطتنا", titleHighlight: "",
      items: [
        { img: ribbonImg, caption: "حفل قص الشريط لشركاء Modus AI Associates" },
        { img: signingImg, caption: "توقيع شركاء Modus AI Associates بحضور حاكم بينانج الثامن تون داتو سيري أوتاما أحمد فوزي" },
        { img: uniImg, caption: "تنمو Modus AI Associates بالتعاون مع جامعات ومدارس دولية متميزة في ماليزيا." },
        { img: coursesImg, caption: "حتى يونيو 2025، تم إجراء 5 دورات للذكاء الاصطناعي والمزيد قادم." },
        { img: launchImg, caption: "الإطلاق الرسمي لـ Modus AI Associates في 8 أغسطس 2025." },
        { img: southOceanImg, caption: "توقيع شراكة بين Modus AI Associates و South Ocean Technology Sdn Bhd — الرئيس التنفيذي داتو د. تان BN مع الرئيس التنفيذي كيلفن لي، 4 يونيو 2026." },
        { img: unitenImg, caption: "تعاون Modus AI Associates مع UNITEN (الجامعة الوطنية للطاقة) — جامعة الطاقة." },
        { img: uulianTotalImg, caption: "زيارة المدير العام لـ Xiamen UULIAN لشريك MODUS، Total International Associates." },
        { img: uulianTotal2Img, caption: "زيارة المدير العام لـ Xiamen UULIAN لشريك MODUS، Total International Associates." },
        { img: blnCharityImg, caption: "مشاركة Modus AI Associates في ليلة BLN الخيرية السابعة." },
      ],
    },
    socials: {
      title: "وسائل", titleHighlight: "التواصل",
      subtitle: "تواصل مع Modus AI Associates عبر جميع المنصات.", followLabel: "تابعنا",
      platforms: [
        { name: "Facebook", handle: "@ModusAIAssociates", desc: "التحديثات والفعاليات والإعلانات", url: "https://www.facebook.com/profile.php?id=61572345552403", color: "#1877F2", colorClass: "blue" },
      ],
    },
    contact: {
      title: "ابدأ", titleHighlight: "تحولك",
      desc: "مستقبل الذكاء الاصطناعي في ماليزيا يُكتب الآن. لا تدع منافسيك يصلون إلى هناك أولاً. تواصل اليوم وسنقدم برامج مبنية حول أهداف عملك.",
      contacts: [
        { icon: Mail, text: "admin@modusaiassociates.com" },
        { icon: Phone, text: "Elaine: 017-3490001" },
        { icon: Phone, text: "Joel: 011-11469065" },
        { icon: MapPin, text: "Kuala Lumpur, Malaysia" },
      ],
      form: {
        namePlaceholder: "اسمك", companyPlaceholder: "اسم شركتك", emailPlaceholder: "بريدك الإلكتروني", messagePlaceholder: "أخبرنا عن احتياجات عملك في الذكاء الاصطناعي...",
        nameLabel: "الاسم", companyLabel: "الشركة", emailLabel: "البريد الإلكتروني", messageLabel: "الرسالة",
        submitText: "إرسال الرسالة", sendingText: "جاري الإرسال...", successTitle: "تم إرسال الرسالة!",
        successDesc: "شكراً لتواصلك. سيرد عليك فريقنا قريباً.",
        errors: { nameRequired: "الاسم مطلوب", emailRequired: "البريد الإلكتروني مطلوب", emailInvalid: "أدخل بريداً إلكترونياً صحيحاً", messageRequired: "الرسالة مطلوبة", failed: "فشل الإرسال. يرجى المحاولة مرة أخرى.", network: "خطأ في الشبكة. يرجى التحقق من اتصالك والمحاولة مرة أخرى." },
      },
    },
  },
  th: {
    backToHome: "กลับไปหน้าแรก",
    about: {
      title: "เกี่ยวกับ", titleHighlight: "เรา",
      ribbonCaption: "พิธีตัดริบบิ้นของ MODUS AI Associates ที่มีผู้ว่าราชการรัฐปีนังคนที่ 8 ตุน ดาโต๊ะ ซรี อูตามา อาหมัด ฟูซี อับดุล ราซัค เป็นสักขีพยาน",
      p1: "MODUS AI Associates คือประตูสู่ระบบนิเวศ AI ระดับโลกของจีนสำหรับมาเลเซีย — เชื่อมช่องว่างบุคลากร AI ที่เติบโตอย่างรวดเร็วในอาเซียนผ่านการฝึกอบรมเชิงปฏิบัติที่ได้รับการรับรองและการนำไปใช้จริง",
      p2Prefix: "เราเป็นพันธมิตรอย่างเป็นทางการกับ ", p2Bold: "สถาบันฝึกอบรม AI อันดับ 1 ของจีน", p2Suffix: " — เสริมพลังให้ธุรกิจมาเลเซียด้วยบริษัทเทคโนโลยีขั้นสูงชั้นนำของโลก",
      p3Prefix: "หลักสูตรของเราได้รับการรับรองโดย ", p3Bold: "กระทรวงอุตสาหกรรมและเทคโนโลยีสารสนเทศแห่งสาธารณรัฐประชาชนจีน (MIIT)", p3Suffix: " — มาตรฐานทองคำในการรับรอง AI — เพื่อให้แน่ใจว่าบุคลากรของคุณมีมาตรฐานระดับโลก ไม่ใช่เพียงระดับท้องถิ่น",
      p4: "เรามุ่งเน้นเฉพาะการประยุกต์ใช้ AI ในโลกจริง ไม่มีทฤษฎีลอยๆ ทุกโมดูลการฝึกอบรมและทุกการให้คำปรึกษาที่เราสร้างถูกออกแบบมาเพื่อมอบ ROI ที่วัดได้ตั้งแต่วันแรก",
      p4Bold: "การประยุกต์ใช้ AI ในโลกจริง",
      p5Bold: "พันธกิจของเรา:",
      p5: " ยกระดับทุกบริษัทในมาเลเซียให้แข่งขันบนเวทีโลกด้วยการปฏิบัติ AI ที่ประยุกต์ใช้และได้รับการรับรอง — ขับเคลื่อนโดยระบบนิเวศที่พิสูจน์แล้วของจีน",
      badges: [
        { label: "รับรองโดย MIIT", sub: "กระทรวงอุตสาหกรรมและเทคโนโลยีสารสนเทศแห่งสาธารณรัฐประชาชนจีน" },
        { label: "ระบบนิเวศ AI ของจีน", sub: "พันธมิตรสถาบันฝึกอบรมอันดับ 1" },
        { label: "2,600 มหาวิทยาลัยพันธมิตร", sub: "ผู้สำเร็จการศึกษากว่า 300,000 คน" },
      ],
    },
    why: {
      title: "ทำไมต้อง", titleHighlight: "เลือกเรา",
      points: [
        { accent: "secondary", text: "การฝึกอบรม AI ที่ได้รับการรับรองจากอุตสาหกรรม — ใบรับรองวิศวกร AIGC ที่ได้รับการยอมรับทั่วโลก" },
        { accent: "primary", text: "เข้าถึงแหล่งบุคลากร AI ของจีนโดยตรง — ใหญ่และก้าวหน้าที่สุดในโลก" },
        { accent: "secondary", text: "ระบบนิเวศที่พิสูจน์แล้ว: 2,600 มหาวิทยาลัย, นักศึกษาที่ได้รับการรับรองกว่า 300,000 คนทั่วเอเชีย" },
        { accent: "primary", text: "การประยุกต์ใช้ทางธุรกิจจริงและระบบอัตโนมัติ — ไม่ใช่ทฤษฎีทางวิชาการ" },
        { accent: "secondary", text: "สอดคล้องกับนโยบายรัฐบาลอย่างแข็งแกร่ง — บูรณาการ TVET และนโยบาย AI แห่งชาติ" },
        { accent: "primary", text: "เพิ่มผลิตภาพ 3–10 เท่าที่พิสูจน์แล้วในภาคการผลิต ค้าปลีก และโลจิสติกส์" },
      ],
    },
    services: {
      title: "บริการ", titleHighlight: "ของเรา", learnMore: "เรียนรู้เพิ่มเติม",
      items: [
        { icon: BookOpen, title: "ฝึกอบรม AI สำหรับอีคอมเมิร์ซ", desc: "เชี่ยวชาญเครื่องมือ AI ที่สร้างขึ้นเพื่อขยายการดำเนินการในตลาด — จากรายการสินค้าอัจฉริยะไปจนถึงการจัดการคำสั่งซื้ออัตโนมัติ", tag: "ฝึกอบรม" },
        { icon: Award, title: "การรับรอง MIIT AIGC", desc: "ใบรับรองวิศวกรเนื้อหา AI สร้างสรรค์ที่ได้รับการยอมรับในระดับสากลจากกระทรวงอุตสาหกรรมและเทคโนโลยีสารสนเทศแห่งสาธารณรัฐประชาชนจีน (MIIT)", tag: "ใบรับรอง" },
        { icon: Briefcase, title: "การเปลี่ยนผ่าน AI สำหรับองค์กร", desc: "การให้คำปรึกษาเชิงกลยุทธ์เพื่อบูรณาการ AI ทั่วทั้งองค์กรของคุณ — จากแผนงานระดับคณะกรรมการสู่การนำไปใช้ระดับปฏิบัติการ", tag: "ที่ปรึกษา" },
        { icon: Users, title: "พัฒนาทักษะ AI ของบุคลากร", desc: "เปลี่ยนพนักงานปัจจุบันของคุณให้กลายเป็นผู้ใช้ที่เสริมพลังด้วย AI หลักสูตรเฉพาะบทบาทที่สอดคล้องกับเป้าหมายบริษัทของคุณ", tag: "พัฒนาทักษะ" },
        { icon: Award, title: "ใบรับรองสำเร็จการศึกษา", desc: "ผู้สำเร็จการศึกษาจากกระทรวงอุตสาหกรรมและเทคโนโลยีสารสนเทศแห่งสาธารณรัฐประชาชนจีน (MIIT) จะถูกบรรจุในแหล่งบุคลากร AI ชั้นนำของโลก — นี่คือการรับรองคุณค่าส่วนบุคคล", tag: "ใบรับรอง" },
      ],
    },
    courses: {
      title: "หลักสูตร", titleHighlight: "ของเรา",
      subtitle: "12 หลักสูตรวิชาชีพ AI ที่ได้รับการรับรองจาก MIIT คลิกที่หลักสูตรใดก็ได้เพื่อดูสรุปฉบับเต็ม คุณสมบัติ และประโยชน์",
      headers: { no: "#", title: "ชื่อหลักสูตร", features: "คุณสมบัติหลัก", benefits: "ประโยชน์หลัก", duration: "ระยะเวลา", price: "ราคา", recognition: "การรับรอง" },
      featuresLabel: "คุณสมบัติ", benefitsLabel: "ประโยชน์",
      examScheduleLabel: "ตารางสอบ", examScheduleValue: "รายไตรมาส — สุดสัปดาห์ที่ 4 ของเดือน มี.ค., มิ.ย., ก.ย. และ ธ.ค.",
      investmentLabel: "ค่าลงทุน", perPerson: "ต่อคน", moreSuffix: "เพิ่มเติม",
      items: [
        { no: "01", title: "ผู้จัดการทรัพยากรบุคคล AI", summary: "ใบรับรองการจัดการทรัพยากรบุคคลแบบผสมผสานสำหรับผู้เชี่ยวชาญที่นำเทคโนโลยี AI มาใช้ในการสรรหาบุคลากร การฝึกอบรม การจัดการประสิทธิภาพ และการดำเนินการ HR ขับเคลื่อนโดย DeepSeek และรับรองโดย MIIT", features: ["เวิร์กโฟลว์ HR ขับเคลื่อนด้วย DeepSeek", "เอกสารและการสรรหาด้วย AI", "ระบบจัดการบุคลากร", "การโค้ชประสิทธิภาพด้วย AI", "การจัดการตำแหน่งบริษัทกลุ่ม"], benefits: ["เพิ่มผลิตภาพ HR 3–10 เท่า", "ใบรับรอง MIIT มาตรฐานโลก", "ไปป์ไลน์บุคลากรขับเคลื่อนด้วย AI", "เอกสารปฏิบัติตามอัตโนมัติ", "นำการเปลี่ยนผ่าน HR ดิจิทัล"], duration: "29 ชม. 35 นาที", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "02", title: "ผู้เชี่ยวชาญการประยุกต์ใช้ AI ในที่ทำงาน", summary: "ใบรับรองความเชี่ยวชาญเครื่องมือ AI สำหรับมืออาชีพในสถานการณ์สำนักงานหลัก ได้แก่ การสร้างเอกสาร การออกแบบ PPT การวิเคราะห์ข้อมูล บริการลูกค้า และการดำเนินการสตรีมสด", features: ["ระบบอัตโนมัติสำนักงานด้วย DeepSeek", "PPT และการออกแบบภาพด้วย AI", "การวิเคราะห์ข้อมูลในที่ทำงาน", "บูรณาการ AI บริการลูกค้า", "AI เนื้อหาและการตลาดสำหรับองค์กร"], benefits: ["ลดงานซ้ำซากอย่างมาก", "ผลิตผลงานมืออาชีพได้เร็วขึ้น", "ความคล่องแคล่ว AI ข้ามฟังก์ชัน", "ใบรับรองที่เร่งอาชีพ", "ใช้ได้ในทุกอุตสาหกรรม"], duration: "ไม่มี", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "03", title: "ผู้จัดการการเงิน AI", summary: "ใบรับรองสหวิทยาการที่ผสมผสานความเชี่ยวชาญทางการเงินกับเทคโนโลยี AI เพื่อขับเคลื่อนการเปลี่ยนผ่านการเงินดิจิทัล รวมถึงงบประมาณ การควบคุมความเสี่ยง การปฏิบัติตามภาษี และการตรวจสอบอัจฉริยะ", features: ["งบประมาณและการพยากรณ์ขับเคลื่อนด้วย AI", "ระบบจัดซื้ออัจฉริยะ", "ระบบอัตโนมัติการปฏิบัติตามภาษี", "การตรวจสอบ AI และการเจาะความเสี่ยง", "ทำความสะอาดข้อมูลการเงินด้วย DeepSeek"], benefits: ["การตัดสินใจทางการเงินที่ฉลาดขึ้น", "เวิร์กโฟลว์การปฏิบัติตามอัตโนมัติ", "ลดการเปิดเผยความเสี่ยงทางการเงิน", "มองเห็นต้นทุนแบบ end-to-end", "ผู้นำการเงินที่พร้อมรับอนาคต"], duration: "ไม่มี", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "04", title: "ที่ปรึกษาให้คำปรึกษาทางจิตวิทยา AI", summary: "ใบรับรองวิชาชีพที่ผสมผสานเทคโนโลยี AI กับทฤษฎีทางจิตวิทยาเพื่อให้บริการสนับสนุนสุขภาพจิตดิจิทัล รวมถึงการบำบัดด้วย AI กรอบจริยธรรม และเครื่องมือให้คำปรึกษาที่ใช้เอเจนต์", features: ["บูรณาการเครื่องมือให้คำปรึกษา AI", "การใช้ AI อย่างมีจริยธรรมในการบำบัด", "ศิลปะบำบัดเชิงแสดงออกด้วย AI", "ระบบให้คำปรึกษาที่ใช้เอเจนต์", "ฐานความรู้ AI สำหรับที่ปรึกษา"], benefits: ["ขยายการบำบัดในรูปแบบดิจิทัล", "การปฏิบัติสมัยใหม่ที่อิงหลักฐาน", "การใช้ AI อย่างมีจริยธรรมและสอดคล้อง", "สร้างเอเจนต์ให้คำปรึกษาของคุณเอง", "ใบรับรองข้ามพรมแดนที่ได้รับการยอมรับ"], duration: "ไม่มี", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "05", title: "ผู้ฝึกอบรม AI", summary: "ใบรับรองความสามารถในการประยุกต์ใช้ผลิตภัณฑ์ AI ครอบคลุมการจัดการข้อมูล การกำหนดค่าอัลกอริทึม หลักการของโมเดลขนาดใหญ่ และเทคนิค prompting — มีคุณสมบัติในการฝึกอบรมผู้อื่นในด้าน AI", features: ["เชี่ยวชาญ prompting DeepSeek", "หลักการโมเดลขนาดใหญ่ (50 นาที)", "ทักษะ AIGC ที่จำเป็น", "การกำหนดค่าอัลกอริทึมและข้อมูล", "ใบรับรอง AI ระดับกลางจาก MIIT"], benefits: ["มีคุณสมบัติเป็นผู้ฝึกอบรม AI ที่ได้รับการรับรอง", "ฝึกอบรมทีมและองค์กร", "เข้าใจโมเดล AI อย่างลึกซึ้ง", "ตำแหน่งอาชีพที่เป็นที่ต้องการสูง", "การยอมรับสองทางจาก MIIT และ IITC"], duration: "25 ชม. 57 นาที", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "06", title: "ผู้สร้างเอเจนต์", summary: "ใบรับรองวิชาชีพในการสร้างและเพิ่มประสิทธิภาพเอเจนต์ AI โดยใช้แพลตฟอร์ม Coze, FastGPT และ Dify ครอบคลุมการปรับใช้เอเจนต์องค์กร การออกแบบ RAG และการสร้างฐานความรู้", features: ["พัฒนาเอเจนต์ Coze และ Dify", "การออกแบบ RAG และฐานความรู้", "ฝึกอบรมและเพิ่มประสิทธิภาพเอเจนต์ AI", "ปรับใช้หลายแพลตฟอร์มสำหรับองค์กร", "การสร้างเอเจนต์ในท้องถิ่น"], benefits: ["สร้างเอเจนต์ AI องค์กรแบบกำหนดเอง", "ระบบอัตโนมัติเวิร์กโฟลว์ที่ซับซ้อน", "ความได้เปรียบทางการแข่งขันในวิศวกรรม AI", "ปรับใช้เอเจนต์พร้อมการผลิต", "ทักษะใหม่ที่มีมูลค่าสูง"], duration: "43 ชม. 35 นาที", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "07", title: "ผู้จัดการผลิตภัณฑ์ AI", summary: "ใบรับรองการจัดการผลิตภัณฑ์ AI เต็มวงจรชีวิต ครอบคลุมการประเมินเทคโนโลยี การวิจัยผู้ใช้ การสร้างมูลค่าเชิงพาณิชย์ และการพัฒนาอาชีพ — ออกแบบสำหรับ PM ที่นำผลิตภัณฑ์ขับเคลื่อนด้วย AI", features: ["จัดการวงจรชีวิตผลิตภัณฑ์ AI", "ข้อมูลเชิงลึกผู้ใช้ด้วย DeepSeek", "ออกแบบแพลตฟอร์มโทรออก AI", "เตรียมเรซูเม่และสัมภาษณ์ด้วย AI", "ประยุกต์องค์กร OpenClaw"], benefits: ["นำทีมผลิตภัณฑ์ AI", "ใบรับรอง PM พร้อมใช้งานในตลาด", "สร้างมูลค่า AI เชิงพาณิชย์", "เครื่องมือก้าวหน้าทางอาชีพ", "ได้รับการยอมรับจาก MIIT และ IITC"], duration: "48 ชม. 39 นาที", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "08", title: "นักวิเคราะห์ข้อมูล AI", summary: "ใบรับรองสำหรับมืออาชีพที่ใช้ AI วิเคราะห์ข้อมูลองค์กรอย่างลึกซึ้งและให้ข้อมูลเชิงลึกที่นำไปปฏิบัติได้ ครอบคลุม Python, MySQL, การสร้างแบบจำลองข้อมูล AI และการวิเคราะห์เชิงพยากรณ์", features: ["พื้นฐานข้อมูล Python และ MySQL", "การสร้างแบบจำลองและขุดข้อมูลด้วย AI", "ไปป์ไลน์การวิเคราะห์เชิงพยากรณ์", "แดชบอร์ด business intelligence", "กฎการวิเคราะห์ข้อมูล DeepSeek"], benefits: ["อำนาจการตัดสินใจที่ขับเคลื่อนด้วยข้อมูล", "ระบบอัตโนมัติรายงานที่ซับซ้อน", "ข้อมูลเชิงลึกธุรกิจเชิงพยากรณ์", "ใช้ได้ข้ามอุตสาหกรรม", "ใบรับรองการวิเคราะห์ที่เป็นที่ต้องการสูง"], duration: "27 ชม. 10 นาที", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "09", title: "นักการตลาด AI", summary: "ใบรับรองวิชาชีพในการพัฒนาและเพิ่มประสิทธิภาพกลยุทธ์การตลาดด้วย AI — ครอบคลุมวิดีโอสั้น AIGC, AI+SEO, การสร้างเนื้อหา การจัดการชุมชน และการได้มาซึ่งลูกค้า", features: ["การตลาดวิดีโอสั้น AIGC", "กลยุทธ์เนื้อหา AI+SEO", "เครื่องมือ AI ชุมชนและโซเชียล", "การสร้างโฆษณาและคำโฆษณาด้วย AI", "การผลิตวิดีโอ Seedance 2.0"], benefits: ["การได้ลูกค้าอย่างแม่นยำ", "เนื้อหาอัตโนมัติในระดับขนาดใหญ่", "ROI แคมเปญที่วัดได้", "ความได้เปรียบการตลาดดิจิทัลสมัยใหม่", "ใบรับรอง AI ที่กำหนดอาชีพ"], duration: "27 ชม. 10 นาที", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "10", title: "วิศวกรประยุกต์ใช้ AIGC", summary: "ใบรับรองที่น่าเชื่อถือแสดงถึงความเชี่ยวชาญในการใช้งานเครื่องมือ AIGC การออกแบบโซลูชันตามสถานการณ์ และการบูรณาการธุรกิจ — สำหรับมืออาชีพที่สร้างด้วยโมเดล AI ขนาดใหญ่", features: ["พัฒนาแอปพลิเคชันโมเดลขนาดใหญ่", "การใช้งานเครื่องมือ AIGC", "ออกแบบโซลูชันตามสถานการณ์", "ความสามารถในการบูรณาการธุรกิจ", "เส้นทางการเรียนรู้จากมือใหม่ถึงผู้เชี่ยวชาญ"], benefits: ["ใบรับรองวิชาชีพที่น่าเชื่อถือ", "พิสูจน์ความเชี่ยวชาญทางเทคนิค AI", "สร้างแอปพลิเคชัน AI ที่ซับซ้อน", "วิศวกรรม AI ที่พร้อมใช้งานทางธุรกิจ", "มีคุณค่าในทุกภาคส่วน"], duration: "12 ชม. 35 นาที", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "11", title: "วิศวกรพัฒนา OpenClaw", summary: "ใบรับรองทักษะหลักสำหรับการพัฒนาเอเจนต์อัจฉริยะ นำการปฏิวัติทางเทคโนโลยีในวิศวกรรมแอปพลิเคชัน AI โดยใช้แพลตฟอร์ม OpenClaw", features: ["พัฒนาเอเจนต์อัจฉริยะหลัก", "วิศวกรรมแอปพลิเคชัน AI", "เชี่ยวชาญแพลตฟอร์ม OpenClaw", "บูรณาการเอเจนต์องค์กร", "เทคสแต็ค AI ที่เกิดใหม่"], benefits: ["นำการปฏิวัติการพัฒนา AI", "ทักษะวิศวกรรมล้ำสมัย", "ใบรับรองเฉพาะที่มีมูลค่าสูง", "ความสามารถในการปรับใช้องค์กร", "เส้นทางอาชีพที่พร้อมรับอนาคต"], duration: "12 ชม. 17 นาที", price: "RM 6,000", recognition: "MIIT / IITC" },
        { no: "12", title: "ผู้เชี่ยวชาญประยุกต์ใช้ OpenClaw ในที่ทำงาน", summary: "เป็น 'ผู้บัญชาการเอเจนต์อัจฉริยะในที่ทำงาน' ในยุค AI ใบรับรองนี้ติดอาวุธให้มืออาชีพด้วยเครื่องมือสำนักงาน AI ที่มีประสิทธิภาพสูง เวิร์กโฟลว์อัจฉริยะ และความสามารถในการอัตโนมัติองค์กร", features: ["เวิร์กโฟลว์สำนักงาน AI ที่มีประสิทธิภาพสูง", "ระบบอัตโนมัติที่ทำงานอัจฉริยะ", "ฝึกอบรมผู้เชี่ยวชาญ OpenClaw", "ทักษะการบัญชาการ AI องค์กร", "ระบบผลิตภาพในยุค AI"], benefits: ["เปลี่ยนการทำงานประจำวันด้วย AI", "เป็นที่ขาดไม่ได้ในที่ทำงาน", "นำการนำ AI มาใช้ในทีม", "เพิ่มผลิตภาพทันที", "ใบรับรองความเป็นผู้นำในที่ทำงาน"], duration: "15 ชม. 25 นาที", price: "RM 6,000", recognition: "MIIT / IITC" },
      ],
    },
    activities: {
      title: "กิจกรรม", titleHighlight: "ของเรา",
      items: [
        { img: ribbonImg, caption: "พิธีตัดริบบิ้นพันธมิตร Modus AI Associates" },
        { img: signingImg, caption: "การลงนามพันธมิตร Modus AI Associates โดยมีผู้ว่าราชการรัฐปีนังคนที่ 8 ตุน ดาโต๊ะ ซรี อูตามา อาหมัด ฟูซี เป็นสักขีพยาน" },
        { img: uniImg, caption: "Modus AI Associates กำลังเติบโตด้วยความร่วมมือกับมหาวิทยาลัยและโรงเรียนนานาชาติชั้นนำในมาเลเซีย" },
        { img: coursesImg, caption: "จนถึงเดือนมิถุนายน 2025 ได้จัดหลักสูตร AI ไปแล้ว 5 หลักสูตร และยังมีอีกมากที่กำลังจะมา" },
        { img: launchImg, caption: "พิธีเปิดตัวอย่างเป็นทางการของ Modus AI Associates ในวันที่ 8 สิงหาคม 2025" },
        { img: southOceanImg, caption: "การลงนามความร่วมมือ Modus AI Associates และ South Ocean Technology Sdn Bhd — ซีอีโอ ดาโต๊ะ ดร. แทน BN กับ ซีอีโอ เคลวิน ลี วันที่ 4 มิถุนายน 2026" },
        { img: unitenImg, caption: "ความร่วมมือ Modus AI Associates กับ UNITEN (Universiti Tenaga Nasional) — มหาวิทยาลัยพลังงาน" },
        { img: uulianTotalImg, caption: "GM ของ Xiamen UULIAN เยี่ยมชม Total International Associates พันธมิตรของ MODUS" },
        { img: uulianTotal2Img, caption: "GM ของ Xiamen UULIAN เยี่ยมชม Total International Associates พันธมิตรของ MODUS" },
        { img: blnCharityImg, caption: "Modus AI Associates เข้าร่วมงาน BLN 7th Charity Night" },
      ],
    },
    socials: {
      title: "โซเชียล", titleHighlight: "ของเรา",
      subtitle: "เชื่อมต่อกับ Modus AI Associates บนทุกแพลตฟอร์ม", followLabel: "ติดตามเรา",
      platforms: [
        { name: "Facebook", handle: "@ModusAIAssociates", desc: "อัปเดต อีเวนต์ และประกาศ", url: "https://www.facebook.com/profile.php?id=61572345552403", color: "#1877F2", colorClass: "blue" },
      ],
    },
    contact: {
      title: "เริ่มต้นการ", titleHighlight: "เปลี่ยนผ่านของคุณ",
      desc: "อนาคต AI ของมาเลเซียกำลังถูกเขียนขึ้นในตอนนี้ อย่าปล่อยให้คู่แข่งของคุณไปถึงก่อน ติดต่อวันนี้และเราจะจัดเตรียมโปรแกรมที่สร้างขึ้นรอบเป้าหมายธุรกิจของคุณ",
      contacts: [
        { icon: Mail, text: "admin@modusaiassociates.com" },
        { icon: Phone, text: "Elaine: 017-3490001" },
        { icon: Phone, text: "Joel: 011-11469065" },
        { icon: MapPin, text: "กัวลาลัมเปอร์ ประเทศมาเลเซีย" },
      ],
      form: {
        namePlaceholder: "ชื่อของคุณ", companyPlaceholder: "ชื่อบริษัทของคุณ", emailPlaceholder: "อีเมลของคุณ", messagePlaceholder: "บอกเราเกี่ยวกับความต้องการธุรกิจ AI ของคุณ...",
        nameLabel: "ชื่อ", companyLabel: "บริษัท", emailLabel: "อีเมล", messageLabel: "ข้อความ",
        submitText: "ส่งข้อความ", sendingText: "กำลังส่ง...", successTitle: "ส่งข้อความสำเร็จ!",
        successDesc: "ขอบคุณที่ติดต่อ ทีมของเราจะติดต่อกลับโดยเร็ว",
        errors: { nameRequired: "กรุณากรอกชื่อ", emailRequired: "กรุณากรอกอีเมล", emailInvalid: "กรอกอีเมลที่ถูกต้อง", messageRequired: "กรุณากรอกข้อความ", failed: "ส่งไม่สำเร็จ กรุณาลองอีกครั้ง", network: "ข้อผิดพลาดของเครือข่าย กรุณาตรวจสอบการเชื่อมต่อและลองอีกครั้ง" },
      },
    },
  },
};

type FormState = {
  name: string;
  company: string;
  email: string;
  message: string;
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function Details() {
  const [location] = useLocation();
  const { lang } = useLang();
  const t = detailsContent[lang];
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>({ name: "", company: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = t.contact.form.errors.nameRequired;
    if (!form.email.trim()) newErrors.email = t.contact.form.errors.emailRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = t.contact.form.errors.emailInvalid;
    if (!form.message.trim()) newErrors.message = t.contact.form.errors.messageRequired;
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
        void trackLead({ email: form.email, name: form.name, company: form.company });
        setForm({ name: "", company: "", email: "", message: "" });
        setTimeout(() => setSubmitStatus("idle"), 6000);
      } else {
        setSubmitStatus("error");
        setErrorMessage(data.error ?? t.contact.form.errors.failed);
      }
    } catch {
      setSubmitStatus("error");
      setErrorMessage(t.contact.form.errors.network);
    }
  };

  useEffect(() => {
    trackViewContent({ contentId: "details", contentName: "Details Page", contentType: "service" });
  }, []);

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

      <div className="fixed bottom-8 right-8 z-50">
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-md border border-white/10 hover:border-primary hover:bg-primary/10 transition-all duration-300 shadow-lg text-sm font-medium"
          data-testid="back-to-home"
        >
          <ArrowLeft className="w-4 h-4" /> {t.backToHome}
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
          <motion.figure
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12 rounded-3xl overflow-hidden border border-primary/30 bg-card shadow-[0_0_50px_rgba(212,158,46,0.15)] hover:shadow-[0_0_60px_rgba(212,158,46,0.25)] transition-shadow duration-500"
          >
            <img
              src={ribbonGovernorImg}
              alt={t.about.ribbonCaption}
              className="w-full h-auto object-contain bg-black"
              data-testid="img-ribbon-governor"
            />
            <figcaption className="px-6 md:px-10 py-5 text-center text-sm md:text-base text-muted-foreground border-t border-primary/20 bg-gradient-to-b from-primary/5 to-transparent">
              {t.about.ribbonCaption}
            </figcaption>
          </motion.figure>

          <div className="flex items-center gap-4 mb-8">
            <div className="h-1 w-12 bg-primary" />
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              {t.about.title} <span className="text-primary">{t.about.titleHighlight}</span>
            </h2>
          </div>

          <div className="p-8 md:p-12 rounded-3xl bg-card border border-white/5 relative overflow-hidden group hover:border-primary/30 transition-colors duration-500 mb-8">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] group-hover:bg-primary/10 transition-colors duration-500" />
            <div className="relative z-10 text-lg md:text-xl text-muted-foreground leading-relaxed space-y-6">
              <p>
                <strong className="text-white font-display">MODUS AI Associates</strong>{" "}
                {t.about.p1}
              </p>
              <p>
                {t.about.p2Prefix}
                <strong className="text-primary">{t.about.p2Bold}</strong>,{" "}
                <a href="https://www.ITCast.cn" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors">www.ITCast.cn</a>,{" "}
                <a href="https://www.uulian.com" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors">www.uulian.com</a>
                {t.about.p2Suffix}
              </p>
              <p>
                {t.about.p3Prefix}
                <strong className="text-secondary">{t.about.p3Bold}</strong>
                {t.about.p3Suffix}
              </p>
              <p>
                {t.about.p4.split(t.about.p4Bold).map((part, i, arr) =>
                  i < arr.length - 1
                    ? <React.Fragment key={i}>{part}<strong className="text-white">{t.about.p4Bold}</strong></React.Fragment>
                    : part
                )}
              </p>
              <p className="font-medium text-white/80">
                <strong className="text-white">{t.about.p5Bold}</strong>
                {t.about.p5}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: Award, label: t.about.badges[0].label, sub: t.about.badges[0].sub },
              { icon: Globe2, label: t.about.badges[1].label, sub: t.about.badges[1].sub },
              { icon: Users, label: t.about.badges[2].label, sub: t.about.badges[2].sub },
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
              {t.why.title} <span className="text-secondary">{t.why.titleHighlight}</span>
            </h2>
            <div className="h-1 w-12 bg-secondary" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.why.points.map((point, i) => {
              const icons = [Award, Globe2, Users, BookOpen, Briefcase, Bot];
              const Icon = icons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`flex items-start gap-4 p-6 rounded-2xl bg-card border border-white/5 hover:border-${point.accent}/50 hover:bg-${point.accent}/5 transition-all duration-300 group`}
                >
                  <div className={`mt-1 bg-${point.accent}/20 p-2 rounded-full shrink-0 group-hover:bg-${point.accent}/40 transition-colors duration-300`}>
                    <Icon className={`w-5 h-5 text-${point.accent}`} />
                  </div>
                  <p className="text-base font-medium text-white/90 leading-snug">{point.text}</p>
                </motion.div>
              );
            })}
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
              {t.services.title} <span className="text-primary">{t.services.titleHighlight}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.services.items.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-3xl bg-card border border-white/10 hover:border-primary hover:shadow-[0_0_30px_rgba(212,158,46,0.15)] transition-all duration-500 relative overflow-hidden"
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
                  {t.services.learnMore} <ChevronRight className="w-4 h-4 ml-1" />
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
              {t.courses.title} <span className="text-primary">{t.courses.titleHighlight}</span>
            </h2>
          </div>
          <p className="text-muted-foreground mb-10 text-lg max-w-3xl">
            {t.courses.subtitle}
          </p>

          {/* Unified accordion — no table shown before expanding */}
          <div className="rounded-2xl overflow-hidden border border-white/10">
            {t.courses.items.map((course, i) => (
              <div key={course.no} className="border-b border-white/8 last:border-b-0">
                {/* Row header — only number + title visible before expand */}
                <button
                  className={`w-full flex items-center gap-4 px-5 py-4 text-left transition-all duration-200 ${
                    expandedCourse === course.no
                      ? "bg-primary/10"
                      : i % 2 === 0 ? "bg-card/40 hover:bg-primary/5" : "bg-card/20 hover:bg-primary/5"
                  }`}
                  onClick={() => setExpandedCourse(expandedCourse === course.no ? null : course.no)}
                >
                  <span className="text-secondary font-display font-bold text-sm w-8 shrink-0">{course.no}</span>
                  <span className="font-semibold text-white flex-1 text-left text-sm md:text-base leading-snug">{course.title}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-primary shrink-0 transition-transform duration-300 ${
                      expandedCourse === course.no ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Expanded detail table */}
                <AnimatePresence>
                  {expandedCourse === course.no && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="bg-background/70 border-t border-primary/20">
                        <div className="px-5 pt-4 pb-2">
                          <p className="text-white/65 text-xs leading-relaxed italic border-l-2 border-primary pl-3">{course.summary}</p>
                        </div>
                        <div className="overflow-x-auto pb-4 px-4">
                          <table className="w-full text-xs border-collapse min-w-[560px]">
                            <thead>
                              <tr className="border-b border-white/20">
                                <th className="text-left py-2 px-3 font-display font-bold text-primary/70 uppercase tracking-wider w-[18%]">{t.courses.headers.title}</th>
                                <th className="text-left py-2 px-3 font-display font-bold text-primary/70 uppercase tracking-wider w-[24%]">{t.courses.headers.features}</th>
                                <th className="text-left py-2 px-3 font-display font-bold text-primary/70 uppercase tracking-wider w-[24%]">{t.courses.headers.benefits}</th>
                                <th className="text-left py-2 px-3 font-display font-bold text-primary/70 uppercase tracking-wider w-[12%]">{t.courses.headers.duration}</th>
                                <th className="text-left py-2 px-3 font-display font-bold text-primary/70 uppercase tracking-wider w-[10%]">{t.courses.headers.price}</th>
                                <th className="text-left py-2 px-3 font-display font-bold text-primary/70 uppercase tracking-wider">{t.courses.headers.recognition}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="align-top">
                                <td className="py-3 px-3 font-semibold text-white leading-snug">{course.title}</td>
                                <td className="py-3 px-3 text-white/70 leading-relaxed">
                                  {course.features.map((f, fi) => (
                                    <span key={fi} className="block">{fi > 0 && <span className="text-white/20 mr-1">·</span>}{f}</span>
                                  ))}
                                </td>
                                <td className="py-3 px-3 text-white/70 leading-relaxed">
                                  {course.benefits.map((b, bi) => (
                                    <span key={bi} className="block">{bi > 0 && <span className="text-white/20 mr-1">·</span>}{b}</span>
                                  ))}
                                </td>
                                <td className="py-3 px-3 text-white/80 whitespace-nowrap">{course.duration}</td>
                                <td className="py-3 px-3 text-secondary font-bold whitespace-nowrap">{course.price}</td>
                                <td className="py-3 px-3">
                                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary/10 border border-secondary/30 text-secondary font-medium whitespace-nowrap">{course.recognition}</span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
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
              {t.activities.title} <span className="text-secondary">{t.activities.titleHighlight}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.activities.items.map((activity, i) => (
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

        {/* ── Our Socials ── */}
        <motion.section
          id="socials"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="scroll-mt-32"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-1 w-12 bg-primary" />
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              {t.socials.title} <span className="text-primary">{t.socials.titleHighlight}</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground mb-10 pl-16">{t.socials.subtitle}</p>

          <div className={
            t.socials.platforms.length === 1
              ? "flex justify-center"
              : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          }>
            {t.socials.platforms.map((platform, i) => {
              const icons: Record<string, React.ElementType> = {
                Facebook, LinkedIn: Linkedin, "X (Twitter)": Twitter, Instagram,
              };
              const Icon = icons[platform.name] ?? Globe2;
              const isSingle = t.socials.platforms.length === 1;
              return (
                <motion.a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className={`group relative flex flex-col gap-6 overflow-hidden cursor-pointer transition-all duration-300 ${
                    isSingle
                      ? "w-full max-w-sm p-8 rounded-3xl bg-card border border-white/8"
                      : "p-6 rounded-2xl bg-card border border-white/8"
                  }`}
                >
                  {/* glow blob */}
                  <div
                    className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-[80px] opacity-0 group-hover:opacity-25 transition-opacity duration-500"
                    style={{ backgroundColor: platform.color }}
                  />
                  {/* large faint bg icon */}
                  <div className="absolute bottom-4 right-4 opacity-[0.04] group-hover:opacity-[0.07] transition-opacity duration-500">
                    <Icon className="w-24 h-24" style={{ color: platform.color }} />
                  </div>
                  {/* top border highlight on hover */}
                  <div
                    className="absolute inset-x-0 top-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-3xl"
                    style={{ backgroundColor: platform.color }}
                  />

                  {/* icon badge */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110 relative z-10"
                    style={{
                      backgroundColor: `${platform.color}18`,
                      borderColor: `${platform.color}45`,
                      boxShadow: `0 0 0 0 ${platform.color}00`,
                    }}
                  >
                    <Icon className="w-7 h-7" style={{ color: platform.color }} />
                  </div>

                  {/* text */}
                  <div className="flex flex-col gap-1.5 flex-1 relative z-10">
                    <span className="font-display font-bold text-white text-xl leading-tight">{platform.name}</span>
                    <span className="text-xs font-mono font-medium tracking-wide" style={{ color: platform.color }}>{platform.handle}</span>
                    <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{platform.desc}</p>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3 relative z-10" style={{ color: platform.color }}>
                    <span>{t.socials.followLabel}</span>
                    <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </motion.a>
              );
            })}
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
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-card to-background border border-primary/30 relative overflow-hidden shadow-[0_0_50px_rgba(212,158,46,0.1)]">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMwMGQ0ZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                  {t.contact.title} <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{t.contact.titleHighlight}</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">{t.contact.desc}</p>

                <div className="space-y-5">
                  {t.contact.contacts.map(({ icon: Icon, text }, i) => {
                    const isEmail = Icon === Mail;
                    const isPhone = Icon === Phone;
                    const href = isEmail
                      ? `mailto:${text}`
                      : isPhone
                        ? `tel:${text.replace(/[^\d+]/g, "")}`
                        : undefined;
                    const inner = (
                      <>
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <span>{text}</span>
                      </>
                    );
                    if (href) {
                      return (
                        <a
                          key={i}
                          href={href}
                          onClick={() => {
                            if (isPhone) {
                              trackButtonClick({
                                contentId: "call-button",
                                contentName: `Call: ${text}`,
                                contentType: "lead",
                              });
                            }
                            trackContact(isEmail ? "Email" : "Phone");
                          }}
                          className="flex items-center gap-4 text-white/80 hover:text-primary transition-colors"
                          data-testid={`contact-${isEmail ? "email" : "phone"}-${i}`}
                        >
                          {inner}
                        </a>
                      );
                    }
                    return (
                      <div key={i} className="flex items-center gap-4 text-white/80">
                        {inner}
                      </div>
                    );
                  })}
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
                    <h3 className="text-xl font-display font-bold text-white">{t.contact.form.successTitle}</h3>
                    <p className="text-muted-foreground text-sm max-w-xs">{t.contact.form.successDesc}</p>
                  </motion.div>
                ) : (
                  <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                    <input type="text" name="honeypot" style={{ display: "none" }} tabIndex={-1} autoComplete="off" aria-hidden="true" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs text-white/50 uppercase tracking-wider">{t.contact.form.nameLabel}</label>
                        <Input
                          placeholder={t.contact.form.namePlaceholder}
                          value={form.name}
                          onChange={handleChange("name")}
                          className={`bg-card/50 border-white/10 focus:border-primary ${errors.name ? "border-red-500/50" : ""}`}
                        />
                        {errors.name && <p className="text-xs text-red-400">{errors.name}</p>}
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs text-white/50 uppercase tracking-wider">{t.contact.form.companyLabel}</label>
                        <Input
                          placeholder={t.contact.form.companyPlaceholder}
                          value={form.company}
                          onChange={handleChange("company")}
                          className="bg-card/50 border-white/10 focus:border-primary"
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs text-white/50 uppercase tracking-wider">{t.contact.form.emailLabel}</label>
                      <Input
                        type="email"
                        placeholder={t.contact.form.emailPlaceholder}
                        value={form.email}
                        onChange={handleChange("email")}
                        className={`bg-card/50 border-white/10 focus:border-primary ${errors.email ? "border-red-500/50" : ""}`}
                      />
                      {errors.email && <p className="text-xs text-red-400">{errors.email}</p>}
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs text-white/50 uppercase tracking-wider">{t.contact.form.messageLabel}</label>
                      <Textarea
                        placeholder={t.contact.form.messagePlaceholder}
                        rows={5}
                        value={form.message}
                        onChange={handleChange("message")}
                        className={`bg-card/50 border-white/10 focus:border-primary resize-none ${errors.message ? "border-red-500/50" : ""}`}
                      />
                      {errors.message && <p className="text-xs text-red-400">{errors.message}</p>}
                    </div>
                    {submitStatus === "error" && (
                      <p className="text-xs text-red-400 text-center">{errorMessage}</p>
                    )}
                    <Button
                      type="submit"
                      disabled={submitStatus === "loading"}
                      className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-background font-display font-bold py-6 text-base transition-all duration-300"
                    >
                      {submitStatus === "loading" ? (
                        <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> {t.contact.form.sendingText}</>
                      ) : (
                        <><Send className="w-4 h-4 mr-2" /> {t.contact.form.submitText}</>
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
