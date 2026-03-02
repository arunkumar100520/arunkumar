import pdf from "../assets/pdf/arun_kumar_resume (2).pdf"


export const portfolio = {
  name: "Arun Kumar",
  role: "Front-end Developer (React · TypeScript)",
  location: "Lucknow, India • Open to Remote/On-site",
  email: "ak1577282@gmail.com",
  linkedin: "https://www.linkedin.com/in/arun-kumar-275569241/",
  github: "https://github.com/arunkumar100520",
  portfolioUrl: "https://arunkumar-tau.vercel.app/",
  resumeUrl: pdf,

  hero: {
    headline: "Building responsive, scalable, and user-friendly web interfaces.",
    sub: "Front-end Developer skilled in React.js, TypeScript, and modern web development. Experienced in building responsive web applications, integrating REST APIs, and optimizing performance.",
    chips: ["React.js", "TypeScript", "Redux Toolkit", "TanStack Query", "Node.js"],
  },

  about: [
    "I am a Front-end Developer with a strong understanding of performance optimization, reusable components, and scalable frontend architecture.",
    "My expertise lies in creating clean, user-friendly interfaces and building full-stack applications using the MERN stack.",
    "I am actively learning advanced frontend and system design concepts to stay updated with modern development practices."
  ],

  experience: {
    company: "SRDT, Lucknow",
    title: "Front-end Developer",
    period: "Aug 2025 – Present",
    highlights: [
      "Developed reusable UI components using React.js and TypeScript.",
      "Integrated REST APIs using TanStack Query for efficient data fetching and caching.",
      "Built responsive and scalable layouts using modern frontend practices.",
      "Collaborated with designers to implement clean and user-friendly interfaces.",
      "Improved application performance using code splitting and lazy loading."
    ],
  },

  projects: [
    {
      title: "QuantSpire",
      subtitle: "MERN Stack Learning Platform",
      badges: ["React.js", "Node.js", "Express.js", "MongoDB"],
      bullets: [
        "Built full-stack learning platform using React.js, Node.js, Express.js, and MongoDB.",
        "Implemented authentication, dashboards, and progress tracking features.",
        "Integrated REST APIs and managed database schemas.",
        "Designed responsive UI for seamless experience across devices."
      ],
      links: { live: "https://qualtspire.vercel.app/", github: "" },
    },
    {
      title: "IPL Buzz Official",
      subtitle: "Web Application & SEO Optimization",
      badges: ["React.js", "SEO", "Performance Optimization"],
      bullets: [
        "Developed responsive frontend using React.js.",
        "Improved website structure and performance.",
        "Implemented SEO best practices for better visibility.",
        "Optimized page load speed and user experience."
      ],
      links: { live: "https://www.iplbuzzofficial.in/", github: "" },
    }
  ],

  skills: {
    Languages: ["JavaScript (ES6+)", "TypeScript", "HTML", "CSS", "SQL", "C++"],
    Frontend: ["React.js", "Redux Toolkit", "TanStack Query", "Responsive Design"],
    Backend: ["Node.js", "Express.js", "REST API"],
    Database: ["MongoDB", "MySQL"],
    Tools: ["Git", "GitHub", "Postman", "Figma"],
    "Core Concepts": ["API Integration", "State Management", "Component Architecture", "Performance Optimization"]
  },

  education: [
    {
      degree: "Bachelor of Technology in Information Technology", // 
      institution: "Rajkiya Engineering College, Ambedkar Nagar",
      period: "July 2025", // 
    }
  ],

  achievements: [
    {
      title: "MERN Stack Development",
      period: "Present",
      bullets: [
        "Built multiple full-stack and frontend projects using MERN stack.",
        "Demonstrated strong understanding of React.js and modern frontend development."
      ],
    },
    {
      title: "Continuous Learning",
      period: "Ongoing",
      bullets: ["Actively learning advanced frontend and system design concepts."],
    },
  ],
};