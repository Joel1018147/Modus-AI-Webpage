import type { Lang } from "@/contexts/LanguageContext";
import {
  CEREMONY_IMAGE_FILE,
  SIGNING_IMAGE_FILE,
  LAUNCH_FEATURE_IMAGE_FILE,
} from "@/lib/seo";

export const LAUNCH_PATH = "/official-launch-8th-penang-governor";

export const CEREMONY_IMAGE_W = 1280;
export const CEREMONY_IMAGE_H = 854;

export const LAUNCH_FEATURE_IMAGE_W = 1600;
export const LAUNCH_FEATURE_IMAGE_H = 921;

/** Resolve a file in /public to a URL that respects the Vite base path. */
export function asset(file: string): string {
  return `${import.meta.env.BASE_URL}${file}`;
}

export const ceremonyImageSrc = () => asset(CEREMONY_IMAGE_FILE);
export const signingImageSrc = () => asset(SIGNING_IMAGE_FILE);
export const launchFeatureImageSrc = () => asset(LAUNCH_FEATURE_IMAGE_FILE);

export interface LaunchI18n {
  heroHeadline: string;
  heroHeadline2: string;
  heroSubheadline: string;
  heroTrust: [string, string, string];
  secondaryCta: string;
  sectionTitle: string;
  sectionSubtitle: string;
  sectionBody: string;
  learnMore: string;
  imageAlt: string;
  imageTitle: string;
  imageCaption: string;
  signingAlt: string;
  signingCaption: string;
  page: {
    metaTitle: string;
    metaDescription: string;
    breadcrumbHome: string;
    breadcrumbCurrent: string;
    title: string;
    subtitle: string;
    intro: string;
    overviewTitle: string;
    overviewBody: string;
    highlightsTitle: string;
    highlights: string[];
    galleryTitle: string;
    partnershipTitle: string;
    partnershipBody: string;
    aboutTitle: string;
    aboutBody: string;
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
    exploreCta: string;
    backHome: string;
  };
}

