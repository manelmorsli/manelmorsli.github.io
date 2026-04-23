import { useState, useEffect } from "react";

type Lang = "en" | "fr";

interface Project {
  id: string;
  year: string;
  category: string;
  title: { en: string; fr: string };
  tagline: { en: string; fr: string };
  description: { en: string; fr: string };
  details: { en: string[]; fr: string[] };
  stack: string[];
  type: "professional" | "academic" | "personal";
}

const projects: Project[] = [
  {
    id: "rag-platform",
    year: "2025 – Present",
    category: "Full-Stack AI",
    title: {
      en: "AI-Powered Multi-Tenant RAG Platform",
      fr: "Plateforme RAG Multi-Tenant propulsée par l'IA",
    },
    tagline: {
      en: "Production-grade knowledge management & conversational AI system",
      fr: "Système de gestion des connaissances et d'IA conversationnelle en production",
    },
    description: {
      en: "Designed and built a production-grade, multi-tenant Retrieval-Augmented Generation (RAG) platform from scratch, supporting organisations, workspaces, documents, and conversational AI.",
      fr: "Conception et développement d'une plateforme RAG (Retrieval-Augmented Generation) multi-tenant de niveau production, supportant organisations, espaces de travail, documents et IA conversationnelle.",
    },
    details: {
      en: [
        "Backend: FastAPI + SQLAlchemy (async) + Alembic migrations + JWT authentication; async task processing via Taskiq / Redis workers",
        "Intelligent web crawling and document ingestion via Playwright & Crawlee",
        "Vector search: PostgreSQL + pgvector; local LLM inference via Ollama (Qwen 2.5, Mistral, BGE-M3)",
        "FlashRank cross-encoder reranking pipeline for high-precision retrieval",
        "Storage layer: SeaweedFS S3-compatible object store for PDFs, CSVs, and binary assets",
        "Research module: late-chunking experiments with Jina-Embeddings-v3, PyMuPDF4LLM parsing, React/Vite research UI",
        "LangChain & LlamaIndex integrated for chain-of-thought orchestration and retrieval pipelines",
        "Full Docker Compose orchestration for one-command local deployment",
      ],
      fr: [
        "Backend : FastAPI + SQLAlchemy (async) + migrations Alembic + authentification JWT ; traitement asynchrone via Taskiq / Redis",
        "Exploration web intelligente et ingestion de documents via Playwright & Crawlee",
        "Recherche vectorielle : PostgreSQL + pgvector ; inférence LLM locale via Ollama (Qwen 2.5, Mistral, BGE-M3)",
        "Pipeline de reranking FlashRank pour une récupération haute précision",
        "Couche de stockage : SeaweedFS compatible S3 pour PDFs, CSVs et assets binaires",
        "Module de recherche : expériences late-chunking avec Jina-Embeddings-v3, parsing PyMuPDF4LLM",
        "LangChain & LlamaIndex intégrés pour l'orchestration chain-of-thought et les pipelines de récupération",
        "Orchestration Docker Compose complète pour un déploiement local en une commande",
      ],
    },
    stack: ["Python 3.12", "FastAPI", "PostgreSQL", "pgvector", "Redis", "Ollama", "LangChain", "LlamaIndex", "React", "Next.js", "Docker", "SeaweedFS"],
    type: "professional",
  },
  {
    id: "hcd-chatbot",
    year: "2025 – Present",
    category: "Product Ownership",
    title: {
      en: "AI Chatbot Platform — High Commission of Digitalization",
      fr: "Plateforme Chatbot IA — Haut-Commissariat à la Numérisation",
    },
    tagline: {
      en: "Full product ownership: from functional specs to versioned deployment",
      fr: "Ownership produit complet : des spécifications fonctionnelles au déploiement versionné",
    },
    description: {
      en: "Owned the full product lifecycle at the High Commission of Digitalization Algeria — from writing functional specifications and system architecture to building the admin dashboard and public chat widget.",
      fr: "Ownership complet du cycle produit au Haut-Commissariat à la Numérisation d'Algérie — des spécifications fonctionnelles à l'architecture système, jusqu'au tableau de bord admin et au widget de chat public.",
    },
    details: {
      en: [
        "Wrote full functional & technical specifications, solution design document, and all release notes up to v0.0.1",
        "Built and maintained the product backlog, prioritised features, defined acceptance criteria",
        "Designed & developed the Admin Dashboard (Next.js) for knowledge base management and AI configuration",
        "Built the embeddable public chat widget (React + Vite) backed by FastAPI RAG pipeline",
        "Architected multi-tenant data isolation (organisations → workspaces → documents) with JWT authentication",
        "Async task workers (Taskiq / Redis) and S3-compatible file storage (SeaweedFS)",
        "End-to-end delivery: requirements → architecture → development → testing → release notes → deployment",
      ],
      fr: [
        "Rédaction complète des spécifications fonctionnelles & techniques, du document de conception de solution et de toutes les notes de version jusqu'à v0.0.1",
        "Construction et maintenance du backlog produit, priorisation des fonctionnalités, définition des critères d'acceptation",
        "Conception & développement du tableau de bord Admin (Next.js) pour la gestion de la base de connaissances",
        "Développement du widget de chat public embarquable (React + Vite) adossé à un pipeline RAG FastAPI",
        "Architecture d'isolation multi-tenant (organisations → espaces → documents) avec authentification JWT",
        "Workers de tâches asynchrones (Taskiq / Redis) et stockage S3 compatible (SeaweedFS)",
        "Livraison bout-en-bout : exigences → architecture → développement → tests → notes de version → déploiement",
      ],
    },
    stack: ["Python", "FastAPI", "PostgreSQL", "pgvector", "Redis", "Ollama", "React", "Next.js", "Docker", "SeaweedFS"],
    type: "professional",
  },
  {
    id: "breast-cancer",
    year: "2024 – 2025",
    category: "Computer Vision / AI Research",
    title: {
      en: "Intelligent Early-Diagnosis System for Breast Cancer via TCM",
      fr: "Système de Diagnostic Précoce du Cancer du Sein via la MTC",
    },
    tagline: {
      en: "Master's thesis — AI-driven diagnostic pipeline combining TCM with computer vision",
      fr: "Mémoire de master — pipeline de diagnostic IA combinant MTC et vision par ordinateur",
    },
    description: {
      en: "Designed an AI-driven diagnostic pipeline combining Traditional Chinese Medicine tongue analysis with modern computer vision for breast-cancer early detection.",
      fr: "Conception d'un pipeline de diagnostic IA combinant l'analyse de la langue en médecine traditionnelle chinoise avec la vision par ordinateur moderne pour la détection précoce du cancer du sein.",
    },
    details: {
      en: [
        "Utilized YOLO v8 for multi-class object detection on tongue imagery",
        "Applied SAM (Segment Anything Model) for precise anatomical segmentation",
        "Managed dataset with Roboflow: annotation, versioning, and augmentation",
        "Used Generative AI for synthetic data augmentation to address class imbalance",
        "Built end-to-end ML pipeline: data annotation → training → evaluation → inference API",
        "Research bridges Eastern medical knowledge with modern deep learning",
      ],
      fr: [
        "Utilisation de YOLO v8 pour la détection d'objets multi-classes sur des images de langue",
        "Application de SAM (Segment Anything Model) pour la segmentation anatomique précise",
        "Gestion du dataset avec Roboflow : annotation, versionnage et augmentation",
        "Utilisation de l'IA générative pour l'augmentation de données synthétiques",
        "Pipeline ML bout-en-bout : annotation → entraînement → évaluation → API d'inférence",
        "Recherche reliant la médecine orientale au deep learning moderne",
      ],
    },
    stack: ["Python", "YOLO v8", "SAM", "Roboflow", "PyTorch", "Generative AI", "OpenCV"],
    type: "academic",
  },
  {
    id: "university-chatbot",
    year: "2024",
    category: "NLP",
    title: {
      en: "University Chatbot — Student FAQ System",
      fr: "Chatbot Universitaire — Système FAQ Étudiant",
    },
    tagline: {
      en: "NLP chatbot automating student FAQ at UMMTO university",
      fr: "Chatbot NLP automatisant les FAQ étudiants à l'UMMTO",
    },
    description: {
      en: "Developed an NLP chatbot for student FAQ automation using fine-tuned GPT and T5 models.",
      fr: "Développement d'un chatbot NLP pour l'automatisation des FAQ étudiants en utilisant des modèles GPT et T5 fine-tunés.",
    },
    details: {
      en: [
        "Fine-tuned GPT and T5 models via HuggingFace Transformers for domain-specific FAQ",
        "Implemented intent classification for accurate query routing",
        "Built retrieval-based answering engine for known FAQ patterns",
        "Added fallback generation for out-of-scope questions",
        "Designed for deployment within university information systems",
      ],
      fr: [
        "Fine-tuning des modèles GPT et T5 via HuggingFace Transformers pour les FAQ spécifiques au domaine",
        "Implémentation de la classification d'intention pour un routage précis des requêtes",
        "Construction d'un moteur de réponses basé sur la récupération pour les FAQ connues",
        "Ajout d'une génération de secours pour les questions hors sujet",
        "Conçu pour le déploiement dans les systèmes d'information universitaires",
      ],
    },
    stack: ["Python", "HuggingFace Transformers", "GPT", "T5", "NLP"],
    type: "academic",
  },
  {
    id: "ontology-fashion",
    year: "2024",
    category: "Knowledge Representation",
    title: {
      en: "Fashion Industry Knowledge Graph",
      fr: "Graphe de Connaissances de l'Industrie de la Mode",
    },
    tagline: {
      en: "Interactive OWL ontology modeling the fashion industry domain",
      fr: "Ontologie OWL interactive modélisant le domaine de l'industrie de la mode",
    },
    description: {
      en: "Built an interactive fashion-industry ontology using Protégé, OWL, RDF, and RDFS with rich semantic relationships.",
      fr: "Construction d'une ontologie interactive de l'industrie de la mode avec Protégé, OWL, RDF et RDFS avec des relations sémantiques riches.",
    },
    details: {
      en: [
        "Modeled the fashion industry domain using OWL (Web Ontology Language)",
        "Defined class hierarchies covering garments, materials, designers, brands, and trends",
        "Created rich object properties and data properties for semantic relationships",
        "Implemented SPARQL query interfaces for domain exploration",
        "Used Protégé as the development environment for ontology engineering",
      ],
      fr: [
        "Modélisation du domaine de l'industrie de la mode en OWL (Web Ontology Language)",
        "Définition de hiérarchies de classes couvrant vêtements, matériaux, designers, marques et tendances",
        "Création de propriétés d'objet et de données riches pour les relations sémantiques",
        "Implémentation d'interfaces de requêtes SPARQL pour l'exploration du domaine",
        "Utilisation de Protégé comme environnement de développement pour l'ingénierie ontologique",
      ],
    },
    stack: ["Protégé", "OWL", "RDF", "RDFS", "SPARQL"],
    type: "academic",
  },
  {
    id: "data-mining",
    year: "2023",
    category: "Machine Learning",
    title: {
      en: "Data Mining Benchmark Suite",
      fr: "Suite de Benchmarks en Fouille de Données",
    },
    tagline: {
      en: "Comparative ML study across regression, clustering, and classification",
      fr: "Étude comparative ML sur la régression, le clustering et la classification",
    },
    description: {
      en: "Comprehensive benchmark comparing regression, clustering, and classification algorithms on multiple real-world datasets with rich visualizations.",
      fr: "Benchmark complet comparant des algorithmes de régression, clustering et classification sur plusieurs datasets réels avec des visualisations riches.",
    },
    details: {
      en: [
        "Regression: Linear, Ridge, Lasso — performance comparison across datasets",
        "Clustering: K-Means and DBSCAN with silhouette score analysis",
        "Classification: SVM, Random Forest, KNN with cross-validation",
        "Applied on multiple real-world public datasets",
        "Visualised results and insights with Matplotlib and Seaborn",
        "Produced detailed comparative report on algorithm strengths and trade-offs",
      ],
      fr: [
        "Régression : Linéaire, Ridge, Lasso — comparaison des performances sur les datasets",
        "Clustering : K-Means et DBSCAN avec analyse du score de silhouette",
        "Classification : SVM, Random Forest, KNN avec validation croisée",
        "Appliqué sur plusieurs datasets publics réels",
        "Résultats et insights visualisés avec Matplotlib et Seaborn",
        "Rapport comparatif détaillé sur les forces et compromis des algorithmes",
      ],
    },
    stack: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn", "NumPy"],
    type: "academic",
  },
  {
    id: "smart-greenhouse",
    year: "2023",
    category: "IoT",
    title: {
      en: "Smart Greenhouse Real-Time Monitoring System",
      fr: "Système de Surveillance en Temps Réel de Serre Intelligente",
    },
    tagline: {
      en: "Sensor-driven IoT system with real-time dashboards and automated alerts",
      fr: "Système IoT piloté par capteurs avec tableaux de bord temps réel et alertes automatisées",
    },
    description: {
      en: "Built a sensor-driven greenhouse monitoring system with real-time data pipelines, weather API integration, and Grafana dashboards for automated alerting.",
      fr: "Construction d'un système de surveillance de serre piloté par capteurs avec des pipelines de données temps réel, une intégration API météo et des tableaux de bord Grafana pour les alertes automatisées.",
    },
    details: {
      en: [
        "Sensor network with Arduino collecting temperature, humidity, and soil moisture data",
        "Node-RED for data flow orchestration and automation rules",
        "InfluxDB as time-series database for sensor readings",
        "OpenWeatherMap API integration for external weather context",
        "Grafana dashboards for real-time visualization and threshold-based alerting",
        "End-to-end IoT pipeline from physical sensor to analytical dashboard",
      ],
      fr: [
        "Réseau de capteurs avec Arduino collectant température, humidité et données d'humidité du sol",
        "Node-RED pour l'orchestration des flux de données et les règles d'automatisation",
        "InfluxDB comme base de données de séries temporelles pour les relevés de capteurs",
        "Intégration de l'API OpenWeatherMap pour le contexte météorologique externe",
        "Tableaux de bord Grafana pour la visualisation temps réel et les alertes à seuil",
        "Pipeline IoT bout-en-bout du capteur physique au tableau de bord analytique",
      ],
    },
    stack: ["Arduino", "Node-RED", "InfluxDB", "Grafana", "OpenWeatherMap API"],
    type: "academic",
  },
  {
    id: "dentalplan",
    year: "2021 – 2022",
    category: "Full-Stack Web",
    title: {
      en: "DentalPlan — Appointment Booking Web Application",
      fr: "DentalPlan — Application Web de Prise de Rendez-vous Dentaire",
    },
    tagline: {
      en: "Bachelor's final project — team lead on full-stack dental booking platform",
      fr: "Projet de fin de licence — chef d'équipe sur une plateforme de réservation dentaire full-stack",
    },
    description: {
      en: "Led a team to deliver a dental appointment-booking web application from requirements to deployment as Bachelor's final project.",
      fr: "Direction d'une équipe pour livrer une application web de prise de rendez-vous dentaire des exigences au déploiement, comme projet de fin de licence.",
    },
    details: {
      en: [
        "Team Lead role: coordinated development, task assignment, and code review",
        "Patient and dentist management with appointment scheduling",
        "CRUD operations with MySQL relational database",
        "Server-side rendering with PHP and dynamic DOM with JavaScript",
        "Responsive UI built with HTML5 and CSS3",
        "Role-based access control for patients, dentists, and administrators",
      ],
      fr: [
        "Rôle de chef d'équipe : coordination du développement, attribution des tâches et revue de code",
        "Gestion des patients et des dentistes avec la planification des rendez-vous",
        "Opérations CRUD avec base de données relationnelle MySQL",
        "Rendu côté serveur avec PHP et DOM dynamique avec JavaScript",
        "Interface responsive construite avec HTML5 et CSS3",
        "Contrôle d'accès basé sur les rôles pour patients, dentistes et administrateurs",
      ],
    },
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    type: "academic",
  },
];

