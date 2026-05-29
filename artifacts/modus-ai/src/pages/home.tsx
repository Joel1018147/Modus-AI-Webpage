import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight, BarChart3, Brain, Cpu, Globe,
  Network, ShieldCheck, Zap, Award, Users, Play, GraduationCap,
  Building2, Wrench, ArrowUpRight
} from "lucide-react";
import { useLang, type Lang } from "@/contexts/LanguageContext";
import { trackViewContent, trackButtonClick } from "@/lib/tiktok";
import videoEN from "@assets/Modus_AI_Associates_Empowering_the_Future_with_AI_(1)_1776710555170.mp4";
import videoBM from "@assets/WhatsApp_Video_2026-04-21_at_2.38.14_AM_1776710603263.mp4";
import videoCN from "@assets/WhatsApp_Video_2026-04-21_at_2.38.36_AM_1776710603263.mp4";

const VIDEO_BY_LANG: Record<Lang, string> = {
  en: videoEN,
  bm: videoCN,
  cn: videoBM,
  id: videoCN,
  vn: videoEN,
  ar: videoEN,
  th: videoEN,
};

const content = {
  en: {
    badge: "MIIT CERTIFIED · CHINA AI ECOSYSTEM PARTNER · MALAYSIA",
    badgeSubtitle: "MIIT — Ministry of Industry, Information and Technology of the People's Republic of China",
    cta: "Start Your AI Transformation",
    systemsTitle: "Our",
    systemsTitleHighlight: "Systems",
    systemsSubtitle: "Two complete AI ecosystems — M-EasyDo AI+ and M-EasyTools AI+ — broken into 16 integrated systems to run and grow your business. Click any system to open it.",
    systemsEasyDoTagline: "Business operations, CRM, marketing & customer support",
    systemsEasyToolsTagline: "AI content, social, mail, ads, SEO, commerce, sales & more",
    systemsMainPlatform: "Main Platform",
    systemsOpensInNewTab: "(opens in a new tab)",
    coreMsgPrefix: "AI Adoption Is No Longer Optional —",
    coreMsgSuffix: "It Is the Core Driver of Future Business Survival and Growth.",
    exploreTitle: "Explore",
    exploreSubtitle: "Navigate to any section to learn more",
    navItems: [
      { id: "about", title: "About Us", desc: "Our mission and global standards" },
      { id: "why-choose-us", title: "Why Choose Us", desc: "Certified and proven results" },
      { id: "services", title: "Our Services", desc: "End-to-end AI solutions" },
      { id: "courses", title: "Our Courses", desc: "12 AI certification programmes" },
      { id: "systems", title: "Our Systems", desc: "16 integrated AI systems" },
      { id: "activities", title: "Our Activities", desc: "Events and milestones" },
      { id: "get-started", title: "Get Started", desc: "Begin your transformation" },
    ],
    videoTitle: "AI Transformation",
    videoTitleHighlight: "in Action",
    videoSubtitle: "Empowering the Future with AI",
    statsTitle: "Measurable",
    statsTitleHighlight: "Impact",
    statsSubtitle: "Backed by China's largest AI training network — 2,600 universities, 300,000+ certified professionals.",
    stats: [
      { value: "3–10x", label: "Productivity Gain" },
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
      "Increase Workforce Productivity by 3–10X Through Applied AI Systems and Automation",
      "Bridge the AI Talent Gap with Real-World Training, Backed by China's No.1 AI Training Institution and MIIT Certification",
      "AI Adoption Is No Longer Optional — It Is the Core Driver of Future Business Survival and Growth",
    ],
  },
  bm: {
    badge: "BERTAULIAH MIIT · RAKAN EKOSISTEM AI CHINA · MALAYSIA",
    badgeSubtitle: "MIIT — Kementerian Industri, Maklumat dan Teknologi Republik Rakyat China",
    cta: "Mulakan Transformasi AI Anda",
    systemsTitle: "Sistem",
    systemsTitleHighlight: "Kami",
    systemsSubtitle: "Dua ekosistem AI lengkap — M-EasyDo AI+ dan M-EasyTools AI+ — dipecahkan kepada 16 sistem bersepadu untuk menjalankan dan mengembangkan perniagaan anda. Klik mana-mana sistem untuk membukanya.",
    systemsEasyDoTagline: "Operasi perniagaan, CRM, pemasaran & sokongan pelanggan",
    systemsEasyToolsTagline: "Kandungan AI, sosial, mel, iklan, SEO, e-dagang, jualan & lagi",
    systemsMainPlatform: "Platform Utama",
    systemsOpensInNewTab: "(buka dalam tab baharu)",
    coreMsgPrefix: "Penggunaan AI Bukan Lagi Pilihan —",
    coreMsgSuffix: "Ia Adalah Pemacu Utama Kelangsungan dan Pertumbuhan Perniagaan Masa Depan.",
    exploreTitle: "Jelajahi",
    exploreSubtitle: "Pergi ke mana-mana bahagian untuk mengetahui lebih lanjut",
    navItems: [
      { id: "about", title: "Tentang Kami", desc: "Misi dan standard global kami" },
      { id: "why-choose-us", title: "Mengapa Pilih Kami", desc: "Hasil bersertifikasi dan terbukti" },
      { id: "services", title: "Perkhidmatan Kami", desc: "Penyelesaian AI menyeluruh" },
      { id: "courses", title: "Kursus Kami", desc: "12 program sijil AI" },
      { id: "systems", title: "Sistem Kami", desc: "16 sistem AI bersepadu" },
      { id: "activities", title: "Aktiviti Kami", desc: "Acara dan pencapaian" },
      { id: "get-started", title: "Mulakan", desc: "Mulakan transformasi anda" },
    ],
    videoTitle: "Transformasi AI",
    videoTitleHighlight: "dalam Tindakan",
    videoSubtitle: "Memperkasakan Masa Depan dengan AI",
    statsTitle: "Impak",
    statsTitleHighlight: "Terukur",
    statsSubtitle: "Disokong oleh rangkaian latihan AI terbesar China — 2,600 universiti, 300,000+ profesional bersijil.",
    stats: [
      { value: "3–10x", label: "Peningkatan Produktiviti" },
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
      "Tingkatkan Produktiviti Tenaga Kerja 3–10X Melalui Sistem AI Gunaan dan Automasi",
      "Hapuskan Jurang Bakat AI dengan Latihan Dunia Nyata, Disokong oleh Institusi Latihan AI No.1 China dan Sijil MIIT",
      "Penggunaan AI Bukan Lagi Pilihan — Ia Adalah Pemacu Utama Kelangsungan dan Pertumbuhan Perniagaan Masa Depan",
    ],
  },
  cn: {
    badge: "MIIT 认证 · 中国 AI 生态合作伙伴 · 马来西亚",
    badgeSubtitle: "MIIT —— 中华人民共和国工业和信息化部",
    cta: "开启您的 AI 转型",
    systemsTitle: "我们的",
    systemsTitleHighlight: "系统",
    systemsSubtitle: "两个完整的 AI 生态系统——M-EasyDo AI+ 与 M-EasyTools AI+——拆分为 16 个集成系统，助力您经营和发展业务。点击任意系统即可打开。",
    systemsEasyDoTagline: "业务运营、CRM、营销与客户支持",
    systemsEasyToolsTagline: "AI 内容、社交、邮件、广告、SEO、电商、销售等",
    systemsMainPlatform: "主平台",
    systemsOpensInNewTab: "（在新标签页中打开）",
    coreMsgPrefix: "AI 应用不再是可选项 ——",
    coreMsgSuffix: "它是未来商业生存与发展的核心驱动力。",
    exploreTitle: "探索",
    exploreSubtitle: "前往任意板块以了解更多",
    navItems: [
      { id: "about", title: "关于我们", desc: "我们的使命与全球标准" },
      { id: "why-choose-us", title: "为何选择我们", desc: "认证与已验证的成果" },
      { id: "services", title: "我们的服务", desc: "端到端AI解决方案" },
      { id: "courses", title: "我们的课程", desc: "12个AI认证项目" },
      { id: "systems", title: "我们的系统", desc: "16个集成 AI 系统" },
      { id: "activities", title: "我们的活动", desc: "活动与里程碑" },
      { id: "get-started", title: "立即开始", desc: "开启您的转型" },
    ],
    videoTitle: "AI 转型",
    videoTitleHighlight: "实战中",
    videoSubtitle: "用 AI 赋能未来",
    statsTitle: "可衡量的",
    statsTitleHighlight: "影响",
    statsSubtitle: "由中国最大的AI培训网络支持——2,600所大学，30万+认证专业人员。",
    stats: [
      { value: "3–10x", label: "生产力提升" },
      { value: "30万+", label: "认证毕业生" },
      { value: "2,600", label: "合作大学" },
      { value: "100%", label: "真实场景应用" },
    ],
    testimonialTitle: "客户",
    testimonialTitleHighlight: "成功",
    testimonialSubtitle: "马来西亚企业采用MIIT认证AI框架的真实转型。",
    testimonials: [
      { quote: "MODUS AI 彻底改造了我们的电商供应链。曾经需要10人团队5天完成的工作，现在已完全自动化和预测性。MIIT 认证赋予我们团队全球公信力。", author: "Sarah L.", role: "运营总监，Quantum Retail" },
      { quote: "在 MODUS 向我们展示中国真正的AI生态系统之前，我们以为AI只是个流行词。我们的客服响应时间下降80%，满意度飙升——团队现已获得AIGC认证。", author: "James Wong", role: "首席执行官，NEXA Logistics" },
    ],
    footerTitle: "准备引领马来西亚的",
    footerTitleHighlight: "AI 革命？",
    footerSubtitle: "加入 MODUS AI 网络——由 MIIT 认证，由中国第一AI培训生态系统提供动力。",
    footerCta: "立即联系",
    headlines: [
      "将马来西亚的AI商业能力转型至全球标准——由中国世界领先的AI生态系统提供动力",
      "通过行业认证培训和技术整合，将马来西亚公司提升至世界级AI执行水平",
      "通过应用AI系统和自动化将员工生产力提升5–10倍",
      "用真实世界培训弥合AI人才差距，由中国第一AI培训机构和MIIT认证支持",
      "AI应用不再是可选项——它是未来商业生存与发展的核心驱动力",
    ],
  },
  id: {
    badge: "TERSERTIFIKASI MIIT · MITRA EKOSISTEM AI TIONGKOK · MALAYSIA",
    badgeSubtitle: "MIIT — Kementerian Industri, Informasi dan Teknologi Republik Rakyat Tiongkok",
    cta: "Mulai Transformasi AI Anda",
    systemsTitle: "Sistem",
    systemsTitleHighlight: "Kami",
    systemsSubtitle: "Dua ekosistem AI lengkap — M-EasyDo AI+ dan M-EasyTools AI+ — dibagi menjadi 16 sistem terintegrasi untuk menjalankan dan mengembangkan bisnis Anda. Klik sistem mana pun untuk membukanya.",
    systemsEasyDoTagline: "Operasi bisnis, CRM, pemasaran & dukungan pelanggan",
    systemsEasyToolsTagline: "Konten AI, sosial, email, iklan, SEO, e-commerce, penjualan & lainnya",
    systemsMainPlatform: "Platform Utama",
    systemsOpensInNewTab: "(buka di tab baru)",
    coreMsgPrefix: "Adopsi AI Bukan Lagi Pilihan —",
    coreMsgSuffix: "Ini adalah Pendorong Utama Kelangsungan dan Pertumbuhan Bisnis Masa Depan.",
    exploreTitle: "Jelajahi",
    exploreSubtitle: "Navigasi ke bagian mana pun untuk mempelajari lebih lanjut",
    navItems: [
      { id: "about", title: "Tentang Kami", desc: "Misi dan standar global kami" },
      { id: "why-choose-us", title: "Mengapa Memilih Kami", desc: "Hasil tersertifikasi dan terbukti" },
      { id: "services", title: "Layanan Kami", desc: "Solusi AI menyeluruh" },
      { id: "courses", title: "Kursus Kami", desc: "12 program sertifikasi AI" },
      { id: "systems", title: "Sistem Kami", desc: "16 sistem AI terintegrasi" },
      { id: "activities", title: "Aktivitas Kami", desc: "Acara dan tonggak" },
      { id: "get-started", title: "Mulai", desc: "Mulai transformasi Anda" },
    ],
    videoTitle: "Transformasi AI",
    videoTitleHighlight: "dalam Aksi",
    videoSubtitle: "Memberdayakan Masa Depan dengan AI",
    statsTitle: "Dampak",
    statsTitleHighlight: "Terukur",
    statsSubtitle: "Didukung oleh jaringan pelatihan AI terbesar Tiongkok — 2.600 universitas, 300.000+ profesional tersertifikasi.",
    stats: [
      { value: "3–10x", label: "Peningkatan Produktivitas" },
      { value: "300K+", label: "Lulusan Tersertifikasi" },
      { value: "2.600", label: "Universitas Mitra" },
      { value: "100%", label: "Penerapan Dunia Nyata" },
    ],
    testimonialTitle: "Sukses",
    testimonialTitleHighlight: "Klien",
    testimonialSubtitle: "Transformasi nyata dari bisnis Malaysia yang mengadopsi kerangka kerja AI tersertifikasi MIIT.",
    testimonials: [
      { quote: "MODUS AI sepenuhnya merombak rantai pasok e-commerce kami. Yang dulu membutuhkan tim 10 orang selama lima hari kini sepenuhnya otomatis dan prediktif. Sertifikasi MIIT memberi tim kami kredibilitas global.", author: "Sarah L.", role: "Direktur Operasi, Quantum Retail" },
      { quote: "Kami pikir AI adalah kata kosong sampai MODUS menunjukkan ekosistem AI nyata Tiongkok. Waktu respons layanan pelanggan kami turun 80% sementara kepuasan melonjak — dan tim kami sekarang tersertifikasi AIGC.", author: "James Wong", role: "CEO, NEXA Logistics" },
    ],
    footerTitle: "Siap Memimpin",
    footerTitleHighlight: "Revolusi AI Malaysia?",
    footerSubtitle: "Bergabunglah dengan jaringan MODUS AI — disertifikasi oleh MIIT, didukung oleh ekosistem pelatihan AI No.1 Tiongkok.",
    footerCta: "Hubungi Kami",
    headlines: [
      "Transformasikan Kemampuan Bisnis AI Malaysia ke Standar Global — Didukung Ekosistem AI Terdepan Dunia milik Tiongkok",
      "Angkat Perusahaan Malaysia ke Eksekusi AI Kelas Dunia Melalui Pelatihan Tersertifikasi Industri dan Integrasi Teknologi",
      "Tingkatkan Produktivitas Tenaga Kerja 3–10X Melalui Sistem AI Terapan dan Otomatisasi",
      "Jembatani Kesenjangan Talenta AI dengan Pelatihan Dunia Nyata, Didukung oleh Lembaga Pelatihan AI No.1 Tiongkok dan Sertifikasi MIIT",
      "Adopsi AI Bukan Lagi Pilihan — Ini adalah Pendorong Utama Kelangsungan dan Pertumbuhan Bisnis Masa Depan",
    ],
  },
  vn: {
    badge: "ĐƯỢC CHỨNG NHẬN MIIT · ĐỐI TÁC HỆ SINH THÁI AI TRUNG QUỐC · MALAYSIA",
    badgeSubtitle: "MIIT — Bộ Công nghiệp, Thông tin và Công nghệ của Cộng hòa Nhân dân Trung Hoa",
    cta: "Bắt Đầu Chuyển Đổi AI của Bạn",
    systemsTitle: "Hệ Thống",
    systemsTitleHighlight: "Của Chúng Tôi",
    systemsSubtitle: "Hai hệ sinh thái AI hoàn chỉnh — M-EasyDo AI+ và M-EasyTools AI+ — được chia thành 16 hệ thống tích hợp để vận hành và phát triển doanh nghiệp của bạn. Nhấp vào bất kỳ hệ thống nào để mở.",
    systemsEasyDoTagline: "Vận hành kinh doanh, CRM, tiếp thị & hỗ trợ khách hàng",
    systemsEasyToolsTagline: "Nội dung AI, mạng xã hội, email, quảng cáo, SEO, thương mại, bán hàng & hơn nữa",
    systemsMainPlatform: "Nền tảng chính",
    systemsOpensInNewTab: "(mở trong tab mới)",
    coreMsgPrefix: "Áp Dụng AI Không Còn Là Tùy Chọn —",
    coreMsgSuffix: "Đó là Động Lực Cốt Lõi cho Sự Tồn Tại và Tăng Trưởng Doanh Nghiệp trong Tương Lai.",
    exploreTitle: "Khám Phá",
    exploreSubtitle: "Điều hướng đến bất kỳ phần nào để tìm hiểu thêm",
    navItems: [
      { id: "about", title: "Về Chúng Tôi", desc: "Sứ mệnh và tiêu chuẩn toàn cầu của chúng tôi" },
      { id: "why-choose-us", title: "Tại Sao Chọn Chúng Tôi", desc: "Kết quả được chứng nhận và đã chứng minh" },
      { id: "services", title: "Dịch Vụ", desc: "Giải pháp AI từ đầu đến cuối" },
      { id: "courses", title: "Khóa Học", desc: "12 chương trình chứng nhận AI" },
      { id: "systems", title: "Hệ Thống Của Chúng Tôi", desc: "16 hệ thống AI tích hợp" },
      { id: "activities", title: "Hoạt Động", desc: "Sự kiện và cột mốc" },
      { id: "get-started", title: "Bắt Đầu", desc: "Bắt đầu chuyển đổi của bạn" },
    ],
    videoTitle: "Chuyển Đổi AI",
    videoTitleHighlight: "Trong Hành Động",
    videoSubtitle: "Trao Quyền cho Tương Lai bằng AI",
    statsTitle: "Tác Động",
    statsTitleHighlight: "Có Thể Đo Lường",
    statsSubtitle: "Được hỗ trợ bởi mạng lưới đào tạo AI lớn nhất Trung Quốc — 2.600 trường đại học, 300.000+ chuyên gia được chứng nhận.",
    stats: [
      { value: "3–10x", label: "Tăng Năng Suất" },
      { value: "300K+", label: "Sinh Viên Tốt Nghiệp Có Chứng Chỉ" },
      { value: "2.600", label: "Trường Đại Học Đối Tác" },
      { value: "100%", label: "Ứng Dụng Thực Tế" },
    ],
    testimonialTitle: "Thành Công",
    testimonialTitleHighlight: "Khách Hàng",
    testimonialSubtitle: "Những chuyển đổi thực sự từ các doanh nghiệp Malaysia áp dụng khung AI được chứng nhận MIIT.",
    testimonials: [
      { quote: "MODUS AI đã cải tổ hoàn toàn chuỗi cung ứng thương mại điện tử của chúng tôi. Những gì từng cần một đội 10 người làm trong năm ngày giờ đây hoàn toàn tự động và dự đoán. Chứng nhận MIIT mang lại uy tín toàn cầu cho đội của chúng tôi.", author: "Sarah L.", role: "Giám Đốc Vận Hành, Quantum Retail" },
      { quote: "Chúng tôi nghĩ AI chỉ là một từ thông dụng cho đến khi MODUS cho chúng tôi thấy hệ sinh thái AI thực sự của Trung Quốc. Thời gian phản hồi dịch vụ khách hàng của chúng tôi giảm 80% trong khi sự hài lòng tăng vọt — và đội ngũ của chúng tôi giờ đây được chứng nhận AIGC.", author: "James Wong", role: "CEO, NEXA Logistics" },
    ],
    footerTitle: "Sẵn Sàng Dẫn Đầu",
    footerTitleHighlight: "Cuộc Cách Mạng AI Malaysia?",
    footerSubtitle: "Tham gia mạng lưới MODUS AI — được chứng nhận bởi MIIT, được hỗ trợ bởi hệ sinh thái đào tạo AI số 1 Trung Quốc.",
    footerCta: "Liên Hệ",
    headlines: [
      "Chuyển Đổi Năng Lực Kinh Doanh AI của Malaysia Lên Tiêu Chuẩn Toàn Cầu — Được Hỗ Trợ Bởi Hệ Sinh Thái AI Hàng Đầu Thế Giới của Trung Quốc",
      "Nâng Tầm Các Công Ty Malaysia Lên Mức Thực Thi AI Đẳng Cấp Thế Giới Thông Qua Đào Tạo Được Ngành Chứng Nhận và Tích Hợp Công Nghệ",
      "Tăng Năng Suất Lao Động 5–10 Lần Thông Qua Hệ Thống AI Ứng Dụng và Tự Động Hóa",
      "Thu Hẹp Khoảng Cách Nhân Tài AI với Đào Tạo Thực Tế, Được Hỗ Trợ Bởi Học Viện Đào Tạo AI Số 1 Trung Quốc và Chứng Nhận MIIT",
      "Áp Dụng AI Không Còn Là Tùy Chọn — Đó là Động Lực Cốt Lõi cho Sự Tồn Tại và Tăng Trưởng Doanh Nghiệp trong Tương Lai",
    ],
  },
  ar: {
    badge: "معتمد من MIIT · شريك منظومة AI الصينية · ماليزيا",
    badgeSubtitle: "MIIT — وزارة الصناعة والمعلومات والتكنولوجيا في جمهورية الصين الشعبية",
    cta: "ابدأ تحول الذكاء الاصطناعي الخاص بك",
    systemsTitle: "أنظمتنا",
    systemsTitleHighlight: "المتكاملة",
    systemsSubtitle: "منظومتان متكاملتان للذكاء الاصطناعي — M-EasyDo AI+ و M-EasyTools AI+ — مقسمتان إلى 16 نظاماً متكاملاً لإدارة أعمالك وتنميتها. انقر على أي نظام لفتحه.",
    systemsEasyDoTagline: "عمليات الأعمال وإدارة العملاء والتسويق ودعم العملاء",
    systemsEasyToolsTagline: "محتوى الذكاء الاصطناعي والتواصل الاجتماعي والبريد والإعلانات وتحسين محركات البحث والتجارة والمبيعات والمزيد",
    systemsMainPlatform: "المنصة الرئيسية",
    systemsOpensInNewTab: "(يُفتح في علامة تبويب جديدة)",
    coreMsgPrefix: "اعتماد الذكاء الاصطناعي لم يعد اختيارياً —",
    coreMsgSuffix: "إنه المحرك الأساسي لبقاء ونمو الأعمال في المستقبل.",
    exploreTitle: "استكشف",
    exploreSubtitle: "انتقل إلى أي قسم لمعرفة المزيد",
    navItems: [
      { id: "about", title: "من نحن", desc: "مهمتنا والمعايير العالمية" },
      { id: "why-choose-us", title: "لماذا تختارنا", desc: "نتائج معتمدة ومثبتة" },
      { id: "services", title: "خدماتنا", desc: "حلول AI من البداية إلى النهاية" },
      { id: "courses", title: "دوراتنا", desc: "12 برنامج اعتماد AI" },
      { id: "systems", title: "أنظمتنا", desc: "16 نظام ذكاء اصطناعي متكامل" },
      { id: "activities", title: "أنشطتنا", desc: "الفعاليات والمعالم" },
      { id: "get-started", title: "ابدأ", desc: "ابدأ تحولك" },
    ],
    videoTitle: "تحول الذكاء الاصطناعي",
    videoTitleHighlight: "في العمل",
    videoSubtitle: "تمكين المستقبل بالذكاء الاصطناعي",
    statsTitle: "تأثير",
    statsTitleHighlight: "قابل للقياس",
    statsSubtitle: "مدعومة بأكبر شبكة تدريب AI في الصين — 2,600 جامعة، 300,000+ محترف معتمد.",
    stats: [
      { value: "3–10x", label: "زيادة الإنتاجية" },
      { value: "300K+", label: "خريجون معتمدون" },
      { value: "2,600", label: "جامعة شريكة" },
      { value: "100%", label: "تطبيق العالم الحقيقي" },
    ],
    testimonialTitle: "نجاح",
    testimonialTitleHighlight: "العملاء",
    testimonialSubtitle: "تحولات حقيقية من شركات ماليزية تتبنى أطر AI المعتمدة من MIIT.",
    testimonials: [
      { quote: "أعاد MODUS AI هيكلة سلسلة التوريد للتجارة الإلكترونية لدينا تماماً. ما كان يستغرق فريقاً من 10 أشخاص خمسة أيام أصبح الآن مؤتمتاً تماماً وتنبؤياً. تمنح شهادة MIIT فريقنا مصداقية عالمية.", author: "Sarah L.", role: "مدير العمليات، Quantum Retail" },
      { quote: "اعتقدنا أن AI كلمة طنانة حتى أرانا MODUS منظومة AI الحقيقية في الصين. انخفض وقت استجابة خدمة العملاء لدينا بنسبة 80٪ بينما ارتفعت الرضا — وفريقنا الآن معتمد من AIGC.", author: "James Wong", role: "الرئيس التنفيذي، NEXA Logistics" },
    ],
    footerTitle: "مستعد لقيادة",
    footerTitleHighlight: "ثورة AI في ماليزيا؟",
    footerSubtitle: "انضم إلى شبكة MODUS AI — معتمدة من MIIT، مدعومة بأكبر منظومة تدريب AI رقم 1 في الصين.",
    footerCta: "تواصل معنا",
    headlines: [
      "حوّل قدرات أعمال AI في ماليزيا إلى المعايير العالمية — مدعومة بمنظومة AI الرائدة عالمياً في الصين",
      "ارتقِ بالشركات الماليزية إلى تنفيذ AI من الطراز العالمي من خلال التدريب المعتمد من الصناعة وتكامل التكنولوجيا",
      "زد إنتاجية القوى العاملة بمقدار 5–10 أضعاف من خلال أنظمة AI التطبيقية والأتمتة",
      "اربط بين فجوة المواهب AI بالتدريب في العالم الحقيقي، مدعوماً بمؤسسة التدريب AI رقم 1 في الصين واعتماد MIIT",
      "اعتماد AI لم يعد اختيارياً — إنه المحرك الأساسي لبقاء ونمو الأعمال في المستقبل",
    ],
  },
  th: {
    badge: "รับรองโดย MIIT · พันธมิตรระบบนิเวศ AI ของจีน · มาเลเซีย",
    badgeSubtitle: "MIIT — กระทรวงอุตสาหกรรม สารสนเทศ และเทคโนโลยีแห่งสาธารณรัฐประชาชนจีน",
    cta: "เริ่มต้นการเปลี่ยนผ่านสู่ AI ของคุณ",
    systemsTitle: "ระบบ",
    systemsTitleHighlight: "ของเรา",
    systemsSubtitle: "ระบบนิเวศ AI ที่สมบูรณ์สองระบบ — M-EasyDo AI+ และ M-EasyTools AI+ — แบ่งออกเป็น 16 ระบบที่เชื่อมต่อกันเพื่อดำเนินและขยายธุรกิจของคุณ คลิกที่ระบบใดก็ได้เพื่อเปิด",
    systemsEasyDoTagline: "การดำเนินธุรกิจ, CRM, การตลาด และการสนับสนุนลูกค้า",
    systemsEasyToolsTagline: "เนื้อหา AI, โซเชียล, อีเมล, โฆษณา, SEO, อีคอมเมิร์ซ, การขาย และอื่นๆ",
    systemsMainPlatform: "แพลตฟอร์มหลัก",
    systemsOpensInNewTab: "(เปิดในแท็บใหม่)",
    coreMsgPrefix: "การนำ AI มาใช้ไม่ใช่ทางเลือกอีกต่อไป —",
    coreMsgSuffix: "แต่เป็นแรงขับเคลื่อนหลักของการอยู่รอดและการเติบโตทางธุรกิจในอนาคต",
    exploreTitle: "สำรวจ",
    exploreSubtitle: "ไปยังส่วนใดก็ได้เพื่อเรียนรู้เพิ่มเติม",
    navItems: [
      { id: "about", title: "เกี่ยวกับเรา", desc: "พันธกิจและมาตรฐานระดับโลกของเรา" },
      { id: "why-choose-us", title: "ทำไมต้องเลือกเรา", desc: "ผลลัพธ์ที่ผ่านการรับรองและพิสูจน์แล้ว" },
      { id: "services", title: "บริการของเรา", desc: "โซลูชัน AI แบบครบวงจร" },
      { id: "courses", title: "หลักสูตรของเรา", desc: "12 หลักสูตรประกาศนียบัตร AI" },
      { id: "systems", title: "ระบบของเรา", desc: "16 ระบบ AI ที่เชื่อมต่อกัน" },
      { id: "activities", title: "กิจกรรมของเรา", desc: "อีเวนต์และความสำเร็จ" },
      { id: "get-started", title: "เริ่มต้น", desc: "เริ่มต้นการเปลี่ยนผ่านของคุณ" },
    ],
    videoTitle: "การเปลี่ยนผ่านสู่ AI",
    videoTitleHighlight: "ในการปฏิบัติจริง",
    videoSubtitle: "ขับเคลื่อนอนาคตด้วย AI",
    statsTitle: "ผลกระทบที่",
    statsTitleHighlight: "วัดผลได้",
    statsSubtitle: "หนุนโดยเครือข่ายการฝึกอบรม AI ที่ใหญ่ที่สุดของจีน — 2,600 มหาวิทยาลัย, ผู้เชี่ยวชาญที่ผ่านการรับรองกว่า 300,000 คน",
    stats: [
      { value: "3–10x", label: "เพิ่มผลิตภาพ" },
      { value: "300K+", label: "ผู้สำเร็จการศึกษาที่ได้รับการรับรอง" },
      { value: "2,600", label: "มหาวิทยาลัยพันธมิตร" },
      { value: "100%", label: "การประยุกต์ใช้ในโลกจริง" },
    ],
    testimonialTitle: "ความสำเร็จของ",
    testimonialTitleHighlight: "ลูกค้า",
    testimonialSubtitle: "การเปลี่ยนแปลงจริงจากธุรกิจในมาเลเซียที่นำกรอบงาน AI ที่ได้รับการรับรองจาก MIIT มาใช้",
    testimonials: [
      {
        quote: "MODUS AI ปฏิรูปห่วงโซ่อุปทานอีคอมเมิร์ซของเราอย่างสมบูรณ์ สิ่งที่เคยใช้ทีม 10 คนทำงาน 5 วัน ตอนนี้เป็นอัตโนมัติและคาดการณ์ได้ทั้งหมด การรับรอง MIIT ทำให้ทีมของเรามีความน่าเชื่อถือระดับโลก",
        author: "Sarah L.",
        role: "ผู้อำนวยการฝ่ายปฏิบัติการ Quantum Retail",
      },
      {
        quote: "เราคิดว่า AI เป็นแค่คำพูดเท่ๆ จนกระทั่ง MODUS แสดงให้เราเห็นระบบนิเวศ AI ที่แท้จริงของจีน เวลาตอบสนองบริการลูกค้าของเราลดลง 80% ในขณะที่ความพึงพอใจพุ่งสูง — และทีมของเราตอนนี้ได้รับการรับรอง AIGC แล้ว",
        author: "James Wong",
        role: "ซีอีโอ NEXA Logistics",
      },
    ],
    footerTitle: "พร้อมที่จะนำ",
    footerTitleHighlight: "การปฏิวัติ AI ของมาเลเซียแล้วหรือยัง?",
    footerSubtitle: "เข้าร่วมเครือข่าย MODUS AI — รับรองโดย MIIT ขับเคลื่อนโดยระบบนิเวศการฝึกอบรม AI อันดับ 1 ของจีน",
    footerCta: "ติดต่อเรา",
    headlines: [
      "ยกระดับขีดความสามารถทางธุรกิจ AI ของมาเลเซียสู่มาตรฐานโลก — ขับเคลื่อนโดยระบบนิเวศ AI ชั้นนำของจีน",
      "ยกระดับบริษัทมาเลเซียสู่การปฏิบัติ AI ระดับโลกผ่านการฝึกอบรมและการบูรณาการเทคโนโลยีที่ได้รับการรับรองจากอุตสาหกรรม",
      "เพิ่มผลิตภาพแรงงาน 3–10 เท่าด้วยระบบ AI ประยุกต์และระบบอัตโนมัติ",
      "เชื่อมช่องว่างบุคลากร AI ด้วยการฝึกอบรมในโลกจริง หนุนโดยสถาบันฝึกอบรม AI อันดับ 1 ของจีนและการรับรองจาก MIIT",
      "การนำ AI มาใช้ไม่ใช่ทางเลือกอีกต่อไป — เป็นแรงขับเคลื่อนหลักของการอยู่รอดและการเติบโตทางธุรกิจในอนาคต",
    ],
  },
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  about: Globe,
  "why-choose-us": ShieldCheck,
  services: Cpu,
  courses: GraduationCap,
  systems: Building2,
  activities: Network,
  "get-started": Zap,
};

