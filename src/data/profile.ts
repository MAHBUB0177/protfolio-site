export const profile = {
  name: "MD. Mahbub Alam",
  shortName: "Mahbub",
  title: "Software Engineer",
  location: "Dhaka, Bangladesh",
  phone: "01810600234",
  email: "ma01776879@gmail.com",
  summary:
    "Software Engineer with 4+ years of experience building frontend and full-stack web applications using JavaScript, React, and Next.js. Delivering production systems across travel, e-commerce, banking, education, and AI platforms.",
  social: {
    github: "https://github.com/MAHBUB0177",
    linkedin: "https://linkedin.com/in/mahbub-alam-7249661ba",
  },
  siteUrl: "https://mahbubalam.dev",
  resumeUrl: "/MD_Mahbub_Alam_Resume.pdf",
  photoUrl: "/mahbub-profile1.png",
  greeting: "Hi I am",
  about: {
    tagline:
      "Frontend & Full-Stack Software Engineer | AI-Driven Application Development",
    body: "I'm a seasoned Full-Stack Software Engineer with a strong track record in innovation and collaboration. I am skilled in frontend and backend technologies, including JavaScript, React, and Next.js,Node.js,MongoDB,Express.js. Experienced in diverse projects such as OTA, e-commerce,r leading financial institutions, including BRAC Bank, Nagad, and IDLC Finance. Online Learning Platform, and education management web applications.As a software engineer, I aim to contribute to innovative technologies and tackle new challenges.",
  },
  stats: [
    { value: "4+", label: "Experiences" },
    { value: "10+", label: "Project done" },
    { value: "5+", label: "Industries" },
  ],
} as const;

export const education = [
  {
    degree: "Bachelor of Science in Computer Science and Engineering (CSE)",
    school: "Daffodil International University",
    period: "01/2017 – 12/2020",
    location: "Dhaka, Bangladesh",
    score: "CGPA 3.70 / 4.00",
  },
  {
    degree: "Higher Secondary Certificate (HSC), Science",
    school: "Naogaon Govt. College",
    period: "03/2015 – 08/2016",
    location: "Naogaon, Bangladesh",
    score: "CGPA 4.42 / 5.00",
  },
] as const;

export const skillGroups = [
  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Nuxt.js",
      "Vue.js",
      "Redux",
      "React Hooks",
      "React Hook Form",
      "React Router",
      "React Query",
      "NextAuth.js",
      "Zustand",
    ],
  },
  {
    title: "UI Frameworks",
    items: [
      "Ant Design",
      "Chakra UI",
      "Bootstrap",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Material-UI",
      "Shadcn UI",
    ],
  },
  {
    title: "Languages",
    items: [
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Python",
      "Django",
    ],
  },
  {
    title: "Tools",
    items: [
      "NPM",
      "Yarn",
      "Git",
      "GitHub",
      "Figma",
      "Vercel",
      "Netlify",
      "Heroku",
    ],
  },
] as const;

export const experience = [
  {
    role: "Software Engineer",
    company: "Singularity Limited",
    note: "a concern of Runner Group",
    period: "12/2025 – Present",
    location: "Dhaka, Bangladesh",
    highlights: [
      "Building and maintaining Next.js applications across education, banking, and AI commerce platforms.",
      "Delivering responsive interfaces, API integrations, authentication systems, and admin dashboards.",
      "Owning end-to-end delivery including deployment, performance optimization, and production support.",
    ],
  },
  {
    role: "Software Engineer",
    company: "TechnoNext Ltd.",
    note: "a concern of US Bangla Group",
    period: "09/2022 – 11/2025",
    location: "Dhaka, Bangladesh",
    highlights: [
      "Engineered TripLover, FirstTrip, and TravelChamp booking platforms for hotels, flights, and travel services.",
      "Built reusable API layers with Axios and React Query for caching, retries, and booking/payment flows.",
      "Implemented JWT authentication, role-based access, and optimized MySQL/PostgreSQL schemas.",
    ],
  },
  {
    role: "Junior Software Engineer",
    company: "Peart Technology Ltd",
    note: null,
    period: "08/2021 – 08/2022",
    location: "Dhaka, Bangladesh",
    highlights: [
      "Contributed to production web applications with a focus on clean UI and reliable feature delivery.",
      "Collaborated on requirements, integrations, and iterative improvements for client-facing products.",
    ],
  },
] as const;