const skillCategories = [
  {
    name: { en: "AI / ML / NLP", fr: "IA / ML / NLP" },
    skills: ["PyTorch", "TensorFlow", "HuggingFace Transformers", "LangChain", "LlamaIndex", "YOLO", "SAM", "Scikit-learn", "Prompt Engineering", "RAG Pipelines"],
  },
  {
    name: { en: "Backend & APIs", fr: "Backend & APIs" },
    skills: ["FastAPI", "SQLAlchemy", "Alembic", "Pydantic", "JWT / OAuth2", "Taskiq", "REST APIs", "asyncpg"],
  },
  {
    name: { en: "Frontend", fr: "Frontend" },
    skills: ["React", "Next.js", "Vite", "TypeScript", "Tailwind CSS", "HTML5 / CSS3"],
  },
  {
    name: { en: "Databases & Storage", fr: "Bases de données & Stockage" },
    skills: ["PostgreSQL", "pgvector", "Redis", "MySQL", "SeaweedFS", "InfluxDB", "Vector Databases"],
  },
  {
    name: { en: "Languages", fr: "Langages" },
    skills: ["Python", "TypeScript / JavaScript", "C / C++", "PHP", "SQL", "Matlab", "LaTeX"],
  },
  {
    name: { en: "DevOps & Infrastructure", fr: "DevOps & Infrastructure" },
    skills: ["Docker", "Docker Compose", "Git / GitHub", "CI/CD", "Linux"],
  },
  {
    name: { en: "Computer Vision", fr: "Vision par Ordinateur" },
    skills: ["YOLO v8/v11", "SAM", "OpenCV", "Roboflow", "Data Annotation"],
  },
  {
    name: { en: "Web Scraping", fr: "Web Scraping" },
    skills: ["Playwright", "Crawlee", "Crawl4AI", "BeautifulSoup", "Trafilatura"],
  },
  {
    name: { en: "Knowledge Representation", fr: "Représentation des Connaissances" },
    skills: ["Ontologies", "OWL", "RDF / RDFS", "Protégé", "SPARQL"],
  },
  {
    name: { en: "Product & Management", fr: "Produit & Gestion" },
    skills: ["Product Ownership", "Agile / Scrum", "System Architecture", "Roadmap Planning", "Functional Specifications", "Release Management"],
  },
];

