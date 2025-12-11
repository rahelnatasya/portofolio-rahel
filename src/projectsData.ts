export type Project = {
  title: string;
  slug: string;
  image: string;
  desc: string;
  full: string[];
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
    full: ["An integrated information system designed for students, parents, and the general public to access academic and organizational activities within the Management Engineering study program at IT Del. The platform provides structured information such as student activities, achievements, program initiatives, available facilities, and the program’s vision and mission.",
  "The system supports two user roles. Administrators manage the entire content, including adding, updating, and deleting information, while public users can browse all content through an interface designed for easy navigation and accessibility. This structure ensures that campus information is delivered accurately, clearly, and in an organized way."
],
    tags: ["Full Stack", "UI/UX", "MySQL", "System Design", "Figma"],
    live: "#",
    github: "#"
  },
  {
    title: "Warehouse Inventory Management App",
    slug: "warehouse-inventory",
    image: "/projects/warehouse.jpg",
    desc: "Java Swing + MySQL desktop application with 4 CRUD modules, validation, search function, and structured MySQL schema.",
    full:["A desktop application built to help warehouse staff manage inventory more efficiently. The system includes four main CRUD modules that support recording, updating, removing, and searching inventory data.",
  "Developed using Java Swing and connected to a structured MySQL database, the application ensures smooth data processing and retrieval. Each feature includes input validation to minimize user errors.",
  "With its simple interface and fast search functionality, the application improves stock monitoring accuracy and streamlines day-to-day warehouse operations."],
    tags: ["Java Swing", "MySQL", "Desktop App", "CRUD"],
    live: "#",
    github: "#"
  },
  {
    title: "Redesign Rumah Kreatif Toba",
    slug: "redesign-rumah-kreatif-toba",
    image: "/projects/rkt-redesign.jpg",
    desc: "Led UI redesign using heuristic evaluation, competitive analysis, and SUS testing. Produced high-fidelity prototypes and ran usability tests on 10 respondents.",
    full:["A research-driven UX redesign project for the Rumah Kreatif Toba website. The process began with heuristic evaluation and competitive analysis to identify usability issues in the existing interface.",
  "Based on the findings, the information architecture and navigation flow were restructured to create a more intuitive experience. High-fidelity prototypes were then developed using Figma to visualize the improved interface.",
  "The prototype was tested with 10 respondents through usability testing to measure effectiveness and user satisfaction. Feedback was analyzed and applied to refine the final design, resulting in a more responsive, user-friendly, and goal-aligned interface."],
    tags: ["UI/UX", "Figma", "Usability Testing", "Heuristic Evaluation"],
    live: "#",
    github: "#"
  },
  {
    title: "Sistem Informasi Kemahasiswaan IT Del",
    slug: "sistem-kemahasiswaan-it-del",
    image: "/projects/kemahasiswaan.jpg",
    desc: "Front-end developer for a multi-page student system with 500+ users. Built using Inertia.js and automated 20+ test cases.",
    full:[  "A multi-page information system used by more than 500 users, including students, organizational admins (BEM and MPM), the student affairs division, and the campus counseling unit. The system streamlines the management of student activities through an integrated and accessible interface.",
  "In this project, I developed over 20 automated test cases using Katalon and Cypress to ensure feature stability and reliability across the entire system. The platform improves data accuracy and provides a more efficient workflow for campus administrative processes."],
    tags: ["Inertia.js", "Laravel", "Frontend", "Testing", "Katalon", "Cypress","PostgreSQL"],
    live: "#",
    github: "#"
  },
  {
    title: "B-Call App",
    slug: "b-call-app",
    image: "/projects/bcall.jpg",
    desc: "Designed and built the mobile front-end for real-time calorie and BMI tracking. Created interface flows and contributed to app logic.",
    full:[ "A mobile application designed to help users track calorie intake, physical activity, and BMI estimates in real time. The project focused on creating a clean, modern, and lightweight interface for daily use.",
  "I contributed to the UI design using Figma and developed the front-end interface with SwiftUI. Users can calculate their ideal body weight based on height and weight inputs and estimate calories burned during running in real time.",
  "In addition to the interface, I assisted in implementing basic logic for BMI and calorie calculations to ensure the application provides accurate and easy-to-understand results."],
    tags: ["Swift UI","Mobile App", "UI/UX", "Figma", "Frontend"],
    live: "#",
    github: "#"
  },
  {
    title: "Whisper + DeBERTa Coherence Evaluation System",
    slug: "whisper-deberta-coherence",
    image: "/projects/ielts-ai.jpg",
    desc: "Front-end developer for a system evaluating IELTS Speaking coherence using Whisper and DeBERTa v3-base. Contributed to UI/UX, dataset prep, and documentation.",
    full: [ "An automated evaluation system for assessing coherence in IELTS Speaking responses using Whisper for speech-to-text processing and DeBERTa v3-base as the main NLP model.",
  "I contributed to designing the user interface and the evaluation workflow to make the system intuitive and easy to use. I also supported dataset preparation, documentation writing, and feature integration.",
  "The system generates automatic transcriptions, analyzes answer structure, and produces coherence scores instantly. This approach creates a more consistent, fast, and effective evaluation tool for learners."],
    tags: ["AI", "NLP", "Whisper", "DeBERTa", "Next.js","Frontend"],
    live: "#",
    github: "#"
  }
];