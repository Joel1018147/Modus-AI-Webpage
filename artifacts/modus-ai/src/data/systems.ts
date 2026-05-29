import type React from "react";
  import { Building2, Wrench } from "lucide-react";
  import type { Lang } from "@/contexts/LanguageContext";

  export type SystemId =
  | "easydo-main" | "easydo-crm" | "easydo-email" | "easydo-automation" | "easydo-multichannel" | "easydo-support"
  | "easytools-main" | "easytools-content" | "easytools-social" | "easytools-mail" | "easytools-ads"
  | "easytools-seo" | "easytools-commerce" | "easytools-sales" | "easytools-chat" | "easytools-gao";
export type SystemLink = { id: SystemId; name: string; url: string; isMain?: boolean };
export type SystemGroup = {
  brand: string;
  taglineKey: "easyDoTagline" | "easyToolsTagline";
  icon: React.ComponentType<{ className?: string }>;
  styles: { iconWrap: string; icon: string; badge: string; arrow: string; card: string };
  systems: SystemLink[];
};

export const systemGroups: SystemGroup[] = [
  {
    brand: "M-EasyDo AI+",
    taglineKey: "easyDoTagline",
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
    taglineKey: "easyToolsTagline",
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

export const SYSTEM_DESCRIPTIONS: Record<Lang, Record<SystemId, string>> = {
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

  export type SystemsI18n = {
    title: string;
    titleHighlight: string;
    subtitle: string;
    easyDoTagline: string;
    easyToolsTagline: string;
    mainPlatform: string;
    opensInNewTab: string;
  };

  export const SYSTEMS_I18N: Record<Lang, SystemsI18n> = {
    en: {
      title: "Our",
      titleHighlight: "Systems",
      subtitle: "Two complete AI ecosystems — M-EasyDo AI+ and M-EasyTools AI+ — broken into 16 integrated systems to run and grow your business. Click any system to open it.",
      easyDoTagline: "Business operations, CRM, marketing & customer support",
      easyToolsTagline: "AI content, social, mail, ads, SEO, commerce, sales & more",
      mainPlatform: "Main Platform",
      opensInNewTab: "(opens in a new tab)",
    },
    bm: {
      title: "Sistem",
      titleHighlight: "Kami",
      subtitle: "Dua ekosistem AI lengkap — M-EasyDo AI+ dan M-EasyTools AI+ — dipecahkan kepada 16 sistem bersepadu untuk menjalankan dan mengembangkan perniagaan anda. Klik mana-mana sistem untuk membukanya.",
      easyDoTagline: "Operasi perniagaan, CRM, pemasaran & sokongan pelanggan",
      easyToolsTagline: "Kandungan AI, sosial, mel, iklan, SEO, e-dagang, jualan & lagi",
      mainPlatform: "Platform Utama",
      opensInNewTab: "(buka dalam tab baharu)",
    },
    cn: {
      title: "我们的",
      titleHighlight: "系统",
      subtitle: "两个完整的 AI 生态系统——M-EasyDo AI+ 与 M-EasyTools AI+——拆分为 16 个集成系统，助力您经营和发展业务。点击任意系统即可打开。",
      easyDoTagline: "业务运营、CRM、营销与客户支持",
      easyToolsTagline: "AI 内容、社交、邮件、广告、SEO、电商、销售等",
      mainPlatform: "主平台",
      opensInNewTab: "（在新标签页中打开）",
    },
    id: {
      title: "Sistem",
      titleHighlight: "Kami",
      subtitle: "Dua ekosistem AI lengkap — M-EasyDo AI+ dan M-EasyTools AI+ — dibagi menjadi 16 sistem terintegrasi untuk menjalankan dan mengembangkan bisnis Anda. Klik sistem mana pun untuk membukanya.",
      easyDoTagline: "Operasi bisnis, CRM, pemasaran & dukungan pelanggan",
      easyToolsTagline: "Konten AI, sosial, email, iklan, SEO, e-commerce, penjualan & lainnya",
      mainPlatform: "Platform Utama",
      opensInNewTab: "(buka di tab baru)",
    },
    vn: {
      title: "Hệ Thống",
      titleHighlight: "Của Chúng Tôi",
      subtitle: "Hai hệ sinh thái AI hoàn chỉnh — M-EasyDo AI+ và M-EasyTools AI+ — được chia thành 16 hệ thống tích hợp để vận hành và phát triển doanh nghiệp của bạn. Nhấp vào bất kỳ hệ thống nào để mở.",
      easyDoTagline: "Vận hành kinh doanh, CRM, tiếp thị & hỗ trợ khách hàng",
      easyToolsTagline: "Nội dung AI, mạng xã hội, email, quảng cáo, SEO, thương mại, bán hàng & hơn nữa",
      mainPlatform: "Nền tảng chính",
      opensInNewTab: "(mở trong tab mới)",
    },
    ar: {
      title: "أنظمتنا",
      titleHighlight: "المتكاملة",
      subtitle: "منظومتان متكاملتان للذكاء الاصطناعي — M-EasyDo AI+ و M-EasyTools AI+ — مقسمتان إلى 16 نظاماً متكاملاً لإدارة أعمالك وتنميتها. انقر على أي نظام لفتحه.",
      easyDoTagline: "عمليات الأعمال وإدارة العملاء والتسويق ودعم العملاء",
      easyToolsTagline: "محتوى الذكاء الاصطناعي والتواصل الاجتماعي والبريد والإعلانات وتحسين محركات البحث والتجارة والمبيعات والمزيد",
      mainPlatform: "المنصة الرئيسية",
      opensInNewTab: "(يُفتح في علامة تبويب جديدة)",
    },
    th: {
      title: "ระบบ",
      titleHighlight: "ของเรา",
      subtitle: "ระบบนิเวศ AI ที่สมบูรณ์สองระบบ — M-EasyDo AI+ และ M-EasyTools AI+ — แบ่งออกเป็น 16 ระบบที่เชื่อมต่อกันเพื่อดำเนินและขยายธุรกิจของคุณ คลิกที่ระบบใดก็ได้เพื่อเปิด",
      easyDoTagline: "การดำเนินธุรกิจ, CRM, การตลาด และการสนับสนุนลูกค้า",
      easyToolsTagline: "เนื้อหา AI, โซเชียล, อีเมล, โฆษณา, SEO, อีคอมเมิร์ซ, การขาย และอื่นๆ",
      mainPlatform: "แพลตฟอร์มหลัก",
      opensInNewTab: "(เปิดในแท็บใหม่)",
    },
  };
  