const t = {
  nav: {
    about: { en: "About", fr: "À propos" },
    projects: { en: "Projects", fr: "Projets" },
    skills: { en: "Skills", fr: "Compétences" },
    experience: { en: "Experience", fr: "Expérience" },
    contact: { en: "Contact", fr: "Contact" },
    downloadCV: { en: "Download CV", fr: "Télécharger le CV" },
  },
  hero: {
    greeting: { en: "Hello, I'm", fr: "Bonjour, je suis" },
    title: { en: "Intelligent Systems Engineer · AI Engineer · Full-Stack AI Developer", fr: "Ingénieure en Systèmes Intelligents · Ingénieure IA · Développeuse Full-Stack AI" },
    tagline: {
      en: "Building production-grade AI systems — from RAG pipelines and knowledge bases to full-stack platforms.",
      fr: "Construction de systèmes IA en production — des pipelines RAG et bases de connaissances aux plateformes full-stack.",
    },
    cta: { en: "View My Work", fr: "Voir Mes Projets" },
    location: { en: "Algiers, Algeria", fr: "Alger, Algérie" },
  },
  about: {
    section: { en: "About", fr: "À propos" },
    p1: {
      en: "Full-Stack AI Engineer and Product Owner with end-to-end experience delivering intelligent platforms — from writing functional specifications and designing system architecture, to building production backends, admin dashboards, and public-facing AI widgets.",
      fr: "Ingénieure IA Full-Stack et Product Owner avec une expérience bout-en-bout dans la livraison de plateformes intelligentes — de la rédaction des spécifications fonctionnelles à la conception de l'architecture système, jusqu'au développement des backends de production, tableaux de bord et widgets IA.",
    },
    p2: {
      en: "Skilled in bridging the gap between technical development and product strategy: planning roadmaps, producing release notes, and driving features from concept to v0.0.1 and beyond. Passionate about AI, knowledge-based systems, object detection, image processing, and scalable RAG pipelines.",
      fr: "Experte dans la jonction entre développement technique et stratégie produit : planification des roadmaps, production des notes de version, et pilotage des fonctionnalités du concept au v0.0.1 et au-delà. Passionnée par l'IA, les systèmes à base de connaissances, la détection d'objets, le traitement d'image et les pipelines RAG scalables.",
    },
    p3: {
      en: "Currently seeking a mentorship relationship with an experienced AI project manager or technical lead to deepen expertise in AI product management, architectural decision-making, and strategic skill-scaling — with the goal of contributing to high-impact, research-driven AI initiatives at an international level.",
      fr: "En recherche d'une relation de mentorat avec un chef de projet IA ou lead technique expérimenté pour approfondir l'expertise en gestion de produits IA, prise de décisions architecturales et montée en compétences stratégique — avec l'objectif de contribuer à des initiatives IA à fort impact, orientées recherche, à l'échelle internationale.",
    },
    languages: { en: "Languages", fr: "Langues" },
    interests: { en: "Interests", fr: "Centres d'intérêt" },
  },
  projects: {
    section: { en: "Projects", fr: "Projets" },
    professional: { en: "Professional", fr: "Professionnel" },
    academic: { en: "Academic", fr: "Académique" },
    personal: { en: "Personal", fr: "Personnel" },
    viewDetails: { en: "View Details", fr: "Voir les Détails" },
    close: { en: "Close", fr: "Fermer" },
    techStack: { en: "Tech Stack", fr: "Stack Technique" },
    keyPoints: { en: "Key Highlights", fr: "Points Clés" },
  },
  skills: {
    section: { en: "Skills", fr: "Compétences" },
  },
  experience: {
    section: { en: "Experience", fr: "Expérience" },
  },
  education: {
    section: { en: "Education", fr: "Formation" },
  },
  contact: {
    section: { en: "Get in Touch", fr: "Me Contacter" },
    p1: {
      en: "I'm always open to discussing new projects, AI challenges, or opportunities to contribute to high-impact research-driven initiatives.",
      fr: "Je suis toujours ouverte à discuter de nouveaux projets, défis IA, ou opportunités de contribuer à des initiatives à fort impact orientées recherche.",
    },
    downloadEn: { en: "Download CV (English)", fr: "Télécharger le CV (Anglais)" },
    downloadFr: { en: "Download CV (French)", fr: "Télécharger le CV (Français)" },
  },
  footer: {
    built: { en: "Designed & Built by Manel Morsli", fr: "Conçu & Développé par Manel Morsli" },
  },
};

