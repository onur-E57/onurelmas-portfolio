// Bu dosya sitenin BEYNİDİR. Buradaki her değişiklik sitede görünür.

export const navItems = [
  { name: "Hakkımda", link: "#about" },
  { name: "Projeler", link: "#projects" },
  { name: "Deneyim", link: "#experience" },
  { name: "İletişim", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "Kullanıcı deneyimini ön planda tutan, modern web arayüzleri tasarlıyorum.",
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
    title: "Teknoloji Yığınım (Tech Stack)",
    description: "Sürekli gelişiyorum",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Yazılım geliştirme tutkusu olan bir teknoloji meraklısıyım.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Şu an ABK Diamond Projesi üzerinde çalışıyorum",
    description: "Son Durum",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg", // Kod görseli
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
    des: "Mermercilik sektörü için geliştirdiğim Landing Page bir React App",
    img: "/haselmermercilik.png",
    iconLists: ["/re.svg"],
    link: "https://hasel-mermercilik.vercel.app/",
    sourceCode: "https://github.com/onur-E57/HaselMermercilik",
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
// --- ŞİRKET LOGOLARI (Boş kalabilir) ---
export const companies = [
  {
    id: 1,
    name: "Vercel",
    img: "/git.svg", // Şimdilik GitHub ikonunu kullanalım, build geçsin
    nameImg: "/git.svg",
  },
] as const;
// --- DENEYİM ---
export const workExperience = [
  {
    id: 1,
    title: "Frontend Geliştirici",
    desc: "React, JavaScript ve Modern UI kütüphaneleri kullanarak responsive ve etkileşimli web arayüzleri geliştiriyorum.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Junior Frontend Developer Desc",
    desc: "İstanbul Gelişim Üniversitesi'ndeki akademik eğitimimin yanı sıra, modern web teknolojileriyle (React, Next.js) gerçek dünya projeleri geliştiriyor ve freelance çözümler sunuyorum.",
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
  stack1: ["Wordpress", "HTML5", "CSS"],
  stack2: ["Javascript", "React.js"],
} as const;