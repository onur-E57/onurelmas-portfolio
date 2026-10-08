export const navItems = [
  { name: "Hakkımda", link: "#about" },
  { name: "Projeler", link: "#projects" },
  { name: "Deneyim", link: "#experience" },
  { name: "İletişim", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "Modern web arayüzleri ve ölçeklenebilir backend mimarileri geliştiriyorum.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "İstanbul'da yaşıyorum, esnek çalışma saatlerine uygunum.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Teknoloji Yığınım",
    description: "Full-Stack Geliştirme",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Yazılım mimarilerine tutkuyla bağlı bir teknoloji meraklısıyım.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Şu an kurumsal ERP sistemleri ve API servisleri üzerinde çalışıyorum.",
    description: "Son Durum",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg", 
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Benimle bir projede çalışmak ister misin?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;

// --- PROJELER ---
export const projects = [
  {
    id: 1,
    title: "ABK Diamond - E-Ticaret",
    des: "Kuyumcular için geliştirdiğim; Admin paneli, stok takibi ve dinamik filtreleme özellikleri olan modern bir E-Ticaret platformu.",
    img: "/abk-screenLight.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.svg"], 
    link: "https://abk-diamond-ui.vercel.app/",
    sourceCode: "https://github.com/onur-E57/abkDiamond-ui",
  },
  {
    id: 2,
    title: "Hasel Mermercilik - Vitrin",
    des: "Mermercilik sektörü için React ve Vite kullanılarak tasarlanmış, SEO uyumlu ve animasyonlu Landing Page uygulaması.",
    img: "/haselmermercilik.png",
    iconLists: ["/re.svg"],
    link: "https://hasel-mermercilik.vercel.app/",
    sourceCode: "https://github.com/onur-E57/HaselMermercilik",
  },
  {
    id: 3,
    title: "Sihirbazın Çırağı - 3D Baskı",
    des: "3D yazıcı ile takı, anahtarlık gibi ürünler yapan bir E-Ticaret platformu için geliştirdiğim Landing Page uygulaması.",
    img: "/sihirbaz.png",
    iconLists: ["/re.svg"],
    link: "https://sihirbazin-ciragi-landing-page.vercel.app",
    sourceCode: "https://github.com/onur-E57/sihirbazin-ciragi-landing-page",
  },
] as const;

export const testimonials = [
  {
    quote:
      "İş disiplini ve çözüm odaklı yaklaşımı sayesinde projemizi zamanından önce ve eksiksiz teslim aldık. Kesinlikle tavsiye ederim.",
    name: "Referans Eklenecek",
    title: "Şirket Yöneticisi",
  },
];

// --- ŞİRKET LOGOLARI ---
export const companies = [
  {
    id: 1,
    name: "Sentez Yazılım",
    img: "/git.svg", 
    nameImg: "/git.svg",
  },
] as const;

// --- DENEYİM ---
export const workExperience = [
  {
    id: 1,
    title: "Yazılım Geliştirme Stajyeri | Sentez Yazılım",
    desc: "Kurumsal ERP sistemleri üzerinde çalışıyor; .NET C#, ASP.NET Core Web API ve SQL Server kullanarak güvenli veri akışları ve backend servisleri geliştiriyorum.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Freelance Frontend Geliştirici",
    desc: "İşletmeler ve e-ticaret projeleri için React, JavaScript ve modern CSS mimarileri (Tailwind) kullanarak responsive ve kullanıcı odaklı web arayüzleri tasarlıyorum.",
    className: "md:col-span-2", 
    thumbnail: "/exp2.svg",
  },
] as const;

// --- SOSYAL MEDYA ---
export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/onur-E57",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/onur-elmas-9b55a4293/",
  },
  {
    name: "Email",
    img: "/gmail.svg",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=onur.elmas04@gmail.com",
  },
] as const;

// --- TEKNOLOJİ YIĞINI ---
export const techStack = {
  stack1: ["C#", ".NET Core", "SQL Server"],
  stack2: ["React", "Java", "Tailwind"],
} as const;