function get(obj: { en: string; fr: string }, lang: Lang) {
  return obj[lang];
}

// ─────────────────────────────────────────────────────────────
// THEME — change any colour here and it updates everywhere
// ─────────────────────────────────────────────────────────────
const THEME = {
  card: {
    bg:      "#ffffff",    // project card background
    hoverBg: "#f9f9f9",   // slightly darker on hover — change this
  },
  badge: {
    professional: { bg: "#18181b", text: "#ffffff" },  // black — premium feel
    academic:     { bg: "#eff6ff", text: "#2563eb" },  // soft blue
    personal:     { bg: "#fdf4ff", text: "#9333ea" },  // soft purple
  },
  modal: {
    bg:           "#ffffff",
    bulletBg:     "#fafafa",   // detail bullet box background
    bulletBorder: "#e4e4e7",   // left accent line on bullets
  },
  skill: {
    bg:      "#fafafa",        // skill tag background
    hoverBg: "#f0f0f0",       // skill tag hover
    border:  "rgba(0,0,0,0.08)",
  },
  section: {
    hoverLine: "#d4d4d8",
  },
};
// ─────────────────────────────────────────────────────────────

export default function App() {
  const [lang, setLang] = useState<Lang>("en");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Inject THEME as CSS custom properties so Tailwind arbitrary values can reference them
  const cssVars = `
    :root {
      --card-bg:           ${THEME.card.bg};
      --card-hover-bg:     ${THEME.card.hoverBg};
      --badge-pro-bg:      ${THEME.badge.professional.bg};
      --badge-pro-text:    ${THEME.badge.professional.text};
      --badge-ac-bg:       ${THEME.badge.academic.bg};
      --badge-ac-text:     ${THEME.badge.academic.text};
      --modal-bg:          ${THEME.modal.bg};
      --bullet-bg:         ${THEME.modal.bulletBg};
      --bullet-border:     ${THEME.modal.bulletBorder};
      --skill-bg:          ${THEME.skill.bg};
      --skill-hover-bg:    ${THEME.skill.hoverBg};
      --skill-border:      ${THEME.skill.border};
    }
  `;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (selectedProject) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [selectedProject]);

  const navLinks = [
    { href: "#about", label: get(t.nav.about, lang) },
    { href: "#projects", label: get(t.nav.projects, lang) },
    { href: "#skills", label: get(t.nav.skills, lang) },
    { href: "#experience", label: get(t.nav.experience, lang) },
    { href: "#contact", label: get(t.nav.contact, lang) },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <style>{cssVars}</style>
      {/* ── Navigation ─────────────────────────────────────── */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="font-medium tracking-tight text-sm hover:opacity-70 transition-opacity">
            MM
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm opacity-60 hover:opacity-100 transition-opacity">
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === "en" ? "fr" : "en")}
              className="text-sm opacity-60 hover:opacity-100 transition-opacity border border-border rounded px-2 py-1 font-mono"
            >
              {lang === "en" ? "FR" : "EN"}
            </button>
            {/* CV Download */}
            <a
              href={`/Manel_MORSLI_CV_${lang}.pdf`}
              download
              className="text-sm border border-foreground/30 hover:border-foreground hover:bg-foreground hover:text-background transition-all rounded px-3 py-1.5"
            >
              {get(t.nav.downloadCV, lang)}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden opacity-60 hover:opacity-100 transition-opacity"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className={`block h-px w-6 bg-foreground transition-transform duration-300 ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-px w-6 bg-foreground transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-px w-6 bg-foreground transition-transform duration-300 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-background/98 backdrop-blur-md px-6 pb-6 pt-4 space-y-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block text-sm opacity-60 hover:opacity-100 transition-opacity py-1"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setLang(lang === "en" ? "fr" : "en")}
                className="text-sm opacity-60 hover:opacity-100 border border-border rounded px-2 py-1 font-mono"
              >
                {lang === "en" ? "FR" : "EN"}
              </button>
              <a
                href={`/Manel_MORSLI_CV_${lang}.pdf`}
                download
                className="text-sm border border-foreground/30 hover:border-foreground rounded px-3 py-1"
              >
                {get(t.nav.downloadCV, lang)}
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ── Hero ────────────────────────────────────────────── */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-5xl w-full">
          <div className="space-y-6 max-w-2xl">
            <p className="text-sm opacity-40 tracking-widest uppercase font-mono">
              {get(t.hero.greeting, lang)}
            </p>
            <h1 className="text-5xl md:text-7xl font-medium leading-tight tracking-tight">
              Manel Morsli
            </h1>
            <p className="text-base md:text-lg opacity-50 leading-relaxed font-mono">
              {get(t.hero.title, lang)}
            </p>
            <p className="text-base md:text-xl opacity-70 leading-relaxed max-w-xl">
              {get(t.hero.tagline, lang)}
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-block bg-foreground text-background text-sm px-6 py-3 hover:opacity-80 transition-opacity"
              >
                {get(t.hero.cta, lang)}
              </a>
              <a
                href="#contact"
                className="inline-block text-sm px-6 py-3 border border-foreground/30 hover:border-foreground transition-colors opacity-70 hover:opacity-100"
              >
                {get(t.nav.contact, lang)}
              </a>
            </div>
            <p className="text-xs opacity-30 tracking-wider pt-4">
              📍 {get(t.hero.location, lang)}
            </p>
          </div>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────────── */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs opacity-30 tracking-widest uppercase font-mono mb-12">
            {get(t.about.section, lang)}
          </p>
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            <div className="space-y-5">
              <p className="leading-relaxed opacity-80 text-base">{get(t.about.p1, lang)}</p>
              <p className="leading-relaxed opacity-80 text-base">{get(t.about.p2, lang)}</p>
              <p className="leading-relaxed opacity-70 text-sm">{get(t.about.p3, lang)}</p>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xs opacity-30 tracking-widest uppercase font-mono mb-3">
                  {get(t.about.languages, lang)}
                </h3>
                <div className="space-y-1.5 text-sm opacity-70">
                  {[
                    lang === "en" ? "Tamazight — Native" : "Tamazight — Natif",
                    lang === "en" ? "Arabic — Fluent" : "Arabe — Courant",
                    lang === "en" ? "French — Professional Proficiency" : "Français — Niveau Professionnel",
                    lang === "en" ? "English — Professional Proficiency" : "Anglais — Niveau Professionnel",
                  ].map((l) => <p key={l}>{l}</p>)}
                </div>
              </div>
              <div>
                <h3 className="text-xs opacity-30 tracking-widest uppercase font-mono mb-3">
                  {get(t.about.interests, lang)}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Artificial Intelligence", "Quantum Computing", "Medical Technology", "Cybersecurity", "Mathematics", "Teaching", "Entrepreneurship", "Fashion Design"].map((interest) => (
                    <span key={interest} className="text-xs opacity-50 border border-border rounded-full px-3 py-1">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs opacity-30 tracking-widest uppercase font-mono mb-3">
                  {lang === "en" ? "Connect" : "Contact"}
                </h3>
                <div className="space-y-2 text-sm">
                  {[
                    { label: "manelmorsli@hotmail.com", href: "mailto:manelmorsli@hotmail.com" },
                    { label: "GitHub", href: "https://github.com" },
                    { label: "LinkedIn", href: "https://linkedin.com" },
                  ].map((link) => (
                    <a key={link.label} href={link.href} className="block opacity-50 hover:opacity-100 transition-opacity">
                      {link.label} →
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects ─────────────────────────────────────────── */}
      <section id="projects" className="py-32 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs opacity-30 tracking-widest uppercase font-mono mb-12">
            {get(t.projects.section, lang)}
          </p>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {projects.map((project) => (
              <div
                key={project.id}
                className="p-8 flex flex-col justify-between gap-6 group cursor-pointer transition-colors duration-200 bg-[var(--card-bg)] hover:bg-[var(--card-hover-bg)]"
                onClick={() => setSelectedProject(project)}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className="text-xs px-2 py-0.5 rounded font-mono"
                      style={{
                        background: THEME.badge[project.type as keyof typeof THEME.badge]?.bg,
                        color:      THEME.badge[project.type as keyof typeof THEME.badge]?.text,
                      }}
                    >
                      {get(t.projects[project.type as "professional" | "academic" | "personal"], lang)}
                    </span>
                    <span className="text-xs opacity-30 font-mono whitespace-nowrap">{project.year}</span>
                  </div>
                  <div>
                    <p className="text-xs opacity-40 font-mono mb-1">{project.category}</p>
                    <h3 className="text-base font-medium leading-snug">{get(project.title, lang)}</h3>
                  </div>
                  <p className="text-sm opacity-60 leading-relaxed">{get(project.tagline, lang)}</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {project.stack.slice(0, 3).map((s) => (
                      <span key={s} className="text-xs opacity-40 font-mono">{s}</span>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="text-xs opacity-30 font-mono">+{project.stack.length - 3}</span>
                    )}
                  </div>
                  <span className="text-xs opacity-0 group-hover:opacity-60 transition-opacity">
                    {get(t.projects.viewDetails, lang)} →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills ────────────────────────────────────────────── */}
      <section id="skills" className="py-32 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs opacity-30 tracking-widest uppercase font-mono mb-12">
            {get(t.skills.section, lang)}
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            {skillCategories.map((cat) => (
              <div key={cat.name.en} className="space-y-3">
                <h3 className="text-xs opacity-40 tracking-widest uppercase font-mono">
                  {get(cat.name, lang)}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm transition-colors duration-150 rounded px-2.5 py-1 bg-[var(--skill-bg)] hover:bg-[var(--skill-hover-bg)]"
                      style={{ border: `1px solid ${THEME.skill.border}` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Experience ───────────────────────────────────────── */}
      <section id="experience" className="py-32 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs opacity-30 tracking-widest uppercase font-mono mb-12">
            {get(t.experience.section, lang)}
          </p>
          <div className="space-y-0">
            {[
              {
                role: {
                  en: "Full Stack AI Engineer & Product Owner",
                  fr: "Ingénieure Full Stack IA & Product Owner",
                },
                org: {
                  en: "High Commission of Digitalization Algeria",
                  fr: "Haut-Commissariat à la Numérisation d'Algérie",
                },
                period: "Dec 2025 – Present",
                bullets: {
                  en: [
                    "Owned the full product lifecycle: functional specs, system architecture, solution design, and release notes up to v0.0.1",
                    "Built and maintained product backlog, defined acceptance criteria, planned delivery milestones as Product Owner",
                    "Designed & developed the Admin Dashboard (Next.js) for knowledge base and AI configuration management",
                    "Built the embeddable public chat widget (React + Vite) backed by FastAPI RAG pipeline with pgvector + Ollama",
                    "Architected multi-tenant data isolation with JWT authentication and async task workers",
                  ],
                  fr: [
                    "Ownership du cycle produit complet : spécifications fonctionnelles, architecture système, conception de solution et notes de version jusqu'à v0.0.1",
                    "Construction et maintenance du backlog produit, définition des critères d'acceptation, planification des jalons de livraison",
                    "Conception & développement du tableau de bord Admin (Next.js) pour la gestion de la base de connaissances et de la configuration IA",
                    "Développement du widget de chat public embarquable (React + Vite) adossé à un pipeline RAG FastAPI avec pgvector + Ollama",
                    "Architecture d'isolation multi-tenant avec authentification JWT et workers de tâches asynchrones",
                  ],
                },
              },
              {
                role: { en: "Computer Science Teacher", fr: "Enseignante en Informatique" },
                org: { en: "Middle School, Algeria", fr: "Collège, Algérie" },
                period: "Jan 2025 – May 2025",
                bullets: {
                  en: [
                    "Delivered computer-science curriculum to middle-school students",
                    "Developed strong communication, classroom management, and lesson-planning skills",
                  ],
                  fr: [
                    "Enseignement du programme d'informatique aux élèves du collège",
                    "Développement de compétences en communication, gestion de classe et planification des cours",
                  ],
                },
              },
              {
                role: { en: "IT & Telecom Intern", fr: "Stagiaire IT & Télécom" },
                org: { en: "Banque d'Extérieure d'Algérie", fr: "Banque d'Extérieure d'Algérie" },
                period: "Dec 2024",
                bullets: {
                  en: [
                    "Gained overview of banking IT operations, project management, and telecom division (datacenter administration and data transmission)",
                  ],
                  fr: [
                    "Aperçu des opérations informatiques bancaires, gestion de projet et division télécom (administration datacenter et transmission de données)",
                  ],
                },
              },
              {
                role: { en: "IT Intern", fr: "Stagiaire IT" },
                org: { en: "Sonatrach — Regional Directorate Hassi Messaoud", fr: "Sonatrach — Direction Régionale Hassi Messaoud" },
                period: "Jul – Aug 2024",
                bullets: {
                  en: [
                    "Explored IT departments, industrial development, database management, networking & security services, and datacenter operations at a major energy company",
                  ],
                  fr: [
                    "Exploration des départements IT, développement industriel, gestion de bases de données, services réseau & sécurité, et opérations datacenter dans une grande entreprise énergétique",
                  ],
                },
              },
            ].map((exp, i) => (
              <div key={i} className="grid md:grid-cols-[200px_1fr] gap-6 py-10 border-b border-border last:border-0">
                <div className="space-y-1">
                  <p className="text-xs font-mono opacity-40">{exp.period}</p>
                </div>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-medium text-base">{get(exp.role, lang)}</h3>
                    <p className="text-sm opacity-50">{get(exp.org, lang)}</p>
                  </div>
                  <ul className="space-y-1.5">
                    {get(exp.bullets, lang).map((b, j) => (
                      <li key={j} className="text-sm opacity-70 leading-relaxed pl-3 border-l border-border">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Education ────────────────────────────────────────── */}
      <section className="py-32 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs opacity-30 tracking-widest uppercase font-mono mb-12">
            {get(t.education.section, lang)}
          </p>
          <div className="space-y-0">
            {[
              {
                degree: { en: "Master's Degree — Intelligent Computer Systems", fr: "Master — Systèmes Informatiques Intelligents" },
                school: { en: "Mouloud Mammeri University (UMMTO), Tizi-Ouzou, Algeria", fr: "Université Mouloud Mammeri (UMMTO), Tizi-Ouzou, Algérie" },
                period: "2022 – 2025",
                detail: { en: "Specialisation in Artificial Intelligence — Machine Learning, Deep Learning, NLP, Computer Vision, Knowledge Representation, Distributed Systems.", fr: "Spécialisation en Intelligence Artificielle — Machine Learning, Deep Learning, NLP, Vision par Ordinateur, Représentation des Connaissances, Systèmes Distribués." },
              },
              {
                degree: { en: "Bachelor's Degree — Computer Systems", fr: "Licence — Systèmes Informatiques" },
                school: { en: "Mouloud Mammeri University (UMMTO), Tizi-Ouzou, Algeria", fr: "Université Mouloud Mammeri (UMMTO), Tizi-Ouzou, Algérie" },
                period: "2019 – 2022",
                detail: { en: "Strong foundation in computer systems, algorithms, databases, and software engineering.", fr: "Solide base en systèmes informatiques, algorithmes, bases de données et génie logiciel." },
              },
              {
                degree: { en: "Baccalaureate — Mathematics", fr: "Baccalauréat — Mathématiques" },
                school: { en: "Aghri Mohammed Said High School, Azeffoun, Algeria", fr: "Lycée Aghri Mohammed Said, Azeffoun, Algérie" },
                period: "2019",
                detail: { en: "", fr: "" },
              },
            ].map((edu, i) => (
              <div key={i} className="grid md:grid-cols-[200px_1fr] gap-6 py-10 border-b border-border last:border-0">
                <p className="text-xs font-mono opacity-40">{edu.period}</p>
                <div className="space-y-1">
                  <h3 className="font-medium text-base">{get(edu.degree, lang)}</h3>
                  <p className="text-sm opacity-50">{get(edu.school, lang)}</p>
                  {get(edu.detail, lang) && (
                    <p className="text-sm opacity-60 leading-relaxed pt-1">{get(edu.detail, lang)}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ─────────────────────────────────────────── */}
      <section id="contact" className="py-32 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs opacity-30 tracking-widest uppercase font-mono mb-12">
            {get(t.contact.section, lang)}
          </p>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed opacity-70 max-w-sm">
                {get(t.contact.p1, lang)}
              </p>
              <div className="flex flex-col gap-3 pt-2">
                <a
                  href="/Manel_MORSLI_CV_en.pdf"
                  download
                  className="inline-flex items-center gap-2 text-sm border border-foreground/30 hover:border-foreground hover:bg-foreground hover:text-background transition-all px-5 py-2.5 w-fit"
                >
                  ↓ {get(t.contact.downloadEn, lang)}
                </a>
                <a
                  href="/Manel_MORSLI_CV_fr.pdf"
                  download
                  className="inline-flex items-center gap-2 text-sm border border-foreground/30 hover:border-foreground hover:bg-foreground hover:text-background transition-all px-5 py-2.5 w-fit"
                >
                  ↓ {get(t.contact.downloadFr, lang)}
                </a>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: "manelmorsli@hotmail.com", href: "mailto:manelmorsli@hotmail.com", detail: "Email" },
                { label: "GitHub", href: "https://github.com", detail: "Code" },
                { label: "LinkedIn", href: "https://linkedin.com", detail: "Professional" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-between py-4 border-b border-border opacity-60 hover:opacity-100 transition-opacity group"
                >
                  <span className="text-base">{link.label}</span>
                  <span className="text-xs font-mono opacity-0 group-hover:opacity-60 transition-opacity">
                    {link.detail} →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 opacity-30">
          <p className="text-xs font-mono">{get(t.footer.built, lang)}</p>
          <p className="text-xs font-mono">© 2026</p>
        </div>
      </footer>

      {/* ── Project Detail Modal ─────────────────────────────── */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm flex items-start justify-center overflow-y-auto p-6 md:p-12"
          onClick={(e) => { if (e.target === e.currentTarget) setSelectedProject(null); }}
        >
          <div className="bg-background border border-border max-w-2xl w-full my-auto">
            {/* Modal Header */}
            <div className="flex items-start justify-between p-8 border-b border-border">
              <div className="space-y-2 pr-8">
                <div className="flex items-center gap-3">
                  <span
                    className="text-xs px-2 py-0.5 rounded font-mono"
                    style={{
                      background: THEME.badge[selectedProject.type as keyof typeof THEME.badge]?.bg,
                      color:      THEME.badge[selectedProject.type as keyof typeof THEME.badge]?.text,
                    }}
                  >
                    {get(t.projects[selectedProject.type as "professional" | "academic" | "personal"], lang)}
                  </span>
                  <span className="text-xs opacity-30 font-mono">{selectedProject.year}</span>
                </div>
                <p className="text-xs opacity-40 font-mono">{selectedProject.category}</p>
                <h2 className="text-xl font-medium leading-snug">{get(selectedProject.title, lang)}</h2>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="opacity-40 hover:opacity-100 transition-opacity text-xl leading-none mt-1 shrink-0"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-8 space-y-8">
              <p className="text-sm leading-relaxed opacity-70">
                {get(selectedProject.description, lang)}
              </p>

              <div>
                <h4 className="text-xs opacity-30 tracking-widest uppercase font-mono mb-4">
                  {get(t.projects.keyPoints, lang)}
                </h4>
                <ul className="space-y-2.5">
                  {get(selectedProject.details, lang).map((point, i) => (
                    <li
                      key={i}
                      className="text-sm leading-relaxed px-3 py-2 rounded"
                      style={{
                        background:   THEME.modal.bulletBg,
                        borderLeft:   `3px solid ${THEME.modal.bulletBorder}`,
                        color:        "inherit",
                        opacity:      0.85,
                      }}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs opacity-30 tracking-widest uppercase font-mono mb-4">
                  {get(t.projects.techStack, lang)}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono rounded px-2.5 py-1 transition-colors duration-150 bg-[var(--skill-bg)] hover:bg-[var(--skill-hover-bg)]"
                      style={{ border: `1px solid ${THEME.skill.border}` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-8 pb-8">
              <button
                onClick={() => setSelectedProject(null)}
                className="text-sm opacity-50 hover:opacity-100 transition-opacity border border-border px-4 py-2"
              >
                ← {get(t.projects.close, lang)}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