const colorMap: Record<string, { border: string; shadow: string; grad: string; iconColor: string }> = {
  about:          { border: "hover:border-primary",   shadow: "hover:shadow-[0_0_25px_rgba(212,158,46,0.3)]",   grad: "from-primary/20",   iconColor: "text-primary" },
  "why-choose-us":{ border: "hover:border-secondary", shadow: "hover:shadow-[0_0_25px_rgba(124,58,237,0.3)]", grad: "from-secondary/20", iconColor: "text-secondary" },
  services:       { border: "hover:border-primary",   shadow: "hover:shadow-[0_0_25px_rgba(212,158,46,0.3)]",   grad: "from-primary/20",   iconColor: "text-primary" },
  courses:        { border: "hover:border-secondary", shadow: "hover:shadow-[0_0_25px_rgba(124,58,237,0.3)]", grad: "from-secondary/20", iconColor: "text-secondary" },
  systems:        { border: "hover:border-primary",   shadow: "hover:shadow-[0_0_25px_rgba(212,158,46,0.3)]",   grad: "from-primary/20",   iconColor: "text-primary" },
  activities:     { border: "hover:border-primary",   shadow: "hover:shadow-[0_0_25px_rgba(212,158,46,0.3)]",   grad: "from-primary/20",   iconColor: "text-primary" },
  "get-started":  { border: "hover:border-primary",   shadow: "hover:shadow-[0_0_25px_rgba(212,158,46,0.3)]",   grad: "from-primary/20",   iconColor: "text-primary" },
};

