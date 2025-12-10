export type Project = {
  title: string;
  slug: string;
  image: string;
  desc: string;
  tags: string[];
  live: string;
  github: string;
};

export const projects: Project[] = [
  {
    title: "Sistem Informasi Program Studi Manajemen Rekayasa IT Del",
    slug: "si-mr-it-del",
    image: "/projects/mr-del.jpg",
    desc: "Full-stack system with UI design, system flow, and backend logic for 200+ students. Implemented core front-end features and data handling.",
    tags: ["Full Stack", "UI/UX", "MySQL", "System Design", "Figma"],
    live: "#",
    github: "#"
  },
  {
    title: "Warehouse Inventory Management App",
    slug: "warehouse-inventory",
    image: "/projects/warehouse.jpg",
    desc: "Java Swing + MySQL desktop application with 4 CRUD modules, validation, search function, and structured MySQL schema.",
    tags: ["Java Swing", "MySQL", "Desktop App", "CRUD"],
    live: "#",
    github: "#"
  },
  {
    title: "Redesign Rumah Kreatif Toba",
    slug: "redesign-rumah-kreatif-toba",
    image: "/projects/rkt-redesign.jpg",
    desc: "Led UI redesign using heuristic evaluation, competitive analysis, and SUS testing. Produced high-fidelity prototypes and ran usability tests on 10 respondents.",
    tags: ["UI/UX", "Figma", "Usability Testing", "Heuristic Evaluation"],
    live: "#",
    github: "#"
  },
  {
    title: "Sistem Informasi Kemahasiswaan IT Del",
    slug: "sistem-kemahasiswaan-it-del",
    image: "/projects/kemahasiswaan.jpg",
    desc: "Front-end developer for a multi-page student system with 500+ users. Built using Inertia.js and automated 20+ test cases.",
    tags: ["Inertia.js", "Laravel", "Frontend", "Testing", "Katalon", "PostgreSQL"],
    live: "#",
    github: "#"
  },
  {
    title: "B-Call App",
    slug: "b-call-app",
    image: "/projects/bcall.jpg",
    desc: "Designed and built the mobile front-end for real-time calorie and BMI tracking. Created interface flows and contributed to app logic.",
    tags: ["Swift UI","Mobile App", "UI/UX", "Figma", "Frontend"],
    live: "#",
    github: "#"
  },
  {
    title: "Whisper + DeBERTa Coherence Evaluation System",
    slug: "whisper-deberta-coherence",
    image: "/projects/ielts-ai.jpg",
    desc: "Front-end developer for a system evaluating IELTS Speaking coherence using Whisper and DeBERTa v3-base. Contributed to UI/UX, dataset prep, and documentation.",
    tags: ["AI", "NLP", "Whisper", "DeBERTa", "Next.js","Frontend"],
    live: "#",
    github: "#"
  }
];