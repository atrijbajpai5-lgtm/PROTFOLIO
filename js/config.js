/**
 * =========================================================================
 * PORTFOLIO CONFIGURATION - ATRIJ BAJPAI
 * =========================================================================
 * Customize all your personal information, links, achievements, skills,
 * and projects here in one place!
 * 
 * Simply edit the text between quotes "" and your site will update automatically.
 * You don't need to touch complex HTML code.
 * =========================================================================
 */

const portfolioConfig = {
  // Basic Personal Information
  personal: {
    name: "Atrij Bajpai",
    titles: [
      "Software Engineer",
      "Full Stack Developer",
      "Problem Solver",
      "Open Source Contributor"
    ],
    tagline: "Crafting scalable software, modern web architectures, and elegant user experiences.",
    location: "India",
    statusBadge: "Available for Software Engineering Roles & Projects",
    statusAvailable: true,
    email: "atrijbajpai@example.com", // <-- REPLACE with your email
    phone: "+91 XXXXXXXXXX", // Optional, leave empty "" if not needed
    resumeUrl: "assets/resume.pdf", // Place your resume PDF in the assets folder as 'resume.pdf' or put a Google Drive/external link here
    avatar: "assets/avatar.svg", // Path to your profile picture or leave default
  },

  // Social & Professional Profiles
  // Set any url to "" or null if you don't use it, and it will be hidden automatically!
  socials: {
    github: "https://github.com/atrijbajpai", // <-- REPLACE with your GitHub
    linkedin: "https://linkedin.com/in/atrijbajpai", // <-- REPLACE with your LinkedIn
    twitter: "https://twitter.com/atrijbajpai", // <-- REPLACE or set to ""
    leetcode: "https://leetcode.com/atrijbajpai", // <-- REPLACE or set to ""
    codeforces: "", // Optional
    kaggle: "", // Optional
    emailDirect: "mailto:atrijbajpai@example.com",
  },

  // Highlight Stats (Appears in Hero / About section)
  stats: [
    { number: "15+", label: "Projects Completed" },
    { number: "500+", label: "DSA Problems Solved" },
    { number: "99.9%", label: "Uptime & Quality Focus" },
    { number: "2+", label: "Hackathons & Honors" }
  ],

  // About Me Section
  about: {
    headline: "Transforming ambitious ideas into performant, elegant digital products.",
    paragraphs: [
      "I am a passionate software engineer with a strong foundation in modern computer science, full-stack web development, and algorithmic problem-solving. I thrive at the intersection of robust backend systems and intuitive, visually appealing user interfaces.",
      "My approach centers around writing clean, maintainable code, optimizing system performance, and continuously exploring emerging web technologies and cloud architectures. Whether building microservices or crafting smooth frontend experiences, I focus on delivering real-world impact.",
      "Beyond coding, you'll find me analyzing complex algorithmic challenges, participating in hackathons, and contributing to open-source developer tooling."
    ],
    highlights: [
      { icon: "code", title: "Full Stack Architecture", desc: "End-to-end development from database design to high-performance client rendering." },
      { icon: "zap", title: "Performance & Optimization", desc: "Obsessed with low latency, clean code architecture, and seamless responsiveness." },
      { icon: "cpu", title: "Data Structures & Algorithms", desc: "Strong analytical mindset with hundreds of competitive programming problems solved." },
      { icon: "shield", title: "Clean Code & Security", desc: "Prioritizing maintainability, scalable design patterns, and standard security practices." }
    ],
    education: [
      {
        degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
        institution: "University / Institute Name", // <-- REPLACE with your college
        period: "2021 — 2025",
        score: "CGPA: 8.8 / 10.0 (or Percentage)",
        details: "Specialized in Data Structures, Algorithms, Web Technologies, Database Systems, and Cloud Computing."
      }
    ]
  },

  // Skills Section organized by domains
  skills: [
    {
      category: "Programming Languages",
      items: [
        { name: "C++", level: "Advanced" },
        { name: "Java", level: "Proficient" },
        { name: "Python", level: "Proficient" },
        { name: "JavaScript (ES6+)", level: "Advanced" },
        { name: "TypeScript", level: "Proficient" },
        { name: "SQL", level: "Advanced" }
      ]
    },
    {
      category: "Frontend Development",
      items: [
        { name: "React.js", level: "Advanced" },
        { name: "Next.js", level: "Proficient" },
        { name: "HTML5 / Semantic Web", level: "Expert" },
        { name: "CSS3 / Sass / Tailwind", level: "Advanced" },
        { name: "Redux / Zustand", level: "Proficient" },
        { name: "Responsive UI/UX", level: "Expert" }
      ]
    },
    {
      category: "Backend & Databases",
      items: [
        { name: "Node.js / Express", level: "Advanced" },
        { name: "RESTful APIs", level: "Expert" },
        { name: "PostgreSQL", level: "Proficient" },
        { name: "MongoDB", level: "Proficient" },
        { name: "Redis", level: "Intermediate" },
        { name: "GraphQL", level: "Intermediate" }
      ]
    },
    {
      category: "DevOps, Cloud & Tools",
      items: [
        { name: "Git & GitHub", level: "Advanced" },
        { name: "Docker", level: "Intermediate" },
        { name: "AWS / Cloudflare", level: "Intermediate" },
        { name: "Linux / Bash", level: "Proficient" },
        { name: "Postman / API Testing", level: "Advanced" },
        { name: "CI / CD Pipelines", level: "Intermediate" }
      ]
    }
  ],

  // Featured Projects
  // Categories can be: "all", "fullstack", "frontend", "backend", "ai-tools"
  projects: [
    {
      id: "project-1",
      title: "CloudFlow: Intelligent Task & Workflow Engine",
      category: "fullstack",
      description: "A high-performance productivity dashboard with real-time collaborative workspaces, automated kanban pipelines, and role-based access control.",
      image: "assets/project1.svg",
      tags: ["React", "Node.js", "PostgreSQL", "Socket.io", "Tailwind CSS"],
      metrics: "Sub-50ms latency · 500+ Active Users",
      liveUrl: "https://example.com/demo1", // <-- REPLACE with your live demo or link
      githubUrl: "https://github.com/atrijbajpai/project-1", // <-- REPLACE with your repo link
      featured: true
    },
    {
      id: "project-2",
      title: "FinPulse: Real-Time Market Analytics & Visualizer",
      category: "frontend",
      description: "Interactive financial tracking and data visualization platform displaying live telemetry, technical indicators, and customizable chart widgets.",
      image: "assets/project2.svg",
      tags: ["TypeScript", "Next.js", "Chart.js", "WebSockets", "CSS Grid"],
      metrics: "Live Data Streams · Responsive High FPS UI",
      liveUrl: "https://example.com/demo2",
      githubUrl: "https://github.com/atrijbajpai/project-2",
      featured: true
    },
    {
      id: "project-3",
      title: "Nexus API: Distributed Auth & Microservices Gateway",
      category: "backend",
      description: "Secure, rate-limited reverse proxy and authentication gateway featuring JWT validation, Redis token blacklisting, and structured observability logging.",
      image: "assets/project3.svg",
      tags: ["Node.js", "Express", "Redis", "Docker", "Jest"],
      metrics: "10k+ req/sec throughput · 99.99% reliability",
      liveUrl: "https://example.com/demo3",
      githubUrl: "https://github.com/atrijbajpai/project-3",
      featured: true
    },
    {
      id: "project-4",
      title: "Algorithm Visualizer & Complexity Sandbox",
      category: "frontend",
      description: "An educational web suite to visualize pathfinding, sorting, and graph traversal algorithms step-by-step with custom execution speed and audio pitch.",
      image: "assets/project4.svg",
      tags: ["JavaScript", "HTML5 Canvas", "Algorithms", "CSS Animations"],
      metrics: "Interactive Step Debugger · Zero Dependencies",
      liveUrl: "https://example.com/demo4",
      githubUrl: "https://github.com/atrijbajpai/project-4",
      featured: false
    },
    {
      id: "project-5",
      title: "DevMetrics: GitHub Activity & Code Health Analyzer",
      category: "tools",
      description: "Developer utility parsing commit history, test coverage reports, and PR velocities to present actionable sprint insights for engineering teams.",
      image: "assets/project5.svg",
      tags: ["Python", "FastAPI", "GitHub GraphQL API", "SQLite"],
      metrics: "Automated Report Generation · Open Source",
      liveUrl: "https://example.com/demo5",
      githubUrl: "https://github.com/atrijbajpai/project-5",
      featured: false
    }
  ],

  // Achievements, Awards & Certifications
  // Perfect for pasting hackathons, ranks, certificates, and milestones
  achievements: [
    {
      title: "Winner / Top Finalist — Smart India Hackathon / Techathon",
      organization: "National Innovation Council / Tech Community",
      date: "2024",
      category: "Hackathon",
      description: "Engineered an AI-assisted resource allocation platform for public transit optimization under a rigorous 36-hour sprint.",
      badge: "1st Place",
      link: "https://example.com/certificate" // <-- Optional verification link
    },
    {
      title: "Global Rank in Competitive Programming",
      organization: "LeetCode / CodeChef",
      date: "2023 - 2024",
      category: "Contest",
      description: "Achieved Top 5% global ranking with 500+ problems solved across Dynamic Programming, Graph Theory, and Tree Algorithms.",
      badge: "Top 5%",
      link: "https://leetcode.com/atrijbajpai"
    },
    {
      title: "Certified Cloud Practitioner / Full Stack Specialist",
      organization: "AWS / Coursera / Meta",
      date: "2023",
      category: "Certification",
      description: "Demonstrated proficiency in cloud architecture, IAM security, microservice deployment, and containerized architectures.",
      badge: "Verified",
      link: "https://example.com/credential"
    },
    {
      title: "Open Source Contributor Recognition",
      organization: "Hacktoberfest / Community Orgs",
      date: "2023",
      category: "Open Source",
      description: "Merged multiple pull requests across popular developer repositories improving UI responsiveness and API documentation.",
      badge: "Contributor",
      link: "https://github.com/atrijbajpai"
    }
  ],

  // Professional Experience / Internships / Leadership
  experience: [
    {
      role: "Software Engineering Intern",
      company: "Tech Innovations Inc. / Startup Labs", // <-- REPLACE with your company
      location: "Remote / Hybrid",
      period: "Jun 2024 — Aug 2024",
      type: "Internship",
      responsibilities: [
        "Architected and deployed responsive UI components using React and TypeScript, boosting mobile user engagement by 28%.",
        "Optimized database query latency by indexing PostgreSQL tables and caching frequent endpoints with Redis.",
        "Collaborated with product designers and senior engineers in daily agile standups and code reviews."
      ]
    },
    {
      role: "Technical Lead / Core Team Member",
      company: "Developer Student Club / College Technical Society",
      location: "Campus",
      period: "2023 — Present",
      type: "Leadership",
      responsibilities: [
        "Mentored 150+ students in web development fundamentals, Git/GitHub, and algorithmic data structures.",
        "Organized hands-on technical bootcamps and coordinated annual department hackathons."
      ]
    }
  ],

  // Contact Section Settings
  contact: {
    title: "Let's Build Something Exceptional Together",
    subtitle: "Have a project in mind, an opportunity to discuss, or just want to say hi? My inbox is always open.",
    formspreeUrl: "", // Optional: Paste your free https://formspree.io/f/YOUR_ID to receive emails directly from the form
    showCopyEmail: true
  }
};

// Export for usage
if (typeof module !== "undefined") {
  module.exports = portfolioConfig;
}
