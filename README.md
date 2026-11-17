# 🌟 Atrij Bajpai — Professional Developer Portfolio

A sleek, modern, and high-performance static portfolio website crafted for **Atrij Bajpai**. Designed with an executive Obsidian dark aesthetic, subtle electric indigo & cyan color grading, glassmorphism, responsive navigation, and smooth micro-interactions.

---

## ⚡ Highlights & Features

- **Executive Color Grading**: Hand-tuned dark and light themes with ambient radial glow spheres and subtle backdrop filters.
- **100% Static & Blazing Fast**: Zero build tools, zero dependencies, instant load times. Run by double clicking `index.html` or hosting anywhere.
- **Centralized Data Configuration (`js/config.js`)**: All content—links, achievements, projects, bio, skills, and resume—can be customized from one friendly file without digging through HTML code.
- **Interactive Project Showcase**: Filter projects on-the-fly by category (*Full Stack, Frontend, Backend & APIs, Developer Tools*).
- **Achievements & Certifications**: Dedicated distinction badges (*1st Place, Top 5%, Verified*) and credential verification links.
- **Dark / Light Mode**: Seamless theme toggle with persistent state saved in `localStorage`.
- **Typing Animation & 3D Tilt**: Dynamic rotating headline and subtle 3D card tilt on the hero visual card.
- **Click-to-Copy Email**: Instant clipboard copy with toast notifications.
- **Fully Responsive**: Optimized for ultra-wide displays, laptops, tablets, and smartphones.

---

## 📁 Project Structure

```
my portfolio/
├── index.html            # Main semantic HTML structure & SEO meta tags
├── css/
│   └── styles.css        # Modern CSS design system, color grading & animations
├── js/
│   ├── config.js         # 👈 YOUR DATA: Paste your links, bio, projects & achievements here!
│   └── main.js           # Dynamic renderer, filters, theme toggle & micro-interactions
├── assets/
│   ├── avatar.svg        # Modern geometric profile illustration
│   ├── resume.pdf        # Your resume (replace with your real resume PDF)
│   ├── project1.svg      # Project preview 1 (CloudFlow)
│   ├── project2.svg      # Project preview 2 (FinPulse)
│   ├── project3.svg      # Project preview 3 (Nexus API)
│   ├── project4.svg      # Project preview 4 (Algo Visualizer)
│   └── project5.svg      # Project preview 5 (DevMetrics)
└── README.md             # Guide & deployment walkthrough
```

---

## 🚀 How to Customize Your Information

Everything you need to edit is in **`js/config.js`**. Open it in any text editor:

### 1. Update Personal Info & Social Links
```javascript
personal: {
  name: "Atrij Bajpai",
  titles: [
    "Software Engineer",
    "Full Stack Developer",
    "Problem Solver"
  ],
  tagline: "Crafting scalable software and elegant user experiences.",
  location: "India",
  email: "your.real.email@example.com", // <-- Your email
  resumeUrl: "assets/resume.pdf"
},
socials: {
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-profile",
  twitter: "https://twitter.com/your-handle",
  leetcode: "https://leetcode.com/your-username"
}
```

### 2. Add or Edit Projects
Add as many projects as you want in the `projects: [...]` array:
```javascript
{
  id: "my-project",
  title: "AI Code Reviewer",
  category: "fullstack", // Options: "fullstack", "frontend", "backend", "tools"
  description: "An automated pull request reviewer powered by LLMs.",
  image: "assets/project1.svg",
  tags: ["Python", "FastAPI", "React", "Docker"],
  metrics: "Over 1,000+ PRs analyzed",
  liveUrl: "https://my-live-demo.com",
  githubUrl: "https://github.com/atrijbajpai/ai-code-reviewer",
  featured: true
}
```

### 3. Add Achievements & Certifications
```javascript
{
  title: "Hackathon Winner — HackXYZ 2024",
  organization: "Global Tech Community",
  date: "2024",
  category: "Hackathon",
  description: "Built a decentralized supply chain verifier in 24 hours.",
  badge: "1st Place",
  link: "https://your-certificate-url.com"
}
```

### 4. Replace the Resume PDF
Simply drop your updated resume into the `assets/` folder and name it `resume.pdf`. The download buttons in the navbar and hero will automatically link to it!

---

## 🌐 Free 1-Click Hosting Guide

Because this is a pure static website, you can host it completely free forever:

### Option A: GitHub Pages (Recommended)
1. Initialize a git repository and push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. In your GitHub repository, go to **Settings** > **Pages**.
3. Under **Branch**, select `main` and `/ (root)`, then click **Save**.
4. Your website is live in ~30 seconds at `https://<your-username>.github.io/<your-repo-name>/`!

### Option B: Netlify / Vercel
1. Go to [Netlify Drop](https://app.netlify.com/drop) or [Vercel](https://vercel.com).
2. Drag and drop this `my portfolio` folder directly into the browser.
3. Your portfolio is immediately live with a free custom SSL domain!

---

## 📬 Receiving Contact Form Messages
By default, the contact form opens the user's default email client (`mailto:`) addressed to your email.
If you prefer direct form submissions to your inbox without opening an email client:
1. Sign up for free at [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com).
2. Paste your endpoint into `js/config.js`:
   ```javascript
   contact: {
     formspreeUrl: "https://formspree.io/f/YOUR_UNIQUE_ID"
   }
   ```
The form will automatically submit asynchronously via AJAX and show a confirmation toast!

---

&copy; 2026 Atrij Bajpai. All rights reserved.
