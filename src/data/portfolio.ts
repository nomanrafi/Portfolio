export interface VideoProject {
  id: string;
  title: string;
  category: "motion" | "commercial" | "reels" | "ai-visual";
  aspectRatio: "16:9" | "9:16";
  embedUrl: string;
  demoVideoId?: string;
  description: string;
  tags: string[];
  duration?: string;
  client?: string;
  thumbnailUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "AI & ML" | "Web & App" | "Motion & VFX";
  period: string;
  accuracy?: string;
  description: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Award {
  title: string;
  organization: string;
  year: string;
  badge: string;
  description: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export const portfolioData = {
  personal: {
    name: "Abdullah Al Noman",
    titles: [
      "AI / Machine Learning Developer",
      "Motion Graphics Designer",
      "Post-Production Specialist",
      "Creative Engineer",
    ],
    headline: "AI/ML Developer & Motion Graphics Designer",
    tagline:
      "Engineering high-accuracy intelligent machine learning systems and directing cinematic, motion-driven visual narratives.",
    location: "Fulbaria, Mymensingh, Bangladesh",
    email: "abdulahalnoman.cse@gmail.com",
    phone: "+8801904031624",
    phoneDisplay: "+880 1904-031624",
    linkedin: "https://linkedin.com/in/noman-rafi",
    linkedinDisplay: "linkedin.com/in/noman-rafi",
    github: "https://github.com/nomanrafi",
    githubDisplay: "github.com/nomanrafi",
    profileImage: "/profile.jpg",
    status: "Available for ML Engineering & Motion Graphics Commissions",
    summary:
      "Computer Science & Engineering graduate from Daffodil International University with proven expertise bridging Artificial Intelligence engineering and high-end cinematic post-production. Recognized as NASA International Space Apps Challenge (Rajshahi Division) Winner and creator of production-tested ML pipelines, full-stack web platforms, and automated After Effects/Premiere Pro workflows.",
  },

  stats: [
    { label: "ML Accuracy Rate", value: "97.85%", subtext: "Ensemble Voting on SONAR" },
    { label: "NASA Space Apps", value: "Winner", subtext: "Rajshahi Division 2024" },
    { label: "Post-Production", value: "4K Cinema", subtext: "AE / Premiere Dynamic Link" },
    { label: "Full-Stack & Mobile", value: "Production", subtext: "Flask, Flutter & PHP MVC" },
  ],

  education: {
    degree: "Bachelor of Science in Computer Science and Engineering",
    institution: "Daffodil International University",
    duration: "Jan 2022 – Dec 2025",
    grade: "B.Sc. CSE",
    location: "Dhaka, Bangladesh",
    coursework: [
      "Machine Learning",
      "Data Mining",
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Compiler Design",
      "Computer Vision",
    ],
  },

  videos: [
    {
      id: "video-1",
      title: "Cinematic Motion Graphics & Visual Compositing Reel",
      category: "motion",
      aspectRatio: "16:9",
      embedUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_1",
      demoVideoId: "dQw4w9WgXcQ", // fallback demonstration id
      description:
        "High-impact visual compositing showcase featuring camera tracking, multi-layer asset integration, Lumetri color science, and dynamic typography animations.",
      tags: ["After Effects", "Premiere Pro", "Dynamic Link", "Color Grading"],
      duration: "01:45",
      client: "Showcase Reel",
      thumbnailUrl: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "video-2",
      title: "Commercial Motion Brand Story & Product Animation",
      category: "commercial",
      aspectRatio: "16:9",
      embedUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_2",
      demoVideoId: "L_LUpnjgPso",
      description:
        "Precision keyframe timing, custom ExtendScript expression rigs, sound-reactive audio-visual synchronization, and commercial grade post-production.",
      tags: ["Kinetic Typography", "ExtendScript", "Sound Design", "VFX"],
      duration: "02:10",
      client: "Brand Campaign",
      thumbnailUrl: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "video-3",
      title: "High-Energy Social Reel & Short-Form Motion",
      category: "reels",
      aspectRatio: "9:16",
      embedUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_3",
      demoVideoId: "kJQP7kiw5Fk",
      description:
        "Optimized 9:16 vertical motion design tailored for YouTube Shorts, Instagram Reels, and viral video pacing with seamless loop transitions.",
      tags: ["9:16 Vertical", "Shorts / Reels", "Fast Pacing", "Mobile First"],
      duration: "00:45",
      client: "Viral Campaign",
      thumbnailUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=800&q=80",
    },
  ] as VideoProject[],

  projects: [
    {
      id: "sonar-classification",
      title: "SONAR Underwater Object Classification System",
      subtitle: "Machine Learning with Ensemble Voting & SHAP Explainability",
      category: "AI & ML",
      period: "Oct 2025 – Nov 2025",
      accuracy: "97.85% Accuracy",
      featured: true,
      description: [
        "Architected an ensemble voting classifier combining XGBoost, Support Vector Machines (SVM), and tuned Random Forests to classify underwater sonar echoes between cylindrical rock formations and explosive metal mines.",
        "Achieved a 97.85% classification accuracy on benchmark underwater telemetry data, significantly outperforming individual baseline models.",
        "Engineered a production-ready Flask REST API with real-time inference latency under 45ms and SHAP (SHapley Additive exPlanations) visual interpretability for human-in-the-loop validation.",
        "Packaged and deployed with Gunicorn WSGI containerization, input data validation schemas, and automated metric dashboards.",
      ],
      technologies: [
        "Python",
        "Flask",
        "Scikit-learn",
        "XGBoost",
        "SVM",
        "Pandas",
        "SHAP",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Gunicorn",
      ],
      githubUrl: "https://github.com/nomanrafi",
    },
    {
      id: "research-hub",
      title: "ResearchHub – Student-Teacher Collaboration App",
      subtitle: "Mobile Cross-Platform Platform with ML Paper Categorization",
      category: "Web & App",
      period: "Mar 2025 – Nov 2025",
      featured: true,
      description: [
        "Engineered a comprehensive cross-platform mobile application empowering university students and professors to collaborate on academic publications, manage milestones, and exchange peer reviews.",
        "Integrated Firebase Authentication with role-based access control (Student, Researcher, Faculty Advisor) and Firestore real-time synchronization.",
        "Implemented automated research-paper topic categorization and abstract NLP keyword extraction using Python & Scikit-learn backend integration.",
        "Built responsive UI with Flutter and Dart, supporting offline caching, document sharing via Firebase Storage, and instant push notifications.",
      ],
      technologies: [
        "Flutter",
        "Dart",
        "Firebase Auth",
        "Cloud Firestore",
        "Firebase Storage",
        "Python",
        "Scikit-learn",
        "NLP",
      ],
      githubUrl: "https://github.com/nomanrafi",
    },
    {
      id: "sales-rep-crm",
      title: "Sales Representative Management System",
      subtitle: "Enterprise Full-Stack Analytics & CRM Platform",
      category: "Web & App",
      period: "Jun 2025 – Sep 2025",
      featured: false,
      description: [
        "Engineered a full-stack enterprise web application for sales workforce tracking, client pipeline CRM, and automated quota performance analytics.",
        "Structured clean Model-View-Controller (MVC) architecture with robust PHP 7.4+ backend and relational MySQL database schema optimizations.",
        "Designed an interactive, data-dense analytics dashboard utilizing Chart.js, HTML5, CSS3, and Bootstrap 5 with responsive tablet/mobile interfaces.",
        "Implemented secure session handling, role-based permissions, automated CSV/PDF report generation, and Apache server tuning.",
      ],
      technologies: [
        "PHP 7.4+",
        "MySQL 5.7+",
        "MVC Architecture",
        "JavaScript",
        "Chart.js",
        "Bootstrap 5",
        "HTML5",
        "CSS3",
        "Apache",
        "Git",
      ],
      githubUrl: "https://github.com/nomanrafi",
    },
    {
      id: "motion-pipeline",
      title: "High-End Motion Graphics & Post-Production Pipeline",
      subtitle: "Cinematic VFX, Dynamic Link Automation & Scripting",
      category: "Motion & VFX",
      period: "May 2025 – Present",
      featured: true,
      description: [
        "Executed multi-layer visual compositing, planar motion tracking, and 3D camera-solving to produce broadcast-grade cinematic assets and commercial teasers.",
        "Developed scalable video editing workflows utilizing Premiere Pro–After Effects Dynamic Link integration, ensuring zero generation loss and consistent color space transforms.",
        "Authored custom JavaScript expressions (ExtendScript) in After Effects to automate procedural animation curves, physics-based damping, and mass template rendering.",
        "Performed advanced color grading in DaVinci Resolve & Lumetri Color workflows for cohesive contrast ratios, skin tone preservation, and filmic look profiles.",
      ],
      technologies: [
        "Adobe After Effects",
        "Adobe Premiere Pro",
        "Adobe Dynamic Link",
        "ExtendScript (JS)",
        "Motion Tracking",
        "Camera Tracking",
        "Color Grading",
        "DaVinci Resolve",
      ],
      githubUrl: "https://github.com/nomanrafi",
    },
  ] as Project[],

  skills: {
    aiMl: [
      { name: "Python", level: 95, tag: "Primary Language" },
      { name: "Machine Learning (Scikit-learn, XGBoost)", level: 92, tag: "Core ML" },
      { name: "Deep Learning (TensorFlow, PyTorch)", level: 85, tag: "Neural Nets" },
      { name: "Computer Vision (OpenCV)", level: 86, tag: "Image Processing" },
      { name: "Model Explainability (SHAP)", level: 88, tag: "Interpretability" },
      { name: "Data Analysis & Pandas/NumPy", level: 92, tag: "Data Wrangling" },
      { name: "Data Visualization (Matplotlib, Seaborn)", level: 90, tag: "Visual Insights" },
      { name: "Natural Language Processing (NLP)", level: 82, tag: "Text Analytics" },
    ],
    motionVideo: [
      { name: "Adobe After Effects", level: 95, tag: "VFX & Compositing" },
      { name: "Adobe Premiere Pro", level: 94, tag: "Editing & Pacing" },
      { name: "Adobe Dynamic Link Workflow", level: 96, tag: "Pipeline Integration" },
      { name: "Motion & Camera Tracking", level: 90, tag: "3D Spatial Solving" },
      { name: "Color Grading (Lumetri & DaVinci)", level: 88, tag: "Color Science" },
      { name: "Expressions / ExtendScript", level: 85, tag: "Automation Scripting" },
      { name: "Keyframe Graph Optimization", level: 92, tag: "Fluid Curves" },
      { name: "Audio-Visual Synchronization", level: 94, tag: "Sound Design Beat Sync" },
    ],
    softwareWeb: [
      { name: "Flutter & Dart", level: 88, tag: "Mobile Development" },
      { name: "HTML5, Modern CSS & Tailwind", level: 95, tag: "Modern UI/UX" },
      { name: "JavaScript / TypeScript", level: 88, tag: "Frontend Logic" },
      { name: "PHP 7.4+ & MVC Architecture", level: 84, tag: "Backend Systems" },
      { name: "Flask & REST API Development", level: 88, tag: "Microservices" },
      { name: "SQL & MySQL Management", level: 86, tag: "Databases" },
      { name: "Firebase (Auth, Firestore, Storage)", level: 88, tag: "BaaS Integration" },
      { name: "Git & GitHub Version Control", level: 90, tag: "Collaboration" },
    ],
    toolsOther: [
      { name: "Git & GitHub", category: "DevOps" },
      { name: "Kaggle Competitions", category: "Data Science" },
      { name: "C Programming", category: "Systems" },
      { name: "Compiler Design", category: "Foundations" },
      { name: "Gunicorn & WSGI", category: "Deployment" },
      { name: "Apache Web Server", category: "Server Mgmt" },
      { name: "DaVinci Resolve", category: "Color Studio" },
    ],
  },

  awards: [
    {
      title: "Winner (Rajshahi Division)",
      organization: "NASA International Space Apps Challenge 2024",
      year: "2024",
      badge: "1st Place Winner",
      description:
        "Prestigious first-place regional award for developing innovative data and engineering solutions tackling space and earth science challenges presented by NASA.",
    },
    {
      title: "DIU Accelerator Cup 2023",
      organization: "Daffodil International University",
      year: "2023",
      badge: "Start-up Competition Finalist",
      description:
        "Recognized for pitching and architecting viable technology-driven start-up solutions combining software engineering and scalable business models.",
    },
    {
      title: "DIU Growing Star Award",
      organization: "Daffodil International University",
      year: "Spring 2022",
      badge: "Academic & Tech Excellence",
      description:
        "Awarded to promising computer science innovators exhibiting high academic performance and proactive technical contributions.",
    },
    {
      title: "Datathon – Data Science Hackathon 2024",
      organization: "National Data Science Consortium",
      year: "2024",
      badge: "Hackathon Competitor",
      description:
        "Participated in rigorous competitive data science hackathon solving predictive modeling and feature engineering under timed constraints.",
    },
    {
      title: "Unlock the Algorithm & Take Off Contests",
      organization: "Competitive Programming Committee",
      year: "2022, 2023",
      badge: "Algorithmic Contestant",
      description:
        "Showcased algorithmic problem solving, graph theory, dynamic programming, and data structure execution under timed contest benchmarks.",
    },
  ] as Award[],

  certifications: [
    {
      title: "Datathon - Data Science Hackathon 2024",
      issuer: "Data Science Committee",
      date: "2024",
    },
    {
      title: "Web Development Professional Certification",
      issuer: "Eshikhon",
      date: "Dec 2022 – Mar 2023",
    },
    {
      title: "Machine Learning and Data Science Made Simple",
      issuer: "Certified Online Coursework",
      date: "2023",
    },
    {
      title: "Unlock the Algorithm & Take Off Programming Contest",
      issuer: "DIU CSE Department",
      date: "2022, 2023",
    },
  ] as Certification[],

  languages: [
    { name: "English", level: "Fluent (Professional Proficiency)" },
    { name: "Bangla", level: "Native Proficiency" },
    { name: "Hindi", level: "Fluent Speaking" },
  ],

  reference: {
    name: "Ms. Nazmun Nessa Moon",
    title: "Associate Professor",
    department: "Department of Computer Science and Engineering",
    institution: "Daffodil International University",
    email: "moon@daffodilvarsity.edu.bd",
    phone: "+8801798145670",
    phoneDisplay: "+880 1798-145670",
  },
};