const statIcons = [BarChart3, Users, Network, Brain];

type SystemId =
  | "easydo-main" | "easydo-crm" | "easydo-email" | "easydo-automation" | "easydo-multichannel" | "easydo-support"
  | "easytools-main" | "easytools-content" | "easytools-social" | "easytools-mail" | "easytools-ads"
  | "easytools-seo" | "easytools-commerce" | "easytools-sales" | "easytools-chat" | "easytools-gao";
type SystemLink = { id: SystemId; name: string; url: string; isMain?: boolean };
type SystemGroup = {
  brand: string;
  taglineKey: "systemsEasyDoTagline" | "systemsEasyToolsTagline";
  icon: React.ComponentType<{ className?: string }>;
  styles: { iconWrap: string; icon: string; badge: string; arrow: string; card: string };
  systems: SystemLink[];
};

const systemGroups: SystemGroup[] = [
  {
    brand: "M-EasyDo AI+",
    taglineKey: "systemsEasyDoTagline",
    icon: Building2,
    styles: {
      iconWrap: "bg-primary/10 border-primary/30",
      icon: "text-primary",
      badge: "bg-primary/15 text-primary border-primary/30",
      arrow: "group-hover:text-primary",
      card: "hover:border-primary/40 hover:shadow-[0_0_30px_rgba(212,158,46,0.12)]",
    },
    systems: [
      { id: "easydo-main", name: "M-EasyDo Business Operations AI+ System", isMain: true, url: "https://m-easydo-ai-production.up.railway.app" },
      { id: "easydo-crm", name: "M-EasyDo AI+ Core CRM Dashboard", url: "https://m-easydo-ai-production.up.railway.app/app?redirect=home" },
      { id: "easydo-email", name: "M-EasyEmail Marketing AI+ System", url: "https://m-easydo-ai-production.up.railway.app/app?redirect=emarketing" },
      { id: "easydo-automation", name: "M-Easy Marketing Automation AI+ System", url: "https://m-easydo-ai-production.up.railway.app/app?redirect=mautomation" },
      { id: "easydo-multichannel", name: "M-EasyMultichannel Communication AI+ System", url: "https://m-easydo-ai-production.up.railway.app/app?redirect=omnichannel" },
      { id: "easydo-support", name: "M-Easy Customer Support AI+ System", url: "https://m-easydo-ai-production.up.railway.app/app?redirect=csupport" },
    ],
  },
  {
    brand: "M-EasyTools AI+",
    taglineKey: "systemsEasyToolsTagline",
    icon: Wrench,
    styles: {
      iconWrap: "bg-secondary/10 border-secondary/30",
      icon: "text-secondary",
      badge: "bg-secondary/15 text-secondary border-secondary/30",
      arrow: "group-hover:text-secondary",
      card: "hover:border-secondary/40 hover:shadow-[0_0_30px_rgba(124,58,237,0.12)]",
    },
    systems: [
      { id: "easytools-main", name: "M-EasyTools AI+", isMain: true, url: "https://m-easytools-ai-production.up.railway.app" },
      { id: "easytools-content", name: "M-EasyContent AI+ Tools", url: "https://m-easytools-ai-production.up.railway.app/app.html?goto=tools&cat=blog" },
      { id: "easytools-social", name: "M-EasySocial AI+ Tools", url: "https://m-easytools-ai-production.up.railway.app/app.html?goto=tools&cat=social" },
      { id: "easytools-mail", name: "M-EasyMail AI+ Tools", url: "https://m-easytools-ai-production.up.railway.app/app.html?goto=tools&cat=email" },
      { id: "easytools-ads", name: "M-EasyAds AI+ Tools", url: "https://m-easytools-ai-production.up.railway.app/app.html?goto=tools&cat=ads" },
      { id: "easytools-seo", name: "M-EasySEO AI+ Tools", url: "https://m-easytools-ai-production.up.railway.app/app.html?goto=seo" },
      { id: "easytools-commerce", name: "M-EasyCommerce AI+ Tools", url: "https://m-easytools-ai-production.up.railway.app/app.html?goto=tools&cat=ecom" },
      { id: "easytools-sales", name: "M-EasySales AI+ Tools", url: "https://m-easytools-ai-production.up.railway.app/app.html?goto=tools&cat=sales" },
      { id: "easytools-chat", name: "M-EasyTools AI+ System (AI Chat)", url: "https://m-easytools-ai-production.up.railway.app/app.html?goto=chat" },
      { id: "easytools-gao", name: "M-EasyGAO AI+ Suite", url: "https://m-easytools-ai-production.up.railway.app/gao" },
    ],
  },
];