export const LAUNCH_I18N: Record<Lang, LaunchI18n> = {
  en: {
    heroHeadline: "Official Launch Witnessed by the 8th Governor of Penang",
    heroHeadline2:
      "Elevate Malaysian Companies to World-Class AI Execution Through Industry-Certified Training and Technology Integration.",
    heroSubheadline:
      "MODUS AI Associates officially launched its international AI ecosystem initiative through a signing and ribbon-cutting ceremony witnessed by Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak, strengthening Malaysia-China AI collaboration and strategic partnerships.",
    heroTrust: [
      "20+ Global Strategic Partnerships",
      "Malaysia-China AI Ecosystem Collaboration",
      "MIIT-Certified AI Ecosystem Partner",
    ],
    secondaryCta: "View Official Launch",
    sectionTitle: "Official Launch Ceremony",
    sectionSubtitle:
      "Witnessed by Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak, 8th Governor of Penang",
    sectionBody:
      "MODUS AI Associates officially launched its AI ecosystem initiative through a landmark signing and ribbon-cutting ceremony witnessed by Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak, reflecting our commitment to advancing AI talent development, enterprise transformation, and international collaboration.",
    learnMore: "Read the Full Story",
    imageAlt:
      "MODUS AI Associates ribbon-cutting ceremony witnessed by Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak, 8th Governor of Penang",
    imageTitle: "MODUS AI Associates Official Launch Ceremony",
    imageCaption:
      "MODUS AI Associates Official Launch — Agreements Signing & Ribbon-Cutting Ceremony, 17 December 2025",
    signingAlt:
      "MODUS AI Associates international and domestic partnership signing ceremony",
    signingCaption:
      "International & domestic partnership signing — MODUS AI Associates",
    page: {
      metaTitle:
        "MODUS AI Associates Official Launch Witnessed by the 8th Governor of Penang",
      metaDescription:
        "MODUS AI Associates officially launched its AI ecosystem initiative through a ribbon-cutting ceremony witnessed by Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak, the 8th Governor of Penang.",
      breadcrumbHome: "Home",
      breadcrumbCurrent: "Official Launch",
      title: "Official Launch Witnessed by the 8th Governor of Penang",
      subtitle:
        "Witnessed by Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak, 8th Governor of Penang",
      intro:
        "MODUS AI Associates officially launched its international AI ecosystem initiative through a signing and ribbon-cutting ceremony witnessed by the 8th Governor of Penang — a milestone in Malaysia-China AI collaboration.",
      overviewTitle: "Event Overview",
      overviewBody:
        "On 17 December 2025, MODUS AI Associates and China Ruidi Travel (Beijing) Technology Co., Ltd. marked a milestone with an Agreements Signing & Launching Ceremony. The event was graced by the Guest of Honour, YABhg Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak, the 8th Governor of Penang, who witnessed the signing and led the ribbon-cutting that officially launched our international AI ecosystem initiative.",
      highlightsTitle: "Launch Highlights",
      highlights: [
        "Signing of international and domestic strategic partnership agreements",
        "Official ribbon-cutting led by the Guest of Honour, the 8th Governor of Penang",
        "Launch of MODUS AI Associates' Malaysia-China AI ecosystem initiative",
        "Partners from China, Malaysia, Singapore, Cambodia, Vietnam and Indonesia",
      ],
      galleryTitle: "Event Gallery",
      partnershipTitle: "International Partnership Significance",
      partnershipBody:
        "The ceremony brought together more than 20 strategic partners across China, Malaysia, Singapore, Cambodia, Vietnam and Indonesia. Together they form the foundation of a cross-border AI ecosystem that connects Malaysian enterprises and talent to China's world-leading, MIIT-certified AI training and technology network.",
      aboutTitle: "About MODUS AI Associates",
      aboutBody:
        "MODUS AI Associates is Malaysia's gateway to China's AI ecosystem. Backed by MIIT certification and China's largest AI training network, we deliver applied AI training, enterprise transformation and integrated AI systems that help organisations adopt AI with global standards.",
      ctaTitle: "Begin Your AI Transformation",
      ctaBody:
        "Join the businesses and professionals transforming with MODUS AI Associates — certified by MIIT, powered by China's No.1 AI training ecosystem.",
      ctaButton: "Start Your AI Transformation",
      exploreCta: "Explore Our Programmes",
      backHome: "Back to Home",
    },
  },
  bm: {
    heroHeadline: "Pelancaran Rasmi Disaksikan oleh Gabenor Pulau Pinang ke-8",
    heroHeadline2:
      "Mengangkat Syarikat Malaysia ke Pelaksanaan AI Bertaraf Dunia Melalui Latihan Bertauliah Industri dan Integrasi Teknologi.",
    heroSubheadline:
      "MODUS AI Associates secara rasmi melancarkan inisiatif ekosistem AI antarabangsanya melalui majlis menandatangani perjanjian dan gunting reben yang disaksikan oleh Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak, mengukuhkan kerjasama AI Malaysia-China dan perkongsian strategik.",
    heroTrust: [
      "20+ Perkongsian Strategik Global",
      "Kerjasama Ekosistem AI Malaysia-China",
      "Rakan Ekosistem AI Bertauliah MIIT",
    ],
    secondaryCta: "Lihat Pelancaran Rasmi",
    sectionTitle: "Majlis Pelancaran Rasmi",
    sectionSubtitle:
      "Disaksikan oleh Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak, Gabenor Pulau Pinang ke-8",
    sectionBody:
      "MODUS AI Associates secara rasmi melancarkan inisiatif ekosistem AI melalui majlis menandatangani perjanjian dan gunting reben penting yang disaksikan oleh Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak, mencerminkan komitmen kami untuk memajukan pembangunan bakat AI, transformasi perusahaan dan kerjasama antarabangsa.",
    learnMore: "Baca Kisah Penuh",
    imageAlt:
      "Majlis gunting reben MODUS AI Associates yang disaksikan oleh Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak, Gabenor Pulau Pinang ke-8",
    imageTitle: "Majlis Pelancaran Rasmi MODUS AI Associates",
    imageCaption:
      "Pelancaran Rasmi MODUS AI Associates — Majlis Menandatangani Perjanjian & Gunting Reben, 17 Disember 2025",
    signingAlt:
      "Majlis menandatangani perkongsian antarabangsa dan domestik MODUS AI Associates",
    signingCaption:
      "Menandatangani perkongsian antarabangsa & domestik — MODUS AI Associates",
    page: {
      metaTitle:
        "Pelancaran Rasmi MODUS AI Associates Disaksikan oleh Gabenor Pulau Pinang ke-8",
      metaDescription:
        "MODUS AI Associates secara rasmi melancarkan inisiatif ekosistem AI melalui majlis gunting reben yang disaksikan oleh Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak, Gabenor Pulau Pinang ke-8.",
      breadcrumbHome: "Laman Utama",
      breadcrumbCurrent: "Pelancaran Rasmi",
      title: "Pelancaran Rasmi Disaksikan oleh Gabenor Pulau Pinang ke-8",
      subtitle:
        "Disaksikan oleh Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak, Gabenor Pulau Pinang ke-8",
      intro:
        "MODUS AI Associates secara rasmi melancarkan inisiatif ekosistem AI antarabangsanya melalui majlis menandatangani perjanjian dan gunting reben yang disaksikan oleh Gabenor Pulau Pinang ke-8 — pencapaian penting dalam kerjasama AI Malaysia-China.",
      overviewTitle: "Gambaran Acara",
      overviewBody:
        "Pada 17 Disember 2025, MODUS AI Associates dan China Ruidi Travel (Beijing) Technology Co., Ltd. mencapai pencapaian penting dengan Majlis Menandatangani Perjanjian & Pelancaran. Acara ini dimuliakan oleh Tetamu Kehormat, YABhg Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak, Gabenor Pulau Pinang ke-8, yang menyaksikan majlis menandatangani dan mengetuai gunting reben yang secara rasmi melancarkan inisiatif ekosistem AI antarabangsa kami.",
      highlightsTitle: "Sorotan Pelancaran",
      highlights: [
        "Menandatangani perjanjian perkongsian strategik antarabangsa dan domestik",
        "Gunting reben rasmi diketuai oleh Tetamu Kehormat, Gabenor Pulau Pinang ke-8",
        "Pelancaran inisiatif ekosistem AI Malaysia-China MODUS AI Associates",
        "Rakan dari China, Malaysia, Singapura, Kemboja, Vietnam dan Indonesia",
      ],
      galleryTitle: "Galeri Acara",
      partnershipTitle: "Kepentingan Perkongsian Antarabangsa",
      partnershipBody:
        "Majlis ini menghimpunkan lebih 20 rakan strategik di China, Malaysia, Singapura, Kemboja, Vietnam dan Indonesia. Bersama-sama mereka membentuk asas ekosistem AI rentas sempadan yang menghubungkan perusahaan dan bakat Malaysia dengan rangkaian latihan dan teknologi AI bertauliah MIIT yang terkemuka di dunia dari China.",
      aboutTitle: "Mengenai MODUS AI Associates",
      aboutBody:
        "MODUS AI Associates ialah pintu masuk Malaysia ke ekosistem AI China. Disokong oleh pensijilan MIIT dan rangkaian latihan AI terbesar China, kami menyediakan latihan AI gunaan, transformasi perusahaan dan sistem AI bersepadu yang membantu organisasi menggunakan AI dengan standard global.",
      ctaTitle: "Mulakan Transformasi AI Anda",
      ctaBody:
        "Sertai perniagaan dan profesional yang sedang berubah bersama MODUS AI Associates — bertauliah MIIT, dikuasakan oleh ekosistem latihan AI No.1 China.",
      ctaButton: "Mulakan Transformasi AI Anda",
      exploreCta: "Terokai Program Kami",
      backHome: "Kembali ke Laman Utama",
    },
  },
  cn: {
    heroHeadline: "由槟城第八任州元首见证的正式启动",
    heroHeadline2:
      "通过行业认证培训与技术整合，助力马来西亚企业实现世界级人工智能执行力。",
    heroSubheadline:
      "MODUS AI Associates 通过签约暨剪彩仪式正式启动其国际人工智能生态系统计划，仪式由 Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak 见证，进一步巩固马中人工智能合作与战略伙伴关系。",
    heroTrust: [
      "20+ 全球战略合作伙伴",
      "马中人工智能生态系统合作",
      "MIIT 认证人工智能生态伙伴",
    ],
    secondaryCta: "查看正式启动",
    sectionTitle: "正式启动仪式",
    sectionSubtitle:
      "由槟城第八任州元首 Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak 见证",
    sectionBody:
      "MODUS AI Associates 通过具有里程碑意义的签约暨剪彩仪式正式启动其人工智能生态系统计划，仪式由 Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak 见证，彰显我们在推动人工智能人才培养、企业转型与国际合作方面的承诺。",
    learnMore: "阅读完整报道",
    imageAlt:
      "由槟城第八任州元首 Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak 见证的 MODUS AI Associates 剪彩仪式",
    imageTitle: "MODUS AI Associates 正式启动仪式",
    imageCaption:
      "MODUS AI Associates 正式启动 — 签约暨剪彩仪式，2025年12月17日",
    signingAlt: "MODUS AI Associates 国际与国内合作伙伴签约仪式",
    signingCaption: "国际与国内合作伙伴签约 — MODUS AI Associates",
    page: {
      metaTitle: "MODUS AI Associates 由槟城第八任州元首见证正式启动",
      metaDescription:
        "MODUS AI Associates 通过剪彩仪式正式启动其人工智能生态系统计划，仪式由槟城第八任州元首 Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak 见证。",
      breadcrumbHome: "首页",
      breadcrumbCurrent: "正式启动",
      title: "由槟城第八任州元首见证的正式启动",
      subtitle:
        "由槟城第八任州元首 Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak 见证",
      intro:
        "MODUS AI Associates 通过签约暨剪彩仪式正式启动其国际人工智能生态系统计划，仪式由槟城第八任州元首见证——这是马中人工智能合作的重要里程碑。",
      overviewTitle: "活动概览",
      overviewBody:
        "2025年12月17日，MODUS AI Associates 与中国睿迪旅游（北京）科技有限公司举行签约暨启动仪式，标志着重要的里程碑。活动荣幸邀请到主宾——槟城第八任州元首 YABhg Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak，他见证了签约并主持剪彩，正式启动我们的国际人工智能生态系统计划。",
      highlightsTitle: "启动亮点",
      highlights: [
        "签署国际与国内战略合作协议",
        "由主宾槟城第八任州元首主持正式剪彩",
        "启动 MODUS AI Associates 马中人工智能生态系统计划",
        "来自中国、马来西亚、新加坡、柬埔寨、越南和印尼的合作伙伴",
      ],
      galleryTitle: "活动图集",
      partnershipTitle: "国际合作伙伴意义",
      partnershipBody:
        "仪式汇聚了来自中国、马来西亚、新加坡、柬埔寨、越南和印尼的 20 多家战略合作伙伴。他们共同构建跨境人工智能生态系统的基础，将马来西亚企业与人才连接到中国世界领先、经 MIIT 认证的人工智能培训与技术网络。",
      aboutTitle: "关于 MODUS AI Associates",
      aboutBody:
        "MODUS AI Associates 是马来西亚通往中国人工智能生态系统的门户。依托 MIIT 认证及中国最大的人工智能培训网络，我们提供应用型人工智能培训、企业转型和集成人工智能系统，帮助企业以全球标准采用人工智能。",
      ctaTitle: "开启您的人工智能转型",
      ctaBody:
        "加入正在与 MODUS AI Associates 一起转型的企业与专业人士——MIIT 认证，由中国第一的人工智能培训生态系统提供支持。",
      ctaButton: "开启您的人工智能转型",
      exploreCta: "探索我们的课程",
      backHome: "返回首页",
    },
  },
  id: {
    heroHeadline: "Peluncuran Resmi Disaksikan oleh Gubernur Penang ke-8",
    heroHeadline2:
      "Meningkatkan Perusahaan Malaysia ke Eksekusi AI Kelas Dunia Melalui Pelatihan Bersertifikat Industri dan Integrasi Teknologi.",
    heroSubheadline:
      "MODUS AI Associates secara resmi meluncurkan inisiatif ekosistem AI internasionalnya melalui upacara penandatanganan dan pengguntingan pita yang disaksikan oleh Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak, memperkuat kolaborasi AI Malaysia-China dan kemitraan strategis.",
    heroTrust: [
      "20+ Kemitraan Strategis Global",
      "Kolaborasi Ekosistem AI Malaysia-China",
      "Mitra Ekosistem AI Bersertifikat MIIT",
    ],
    secondaryCta: "Lihat Peluncuran Resmi",
    sectionTitle: "Upacara Peluncuran Resmi",
    sectionSubtitle:
      "Disaksikan oleh Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak, Gubernur Penang ke-8",
    sectionBody:
      "MODUS AI Associates secara resmi meluncurkan inisiatif ekosistem AI melalui upacara penandatanganan dan pengguntingan pita penting yang disaksikan oleh Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak, mencerminkan komitmen kami untuk memajukan pengembangan talenta AI, transformasi perusahaan, dan kolaborasi internasional.",
    learnMore: "Baca Kisah Lengkap",
    imageAlt:
      "Upacara pengguntingan pita MODUS AI Associates yang disaksikan oleh Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak, Gubernur Penang ke-8",
    imageTitle: "Upacara Peluncuran Resmi MODUS AI Associates",
    imageCaption:
      "Peluncuran Resmi MODUS AI Associates — Upacara Penandatanganan & Pengguntingan Pita, 17 Desember 2025",
    signingAlt:
      "Upacara penandatanganan kemitraan internasional dan domestik MODUS AI Associates",
    signingCaption:
      "Penandatanganan kemitraan internasional & domestik — MODUS AI Associates",
    page: {
      metaTitle:
        "Peluncuran Resmi MODUS AI Associates Disaksikan oleh Gubernur Penang ke-8",
      metaDescription:
        "MODUS AI Associates secara resmi meluncurkan inisiatif ekosistem AI melalui upacara pengguntingan pita yang disaksikan oleh Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak, Gubernur Penang ke-8.",
      breadcrumbHome: "Beranda",
      breadcrumbCurrent: "Peluncuran Resmi",
      title: "Peluncuran Resmi Disaksikan oleh Gubernur Penang ke-8",
      subtitle:
        "Disaksikan oleh Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak, Gubernur Penang ke-8",
      intro:
        "MODUS AI Associates secara resmi meluncurkan inisiatif ekosistem AI internasionalnya melalui upacara penandatanganan dan pengguntingan pita yang disaksikan oleh Gubernur Penang ke-8 — tonggak penting dalam kolaborasi AI Malaysia-China.",
      overviewTitle: "Ikhtisar Acara",
      overviewBody:
        "Pada 17 Desember 2025, MODUS AI Associates dan China Ruidi Travel (Beijing) Technology Co., Ltd. menandai tonggak penting dengan Upacara Penandatanganan Perjanjian & Peluncuran. Acara ini dimuliakan oleh Tamu Kehormatan, YABhg Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak, Gubernur Penang ke-8, yang menyaksikan penandatanganan dan memimpin pengguntingan pita yang secara resmi meluncurkan inisiatif ekosistem AI internasional kami.",
      highlightsTitle: "Sorotan Peluncuran",
      highlights: [
        "Penandatanganan perjanjian kemitraan strategis internasional dan domestik",
        "Pengguntingan pita resmi dipimpin oleh Tamu Kehormatan, Gubernur Penang ke-8",
        "Peluncuran inisiatif ekosistem AI Malaysia-China MODUS AI Associates",
        "Mitra dari China, Malaysia, Singapura, Kamboja, Vietnam, dan Indonesia",
      ],
      galleryTitle: "Galeri Acara",
      partnershipTitle: "Signifikansi Kemitraan Internasional",
      partnershipBody:
        "Upacara ini mempertemukan lebih dari 20 mitra strategis di China, Malaysia, Singapura, Kamboja, Vietnam, dan Indonesia. Bersama-sama mereka membentuk fondasi ekosistem AI lintas batas yang menghubungkan perusahaan dan talenta Malaysia dengan jaringan pelatihan dan teknologi AI bersertifikat MIIT terkemuka di dunia dari China.",
      aboutTitle: "Tentang MODUS AI Associates",
      aboutBody:
        "MODUS AI Associates adalah gerbang Malaysia menuju ekosistem AI China. Didukung oleh sertifikasi MIIT dan jaringan pelatihan AI terbesar di China, kami menghadirkan pelatihan AI terapan, transformasi perusahaan, dan sistem AI terintegrasi yang membantu organisasi mengadopsi AI dengan standar global.",
      ctaTitle: "Mulai Transformasi AI Anda",
      ctaBody:
        "Bergabunglah dengan bisnis dan profesional yang bertransformasi bersama MODUS AI Associates — bersertifikat MIIT, didukung oleh ekosistem pelatihan AI No.1 China.",
      ctaButton: "Mulai Transformasi AI Anda",
      exploreCta: "Jelajahi Program Kami",
      backHome: "Kembali ke Beranda",
    },
  },
  vn: {
    heroHeadline:
      "Lễ Ra Mắt Chính Thức Được Chứng Kiến bởi Thống Đốc Penang Thứ 8",
    heroHeadline2:
      "Nâng tầm các doanh nghiệp Malaysia đạt năng lực triển khai AI đẳng cấp thế giới thông qua đào tạo được chứng nhận ngành và tích hợp công nghệ.",
    heroSubheadline:
      "MODUS AI Associates chính thức ra mắt sáng kiến hệ sinh thái AI quốc tế thông qua lễ ký kết và cắt băng khánh thành được chứng kiến bởi Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak, củng cố hợp tác AI Malaysia-Trung Quốc và các quan hệ đối tác chiến lược.",
    heroTrust: [
      "20+ Quan Hệ Đối Tác Chiến Lược Toàn Cầu",
      "Hợp Tác Hệ Sinh Thái AI Malaysia-Trung Quốc",
      "Đối Tác Hệ Sinh Thái AI Được MIIT Chứng Nhận",
    ],
    secondaryCta: "Xem Lễ Ra Mắt Chính Thức",
    sectionTitle: "Lễ Ra Mắt Chính Thức",
    sectionSubtitle:
      "Được chứng kiến bởi Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak, Thống Đốc Penang thứ 8",
    sectionBody:
      "MODUS AI Associates chính thức ra mắt sáng kiến hệ sinh thái AI thông qua lễ ký kết và cắt băng khánh thành mang tính bước ngoặt, được chứng kiến bởi Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak, thể hiện cam kết của chúng tôi trong việc thúc đẩy phát triển nhân tài AI, chuyển đổi doanh nghiệp và hợp tác quốc tế.",
    learnMore: "Đọc Toàn Bộ Câu Chuyện",
    imageAlt:
      "Lễ cắt băng khánh thành của MODUS AI Associates được chứng kiến bởi Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak, Thống Đốc Penang thứ 8",
    imageTitle: "Lễ Ra Mắt Chính Thức MODUS AI Associates",
    imageCaption:
      "Lễ Ra Mắt Chính Thức MODUS AI Associates — Lễ Ký Kết & Cắt Băng, 17 tháng 12 năm 2025",
    signingAlt:
      "Lễ ký kết quan hệ đối tác quốc tế và trong nước của MODUS AI Associates",
    signingCaption:
      "Ký kết quan hệ đối tác quốc tế & trong nước — MODUS AI Associates",
    page: {
      metaTitle:
        "Lễ Ra Mắt Chính Thức MODUS AI Associates Được Chứng Kiến bởi Thống Đốc Penang Thứ 8",
      metaDescription:
        "MODUS AI Associates chính thức ra mắt sáng kiến hệ sinh thái AI thông qua lễ cắt băng được chứng kiến bởi Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak, Thống Đốc Penang thứ 8.",
      breadcrumbHome: "Trang Chủ",
      breadcrumbCurrent: "Lễ Ra Mắt Chính Thức",
      title: "Lễ Ra Mắt Chính Thức Được Chứng Kiến bởi Thống Đốc Penang Thứ 8",
      subtitle:
        "Được chứng kiến bởi Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak, Thống Đốc Penang thứ 8",
      intro:
        "MODUS AI Associates chính thức ra mắt sáng kiến hệ sinh thái AI quốc tế thông qua lễ ký kết và cắt băng được chứng kiến bởi Thống Đốc Penang thứ 8 — một cột mốc trong hợp tác AI Malaysia-Trung Quốc.",
      overviewTitle: "Tổng Quan Sự Kiện",
      overviewBody:
        "Vào ngày 17 tháng 12 năm 2025, MODUS AI Associates và China Ruidi Travel (Beijing) Technology Co., Ltd. đã đánh dấu một cột mốc với Lễ Ký Kết Thỏa Thuận & Ra Mắt. Sự kiện vinh dự có sự hiện diện của Khách Mời Danh Dự, YABhg Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak, Thống Đốc Penang thứ 8, người đã chứng kiến lễ ký kết và chủ trì cắt băng chính thức ra mắt sáng kiến hệ sinh thái AI quốc tế của chúng tôi.",
      highlightsTitle: "Điểm Nhấn Lễ Ra Mắt",
      highlights: [
        "Ký kết các thỏa thuận đối tác chiến lược quốc tế và trong nước",
        "Lễ cắt băng chính thức do Khách Mời Danh Dự, Thống Đốc Penang thứ 8 chủ trì",
        "Ra mắt sáng kiến hệ sinh thái AI Malaysia-Trung Quốc của MODUS AI Associates",
        "Đối tác từ Trung Quốc, Malaysia, Singapore, Campuchia, Việt Nam và Indonesia",
      ],
      galleryTitle: "Thư Viện Sự Kiện",
      partnershipTitle: "Ý Nghĩa Quan Hệ Đối Tác Quốc Tế",
      partnershipBody:
        "Buổi lễ quy tụ hơn 20 đối tác chiến lược trên khắp Trung Quốc, Malaysia, Singapore, Campuchia, Việt Nam và Indonesia. Cùng nhau, họ tạo nên nền tảng của một hệ sinh thái AI xuyên biên giới, kết nối doanh nghiệp và nhân tài Malaysia với mạng lưới đào tạo và công nghệ AI hàng đầu thế giới, được MIIT chứng nhận của Trung Quốc.",
      aboutTitle: "Về MODUS AI Associates",
      aboutBody:
        "MODUS AI Associates là cửa ngõ của Malaysia đến hệ sinh thái AI của Trung Quốc. Được hỗ trợ bởi chứng nhận MIIT và mạng lưới đào tạo AI lớn nhất Trung Quốc, chúng tôi cung cấp đào tạo AI ứng dụng, chuyển đổi doanh nghiệp và các hệ thống AI tích hợp giúp các tổ chức áp dụng AI theo tiêu chuẩn toàn cầu.",
      ctaTitle: "Bắt Đầu Hành Trình Chuyển Đổi AI",
      ctaBody:
        "Hãy tham gia cùng các doanh nghiệp và chuyên gia đang chuyển đổi với MODUS AI Associates — được MIIT chứng nhận, được hỗ trợ bởi hệ sinh thái đào tạo AI số 1 Trung Quốc.",
      ctaButton: "Bắt Đầu Chuyển Đổi AI",
      exploreCta: "Khám Phá Chương Trình",
      backHome: "Về Trang Chủ",
    },
  },
  ar: {
    heroHeadline: "الإطلاق الرسمي بحضور حاكم بينانغ الثامن",
    heroHeadline2:
      "الارتقاء بالشركات الماليزية إلى تنفيذ الذكاء الاصطناعي بمستوى عالمي من خلال التدريب المعتمد صناعياً ودمج التكنولوجيا.",
    heroSubheadline:
      "أطلقت MODUS AI Associates رسميًا مبادرتها الدولية لمنظومة الذكاء الاصطناعي من خلال حفل توقيع وقص الشريط بحضور Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak، مما يعزز التعاون الماليزي الصيني في الذكاء الاصطناعي والشراكات الاستراتيجية.",
    heroTrust: [
      "أكثر من 20 شراكة استراتيجية عالمية",
      "تعاون منظومة الذكاء الاصطناعي بين ماليزيا والصين",
      "شريك منظومة ذكاء اصطناعي معتمد من MIIT",
    ],
    secondaryCta: "عرض الإطلاق الرسمي",
    sectionTitle: "حفل الإطلاق الرسمي",
    sectionSubtitle:
      "بحضور Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak، حاكم بينانغ الثامن",
    sectionBody:
      "أطلقت MODUS AI Associates رسميًا مبادرة منظومة الذكاء الاصطناعي من خلال حفل توقيع وقص شريط بارز بحضور Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak، بما يعكس التزامنا بتطوير مواهب الذكاء الاصطناعي وتحول المؤسسات والتعاون الدولي.",
    learnMore: "اقرأ القصة الكاملة",
    imageAlt:
      "حفل قص الشريط لـ MODUS AI Associates بحضور Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak، حاكم بينانغ الثامن",
    imageTitle: "حفل الإطلاق الرسمي لـ MODUS AI Associates",
    imageCaption:
      "الإطلاق الرسمي لـ MODUS AI Associates — حفل توقيع الاتفاقيات وقص الشريط، 17 ديسمبر 2025",
    signingAlt:
      "حفل توقيع الشراكات الدولية والمحلية لـ MODUS AI Associates",
    signingCaption:
      "توقيع الشراكات الدولية والمحلية — MODUS AI Associates",
    page: {
      metaTitle: "الإطلاق الرسمي لـ MODUS AI Associates بحضور حاكم بينانغ الثامن",
      metaDescription:
        "أطلقت MODUS AI Associates رسميًا مبادرة منظومة الذكاء الاصطناعي من خلال حفل قص الشريط بحضور Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak، حاكم بينانغ الثامن.",
      breadcrumbHome: "الرئيسية",
      breadcrumbCurrent: "الإطلاق الرسمي",
      title: "الإطلاق الرسمي بحضور حاكم بينانغ الثامن",
      subtitle:
        "بحضور Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak، حاكم بينانغ الثامن",
      intro:
        "أطلقت MODUS AI Associates رسميًا مبادرتها الدولية لمنظومة الذكاء الاصطناعي من خلال حفل توقيع وقص الشريط بحضور حاكم بينانغ الثامن — إنجاز بارز في التعاون الماليزي الصيني في الذكاء الاصطناعي.",
      overviewTitle: "نظرة عامة على الحدث",
      overviewBody:
        "في 17 ديسمبر 2025، حققت MODUS AI Associates وشركة China Ruidi Travel (Beijing) Technology Co., Ltd. إنجازًا بارزًا من خلال حفل توقيع الاتفاقيات والإطلاق. تشرّف الحدث بحضور ضيف الشرف، YABhg Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak، حاكم بينانغ الثامن، الذي شهد التوقيع وقاد قص الشريط الذي أطلق رسميًا مبادرتنا الدولية لمنظومة الذكاء الاصطناعي.",
      highlightsTitle: "أبرز لحظات الإطلاق",
      highlights: [
        "توقيع اتفاقيات شراكة استراتيجية دولية ومحلية",
        "قص الشريط الرسمي بقيادة ضيف الشرف، حاكم بينانغ الثامن",
        "إطلاق مبادرة منظومة الذكاء الاصطناعي الماليزية الصينية لـ MODUS AI Associates",
        "شركاء من الصين وماليزيا وسنغافورة وكمبوديا وفيتنام وإندونيسيا",
      ],
      galleryTitle: "معرض صور الحدث",
      partnershipTitle: "أهمية الشراكة الدولية",
      partnershipBody:
        "جمع الحفل أكثر من 20 شريكًا استراتيجيًا عبر الصين وماليزيا وسنغافورة وكمبوديا وفيتنام وإندونيسيا. وهم يشكلون معًا أساس منظومة ذكاء اصطناعي عابرة للحدود تربط المؤسسات والمواهب الماليزية بشبكة التدريب والتقنية الرائدة عالميًا والمعتمدة من MIIT في الصين.",
      aboutTitle: "حول MODUS AI Associates",
      aboutBody:
        "MODUS AI Associates هي بوابة ماليزيا إلى منظومة الذكاء الاصطناعي في الصين. مدعومة باعتماد MIIT وأكبر شبكة تدريب للذكاء الاصطناعي في الصين، نقدم تدريبًا تطبيقيًا على الذكاء الاصطناعي وتحولًا للمؤسسات وأنظمة ذكاء اصطناعي متكاملة تساعد المؤسسات على تبني الذكاء الاصطناعي وفق المعايير العالمية.",
      ctaTitle: "ابدأ تحولك نحو الذكاء الاصطناعي",
      ctaBody:
        "انضم إلى الشركات والمحترفين الذين يتحولون مع MODUS AI Associates — معتمدة من MIIT ومدعومة بمنظومة التدريب على الذكاء الاصطناعي الأولى في الصين.",
      ctaButton: "ابدأ تحولك نحو الذكاء الاصطناعي",
      exploreCta: "استكشف برامجنا",
      backHome: "العودة إلى الرئيسية",
    },
  },
  th: {
    heroHeadline:
      "พิธีเปิดตัวอย่างเป็นทางการ โดยมีผู้ว่าการรัฐปีนังคนที่ 8 เป็นสักขีพยาน",
    heroHeadline2:
      "ยกระดับบริษัทมาเลเซียสู่การนำ AI ไปใช้ระดับโลกผ่านการฝึกอบรมที่ได้รับการรับรองจากอุตสาหกรรมและการผสานเทคโนโลยี",
    heroSubheadline:
      "MODUS AI Associates เปิดตัวโครงการระบบนิเวศ AI ระดับนานาชาติอย่างเป็นทางการ ผ่านพิธีลงนามและตัดริบบิ้น โดยมี Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak เป็นสักขีพยาน เสริมสร้างความร่วมมือด้าน AI ระหว่างมาเลเซีย-จีน และความเป็นพันธมิตรเชิงกลยุทธ์",
    heroTrust: [
      "พันธมิตรเชิงกลยุทธ์ระดับโลกกว่า 20 ราย",
      "ความร่วมมือระบบนิเวศ AI มาเลเซีย-จีน",
      "พันธมิตรระบบนิเวศ AI ที่ได้รับการรับรองจาก MIIT",
    ],
    secondaryCta: "ดูพิธีเปิดตัวอย่างเป็นทางการ",
    sectionTitle: "พิธีเปิดตัวอย่างเป็นทางการ",
    sectionSubtitle:
      "โดยมี Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak ผู้ว่าการรัฐปีนังคนที่ 8 เป็นสักขีพยาน",
    sectionBody:
      "MODUS AI Associates เปิดตัวโครงการระบบนิเวศ AI อย่างเป็นทางการ ผ่านพิธีลงนามและตัดริบบิ้นครั้งสำคัญ โดยมี Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak เป็นสักขีพยาน สะท้อนถึงความมุ่งมั่นของเราในการพัฒนาบุคลากรด้าน AI การเปลี่ยนผ่านองค์กร และความร่วมมือระหว่างประเทศ",
    learnMore: "อ่านเรื่องราวฉบับเต็ม",
    imageAlt:
      "พิธีตัดริบบิ้นของ MODUS AI Associates โดยมี Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak ผู้ว่าการรัฐปีนังคนที่ 8 เป็นสักขีพยาน",
    imageTitle: "พิธีเปิดตัวอย่างเป็นทางการของ MODUS AI Associates",
    imageCaption:
      "พิธีเปิดตัวอย่างเป็นทางการของ MODUS AI Associates — พิธีลงนามและตัดริบบิ้น 17 ธันวาคม 2025",
    signingAlt:
      "พิธีลงนามความเป็นพันธมิตรระหว่างประเทศและในประเทศของ MODUS AI Associates",
    signingCaption:
      "การลงนามความเป็นพันธมิตรระหว่างประเทศและในประเทศ — MODUS AI Associates",
    page: {
      metaTitle:
        "พิธีเปิดตัวอย่างเป็นทางการของ MODUS AI Associates โดยมีผู้ว่าการรัฐปีนังคนที่ 8 เป็นสักขีพยาน",
      metaDescription:
        "MODUS AI Associates เปิดตัวโครงการระบบนิเวศ AI อย่างเป็นทางการ ผ่านพิธีตัดริบบิ้น โดยมี Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak ผู้ว่าการรัฐปีนังคนที่ 8 เป็นสักขีพยาน",
      breadcrumbHome: "หน้าแรก",
      breadcrumbCurrent: "พิธีเปิดตัวอย่างเป็นทางการ",
      title:
        "พิธีเปิดตัวอย่างเป็นทางการ โดยมีผู้ว่าการรัฐปีนังคนที่ 8 เป็นสักขีพยาน",
      subtitle:
        "โดยมี Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak ผู้ว่าการรัฐปีนังคนที่ 8 เป็นสักขีพยาน",
      intro:
        "MODUS AI Associates เปิดตัวโครงการระบบนิเวศ AI ระดับนานาชาติอย่างเป็นทางการ ผ่านพิธีลงนามและตัดริบบิ้น โดยมีผู้ว่าการรัฐปีนังคนที่ 8 เป็นสักขีพยาน — ก้าวสำคัญของความร่วมมือด้าน AI ระหว่างมาเลเซีย-จีน",
      overviewTitle: "ภาพรวมงาน",
      overviewBody:
        "เมื่อวันที่ 17 ธันวาคม 2025 MODUS AI Associates และ China Ruidi Travel (Beijing) Technology Co., Ltd. ได้สร้างก้าวสำคัญด้วยพิธีลงนามข้อตกลงและเปิดตัว งานนี้ได้รับเกียรติจากแขกผู้มีเกียรติ YABhg Tun Dato' Seri Utama Ahmad Fuzi Abdul Razak ผู้ว่าการรัฐปีนังคนที่ 8 ซึ่งเป็นสักขีพยานการลงนามและนำการตัดริบบิ้นเปิดตัวโครงการระบบนิเวศ AI ระดับนานาชาติของเราอย่างเป็นทางการ",
      highlightsTitle: "ไฮไลต์การเปิดตัว",
      highlights: [
        "การลงนามข้อตกลงความเป็นพันธมิตรเชิงกลยุทธ์ระหว่างประเทศและในประเทศ",
        "พิธีตัดริบบิ้นอย่างเป็นทางการ นำโดยแขกผู้มีเกียรติ ผู้ว่าการรัฐปีนังคนที่ 8",
        "การเปิดตัวโครงการระบบนิเวศ AI มาเลเซีย-จีนของ MODUS AI Associates",
        "พันธมิตรจากจีน มาเลเซีย สิงคโปร์ กัมพูชา เวียดนาม และอินโดนีเซีย",
      ],
      galleryTitle: "แกลเลอรีงาน",
      partnershipTitle: "ความสำคัญของความเป็นพันธมิตรระหว่างประเทศ",
      partnershipBody:
        "พิธีนี้รวบรวมพันธมิตรเชิงกลยุทธ์กว่า 20 รายจากจีน มาเลเซีย สิงคโปร์ กัมพูชา เวียดนาม และอินโดนีเซีย ร่วมกันสร้างรากฐานของระบบนิเวศ AI ข้ามพรมแดนที่เชื่อมโยงองค์กรและบุคลากรของมาเลเซียเข้ากับเครือข่ายการฝึกอบรมและเทคโนโลยี AI ชั้นนำระดับโลกที่ได้รับการรับรองจาก MIIT ของจีน",
      aboutTitle: "เกี่ยวกับ MODUS AI Associates",
      aboutBody:
        "MODUS AI Associates คือประตูสู่ระบบนิเวศ AI ของจีนสำหรับมาเลเซีย ด้วยการรับรองจาก MIIT และเครือข่ายการฝึกอบรม AI ที่ใหญ่ที่สุดของจีน เรามอบการฝึกอบรม AI เชิงประยุกต์ การเปลี่ยนผ่านองค์กร และระบบ AI แบบครบวงจรที่ช่วยให้องค์กรนำ AI มาใช้ตามมาตรฐานระดับโลก",
      ctaTitle: "เริ่มต้นการเปลี่ยนผ่านสู่ AI ของคุณ",
      ctaBody:
        "ร่วมเป็นส่วนหนึ่งกับธุรกิจและมืออาชีพที่กำลังเปลี่ยนผ่านไปกับ MODUS AI Associates — ได้รับการรับรองจาก MIIT ขับเคลื่อนด้วยระบบนิเวศการฝึกอบรม AI อันดับ 1 ของจีน",
      ctaButton: "เริ่มการเปลี่ยนผ่านสู่ AI",
      exploreCta: "สำรวจหลักสูตรของเรา",
      backHome: "กลับสู่หน้าแรก",
    },
  },
};

