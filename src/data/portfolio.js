export const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export const STATS = [
  { num: '6+', label: 'Projects Completed' },
  { num: '10+', label: 'Technologies Used' },
  { num: '2026', label: 'Expected Graduation' },
  { num: 'AI', label: 'Intern Experience' },
];

// export const SKILL_GROUPS = [
//   {
//     icon: 'code',
//     title: 'Languages',
//     tags: ['Python', 'Java', 'C', 'HTML', 'CSS', 'MySQL'],
//   },
//   {
//     icon: 'monitor',
//     title: 'Design & UI',
//     tags: ['Figma', 'FlutterFlow', 'UX/UI Design', 'Prototyping'],
//   },
//   {
//     icon: 'database',
//     title: 'Database & Backend',
//     tags: ['MySQL', 'Firebase', 'phpMyAdmin', 'XAMPP'],
//   },
//   {
//     icon: 'tool',
//     title: 'Tools & Platforms',
//     tags: ['Git', 'GitHub', 'NetBeans', 'Excel', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
//   },
//   {
//     icon: 'cpu',
//     title: 'AI & Emerging Tech',
//     tags: ['Agentic AI', 'Speech-to-Text', 'QC Automation'],
//   },
//   {
//     icon: 'users',
//     title: 'Soft Skills',
//     tags: ['Problem Solving', 'Teamwork', 'Fast Learner', 'Networking'],
//   },
// ];

export const SKILL_GROUPS = [
  {
    icon: 'code',
    title: 'Languages',
    tags: [
      { label: 'Python', skillicon: 'python' },
      { label: 'Java', skillicon: 'java' },
      { label: 'C', skillicon: 'c' },
      { label: 'HTML', skillicon: 'html' },
      { label: 'CSS', skillicon: 'css' },
      { label: 'MySQL', skillicon: 'mysql' },
    ],
  },
  {
    icon: 'monitor',
    title: 'Design & UI',
    tags: [
      { label: 'Figma', skillicon: 'figma' },
      { label: 'FlutterFlow', skillicon: 'flutter' },
      { label: 'UX/UI Design', skillicon: null },
      { label: 'Prototyping', skillicon: null },
    ],
  },
  {
    icon: 'database',
    title: 'Database & Backend',
    tags: [
      { label: 'MySQL', skillicon: 'mysql' },
      { label: 'Firebase', skillicon: 'firebase' },
      { label: 'phpMyAdmin', skillicon: null },
      { label: 'XAMPP', skillicon: null },
    ],
  },
  {
    icon: 'tool',
    title: 'Tools & Platforms',
    tags: [
      { label: 'Git', skillicon: 'git' },
      { label: 'GitHub', skillicon: 'github' },
      { label: 'NetBeans', skillicon: null },
      { label: 'Excel', skillicon: null },
      { label: 'Pandas', skillicon: 'pandas' },
      { label: 'NumPy', skillicon: 'numpy' },
      { label: 'Matplotlib', skillicon: null },
      { label: 'Seaborn', skillicon: null },
    ],
  },
  {
    icon: 'cpu',
    title: 'AI & Emerging Tech',
    tags: [
      { label: 'Agentic AI', skillicon: null },
      { label: 'Speech-to-Text', skillicon: null },
      { label: 'QC Automation', skillicon: null },
    ],
  },
  {
    icon: 'users',
    title: 'Soft Skills',
    tags: [
      { label: 'Problem Solving', skillicon: null },
      { label: 'Teamwork', skillicon: null },
      { label: 'Fast Learner', skillicon: null },
      { label: 'Networking', skillicon: null },
    ],
  },
];

export const EXPERIENCES = [
  {
    period: '2024 – 2025',
    title: 'Agentic AI Developer',
    org: 'CHUBB — Cooperative Education / Internship',
    bullets: [
      'Assisted in developing an AI agent for quality control (QC) processes to improve defect detection accuracy',
      'Developed a Speech-to-Text system to support AI agent interactions',
    ],
  },
  {
    period: '2023 – 2024',
    title: 'UX/UI Designer',
    org: 'TEDFund Project – "Adopt Pet" · Songkhla, Thailand',
    bullets: [
      'Designed and prototyped a mobile application under the concept "A new home for pets"',
      'Used Figma for wireframing and FlutterFlow for interactive prototype development',
    ],
  },
];

export const PROJECTS = [
  {
    num: '01',
    type: 'AI · Internship',
    title: 'Agentic AI for QC',
    desc: 'Developed an AI agent system for quality control processes at CHUBB, improving defect detection accuracy through intelligent automation.',
    tech: ['Python', 'Agentic AI', 'QC Automation'],
  },
  {
    num: '02',
    type: 'AI · Speech Processing',
    title: 'Speech-to-Text for AgentAI',
    desc: 'Built a Speech-to-Text system to enable voice interactions with AI agents, enhancing the accessibility and usability of the AI pipeline.',
    tech: ['Python', 'Speech-to-Text', 'AI Integration'],
  },
  {
    num: '03',
    type: 'Mobile App · UX/UI',
    title: 'Adopt Pet App (TEDFund)',
    desc: 'Designed and prototyped a mobile app for pet adoption — end-to-end from Figma wireframes to FlutterFlow interactive prototype.',
    tech: ['Figma', 'FlutterFlow', 'UX/UI'],
  },
  {
    num: '04',
    type: 'Data Science · Python',
    title: 'Data Analysis Dashboard',
    desc: 'Utilized Python for data cleaning, analysis, and visualization — generating actionable insights from raw datasets.',
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
  },
  {
    num: '05',
    type: 'Database · Java',
    title: 'Database Management System',
    desc: 'Designed and implemented a relational database system using phpMyAdmin and XAMPP, with a Java frontend via NetBeans.',
    tech: ['Java', 'MySQL', 'phpMyAdmin', 'XAMPP'],
  },
  {
    num: '06',
    type: 'IoT · Java',
    title: 'BTU Calculator',
    desc: 'Application that calculates air conditioner power consumption (BTU) based on room dimensions and usage parameters.',
    tech: ['Java', 'NetBeans', 'OOP'],
  },
];

export const EDUCATION = [
  {
    degree: 'B.Sc. Information Technology & Digital Innovation',
    school: 'Songkhla Rajabhat University — Faculty of Science and Technology',
    field: 'Dept. of Information Technology and Digital Innovation (ITDI)',
    period: '2022 – 2026',
  },
  {
    degree: 'High School — Science-Mathematics',
    school: 'Arunsat Wittaya Foundation School',
    field: 'Science and Mathematics Stream',
    period: '2019 – 2021',
  },
];

export const PROJECT_SLIDES = [
  {
    image: '/portfolio/projects/Coop.JPG',
    title: 'Agentic AI for QC Reward',
  },
  {
    image: '/portfolio/projects/flutterflow.png',
    title: 'FlutterFlow Prototype',
  },
  {
    image: '/portfolio/projects/flutterflow2.png',
    title: 'FlutterFlow Prototype 2',
  },
  {
    image: '/portfolio/projects/ProjectYoutube.png',
    title: 'Youtube',
  },
  {
    image: '/portfolio/projects/ProjectTraffic.jpg',
    title: 'Traffic Light Control System',
  },
];