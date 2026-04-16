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
import { useLang } from "@/contexts/LanguageContext";

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
        { label: "MIIT Certified", sub: "Ministry of Industry & IT, China" },
        { label: "China AI Ecosystem", sub: "No.1 Training Institution Partner" },
        { label: "800,000+ Graduates", sub: "Across 2,600 partner universities" },
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
        { accent: "primary", text: "5–10x productivity improvements proven across manufacturing, retail, and logistics" },
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
          benefits: ["5–10x HR productivity boost", "Global-standard MIIT credential", "AI-driven talent pipeline", "Automated compliance documentation", "Lead digital HR transformation"],
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
        { img: launchImg, caption: "Modus AI Associates Official Launching on 8 August 2025." },
        { img: ribbonImg, caption: "Modus AI Associates Partner Ribbon Cutting Ceremony" },
        { img: signingImg, caption: "Modus AI Associates Partner Signing Witnessed by the 8th Penang Governor Tun Dato' Seri Utama Ahmad Fuzi" },
        { img: coursesImg, caption: "Till June 2025, 5 AI courses were conducted and more to come." },
        { img: uniImg, caption: "Modus AI Associates is rising with cooperations with outstanding Universities & International Schools in Malaysia." },
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
        { label: "Bertauliah MIIT", sub: "Kementerian Industri & IT, China" },
        { label: "Ekosistem AI China", sub: "Rakan Institusi Latihan No.1" },
        { label: "800,000+ Graduan", sub: "Merentasi 2,600 universiti rakan" },
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
        { accent: "primary", text: "Peningkatan produktiviti 5–10x terbukti dalam pembuatan, runcit, dan logistik" },
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
          benefits: ["Peningkatan produktiviti HR 5–10x", "Kelayakan standard global MIIT", "Saluran bakat dipacu AI", "Dokumentasi pematuhan automatik", "Memimpin transformasi HR digital"],
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
        { img: launchImg, caption: "Pelancaran Rasmi Modus AI Associates pada 8 Ogos 2025." },
        { img: ribbonImg, caption: "Majlis Potong Reben Rakan Kongsi Modus AI Associates" },
        { img: signingImg, caption: "Majlis Penandatanganan Rakan Kongsi Modus AI Associates Disaksikan oleh Gabenor Pulau Pinang ke-8 Tun Dato' Seri Utama Ahmad Fuzi" },
        { img: coursesImg, caption: "Sehingga Jun 2025, 5 kursus AI telah dijalankan dan lebih banyak akan datang." },
        { img: uniImg, caption: "Modus AI Associates semakin berkembang dengan kerjasama bersama Universiti dan Sekolah Antarabangsa terkemuka di Malaysia." },
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
                <a href="https://www.ITCast.cn" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors">www.ITCast.cn</a>
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

          {/* Desktop table */}
          <div className="hidden md:block rounded-2xl overflow-hidden border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary/10 border-b border-white/10">
                  <th className="text-left px-4 py-4 text-primary font-display font-bold w-6">{t.courses.headers.no}</th>
                  <th className="text-left px-4 py-4 text-primary font-display font-bold">{t.courses.headers.title}</th>
                  <th className="text-left px-4 py-4 text-primary font-display font-bold">{t.courses.headers.features}</th>
                  <th className="text-left px-4 py-4 text-primary font-display font-bold">{t.courses.headers.benefits}</th>
                  <th className="text-left px-4 py-4 text-primary font-display font-bold whitespace-nowrap">{t.courses.headers.duration}</th>
                  <th className="text-left px-4 py-4 text-primary font-display font-bold whitespace-nowrap">{t.courses.headers.price}</th>
                  <th className="text-left px-4 py-4 text-primary font-display font-bold">{t.courses.headers.recognition}</th>
                </tr>
              </thead>
              <tbody>
                {t.courses.items.map((course, i) => (
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
                      <td className="px-4 py-3 font-semibold text-white">
                        <div className="flex items-center gap-2">
                          <span>{course.title}</span>
                          <ChevronDown className={`w-3 h-3 text-primary transition-transform duration-200 shrink-0 ${expandedCourse === course.no ? "rotate-180" : ""}`} />
                        </div>
                      </td>
                      <td className="px-4 py-3 text-white/60 text-xs">
                        {course.features[0]}<span className="text-primary/60"> +{course.features.length - 1} {t.courses.moreSuffix}</span>
                      </td>
                      <td className="px-4 py-3 text-white/60 text-xs">
                        {course.benefits[0]}<span className="text-primary/60"> +{course.benefits.length - 1} {t.courses.moreSuffix}</span>
                      </td>
                      <td className="px-4 py-3 text-white/70 whitespace-nowrap">{course.duration}</td>
                      <td className="px-4 py-3 text-secondary font-bold whitespace-nowrap">{course.price}</td>
                      <td className="px-4 py-3">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-xs font-medium">{course.recognition}</span>
                      </td>
                    </tr>
                    <AnimatePresence>
                      {expandedCourse === course.no && (
                        <tr>
                          <td colSpan={7} className="bg-background/60 border-b border-primary/20 p-0">
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pt-4 pb-2">
                                <p className="text-white/65 text-xs leading-relaxed italic border-l-2 border-primary pl-3 mb-4">{course.summary}</p>
                              </div>
                              <div className="overflow-x-auto pb-4 px-4">
                                <table className="w-full text-xs border-collapse">
                                  <thead>
                                    <tr className="border-b border-white/20">
                                      <th className="text-left py-2 px-3 font-display font-bold text-white/50 uppercase tracking-wider w-[18%]">{t.courses.headers.title}</th>
                                      <th className="text-left py-2 px-3 font-display font-bold text-white/50 uppercase tracking-wider w-[25%]">{t.courses.headers.features}</th>
                                      <th className="text-left py-2 px-3 font-display font-bold text-white/50 uppercase tracking-wider w-[25%]">{t.courses.headers.benefits}</th>
                                      <th className="text-left py-2 px-3 font-display font-bold text-white/50 uppercase tracking-wider w-[12%]">{t.courses.headers.duration}</th>
                                      <th className="text-left py-2 px-3 font-display font-bold text-white/50 uppercase tracking-wider w-[10%]">{t.courses.headers.price}</th>
                                      <th className="text-left py-2 px-3 font-display font-bold text-white/50 uppercase tracking-wider w-[10%]">{t.courses.headers.recognition}</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr className="align-top border-b border-white/5">
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
            {t.courses.items.map((course) => (
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
                      <div className="bg-background/60 border-t border-white/10">
                        <div className="px-4 pt-3 pb-1">
                          <p className="text-white/65 text-xs leading-relaxed italic border-l-2 border-primary pl-3">{course.summary}</p>
                        </div>
                        <div className="overflow-x-auto pb-3 px-2">
                          <table className="w-full text-xs border-collapse min-w-[520px]">
                            <thead>
                              <tr className="border-b border-white/20">
                                <th className="text-left py-2 px-2 font-bold text-white/45 uppercase tracking-wider">{t.courses.headers.title}</th>
                                <th className="text-left py-2 px-2 font-bold text-white/45 uppercase tracking-wider">{t.courses.headers.features}</th>
                                <th className="text-left py-2 px-2 font-bold text-white/45 uppercase tracking-wider">{t.courses.headers.benefits}</th>
                                <th className="text-left py-2 px-2 font-bold text-white/45 uppercase tracking-wider whitespace-nowrap">{t.courses.headers.duration}</th>
                                <th className="text-left py-2 px-2 font-bold text-white/45 uppercase tracking-wider whitespace-nowrap">{t.courses.headers.price}</th>
                                <th className="text-left py-2 px-2 font-bold text-white/45 uppercase tracking-wider">{t.courses.headers.recognition}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="align-top">
                                <td className="py-2 px-2 font-semibold text-white leading-snug">{course.title}</td>
                                <td className="py-2 px-2 text-white/70 leading-relaxed">
                                  {course.features.map((f, fi) => <span key={fi} className="block">{fi > 0 && <span className="text-white/20 mr-1">·</span>}{f}</span>)}
                                </td>
                                <td className="py-2 px-2 text-white/70 leading-relaxed">
                                  {course.benefits.map((b, bi) => <span key={bi} className="block">{bi > 0 && <span className="text-white/20 mr-1">·</span>}{b}</span>)}
                                </td>
                                <td className="py-2 px-2 text-white/80 whitespace-nowrap">{course.duration}</td>
                                <td className="py-2 px-2 text-secondary font-bold whitespace-nowrap">{course.price}</td>
                                <td className="py-2 px-2">
                                  <span className="inline-flex px-1.5 py-0.5 rounded-full bg-secondary/10 border border-secondary/30 text-secondary whitespace-nowrap">{course.recognition}</span>
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
                  {t.contact.title} <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{t.contact.titleHighlight}</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">{t.contact.desc}</p>

                <div className="space-y-5">
                  {t.contact.contacts.map(({ icon: Icon, text }, i) => (
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
