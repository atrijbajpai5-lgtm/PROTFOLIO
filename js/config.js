/**
 * =========================================================================
 * PORTFOLIO CONFIGURATION - ATRIJ BAJPAI
 * =========================================================================
 * 1st Year B.Tech Student at Newton School of Technology, Hyderabad Campus
 * St. Aloysius High School (ISC: 92%, ICSE: 90%)
 * Actively learning Python & Java · Quick Learner
 * =========================================================================
 */

const portfolioConfig = {
  // Basic Personal Information
  personal: {
    name: "Atrij Bajpai",
    titles: [
      "1st Year B.Tech Student",
      "Newton School of Technology (Hyderabad)",
      "Python & Java Learner",
      "Quick & Curious Learner"
    ],
    tagline: "1st Year B.Tech Student at Newton School of Technology, Hyderabad. Passionate about learning Python, Java, and building a strong foundation in software engineering.",
    location: "Hyderabad / India",
    statusBadge: "1st Year B.Tech @ Newton School of Tech (Hyderabad) · Learning Python & Java",
    statusAvailable: true,
    email: "atrijbajpai5@gmail.com",
    phone: "+91 9198766183",
    resumeUrl: "assets/resume.pdf",
    avatar: "assets/avatar.svg",
  },

  // Social & Professional Profiles
  socials: {
    github: "https://github.com/atrijbajpai",
    linkedin: "https://linkedin.com/in/atrijbajpai",
    twitter: "",
    leetcode: "",
    codeforces: "",
    kaggle: "",
    emailDirect: "mailto:atrijbajpai5@gmail.com",
  },

  // Highlight Stats (Appears in Hero / Visual Card)
  stats: [
    { number: "1st Year", label: "B.Tech @ Newton School" },
    { number: "92%", label: "Class 12 (ISC Board)" },
    { number: "90%", label: "Class 10 (ICSE Board)" },
    { number: "Fast", label: "Learner in Python & Java" }
  ],

  // About Me Section
  about: {
    headline: "1st Year B.Tech Student at Newton School of Technology, Hyderabad with a passion for software craftsmanship.",
    paragraphs: [
      "Hi, I'm Atrij Bajpai! I am currently a 1st-year B.Tech student at Newton School of Technology, Hyderabad Campus. I completed my schooling from St. Aloysius High School under the ISC Board, securing 92% in Class 12 and 90% in Class 10.",
      "I am deeply enthusiastic about software engineering and currently dedicated to mastering Python and Java from the fundamentals up. I focus on building a rigorous understanding of object-oriented programming (OOP), data structures, and computational problem solving.",
      "As a quick, curious learner, I enjoy breaking down complex problems, writing clean code, and experimenting with new technologies. I am actively seeking mentorship, internships, and opportunities to collaborate with experienced developers where I can learn, contribute, and grow."
    ],
    highlights: [
      { icon: "code", title: "B.Tech Student @ NST", desc: "1st-year student at Newton School of Technology, Hyderabad Campus, learning software development." },
      { icon: "zap", title: "Strong Academic Track Record", desc: "Scored 92% in Class 12 (ISC) and 90% in Class 10 (ICSE) from St. Aloysius High School." },
      { icon: "cpu", title: "Python & Java Learner", desc: "Actively studying syntax, OOP, logic building, and foundational algorithms through daily practice." },
      { icon: "shield", title: "Fast & Dedicated Learner", desc: "Driven by curiosity, persistent work ethic, and eagerness to absorb industry-standard practices." }
    ],
    education: [
      {
        degree: "Bachelor of Technology (B.Tech)",
        institution: "Newton School of Technology, Hyderabad Campus",
        period: "2025 — Present (1st Year)",
        score: "Pursuing 1st Year",
        details: "Undergraduate curriculum focused on modern computer science, algorithms, software engineering principles, and practical programming."
      },
      {
        degree: "Class 12 (Senior Secondary) — ISC Board",
        institution: "St. Aloysius High School",
        period: "Completed",
        score: "92% Score",
        details: "Completed ISC Board examinations with distinction (92%), with strong focus on Mathematics and Science subjects."
      },
      {
        degree: "Class 10 (Secondary) — ICSE Board",
        institution: "St. Aloysius High School",
        period: "Completed",
        score: "90% Score",
        details: "Completed ICSE Board examinations with an impressive 90% score, establishing strong academic and analytical foundations."
      }
    ]
  },

  // Skills Section organized by domains
  skills: [
    {
      category: "Programming Languages (In Progress)",
      items: [
        { name: "Python", level: "Currently Learning" },
        { name: "Java", level: "Currently Learning" },
        { name: "C / C++ Basics", level: "Foundations" },
        { name: "HTML5 & CSS3", level: "Web Basics" }
      ]
    },
    {
      category: "Core Computer Science Concepts",
      items: [
        { name: "Object-Oriented Programming (OOP)", level: "Studying" },
        { name: "Data Structures Basics", level: "In Progress" },
        { name: "Algorithms & Logic Building", level: "Active Practice" },
        { name: "Functions & Control Flow", level: "Proficient" }
      ]
    },
    {
      category: "Tools & Development Environment",
      items: [
        { name: "Git & GitHub", level: "Foundational" },
        { name: "VS Code", level: "Proficient" },
        { name: "Command Line / Terminal", level: "Basic" },
        { name: "Debugging & Tracing", level: "Practicing" }
      ]
    },
    {
      category: "Key Professional Strengths",
      items: [
        { name: "Quick Learner", level: "Core Strength" },
        { name: "Academic Consistency", level: "92% ISC / 90% ICSE" },
        { name: "Curiosity & Adaptability", level: "Core Strength" },
        { name: "Disciplined Daily Practice", level: "Core Strength" }
      ]
    }
  ],

  // Projects / Practice Modules & Roadmap
  projects: [
    {
      id: "project-1",
      title: "Python Programming & Logic Practice Lab",
      category: "tools",
      description: "A structured repository of Python scripts exploring core syntax, data types, string operations, loops, custom functions, and interactive command-line utilities.",
      image: "assets/project1.svg",
      tags: ["Python", "Control Flow", "CLI Scripts", "Learning Lab"],
      metrics: "Active Learning Repository · Daily Exercises",
      liveUrl: "",
      githubUrl: "https://github.com/atrijbajpai",
      featured: true
    },
    {
      id: "project-2",
      title: "Java Object-Oriented Programming Exercises",
      category: "backend",
      description: "Modular practice programs implementing core OOP concepts in Java: classes, objects, encapsulation, inheritance, polymorphism, and basic data structures.",
      image: "assets/project2.svg",
      tags: ["Java", "OOP", "Classes & Objects", "Core CS"],
      metrics: "Concept Mastery · Practice Modules",
      liveUrl: "",
      githubUrl: "https://github.com/atrijbajpai",
      featured: true
    },
    {
      id: "project-3",
      title: "Personal Developer Portfolio Website",
      category: "frontend",
      description: "A fast, fully responsive, and aesthetic static portfolio website built with modern CSS custom properties, glassmorphism, dynamic data binding, and theme toggling.",
      image: "assets/project3.svg",
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      metrics: "Live & Deployed · Zero Dependencies",
      liveUrl: "index.html",
      githubUrl: "https://github.com/atrijbajpai",
      featured: true
    },
    {
      id: "project-4",
      title: "Upcoming Project Roadmap: Mini Apps & Automations",
      category: "fullstack",
      description: "Currently architecting upcoming real-world applications applying Python and Java for automated utilities, database integration, and web backends.",
      image: "assets/project4.svg",
      tags: ["Python", "Java", "Roadmap 2026", "In Progress"],
      metrics: "In Design & Planning · Future Release",
      liveUrl: "",
      githubUrl: "https://github.com/atrijbajpai",
      featured: false
    }
  ],

  // Achievements & Milestones
  achievements: [
    {
      title: "Academic Distinction — 92% in Class 12 (ISC Board)",
      organization: "St. Aloysius High School · ISC Board",
      date: "Distinction",
      category: "Academic",
      description: "Secured 92% in Class 12 ISC Board examinations, showing excellence in analytical and quantitative subjects.",
      badge: "92% ISC",
      link: ""
    },
    {
      title: "Academic Excellence — 90% in Class 10 (ICSE Board)",
      organization: "St. Aloysius High School · ICSE Board",
      date: "Distinction",
      category: "Academic",
      description: "Secured 90% in Class 10 ICSE Board examinations, establishing a strong record of discipline and hard work.",
      badge: "90% ICSE",
      link: ""
    },
    {
      title: "1st Year B.Tech Admission @ Newton School of Technology",
      organization: "Newton School of Technology, Hyderabad",
      date: "2025 — Present",
      category: "Higher Education",
      description: "Enrolled in B.Tech program at Newton School of Technology Hyderabad Campus, immersing in software engineering foundations.",
      badge: "B.Tech 1st Year",
      link: ""
    },
    {
      title: "Fast Learner & Adaptability Recognition",
      organization: "Self-Directed Learning",
      date: "Active Mindset",
      category: "Skillset",
      description: "Consistently recognized as a quick and curious learner, rapidly picking up Python, Java, and programming concepts through daily practice.",
      badge: "Quick Learner",
      link: ""
    }
  ],

  // Professional Journey / Learning Path
  experience: [
    {
      role: "1st Year B.Tech Student",
      company: "Newton School of Technology, Hyderabad Campus",
      location: "Hyderabad, India",
      period: "2025 — Present",
      type: "B.Tech Undergrad",
      responsibilities: [
        "Pursuing 1st year B.Tech coursework focusing on software development and computer science core principles.",
        "Building strong programming foundations in Python and Java through hands-on practice.",
        "Engaging in coding labs, peer study groups, and logic-building algorithmic exercises."
      ]
    },
    {
      role: "Schooling (ISC: 92% | ICSE: 90%)",
      company: "St. Aloysius High School",
      location: "India",
      period: "Class 10 & 12",
      type: "Schooling Distinction",
      responsibilities: [
        "Completed Class 12 under the ISC Board with 92% aggregate.",
        "Completed Class 10 under the ICSE Board with 90% aggregate.",
        "Built a disciplined work ethic, strong mathematical reasoning, and analytical problem-solving skills."
      ]
    }
  ],

  // Contact Section Settings
  contact: {
    title: "Let's Connect & Collaborate",
    subtitle: "I am a 1st-year B.Tech student at Newton School of Technology, Hyderabad, actively seeking mentorship and learning opportunities. Reach out anytime!",
    formspreeUrl: "",
    showCopyEmail: true
  }
};

// Export for usage
if (typeof module !== "undefined") {
  module.exports = portfolioConfig;
}