const SYSTEM_DESCRIPTIONS: Record<Lang, Record<SystemId, string>> = {
  en: {
    "easydo-main": "An all-in-one AI-powered business management platform that combines CRM, communication, marketing, and customer support into a single system — designed to help businesses manage their entire customer journey effortlessly.",
    "easydo-crm": "Manage your leads, contacts, accounts, and sales pipeline in one place. Track opportunities, assign tasks, log activities, and never miss a follow-up — giving your team full visibility over every customer relationship.",
    "easydo-email": "Create, send, and track email campaigns to your subscriber lists. Manage contacts, monitor open rates and clicks, and run automated email sequences to nurture your leads.",
    "easydo-automation": "Build automated workflows that trigger actions based on customer behaviour — send emails, update records, assign tasks, and move leads through your pipeline without lifting a finger.",
    "easydo-multichannel": "Receive and reply to customer messages from WhatsApp, Telegram, Facebook Messenger, Instagram, LINE, and SMS — all in one unified inbox. No more switching between apps.",
    "easydo-support": "Handle customer tickets, complaints, and enquiries in a structured helpdesk system. Track ticket status, assign to team members, reply via email, and measure customer satisfaction with CSAT scores.",
    "easytools-main": "All-in-one AI marketing platform with 40+ tools, AI chat, bulk generation, document manager and full dashboard — built for Malaysian businesses.",
    "easytools-content": "Generate high-quality blog posts, articles, landing page copy and long-form content in seconds using AI — in English and Bahasa Malaysia.",
    "easytools-social": "Create scroll-stopping social media captions, hashtags, content calendars and viral post ideas for Facebook, Instagram, TikTok and LinkedIn.",
    "easytools-mail": "Write high-converting email sequences, newsletters, subject lines and drip campaigns that get opened, read and clicked.",
    "easytools-ads": "Generate persuasive ad copy for Google Ads, Facebook Ads, TikTok Ads and display banners that drive clicks and conversions.",
    "easytools-seo": "Optimize your content for search engines with AI-powered meta tags, keyword suggestions, SEO audits and on-page optimization tools.",
    "easytools-commerce": "Create compelling product descriptions, Shopify listings, eCommerce copy and upsell scripts that turn browsers into buyers.",
    "easytools-sales": "Write powerful sales scripts, cold outreach emails, proposal copy and follow-up sequences that close more deals faster.",
    "easytools-chat": "Your always-on AI marketing assistant — ask anything, generate content on demand, brainstorm ideas and get instant marketing advice 24/7.",
    "easytools-gao": "Track your brand's visibility inside ChatGPT, Claude, Gemini, Perplexity and DeepSeek — monitor AI citations, analyze prompts, extract entities and outrank competitors in AI search. The only GAO suite built for Malaysia and Southeast Asia.",
  },
  bm: {
    "easydo-main": "Platform pengurusan perniagaan berkuasa AI serba lengkap yang menggabungkan CRM, komunikasi, pemasaran dan sokongan pelanggan dalam satu sistem — direka untuk membantu perniagaan menguruskan keseluruhan perjalanan pelanggan dengan mudah.",
    "easydo-crm": "Urus petunjuk (leads), kenalan, akaun dan saluran jualan anda di satu tempat. Jejaki peluang, berikan tugasan, rekod aktiviti dan jangan terlepas sebarang susulan — memberi pasukan anda gambaran penuh setiap hubungan pelanggan.",
    "easydo-email": "Cipta, hantar dan jejaki kempen e-mel kepada senarai pelanggan anda. Urus kenalan, pantau kadar buka dan klik, serta jalankan urutan e-mel automatik untuk memupuk petunjuk anda.",
    "easydo-automation": "Bina aliran kerja automatik yang mencetuskan tindakan berdasarkan tingkah laku pelanggan — hantar e-mel, kemas kini rekod, berikan tugasan dan gerakkan petunjuk melalui saluran jualan tanpa sebarang usaha.",
    "easydo-multichannel": "Terima dan balas mesej pelanggan daripada WhatsApp, Telegram, Facebook Messenger, Instagram, LINE dan SMS — semuanya dalam satu peti masuk bersatu. Tiada lagi bertukar-tukar antara aplikasi.",
    "easydo-support": "Uruskan tiket, aduan dan pertanyaan pelanggan dalam sistem meja bantuan yang tersusun. Jejaki status tiket, agihkan kepada ahli pasukan, balas melalui e-mel dan ukur kepuasan pelanggan dengan skor CSAT.",
    "easytools-main": "Platform pemasaran AI serba lengkap dengan 40+ alat, sembang AI, penjanaan pukal, pengurus dokumen dan papan pemuka penuh — dibina untuk perniagaan Malaysia.",
    "easytools-content": "Jana catatan blog, artikel, salinan halaman pendaratan dan kandungan bentuk panjang berkualiti tinggi dalam beberapa saat menggunakan AI — dalam bahasa Inggeris dan Bahasa Malaysia.",
    "easytools-social": "Cipta kapsyen media sosial yang menarik perhatian, hashtag, kalendar kandungan dan idea siaran viral untuk Facebook, Instagram, TikTok dan LinkedIn.",
    "easytools-mail": "Tulis urutan e-mel, surat berita, baris subjek dan kempen titisan (drip) berkadar penukaran tinggi yang dibuka, dibaca dan diklik.",
    "easytools-ads": "Jana salinan iklan yang meyakinkan untuk Google Ads, Facebook Ads, TikTok Ads dan sepanduk paparan yang memacu klik dan penukaran.",
    "easytools-seo": "Optimumkan kandungan anda untuk enjin carian dengan tag meta berkuasa AI, cadangan kata kunci, audit SEO dan alat pengoptimuman pada halaman.",
    "easytools-commerce": "Cipta penerangan produk yang menarik, penyenaraian Shopify, salinan e-dagang dan skrip jualan tambahan (upsell) yang menukar pelawat menjadi pembeli.",
    "easytools-sales": "Tulis skrip jualan yang berkuasa, e-mel jangkauan sejuk (cold outreach), salinan cadangan dan urutan susulan yang menutup lebih banyak jualan dengan lebih pantas.",
    "easytools-chat": "Pembantu pemasaran AI anda yang sentiasa aktif — tanya apa sahaja, jana kandungan atas permintaan, sumbang saran idea dan dapatkan nasihat pemasaran segera 24/7.",
    "easytools-gao": "Jejaki keterlihatan jenama anda dalam ChatGPT, Claude, Gemini, Perplexity dan DeepSeek — pantau petikan AI, analisis gesaan (prompt), ekstrak entiti dan atasi pesaing dalam carian AI. Satu-satunya suite GAO yang dibina untuk Malaysia dan Asia Tenggara.",
  },
  cn: {
    "easydo-main": "一体化的 AI 驱动业务管理平台，将 CRM、沟通、营销和客户支持整合到单一系统中——旨在帮助企业轻松管理整个客户旅程。",
    "easydo-crm": "在一个平台集中管理您的潜在客户、联系人、客户和销售管道。跟踪商机、分配任务、记录活动，绝不错过任何跟进——让您的团队全面掌握每一段客户关系。",
    "easydo-email": "创建、发送并跟踪发往订阅列表的电子邮件营销活动。管理联系人，监控打开率和点击率，并运行自动化邮件序列来培育您的潜在客户。",
    "easydo-automation": "构建基于客户行为触发操作的自动化工作流——发送邮件、更新记录、分配任务，并让潜在客户在销售管道中自动推进，无需动手。",
    "easydo-multichannel": "在一个统一收件箱中接收并回复来自 WhatsApp、Telegram、Facebook Messenger、Instagram、LINE 和 SMS 的客户消息——无需再在各个应用之间切换。",
    "easydo-support": "在结构化的服务台系统中处理客户工单、投诉和咨询。跟踪工单状态、分配给团队成员、通过电子邮件回复，并用 CSAT 评分衡量客户满意度。",
    "easytools-main": "一体化 AI 营销平台，拥有 40 多种工具、AI 聊天、批量生成、文档管理器和完整仪表板——专为马来西亚企业打造。",
    "easytools-content": "使用 AI 在几秒内生成高质量的博客文章、文章、落地页文案和长篇内容——支持英文和马来文。",
    "easytools-social": "为 Facebook、Instagram、TikTok 和 LinkedIn 创作吸睛的社交媒体文案、话题标签、内容日历和爆款帖子创意。",
    "easytools-mail": "撰写高转化率的邮件序列、电子报、主题行和滴灌式营销活动，让邮件被打开、被阅读、被点击。",
    "easytools-ads": "为 Google Ads、Facebook Ads、TikTok Ads 和展示横幅生成有说服力的广告文案，带来点击和转化。",
    "easytools-seo": "借助 AI 驱动的元标签、关键词建议、SEO 审核和页面优化工具，为搜索引擎优化您的内容。",
    "easytools-commerce": "创作引人入胜的产品描述、Shopify 商品列表、电商文案和追加销售话术，将浏览者转化为买家。",
    "easytools-sales": "撰写强有力的销售话术、陌生开发邮件、提案文案和跟进序列，更快地达成更多交易。",
    "easytools-chat": "您随时在线的 AI 营销助手——有问必答、按需生成内容、激发创意，全天候 24/7 提供即时营销建议。",
    "easytools-gao": "追踪您的品牌在 ChatGPT、Claude、Gemini、Perplexity 和 DeepSeek 中的可见度——监控 AI 引用、分析提示词、提取实体，并在 AI 搜索中超越竞争对手。唯一专为马来西亚和东南亚打造的 GAO 套件。",
  },
  id: {
    "easydo-main": "Platform manajemen bisnis bertenaga AI serba lengkap yang menggabungkan CRM, komunikasi, pemasaran, dan dukungan pelanggan dalam satu sistem — dirancang untuk membantu bisnis mengelola seluruh perjalanan pelanggan dengan mudah.",
    "easydo-crm": "Kelola prospek, kontak, akun, dan pipeline penjualan Anda dalam satu tempat. Lacak peluang, tetapkan tugas, catat aktivitas, dan jangan pernah melewatkan tindak lanjut — memberi tim Anda visibilitas penuh atas setiap hubungan pelanggan.",
    "easydo-email": "Buat, kirim, dan lacak kampanye email ke daftar pelanggan Anda. Kelola kontak, pantau rasio buka dan klik, serta jalankan rangkaian email otomatis untuk memelihara prospek Anda.",
    "easydo-automation": "Bangun alur kerja otomatis yang memicu tindakan berdasarkan perilaku pelanggan — kirim email, perbarui catatan, tetapkan tugas, dan gerakkan prospek melalui pipeline tanpa repot.",
    "easydo-multichannel": "Terima dan balas pesan pelanggan dari WhatsApp, Telegram, Facebook Messenger, Instagram, LINE, dan SMS — semuanya dalam satu kotak masuk terpadu. Tidak perlu lagi berpindah-pindah aplikasi.",
    "easydo-support": "Tangani tiket, keluhan, dan pertanyaan pelanggan dalam sistem helpdesk yang terstruktur. Lacak status tiket, tetapkan ke anggota tim, balas melalui email, dan ukur kepuasan pelanggan dengan skor CSAT.",
    "easytools-main": "Platform pemasaran AI serba lengkap dengan 40+ alat, chat AI, pembuatan massal, pengelola dokumen, dan dasbor lengkap — dibuat untuk bisnis Malaysia.",
    "easytools-content": "Hasilkan postingan blog, artikel, salinan halaman arahan, dan konten bentuk panjang berkualitas tinggi dalam hitungan detik menggunakan AI — dalam bahasa Inggris dan Bahasa Malaysia.",
    "easytools-social": "Buat caption media sosial yang memikat, tagar, kalender konten, dan ide postingan viral untuk Facebook, Instagram, TikTok, dan LinkedIn.",
    "easytools-mail": "Tulis rangkaian email, buletin, baris subjek, dan kampanye drip berkonversi tinggi yang dibuka, dibaca, dan diklik.",
    "easytools-ads": "Hasilkan salinan iklan persuasif untuk Google Ads, Facebook Ads, TikTok Ads, dan banner display yang mendorong klik dan konversi.",
    "easytools-seo": "Optimalkan konten Anda untuk mesin pencari dengan tag meta bertenaga AI, saran kata kunci, audit SEO, dan alat optimasi on-page.",
    "easytools-commerce": "Buat deskripsi produk yang menarik, listing Shopify, salinan eCommerce, dan skrip upsell yang mengubah pengunjung menjadi pembeli.",
    "easytools-sales": "Tulis skrip penjualan yang ampuh, email cold outreach, salinan proposal, dan rangkaian tindak lanjut yang menutup lebih banyak transaksi lebih cepat.",
    "easytools-chat": "Asisten pemasaran AI Anda yang selalu aktif — tanyakan apa saja, hasilkan konten sesuai permintaan, curahkan ide, dan dapatkan saran pemasaran instan 24/7.",
    "easytools-gao": "Lacak visibilitas merek Anda di dalam ChatGPT, Claude, Gemini, Perplexity, dan DeepSeek — pantau kutipan AI, analisis prompt, ekstrak entitas, dan ungguli pesaing dalam pencarian AI. Satu-satunya suite GAO yang dibuat untuk Malaysia dan Asia Tenggara.",
  },
  vn: {
    "easydo-main": "Nền tảng quản lý doanh nghiệp tích hợp toàn diện được hỗ trợ bởi AI, kết hợp CRM, giao tiếp, tiếp thị và hỗ trợ khách hàng trong một hệ thống duy nhất — được thiết kế để giúp doanh nghiệp quản lý toàn bộ hành trình khách hàng một cách dễ dàng.",
    "easydo-crm": "Quản lý khách hàng tiềm năng, danh bạ, tài khoản và quy trình bán hàng ở một nơi. Theo dõi cơ hội, giao nhiệm vụ, ghi lại hoạt động và không bao giờ bỏ lỡ việc theo dõi — mang lại cho đội ngũ của bạn cái nhìn toàn diện về mọi mối quan hệ khách hàng.",
    "easydo-email": "Tạo, gửi và theo dõi các chiến dịch email đến danh sách người đăng ký của bạn. Quản lý danh bạ, theo dõi tỷ lệ mở và nhấp chuột, đồng thời chạy các chuỗi email tự động để nuôi dưỡng khách hàng tiềm năng.",
    "easydo-automation": "Xây dựng các quy trình tự động kích hoạt hành động dựa trên hành vi khách hàng — gửi email, cập nhật hồ sơ, giao nhiệm vụ và đưa khách hàng tiềm năng đi qua quy trình bán hàng mà không tốn công sức.",
    "easydo-multichannel": "Nhận và trả lời tin nhắn khách hàng từ WhatsApp, Telegram, Facebook Messenger, Instagram, LINE và SMS — tất cả trong một hộp thư hợp nhất. Không còn phải chuyển đổi giữa các ứng dụng.",
    "easydo-support": "Xử lý phiếu hỗ trợ, khiếu nại và yêu cầu của khách hàng trong một hệ thống bộ phận hỗ trợ có cấu trúc. Theo dõi trạng thái phiếu, giao cho thành viên trong nhóm, trả lời qua email và đo lường mức độ hài lòng của khách hàng bằng điểm CSAT.",
    "easytools-main": "Nền tảng tiếp thị AI toàn diện với hơn 40 công cụ, trò chuyện AI, tạo nội dung hàng loạt, trình quản lý tài liệu và bảng điều khiển đầy đủ — được xây dựng cho các doanh nghiệp Malaysia.",
    "easytools-content": "Tạo bài đăng blog, bài viết, nội dung trang đích và nội dung dài chất lượng cao chỉ trong vài giây bằng AI — bằng tiếng Anh và tiếng Mã Lai.",
    "easytools-social": "Tạo chú thích mạng xã hội thu hút, hashtag, lịch nội dung và ý tưởng bài đăng lan truyền cho Facebook, Instagram, TikTok và LinkedIn.",
    "easytools-mail": "Viết các chuỗi email, bản tin, dòng tiêu đề và chiến dịch nhỏ giọt (drip) có tỷ lệ chuyển đổi cao, được mở, đọc và nhấp chuột.",
    "easytools-ads": "Tạo nội dung quảng cáo thuyết phục cho Google Ads, Facebook Ads, TikTok Ads và biểu ngữ hiển thị thúc đẩy nhấp chuột và chuyển đổi.",
    "easytools-seo": "Tối ưu hóa nội dung của bạn cho công cụ tìm kiếm với thẻ meta hỗ trợ bởi AI, gợi ý từ khóa, kiểm tra SEO và công cụ tối ưu hóa trên trang.",
    "easytools-commerce": "Tạo mô tả sản phẩm hấp dẫn, danh sách Shopify, nội dung thương mại điện tử và kịch bản bán thêm (upsell) biến người xem thành người mua.",
    "easytools-sales": "Viết kịch bản bán hàng mạnh mẽ, email tiếp cận khách hàng mới, nội dung đề xuất và chuỗi theo dõi giúp chốt nhiều giao dịch hơn nhanh hơn.",
    "easytools-chat": "Trợ lý tiếp thị AI luôn hoạt động của bạn — hỏi bất cứ điều gì, tạo nội dung theo yêu cầu, lên ý tưởng và nhận lời khuyên tiếp thị tức thì 24/7.",
    "easytools-gao": "Theo dõi mức độ hiển thị thương hiệu của bạn trong ChatGPT, Claude, Gemini, Perplexity và DeepSeek — giám sát trích dẫn AI, phân tích lời nhắc, trích xuất thực thể và vượt qua đối thủ trong tìm kiếm AI. Bộ công cụ GAO duy nhất được xây dựng cho Malaysia và Đông Nam Á.",
  },
  ar: {
    "easydo-main": "منصة شاملة لإدارة الأعمال مدعومة بالذكاء الاصطناعي تجمع بين إدارة علاقات العملاء (CRM) والتواصل والتسويق ودعم العملاء في نظام واحد — مصممة لمساعدة الشركات على إدارة رحلة العميل بالكامل بسهولة.",
    "easydo-crm": "أدِر العملاء المحتملين وجهات الاتصال والحسابات وخط أنابيب المبيعات في مكان واحد. تابِع الفرص، ووزِّع المهام، وسجِّل الأنشطة، ولا تفوّت أي متابعة — مما يمنح فريقك رؤية كاملة لكل علاقة مع العملاء.",
    "easydo-email": "أنشئ حملات بريد إلكتروني وأرسلها وتتبّعها إلى قوائم المشتركين لديك. أدِر جهات الاتصال، وراقب معدلات الفتح والنقر، وشغّل تسلسلات بريد إلكتروني آلية لرعاية عملائك المحتملين.",
    "easydo-automation": "أنشئ سير عمل آلي يُطلق إجراءات بناءً على سلوك العملاء — أرسل رسائل بريد إلكتروني، وحدّث السجلات، ووزّع المهام، وانقل العملاء المحتملين عبر خط الأنابيب دون أي جهد.",
    "easydo-multichannel": "استقبل رسائل العملاء وردّ عليها من واتساب وتليجرام وفيسبوك ماسنجر وإنستغرام و LINE والرسائل النصية القصيرة — كل ذلك في صندوق وارد موحّد واحد. لا مزيد من التنقل بين التطبيقات.",
    "easydo-support": "تعامل مع تذاكر العملاء والشكاوى والاستفسارات في نظام مكتب مساعدة منظّم. تابِع حالة التذاكر، ووزّعها على أعضاء الفريق، وردّ عبر البريد الإلكتروني، وقِس رضا العملاء بدرجات CSAT.",
    "easytools-main": "منصة تسويق شاملة بالذكاء الاصطناعي تضم أكثر من 40 أداة، ودردشة بالذكاء الاصطناعي، وإنشاء محتوى بالجملة، ومدير مستندات، ولوحة تحكم كاملة — مصممة للشركات الماليزية.",
    "easytools-content": "أنشئ منشورات مدونة ومقالات ونصوص صفحات هبوط ومحتوى طويلاً عالي الجودة في ثوانٍ باستخدام الذكاء الاصطناعي — بالإنجليزية والماليزية.",
    "easytools-social": "أنشئ تعليقات لافتة لوسائل التواصل الاجتماعي، ووسوماً، وتقويمات محتوى، وأفكار منشورات رائجة لفيسبوك وإنستغرام وتيك توك ولينكدإن.",
    "easytools-mail": "اكتب تسلسلات بريد إلكتروني ونشرات إخبارية وسطور موضوع وحملات تنقيط (drip) عالية التحويل يتم فتحها وقراءتها والنقر عليها.",
    "easytools-ads": "أنشئ نصوصاً إعلانية مقنعة لإعلانات Google و Facebook و TikTok ولافتات العرض تحفّز النقرات والتحويلات.",
    "easytools-seo": "حسّن محتواك لمحركات البحث باستخدام علامات وصفية مدعومة بالذكاء الاصطناعي، واقتراحات الكلمات المفتاحية، وعمليات تدقيق SEO، وأدوات تحسين الصفحات.",
    "easytools-commerce": "أنشئ أوصاف منتجات جذابة وقوائم Shopify ونصوص تجارة إلكترونية ونصوص بيع إضافي (upsell) تحوّل المتصفحين إلى مشترين.",
    "easytools-sales": "اكتب نصوص مبيعات قوية ورسائل تواصل بارد وعروضاً ونصوص متابعة تُبرم المزيد من الصفقات بسرعة أكبر.",
    "easytools-chat": "مساعدك التسويقي بالذكاء الاصطناعي المتاح دائماً — اسأل أي شيء، وأنشئ محتوى عند الطلب، واطرح الأفكار، واحصل على نصائح تسويقية فورية على مدار الساعة طوال أيام الأسبوع.",
    "easytools-gao": "تتبّع ظهور علامتك التجارية داخل ChatGPT و Claude و Gemini و Perplexity و DeepSeek — راقب اقتباسات الذكاء الاصطناعي، وحلّل المُوجِّهات (prompts)، واستخرج الكيانات، وتفوّق على المنافسين في بحث الذكاء الاصطناعي. مجموعة GAO الوحيدة المصممة لماليزيا وجنوب شرق آسيا.",
  },
  th: {
    "easydo-main": "แพลตฟอร์มจัดการธุรกิจครบวงจรที่ขับเคลื่อนด้วย AI ซึ่งรวม CRM การสื่อสาร การตลาด และการสนับสนุนลูกค้าไว้ในระบบเดียว — ออกแบบมาเพื่อช่วยให้ธุรกิจจัดการเส้นทางของลูกค้าทั้งหมดได้อย่างง่ายดาย",
    "easydo-crm": "จัดการลูกค้าเป้าหมาย ผู้ติดต่อ บัญชี และไปป์ไลน์การขายของคุณในที่เดียว ติดตามโอกาส มอบหมายงาน บันทึกกิจกรรม และไม่พลาดการติดตามผล — มอบมุมมองที่ครบถ้วนเกี่ยวกับความสัมพันธ์กับลูกค้าทุกรายให้ทีมของคุณ",
    "easydo-email": "สร้าง ส่ง และติดตามแคมเปญอีเมลไปยังรายชื่อสมาชิกของคุณ จัดการผู้ติดต่อ ตรวจสอบอัตราการเปิดและการคลิก และเรียกใช้ลำดับอีเมลอัตโนมัติเพื่อบ่มเพาะลูกค้าเป้าหมายของคุณ",
    "easydo-automation": "สร้างเวิร์กโฟลว์อัตโนมัติที่กระตุ้นการดำเนินการตามพฤติกรรมของลูกค้า — ส่งอีเมล อัปเดตข้อมูล มอบหมายงาน และเลื่อนลูกค้าเป้าหมายผ่านไปป์ไลน์โดยไม่ต้องลงมือทำเอง",
    "easydo-multichannel": "รับและตอบข้อความลูกค้าจาก WhatsApp, Telegram, Facebook Messenger, Instagram, LINE และ SMS — ทั้งหมดในกล่องข้อความรวมเดียว ไม่ต้องสลับไปมาระหว่างแอปอีกต่อไป",
    "easydo-support": "จัดการตั๋ว ข้อร้องเรียน และคำถามของลูกค้าในระบบเฮลป์เดสก์ที่เป็นระเบียบ ติดตามสถานะตั๋ว มอบหมายให้สมาชิกในทีม ตอบกลับทางอีเมล และวัดความพึงพอใจของลูกค้าด้วยคะแนน CSAT",
    "easytools-main": "แพลตฟอร์มการตลาด AI ครบวงจรพร้อมเครื่องมือกว่า 40 รายการ แชท AI การสร้างเนื้อหาจำนวนมาก ตัวจัดการเอกสาร และแดชบอร์ดที่สมบูรณ์ — สร้างขึ้นสำหรับธุรกิจในมาเลเซีย",
    "easytools-content": "สร้างบล็อกโพสต์ บทความ ข้อความหน้า Landing Page และเนื้อหาแบบยาวคุณภาพสูงในไม่กี่วินาทีโดยใช้ AI — ทั้งภาษาอังกฤษและภาษามาเลย์",
    "easytools-social": "สร้างแคปชันโซเชียลมีเดียที่สะดุดตา แฮชแท็ก ปฏิทินเนื้อหา และไอเดียโพสต์ไวรัลสำหรับ Facebook, Instagram, TikTok และ LinkedIn",
    "easytools-mail": "เขียนลำดับอีเมล จดหมายข่าว หัวเรื่อง และแคมเปญแบบหยด (drip) ที่มีอัตราการแปลงสูงซึ่งถูกเปิด อ่าน และคลิก",
    "easytools-ads": "สร้างข้อความโฆษณาที่โน้มน้าวใจสำหรับ Google Ads, Facebook Ads, TikTok Ads และแบนเนอร์แสดงผลที่กระตุ้นการคลิกและการแปลง",
    "easytools-seo": "ปรับแต่งเนื้อหาของคุณสำหรับเครื่องมือค้นหาด้วยเมตาแท็กที่ขับเคลื่อนด้วย AI คำแนะนำคีย์เวิร์ด การตรวจสอบ SEO และเครื่องมือเพิ่มประสิทธิภาพบนหน้าเพจ",
    "easytools-commerce": "สร้างคำอธิบายผลิตภัณฑ์ที่น่าสนใจ รายการสินค้า Shopify ข้อความอีคอมเมิร์ซ และสคริปต์ขายต่อยอด (upsell) ที่เปลี่ยนผู้เข้าชมให้กลายเป็นผู้ซื้อ",
    "easytools-sales": "เขียนสคริปต์การขายที่ทรงพลัง อีเมลติดต่อลูกค้าใหม่ ข้อความข้อเสนอ และลำดับการติดตามผลที่ปิดการขายได้มากขึ้นและเร็วขึ้น",
    "easytools-chat": "ผู้ช่วยการตลาด AI ที่พร้อมใช้งานตลอดเวลาของคุณ — ถามอะไรก็ได้ สร้างเนื้อหาตามต้องการ ระดมความคิด และรับคำแนะนำการตลาดทันที 24/7",
    "easytools-gao": "ติดตามการมองเห็นแบรนด์ของคุณภายใน ChatGPT, Claude, Gemini, Perplexity และ DeepSeek — ตรวจสอบการอ้างอิงของ AI วิเคราะห์พรอมต์ ดึงเอนทิตี และเอาชนะคู่แข่งในการค้นหาด้วย AI ชุดเครื่องมือ GAO เพียงหนึ่งเดียวที่สร้างขึ้นสำหรับมาเลเซียและเอเชียตะวันออกเฉียงใต้",
  },
};