export interface PageMeta {
  title: string;
  description: string;
}

export const PAGE_META: Record<Lang, { home: PageMeta; details: PageMeta }> = {
  en: {
    home: {
      title: "MODUS AI Associates — Malaysia's Gateway to China's AI Ecosystem",
      description:
        "MIIT-certified AI training, enterprise transformation and integrated AI systems. Officially launched with a ribbon-cutting ceremony witnessed by the 8th Governor of Penang.",
    },
    details: {
      title: "Services, Courses & Systems — MODUS AI Associates",
      description:
        "Explore MODUS AI Associates' AI services, 12 MIIT-certified courses and 16 integrated AI systems bridging Malaysia and China's AI ecosystem.",
    },
  },
  bm: {
    home: {
      title: "MODUS AI Associates — Pintu Malaysia ke Ekosistem AI China",
      description:
        "Latihan AI bertauliah MIIT, transformasi perusahaan dan sistem AI bersepadu. Dilancarkan secara rasmi melalui majlis gunting reben yang disaksikan oleh Gabenor Pulau Pinang ke-8.",
    },
    details: {
      title: "Perkhidmatan, Kursus & Sistem — MODUS AI Associates",
      description:
        "Terokai perkhidmatan AI, 12 kursus bertauliah MIIT dan 16 sistem AI bersepadu MODUS AI Associates yang menghubungkan ekosistem AI Malaysia dan China.",
    },
  },
  cn: {
    home: {
      title: "MODUS AI Associates — 马来西亚通往中国人工智能生态系统的门户",
      description:
        "MIIT 认证人工智能培训、企业转型与集成人工智能系统。通过由槟城第八任州元首见证的剪彩仪式正式启动。",
    },
    details: {
      title: "服务、课程与系统 — MODUS AI Associates",
      description:
        "探索 MODUS AI Associates 的人工智能服务、12 项 MIIT 认证课程及 16 个集成人工智能系统，连接马中人工智能生态系统。",
    },
  },
  id: {
    home: {
      title: "MODUS AI Associates — Gerbang Malaysia ke Ekosistem AI China",
      description:
        "Pelatihan AI bersertifikat MIIT, transformasi perusahaan, dan sistem AI terintegrasi. Diluncurkan resmi melalui upacara pengguntingan pita yang disaksikan oleh Gubernur Penang ke-8.",
    },
    details: {
      title: "Layanan, Kursus & Sistem — MODUS AI Associates",
      description:
        "Jelajahi layanan AI, 12 kursus bersertifikat MIIT, dan 16 sistem AI terintegrasi MODUS AI Associates yang menghubungkan ekosistem AI Malaysia dan China.",
    },
  },
  vn: {
    home: {
      title: "MODUS AI Associates — Cửa Ngõ của Malaysia đến Hệ Sinh Thái AI Trung Quốc",
      description:
        "Đào tạo AI được MIIT chứng nhận, chuyển đổi doanh nghiệp và hệ thống AI tích hợp. Chính thức ra mắt qua lễ cắt băng được chứng kiến bởi Thống Đốc Penang thứ 8.",
    },
    details: {
      title: "Dịch Vụ, Khóa Học & Hệ Thống — MODUS AI Associates",
      description:
        "Khám phá dịch vụ AI, 12 khóa học được MIIT chứng nhận và 16 hệ thống AI tích hợp của MODUS AI Associates kết nối hệ sinh thái AI Malaysia và Trung Quốc.",
    },
  },
  ar: {
    home: {
      title: "MODUS AI Associates — بوابة ماليزيا إلى منظومة الذكاء الاصطناعي الصينية",
      description:
        "تدريب على الذكاء الاصطناعي معتمد من MIIT، وتحول للمؤسسات، وأنظمة ذكاء اصطناعي متكاملة. أُطلق رسميًا عبر حفل قص الشريط بحضور حاكم بينانغ الثامن.",
    },
    details: {
      title: "الخدمات والدورات والأنظمة — MODUS AI Associates",
      description:
        "استكشف خدمات الذكاء الاصطناعي و12 دورة معتمدة من MIIT و16 نظامًا متكاملًا للذكاء الاصطناعي من MODUS AI Associates التي تربط منظومتي ماليزيا والصين.",
    },
  },
  th: {
    home: {
      title: "MODUS AI Associates — ประตูสู่ระบบนิเวศ AI ของจีนสำหรับมาเลเซีย",
      description:
        "การฝึกอบรม AI ที่ได้รับการรับรองจาก MIIT การเปลี่ยนผ่านองค์กร และระบบ AI แบบครบวงจร เปิดตัวอย่างเป็นทางการผ่านพิธีตัดริบบิ้นโดยมีผู้ว่าการรัฐปีนังคนที่ 8 เป็นสักขีพยาน",
    },
    details: {
      title: "บริการ หลักสูตร และระบบ — MODUS AI Associates",
      description:
        "สำรวจบริการ AI หลักสูตรที่ได้รับการรับรองจาก MIIT 12 หลักสูตร และระบบ AI แบบครบวงจร 16 ระบบของ MODUS AI Associates ที่เชื่อมระบบนิเวศ AI มาเลเซียและจีน",
    },
  },
};