export const services = [
  {
    title: "Frontend Engineering",
    description:
      "Pixel-precise, accessible React and Next.js interfaces with strong performance and maintainable component architecture.",
  },
  {
    title: "Full-Stack Delivery",
    description:
      "End-to-end product development from requirements and UI to APIs, auth, databases, and production deployment.",
  },
  {
    title: "API & Auth Systems",
    description:
      "Secure JWT and OAuth flows, role-based access, and resilient API integrations with caching and error handling.",
  },
  {
    title: "Admin Dashboards",
    description:
      "Operational dashboards for content, users, bookings, and business workflows with clear UX and scalable patterns.",
  },
  {
    title: "E-Commerce & Booking",
    description:
      "Commerce, ticketing, and travel booking experiences with payments, catalogs, and high-traffic readiness.",
  },
  {
    title: "Performance & Support",
    description:
      "Optimization, debugging, and production support so shipped products stay fast, stable, and easy to evolve.",
  },
] as const;

export const projects = [
  {
    title: "Online Travel Agency (B2B & B2C)",
    subtitle: "TripLover · FirstTrip · TravelChamp",
    description:
      "Web platforms for flight, hotel, and car rental booking with JWT auth, role-based access, and payment-ready modules.",
    tags: ["Next.js", "React Query", "JWT", "MySQL", "PostgreSQL"],
    image: "/firsttrip.png",
    link: "https://firsttrip.com",
  },
  {
    title: "Carpe Diem Events",
    subtitle: "E-Commerce Platform",
    description:
      "Event tickets and merchandise store with Google/Facebook authentication, designed for 500+ daily visitors.",
    tags: ["Next.js", "Node.js", "OAuth", "E-Commerce", "UI/UX"],
    image: "/carpediem.png",
    link: "https://pmi-ecom.singularitybd.xyz/product",
  },
  {
    title: "Online Learning Platform.",
    subtitle: "Education Platform",
    description:
      "Course enrollment, quizzes, assignments, automated grading, badges, certificates, forums, and an admin dashboard.",
    tags: [
      "Next.js",
      "Express.js",
      "redis",
      "Education",
      "Dashboard",
      "Multimedia",
    ],
    image: "/olp.png",
    link: "https://lotla.in/en",
  },
  {
    title: "Brac Bank Website",
    subtitle: "Banking Platform",
    description:
      "Retail, SME, and corporate banking web experiences including Tara Banking, Uddokta, and offer management.",
    tags: ["Next.js", "SEO", "Banking", "CMS", "Enterprise"],
    image: "/brac-bank.png",
    link: "https://www.bracbank.com/en",
  },
  {
    title: "Nagad Website",
    subtitle: "Digital Financial Services Platform",
    description:
      "A modern digital financial services platform delivering seamless mobile financial experiences, including digital transactions, account management, merchant services, and promotional offers.",
    tags: ["Nuxt.js", "FinTech", "Digital Payments", "Enterprise"],
    image: "/nagad.png",
    link: "https://nagad.com.bd/bn/",
  },
  {
    title: "IDLC Finance Website",
    subtitle: "Digital Financial & Consumer Finance Platform",
    description:
      "A comprehensive financial services platform showcasing home loans, car loans, deposit schemes, SME financing, and corporate financial solutions, with seamless access to loan applications, financial products, and customer services.",
    tags: [
      "Nuxt.js",
      "Deposit",
      "FinTech",
      "Financial Services",
      "Enterprise",
      "Loan",
    ],
    image: "/idlc-finance.png",
    link: "https://www.idlc.com/",
  },
] as const;

export const languages = [
  { name: "Bangla", level: "Native" },
  { name: "English", level: "Intermediate" },
] as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
] as const;