export default function Home() {
  const { lang } = useLang();
  const t = content[lang];

  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoSrc = VIDEO_BY_LANG[lang];

  useEffect(() => {
    trackViewContent({ contentId: "homepage", contentName: "Homepage", contentType: "service" });
  }, []);

  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;
    const timer = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setIsVideoPlaying(false);
  }, [lang]);

  useEffect(() => {
    setHeadlineIndex(0);
  }, [lang]);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % t.headlines.length);
    }, 8000);
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
            <motion.p
              variants={itemVariants}
              className="text-xs md:text-sm text-primary/70 italic mb-6 max-w-2xl mx-auto"
            >
              {t.badgeSubtitle}
            </motion.p>

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
                onClick={() =>
                  trackButtonClick({
                    contentId: "start-ai-transformation",
                    contentName: "Start Your AI Transformation",
                    contentType: "lead",
                  })
                }
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-lg bg-gradient-to-r from-primary to-secondary text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,158,46,0.6)]"
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
      <section id="explore" className="py-24 relative overflow-hidden">
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
              const isSystems = item.id === "systems";
              const cardClassName = `group relative flex flex-col items-center justify-center p-6 h-full rounded-2xl bg-card/50 border border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-500 ${colors.border} ${colors.shadow}`;
              const track = () =>
                trackButtonClick({
                  contentId: `explore-${item.id}`,
                  contentName: `Explore: ${item.title}`,
                  contentType: "service",
                });
              const cardInner = (
                <>
                  <div className={`absolute inset-0 bg-gradient-to-b ${colors.grad} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <Icon className={`w-10 h-10 mb-4 ${colors.iconColor} opacity-60 group-hover:opacity-100 transition-all duration-300 relative z-10 group-hover:scale-110`} />
                  <h3 className="text-sm md:text-base font-display font-bold text-white mb-1 relative z-10 text-center">{item.title}</h3>
                  <p className="text-xs text-muted-foreground text-center relative z-10 hidden md:block">{item.desc}</p>
                </>
              );
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  {isSystems ? (
                    <a
                      href="#our-systems"
                      onClick={(e) => {
                        e.preventDefault();
                        track();
                        document.getElementById("our-systems")?.scrollIntoView({ behavior: "smooth" });
                        history.replaceState(null, "", "#our-systems");
                      }}
                      className={cardClassName}
                      data-testid={`icon-nav-${item.id}`}
                    >
                      {cardInner}
                    </a>
                  ) : (
                    <Link
                      href={`/details#${item.id}`}
                      onClick={track}
                      className={cardClassName}
                      data-testid={`icon-nav-${item.id}`}
                    >
                      {cardInner}
                    </Link>
                  )}
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto group rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,158,46,0.2)] bg-background"
          >
            <div className="relative aspect-video bg-black overflow-hidden">
              {isVideoPlaying ? (
                <video
                  key={videoSrc}
                  src={videoSrc}
                  controls
                  autoPlay
                  playsInline
                  className="absolute inset-0 w-full h-full object-contain bg-black"
                  data-testid="video-player"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <video
                    key={`${videoSrc}-poster`}
                    src={videoSrc}
                    muted
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/40 to-secondary/20" />
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />
                  <button
                    onClick={() => setIsVideoPlaying(true)}
                    data-testid="video-play"
                    aria-label="Play video"
                    className="relative z-10 w-20 h-20 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/40 group-hover:shadow-[0_0_40px_rgba(212,158,46,0.7)]"
                  >
                    <Play className="w-8 h-8 text-primary ml-1" />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
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
                  className="p-8 rounded-2xl bg-card border border-primary/20 flex flex-col items-center justify-center hover:border-primary/50 hover:shadow-[0_0_25px_rgba(212,158,46,0.1)] transition-all duration-300"
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

      {/* ── Our Systems ── */}
      <section id="our-systems" className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-card border-t border-white/5">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              {t.systemsTitle} <span className="text-primary">{t.systemsTitleHighlight}</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t.systemsSubtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">
            {systemGroups.map((group, gi) => {
              const GroupIcon = group.icon;
              return (
                <motion.div
                  key={group.brand}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: gi * 0.15 }}
                  className={`rounded-2xl bg-card/50 border border-white/10 backdrop-blur-sm p-6 md:p-8 transition-all duration-500 ${group.styles.card}`}
                >
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${group.styles.iconWrap}`}>
                      <GroupIcon className={`w-6 h-6 ${group.styles.icon}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-white">{group.brand}</h3>
                      <p className="text-sm text-muted-foreground">{t[group.taglineKey]}</p>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    {group.systems.map((sys) => (
                      <a
                        key={sys.id}
                        href={sys.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                          trackButtonClick({
                            contentId: `system-${sys.id}`,
                            contentName: sys.name,
                            contentType: "service",
                          })
                        }
                        className="group flex items-start justify-between gap-3 px-3 py-3 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/5 transition-all duration-300"
                        data-testid={`system-link-${sys.id}`}
                      >
                        <span className="min-w-0">
                          <span className="flex items-center gap-2.5 flex-wrap">
                            <span className="text-sm md:text-base font-medium text-white/90 group-hover:text-white transition-colors">
                              {sys.name}
                            </span>
                            {sys.isMain && (
                              <span className={`shrink-0 text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full border ${group.styles.badge}`}>
                                {t.systemsMainPlatform}
                              </span>
                            )}
                          </span>
                          <span className="block mt-1 text-xs md:text-sm text-muted-foreground leading-relaxed">
                            {SYSTEM_DESCRIPTIONS[lang][sys.id]}
                          </span>
                          <span className="sr-only">{t.systemsOpensInNewTab}</span>
                        </span>
                        <ArrowUpRight className={`w-4 h-4 shrink-0 mt-1 text-muted-foreground transition-all duration-300 ${group.styles.arrow} group-hover:translate-x-0.5 group-hover:-translate-y-0.5`} />
                      </a>
                    ))}
                  </div>
                </motion.div>
              );
            })}
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
              className="inline-flex items-center gap-2 px-10 py-4 text-lg font-bold rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,158,46,0.5)]"
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
