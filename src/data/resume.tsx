import { Icons } from "@/components/icons";
import { FileText, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Puneet Kumar",
  initials: "PK",
  url: "https://puneetshivaay.vercel.app",
  location: "Noida, India",
  locationLink: "https://www.google.com/maps/place/Noida",
  description:
    "Software Engineer with 5+ years of experience designing and developing scalable enterprise web applications for Google and DirecTV using React.js, Next.js, JavaScript, and TypeScript.",
  summary:
    "Experienced Frontend Software Engineer skilled in frontend architecture, reusable component libraries, REST API integration, authentication, and web performance optimization. Proven track record in delivering high-quality software in Agile environments, driving enterprise operations efficiency, and scaling production web applications.",
  avatarUrl: "/puneetphoto.jpg", // Add your photo in /public/me.jpg or replace with external image URL
skills: [
    // Frontend Architecture (Primary Focus)
    "React.js",
    "React 18",
    "Next.js",
    "TypeScript",
    "JavaScript (ES6+)",
    "Redux",
    "Context API",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Responsive Design",
    "Component Library Development",

    // Cloud, AI & Backend
    "Google Cloud Platform (GCP)",
    "Agentic AI",
    "Firebase",
    "Azure App Proxy",
    "Node.js",
    "Express.js",
    "REST APIs",
    "Python",

    // DevOps, Performance & Tooling
    "Git",
    "GitHub",
    "Azure DevOps",
    "Jenkins",
    "Harness",
    "ArgoCD",
    "GitOps",
    "Postman",
    "Dynatrace",
    "Quantum Metric",
    "Core Web Vitals",

    // Mobile & Methodologies
    "Flutter",
    "Dart",
    "Agile / Scrum",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "/Puneet_Kumar_Resume.pdf",
      icon: FileText,
      label: "Resume",
    },
  ],
  contact: {
    email: "PuneetShivaay@gmail.com",
    tel: "+918545083648",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/PuneetShivaay",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/puneetshivaay", // Update with your exact LinkedIn handle
        icon: Icons.linkedin,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:PuneetShivaay@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Cognizant Technology Solutions",
      logoUrl: "/cognizant.png", // Main Cognizant Logo
      href: "https://www.cognizant.com/",
      start: "Jan 2022",
      end: "Present",
      clients: [
        {
          clientName: "DirecTV",
          clientLogo: "/directv.svg", // Place DirecTV logo in /public/directv.png
          title: "Software Engineer (Frontend Specialist)",
          start: "Jan 2025",
          end: "Present",
          description:
            "Architected and deployed the enterprise Self Service Tool (SST) using React 18, Next.js, and Context API, reducing manual operational effort by 30%. Designed a reusable UI component library adopted across multiple enterprise modules, cutting frontend development effort by 40%. Integrated secure Single Sign-On (SSO), REST APIs, and Azure App Proxy while optimizing web performance via Dynatrace and Quantum Metric.",
        },
        {
          clientName: "Google",
          clientLogo: "/google.png", // Place Google logo in /public/google.png
          title: "Software Engineer",
          start: "Jan 2022",
          end: "Dec 2024",
          description:
            "Managed an ecosystem of 4,000+ Chrome Extensions supporting Google's internal enterprise platform. Led the migration of 100+ Chrome Extensions from Manifest V2 to Manifest V3. Identified and resolved 500+ security vulnerabilities. Developed internal enterprise applications using React.js, Node.js, REST APIs, Firebase, and Google Cloud Platform (GCP).",
        },
      ],
    },
    {
      company: "Yontech Solutions Pvt. Ltd",
      logoUrl: "/mmp2.jpg",
      href: "#",
      start: "Sep 2020",
      end: "Dec 2021",
      clients: [
        {
          clientName: "MMP, Aptence, EuNext, ErDr", // No client grouping needed here
          clientLogo: "/mmp.jpg",
          title: "Software Engineer",
          start: "Sep 2020",
          end: "Dec 2021",
          description:
            "Developed and launched 10+ responsive web and mobile applications using React.js, Flutter, Python, Django, and Firebase. Built reusable frontend component structures and refactored data-fetching modules, boosting user engagement by 20%.",
        },
      ],
    },
  ],

  education: [
    {
      school: "Dr. A.P.J. Abdul Kalam Technical University",
      href: "https://aktu.ac.in/",
      degree: "Bachelor of Technology (B.Tech.), Computer Science and Engineering",
      logoUrl: "/aktu.png",
      start: "2016",
      end: "2020",
    },
  ],

  certifications: [
    {
      title: "Cloud Technical Series: Agentic AI Edition",
      issuer: "Google Cloud",
      date: "2026",
      logoUrl: "/GoogleAgenticAI.png",
      credentialUrl: "https://www.credly.com/badges/a1673997-1b81-4e73-9be1-6457da24c57c",
    },
    {
      title: "Google Cloud Certified - Cloud Digital Leader",
      issuer: "Google Cloud",
      date: "2024",
      logoUrl: "/GoogleCloud.png", // Place Google Cloud logo/badge image in your /public folder
      credentialUrl: "https://www.credly.com/badges/9cd64f3b-9851-4599-9c88-1037ee64ef0a", // Add your verification link if available
    },
    {
      title: "IBM Digital Badge",
      issuer: "IBM",
      date: "2023",
      logoUrl: "/ibm.png",
      credentialUrl: "https://www.credly.com/badges/5d56604f-6795-4722-b49f-b44863bd3660/public_url#",
    },
    {
      title: "Neural Networks and Deep Learning",
      issuer: "DeepLearning.AI (Coursera)",
      date: "2023",
      logoUrl: "/coursera.png",
      credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/D8TML7SZREZX",
    },
    {
      title: "How to Build an E-Commerce Website with React?",
      issuer: "Scaler (InterviewBit)",
      date: "2022",
      logoUrl: "/scaler.png",
      credentialUrl: "https://moonshot.scaler.com/s/sl/1HHegPt-vd",
    },
    {
      title: "Responsive Web Design: HTML5 + CSS3 for Entrepreneurs",
      issuer: "Udemy",
      date: "2021",
      logoUrl: "/udemy.png",
      credentialUrl: "https://www.udemy.com/certificate/UC-da024f38-3cec-415b-8597-c34737c0a877/",
    },
    {
      title: "Machine Learning with Python",
      issuer: "Coursera",
      date: "2023",
      logoUrl: "/coursera.png",
      credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/3T9FGHD4FXPD",
    },
  ],
  leadership: [
    {
      role: "Volunteer & Mentor",
      organization: "Cognizant Outreach",
      dates: "Jan 2022 – Jun 2022",
      description:
        "Mentored 60+ employees and 200+ students across Cognizant's social initiative programs.",
    },
    {
      role: "Course Instructor",
      organization: "Expertrons",
      dates: "Jun 2021 – Jul 2021",
      description:
        "Created and delivered a Web Development curriculum, teaching and mentoring active learners.",
    },
    {
      role: "Mentor",
      organization: "Guruphoria",
      dates: "Aug 2020 – Dec 2021",
      description:
        "Mentored students in programming and core language skills via live online sessions.",
    },
  ],

  awards: [
    {
      title: "Guinness World Records Certificate",
      issuer: "Guinness World Records / Cognizant Vibe Coding",
      year: "2025",
      description:
        "Contributed to setting a official Guinness World Record during Cognizant Vibe Coding by developing a technical solution as part of a global engineering hackathon.",
    },
    {
      title: "Cognizant Cheers Award",
      issuer: "Cognizant Technology Solutions",
      year: "2024",
      description:
        "Recognized for outstanding client delivery, technical excellence, and presentation skills.",
    },
    {
      title: "Certificate of Honor",
      issuer: "SankalpTaru Foundation",
      year: "2022",
      description:
        "Recognized for contributions to environmental and social initiatives.",
    },
  ],
  projects: [
    {
      title: "DirecTV Nexus",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "Co-built a secure full-stack collaboration platform using React.js, Node.js, and Azure. Selected as a global finalist among 58,000+ participants in an enterprise hackathon.",
      technologies: [
        "React.js",
        "Node.js",
        "Azure",
        "JavaScript",
        "Tailwind CSS",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "PetMets - Web & Mobile",
      href: "https://petmets.in/",
      dates: "2024",
      active: true,
      description:
        "Engineered a production-ready application using React.js, Firebase Authentication, Cloud Firestore, and Cloud Storage, supporting real-time data synchronization and responsive UI layouts.",
      technologies: [
        "React.js",
        "Firebase",
        "Cloud Firestore",
        "Cloud Storage",
        "Tailwind CSS",
      ],
      links: [{
        type: "Website",
        href: "https://petmets.in/",
        icon: <Icons.globe className="size-3" />, // Or Lucide icon like <Globe className="size-3" />
      },],
      image: "/petmets.png",
      video: "",
    },
    {
      title: "Website-to-App Converter",
      href: "https://github.com/PuneetShivaay",
      dates: "Open Source",
      active: true,
      description:
        "Built a cross-platform Flutter/Dart utility enabling rapid conversion of web applications into native mobile applications. Recognized with 26+ stars and 14+ forks on GitHub.",
      technologies: ["Flutter", "Dart", "Mobile", "Android", "iOS"],
      links: [
        {
          type: "Source",
          href: "https://github.com/PuneetShivaay",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Deep Learning Medical Assistance Chatbot",
      href: "https://github.com/PuneetShivaay",
      dates: "Open Source",
      active: true,
      description:
        "Engineered an open-source NLP-based chatbot using Python for medical symptom analysis and intent classification. Received 17+ GitHub stars and 14+ forks.",
      technologies: ["Python", "NLP", "Deep Learning", "Machine Learning"],
      links: [
        {
          type: "Source",
          href: "https://github.com/PuneetShivaay",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Secure Cloud File Sharing Platform",
      href: "#",
      dates: "2023",
      active: true,
      description:
        "Developed a secure cloud file management application using Firebase, implementing Role-Based Access Control (RBAC) and bandwidth download constraints.",
      technologies: ["React.js", "Firebase", "RBAC", "Cloud Storage"],
      links: [],
      image: "",
      video: "",
    },
  ],

  hackathons: [
    {
      title: "Cognizant Vibe Coding Global Hackathon",
      dates: "2025",
      location: "Global",
      description:
        "Contributed to setting a official Guinness World Record during Cognizant Vibe Coding by developing a technical solution as part of a global hackathon.",
      image: "",
      links: [],
    },
    {
      title: "DirecTV Global Hackathon",
      dates: "2025",
      location: "Global",
      description:
        "Selected as a global finalist among 58,000+ participants for building DirecTV Nexus, a secure full-stack collaboration platform.",
      image: "",
      links: [],
    },
  ],
} as const;