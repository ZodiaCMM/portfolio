<div align="center">

# Abdolmalek Paduka

**Software Developer · ITDI · Songkhla Rajabhat University**

[![Portfolio](https://img.shields.io/badge/Portfolio-Live-7c6dfa?style=for-the-badge&logo=vercel&logoColor=white)](https://zodiacmm.github.io/portfolio/)
[![GitHub](https://img.shields.io/badge/GitHub-ZodiaCMM-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ZodiaCMM)
[![Email](https://img.shields.io/badge/Email-malexpaduka@gmail.com-fa6d8f?style=for-the-badge&logo=gmail&logoColor=white)](mailto:malexpaduka@gmail.com)

</div>

---

## 👤 About

I have a keen interest in developing **applications and websites**, with a foundational knowledge of coding and system development. I also have experience in **design and media creation**, crafting visually appealing and user-friendly solutions.

During my cooperative education at **CHUBB**, I worked on an Agentic AI system for quality control and developed a Speech-to-Text solution for AI agent interactions.

---

## 🛠 Tech Stack

<div align="center">

[![Skills](https://skillicons.dev/icons?i=html,css,python,java,c,mysql,figma,git,github,firebase&theme=dark)](https://skillicons.dev)

</div>

| Category | Tools |
|---|---|
| **Languages** | HTML, CSS, Python, Java, C, MySQL |
| **Design & UI** | Figma, FlutterFlow |
| **Database** | MySQL, Firebase, phpMyAdmin |
| **Tools** | Git, GitHub, NetBeans, Excel |
| **Data** | Pandas, NumPy, Matplotlib, Seaborn |
| **AI** | Agentic AI, Speech-to-Text, QC Automation |
| **Deploy** | GitHub Pages, GitHub Actions |

---

## ✨ Features

- 🌙 Dark theme with custom CSS variables
- 🎞 Scroll-triggered animations (IntersectionObserver)
- 📱 Fully responsive — mobile & desktop
- ⚡ Fast — built with Vite, single page
- 🧩 Component-based architecture (React + CSS Modules)
- 🖼 Profile photo in Hero section
- 🏷 Skill icons via Skill Icons CDN (no file storage)

---

## 📁 Project Structure
react-portfolio/
├── public/
│   └── Avatar/
│       └── Me.jpg          
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .module.css
│   │   ├── Hero.jsx / .module.css
│   │   ├── About.jsx / .module.css
│   │   ├── Skills.jsx / .module.css
│   │   ├── Experience.jsx / .module.css
│   │   ├── Projects.jsx / .module.css
│   │   ├── Education.jsx / .module.css
│   │   ├── Contact.jsx / .module.css
│   │   └── Footer.jsx / .module.css
│   ├── data/
│   │   └── portfolio.js     
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── vite.config.js
└── package.json

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev        # http://localhost:5173

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📦 Deployment (GitHub Actions)

Push to `main` → Auto build & deploy ทันที

```yaml
# .github/workflows/deploy.yml
- uses: actions/checkout@v4
- uses: actions/setup-node@v4
  with:
    node-version: 22
- run: npm install && npm run build
- uses: peaceiris/actions-gh-pages@v4
  with:
    publish_dir: ./dist
```

🌐 Live at: **https://zodiacmm.github.io/portfolio/**

---

## 📬 Contact

| | |
|---|---|
| 📧 Email | malexpaduka@gmail.com |
| 📞 Phone | 065-7712750 |
| 🐙 GitHub | [github.com/ZodiaCMM](https://github.com/ZodiaCMM) |

---

<div align="center">
  <sub>Built with ❤️ by Abdolmalek Paduka · 2025</sub>
</div>