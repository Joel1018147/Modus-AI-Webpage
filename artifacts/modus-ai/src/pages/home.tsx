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
  activities: Network,
  "get-started": Zap,
};

const colorMap: Record<string, { border: string; shadow: string; grad: string; iconColor: string }> = {
  about:          { border: "hover:border-primary",   shadow: "hover:shadow-[0_0_25px_rgba(212,158,46,0.3)]",   grad: "from-primary/20",   iconColor: "text-primary" },
  "why-choose-us":{ border: "hover:border-secondary", shadow: "hover:shadow-[0_0_25px_rgba(124,58,237,0.3)]", grad: "from-secondary/20", iconColor: "text-secondary" },
  services:       { border: "hover:border-primary",   shadow: "hover:shadow-[0_0_25px_rgba(212,158,46,0.3)]",   grad: "from-primary/20",   iconColor: "text-primary" },
  courses:        { border: "hover:border-secondary", shadow: "hover:shadow-[0_0_25px_rgba(124,58,237,0.3)]", grad: "from-secondary/20", iconColor: "text-secondary" },
  activities:     { border: "hover:border-primary",   shadow: "hover:shadow-[0_0_25px_rgba(212,158,46,0.3)]",   grad: "from-primary/20",   iconColor: "text-primary" },
  "get-started":  { border: "hover:border-primary",   shadow: "hover:shadow-[0_0_25px_rgba(212,158,46,0.3)]",   grad: "from-primary/20",   iconColor: "text-primary" },
};

const statIcons = [BarChart3, Users, Network, Brain];

type SystemLink = { id: string; name: string; url: string; isMain?: boolean };
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
                    onClick={() =>
                      trackButtonClick({
                        contentId: `explore-${item.id}`,
                        contentName: `Explore: ${item.title}`,
                        contentType: "service",
                      })
                    }
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
                        className="group flex items-center justify-between gap-3 px-3 py-3 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/5 transition-all duration-300"
                        data-testid={`system-link-${sys.id}`}
                      >
                        <span className="flex items-center gap-2.5 flex-wrap min-w-0">
                          <span className="text-sm md:text-base text-white/90 group-hover:text-white transition-colors">
                            {sys.name}
                          </span>
                          {sys.isMain && (
                            <span className={`shrink-0 text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full border ${group.styles.badge}`}>
                              {t.systemsMainPlatform}
                            </span>
                          )}
                          <span className="sr-only">{t.systemsOpensInNewTab}</span>
                        </span>
                        <ArrowUpRight className={`w-4 h-4 shrink-0 text-muted-foreground transition-all duration-300 ${group.styles.arrow} group-hover:translate-x-0.5 group-hover:-translate-y-0.5`} />
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
