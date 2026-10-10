export interface ProjectItem {
  id: string;
  name: string;
  category: string;
  typeBadge: 'Autonomous AI' | 'Concept Platform' | 'Live Showcase' | 'Developer Utility' | 'E-Commerce';
  technologies: string[];
  shortDescription: string;
  projectGoal: string;
  approach: string;
  keyFeatures: string[];
  techStackDetailed: string;
  mockupAccent: string;
  thumbnailUrl: string;
  demoUrl?: string;
  githubUrl: string;
  architectureDocUrl: string;
  architectureDetails: {
    systemType: string;
    runtime: string;
    dataFlow: string[];
    diagramAscii: string;
    highlights: string[];
  };
}

export const projectsData: ProjectItem[] = [
  {
    id: "pasha-devpilot",
    name: "Pasha DevPilot",
    category: "Autonomous SDLC & AI Software Engineer",
    typeBadge: "Autonomous AI",
    technologies: ["Python", "TypeScript", "FastAPI", "Docker", "IBM Bob", "AST Analysis"],
    shortDescription: "An autonomous AI software engineer platform capable of multi-file codebase reasoning, automated test orchestration, and intelligent pull request generation.",
    projectGoal: "Automate repetitive engineering tasks and multi-file code refactoring through coordinated autonomous LLM agent loops.",
    approach: "Engineered tree-sitter AST parsing with token budget optimization and isolated Docker container execution environments.",
    keyFeatures: [
      "Autonomous Multi-Agent Loop (Planner, Coder, Reviewer)",
      "AST & Semantic Code Graph Analysis",
      "Isolated Docker Sandbox for zero-risk test execution",
      "Automated linting and test suite verification",
      "Real-time WebSocket telemetry and terminal streaming"
    ],
    techStackDetailed: "Python 3.12, FastAPI, TypeScript, Docker Engine, IBM Bob, Tree-Sitter",
    mockupAccent: "#C084FC",
    thumbnailUrl: "/projects/pasha-devpilot.jpg",
    githubUrl: "https://github.com/pasha804/pasha-devpilot",
    architectureDocUrl: "/architecture-docs/pasha-devpilot.md",
    architectureDetails: {
      systemType: "Autonomous Multi-Agent SDLC Orchestrator",
      runtime: "Python 3.12 / TypeScript / Docker Linux Sandbox",
      dataFlow: [
        "User inputs feature specification via Web HUD or CLI",
        "AST Engine indexes workspace files and dependencies",
        "Planner Agent decomposes request into atomic changesets",
        "Coder Agent synthesizes unified diffs in Docker sandbox",
        "QA Agent executes test suite and commits verified PR"
      ],
      diagramAscii: `[ Web HUD / CLI ] ---> [ FastAPI Orchestrator ]
                              |
       +----------------------+----------------------+
       v                      v                      v
[ Planner Agent ]      [ Coder Agent ]        [ Reviewer Agent ]
(AST Dependency)       (Unified Diffs)        (Docker Pytest / Vitest)
       |                      |                      |
       +----------------------+----------------------+
                              |
                     [ Verified Pull Request ]`,
      highlights: [
        "Ephemeral container mounts prevent local filesystem corruption",
        "Context window optimization retains 99.2% relevant code tokens",
        "Autonomous self-correction loop fixes syntax errors on the fly"
      ]
    }
  },
  {
    id: "nexora",
    name: "Nexora",
    category: "AI Skill Social & Collaboration Platform",
    typeBadge: "Concept Platform",
    technologies: ["Python", "FastAPI", "React", "PostgreSQL", "Docker", "Vector Taxonomy"],
    shortDescription: "An intelligent networking platform connecting engineers through multidimensional AI-driven skill mapping, matrix matching, and collaborative project rooms.",
    projectGoal: "Build a high-throughput developer ecosystem that maps engineering talent using vector embeddings instead of static resumes.",
    approach: "Designed asynchronous FastAPI endpoints with PostgreSQL connection pooling and interactive client-side Zustand state management.",
    keyFeatures: [
      "AI-driven portfolio parsing and automated skill taxonomy",
      "Interactive 5-axis skill compatibility matrix matching",
      "Real-time peer project collaboration hub via WebSockets",
      "Argon2 password hashing & rotating JWT Bearer authentication",
      "Responsive cyber glassmorphism dashboard interface"
    ],
    techStackDetailed: "FastAPI, Python 3.12, PostgreSQL, React 19, TypeScript, Docker",
    mockupAccent: "#D946EF",
    thumbnailUrl: "/projects/nexora.jpg",
    githubUrl: "https://github.com/pasha804/NEXORA",
    architectureDocUrl: "/architecture-docs/nexora.md",
    architectureDetails: {
      systemType: "Vector Skill Taxonomy & Social Collaboration Network",
      runtime: "FastAPI Async Gateway / PostgreSQL 16 / React 19 SPA",
      dataFlow: [
        "User registers and uploads GitHub profile link or technical portfolio",
        "Vector Engine extracts skills into multidimensional radar matrix",
        "Matching algorithm queries cosine similarity across active projects",
        "WebSocket connection opens live collaboration room between peers"
      ],
      diagramAscii: `[ React 19 SPA ] <=== WSS / HTTPS ===> [ FastAPI Gateway ]
                                                 |
                       +-------------------------+-------------------------+
                       v                                                   v
              [ PostgreSQL 16 ]                                   [ Vector Embeddings ]
              (User & Project Graph)                              (Skill Radar Index)`,
      highlights: [
        "Sub-15ms response latency on skill matching queries",
        "Strict CORS and automated token refresh rotation",
        "Containerized with multi-stage Docker builds"
      ]
    }
  },
  {
    id: "pasha-earn",
    name: "Pasha Dev Earn",
    category: "Financial Analytics & Freelance Suite",
    typeBadge: "Live Showcase",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vercel Edge", "Local Encrypted DB"],
    shortDescription: "A specialized freelance developer financial telemetry dashboard tracking monthly revenue trajectories, client contract milestones, and invoice pipelines.",
    projectGoal: "Equip solo engineers and technical contractors with instant financial clarity and milestone roadmap management.",
    approach: "Implemented zero-latency client-side caching with encrypted local persistence and responsive SVG financial charting.",
    keyFeatures: [
      "Real-time revenue telemetry and 6-month growth projections",
      "Client milestone timeline and deliverable tracking",
      "Instant client invoice generator with canvas export",
      "Zero server latency with Vercel Global Edge CDN caching",
      "Fully responsive cyber HUD layout optimized for mobile & desktop"
    ],
    techStackDetailed: "React 19, TypeScript, Tailwind CSS, Lucide Icons, Vercel Edge",
    mockupAccent: "#A855F7",
    thumbnailUrl: "/projects/pasha-earn.jpg",
    demoUrl: "https://pasha-dev-earn.vercel.app",
    githubUrl: "https://github.com/pasha804/Pasha-Dev_Earn",
    architectureDocUrl: "/architecture-docs/pasha-earn.md",
    architectureDetails: {
      systemType: "High-Performance Financial Analytics SPA",
      runtime: "React 19 / Vercel Edge Serverless / Client RAM Storage",
      dataFlow: [
        "Client requests page served from closest global edge CDN node",
        "Local state engine loads encrypted contract records instantly",
        "Telemetry module calculates MRR, pending balances, and milestone health",
        "Canvas renderer builds printable PDF invoice on demand"
      ],
      diagramAscii: `[ Client Browser ] ---> [ Vercel Edge CDN ] ---> [ Client-Side Cache ]
         |                            |                               |
 (HUD Visualizer)             (0ms Cache Tier)           (Secure Local Encrypted DB)`,
      highlights: [
        "100/100 Lighthouse performance and SEO score",
        "Instant zero-delay offline operation",
        "No third-party tracking or financial telemetry leakage"
      ]
    }
  },
  {
    id: "3d-birthday",
    name: "3D Celestial Celebration",
    category: "Interactive 3D WebGL & Creative Web",
    typeBadge: "Live Showcase",
    technologies: ["Three.js", "WebGL", "React", "TypeScript", "Web Audio API", "Framer Motion"],
    shortDescription: "An immersive 3D digital celebration experience featuring an interactive celestial particle simulation, orbiting photo timeline, and synchronized audio.",
    projectGoal: "Push creative coding boundaries by replacing standard web pages with high-emotion 3D spatial interactive art.",
    approach: "Built with Three.js instanced buffer geometries, custom GLSL starfield shaders, and responsive touch controls for mobile devices.",
    keyFeatures: [
      "Interactive 20,000+ particle stardust cloud with mouse gravity",
      "Orbiting 3D floating photo carousel with glassmorphism materials",
      "Procedural GLSL cosmic nebula shaders with depth-of-field bloom",
      "Web Audio API sound controller with logarithmic volume fade",
      "Interactive letter reveal and animated confetti bursts"
    ],
    techStackDetailed: "Three.js, WebGL, Custom GLSL Shaders, React, Web Audio API",
    mockupAccent: "#EC4899",
    thumbnailUrl: "/projects/3d-birthday.jpg",
    demoUrl: "https://arfa-birthday-seven.vercel.app",
    githubUrl: "https://github.com/pasha804/3D-birthday",
    architectureDocUrl: "/architecture-docs/3d-birthday.md",
    architectureDetails: {
      systemType: "Interactive WebGL 3D Spatial Canvas",
      runtime: "Three.js / WebGL 2.0 / Web Audio API / React",
      dataFlow: [
        "WebGL context initializes hardware-accelerated 3D scene",
        "Instanced geometry renders 20,000 particles in a single GPU draw call",
        "Touch / mouse movement displaces orbital physics vectors",
        "Audio engine synthesizes ambient score with user-initiated unlock"
      ],
      diagramAscii: `+-------------------------------------------------------------+
|                 Three.js WebGL Scene Graph                  |
|  - Instanced Particle Cloud (20,000 pts)                    |
|  - Orbiting 3D Carousel (Custom Shaders)                    |
+-------------------------------------------------------------+
                              |
                     RequestAnimationFrame (60 FPS)
                              v
+-------------------------------------------------------------+
|                      HTML5 UI Overlay Layer                 |
|  - Web Audio API Sound Controller                           |
|  - Mobile Touch & Gyroscope Motion Listeners                |
+-------------------------------------------------------------+`,
      highlights: [
        "Maintains stable 60 FPS on mobile GPUs through instancing",
        "Adaptive asset loading keeps initial bundle under 250KB",
        "Audio bypasses browser autoplay restrictions via smart touch trigger"
      ]
    }
  },
  {
    id: "rm-mobile-emporium",
    name: "RM Mobile Emporium",
    category: "Full-Stack E-Commerce Storefront",
    typeBadge: "E-Commerce",
    technologies: ["React", "TypeScript", "Tailwind CSS", "REST API", "LocalStorage Cache"],
    shortDescription: "A high-conversion e-commerce storefront for mobile devices and smart gadgets with live specification matrix, cart drawer, and faceted filtering.",
    projectGoal: "Build a blistering-fast commercial retail store that combines cyber aesthetics with rapid multi-criteria catalog search.",
    approach: "Engineered responsive device comparison tables, real-time client cart state, and frictionless single-page checkout flow.",
    keyFeatures: [
      "Dynamic hardware specification comparison matrix",
      "Instant multi-criteria filtering (brand, price, RAM, camera)",
      "Slide-out animated cart drawer with live subtotal calculation",
      "High-contrast obsidian theme with neon purple accents",
      "Optimized product card imagery with layout shift prevention"
    ],
    techStackDetailed: "React 19, TypeScript, Tailwind CSS, Lucide Icons, REST API",
    mockupAccent: "#C084FC",
    thumbnailUrl: "/projects/rm-emporium.jpg",
    githubUrl: "https://github.com/pasha804/rm-mobile-emporium-main",
    architectureDocUrl: "/architecture-docs/rm-mobile-emporium.md",
    architectureDetails: {
      systemType: "High-Conversion E-Commerce Web Storefront",
      runtime: "React 19 / TypeScript / Client State Engine",
      dataFlow: [
        "Product catalog hydrates into client index with sub-1ms search",
        "User adjusts price or brand facets -> UI updates without reload",
        "Add to Cart updates persistent storage and triggers flyout drawer",
        "Checkout step validates order payload for payment gateway handoff"
      ],
      diagramAscii: `[ Storefront Client ] <---> [ Cart & Checkout State ] <---> [ Product Catalog Engine ]
         |                             |                                 |
 (Responsive Layout)           (LocalStorage Cache)             (Facet Filter & Search)`,
      highlights: [
        "Zero layout shifts (CLS < 0.005) during dynamic filter re-renders",
        "Instant responsive performance on 3G mobile connections",
        "Engineered for high conversion rates with clear visual CTAs"
      ]
    }
  },
  {
    id: "pasha-toolkit",
    name: "Pasha Dev Toolkit",
    category: "Developer Utilities & Micro-Apps",
    typeBadge: "Developer Utility",
    technologies: ["Next.js", "TypeScript", "Web Workers", "Tailwind CSS", "PWA"],
    shortDescription: "A privacy-first suite of in-browser developer utilities: JSON schema validators, regex debuggers, SQL formatters, and color harmony generators.",
    projectGoal: "Provide zero-latency tools that never transmit developer proprietary code or API tokens to remote third-party servers.",
    approach: "Offloaded heavy parsing routines into background browser Web Workers, ensuring silky 120Hz frame rates even on 15MB JSON files.",
    keyFeatures: [
      "100% Client-side data privacy (zero network data transmission)",
      "Web Worker background thread execution for non-blocking UI",
      "Interactive regex syntax visualizer with live match testing",
      "SQL dialect formatter and beautifier with instant clipboard copy",
      "Offline Progressive Web App (PWA) readiness"
    ],
    techStackDetailed: "Next.js, React, TypeScript, Web Workers API, Tailwind CSS",
    mockupAccent: "#38BDF8",
    thumbnailUrl: "/projects/toolkit-cyber.jpg",
    demoUrl: "https://frontend-ten-sigma-89.vercel.app",
    githubUrl: "https://github.com/pasha804/tool-kit",
    architectureDocUrl: "/architecture-docs/pasha-toolkit.md",
    architectureDetails: {
      systemType: "Client-Side Zero-Knowledge Developer Utility Suite",
      runtime: "React / TypeScript / Web Workers API / PWA",
      dataFlow: [
        "User inputs large JSON, regex, or SQL script into the editor",
        "Main thread dispatches payload to dedicated Web Worker via postMessage",
        "Worker executes syntax parsing, linting, and formatting off the main thread",
        "Worker returns formatted tree with execution benchmark telemetry"
      ],
      diagramAscii: `[ Main UI Thread ] 
      |
      |  PostMessage(Large Payload)
      v
[ Web Worker Thread (parser.worker.js) ]
      |-- JSON Validation & AST Parse
      |-- Regex Pattern Matching & Syntax Tokenizing
      |-- SQL Schema Formatting
      v
[ Main UI Thread ] <--- PostMessage(Result + Latency Telemetry)`,
      highlights: [
        "Guaranteed 100% data privacy — zero remote telemetry",
        "Main thread remains responsive at 120fps during 10MB+ payload parse",
        "Works seamlessly offline on airplanes or secure corporate intranets"
      ]
    }
  },
  {
    id: "template-place",
    name: "Template Place",
    category: "Web Architecture Showcase & Directory",
    typeBadge: "Live Showcase",
    technologies: ["React", "Vite", "TypeScript", "Tailwind CSS", "Vercel Edge"],
    shortDescription: "A curated showcase of production-grade responsive web templates, SaaS landing page architectures, and interactive digital starter kits.",
    projectGoal: "Create a reference gallery of modern web layouts with instant live preview and clean component-driven architecture.",
    approach: "Architected lightweight component patterns with zero runtime dependencies and blazing-fast edge delivery.",
    keyFeatures: [
      "Curated library of SaaS, agency, and e-commerce templates",
      "One-click responsive viewport preview (mobile, tablet, desktop)",
      "Lighthouse 99+ performance score with instant edge hydration",
      "Clean modular code structure ready for production deployment",
      "Full dark-mode cyber aesthetic with smooth interactive transitions"
    ],
    techStackDetailed: "React 19, Vite, TypeScript, Tailwind CSS, Vercel Edge",
    mockupAccent: "#A855F7",
    thumbnailUrl: "/projects/template-place.svg",
    demoUrl: "https://template-place-ruby.vercel.app",
    githubUrl: "https://github.com/pasha804/template-place",
    architectureDocUrl: "/architecture-docs/template-place.md",
    architectureDetails: {
      systemType: "High-Performance Web Architecture Showcase",
      runtime: "React 19 / Vite / Tailwind CSS / Vercel Edge",
      dataFlow: [
        "Edge CDN serves statically optimized template catalogue",
        "Interactive viewer provides multi-device viewport simulation",
        "Architecture modal renders detailed tech specs and component map",
        "Direct link allows instant testing of live deployed demos"
      ],
      diagramAscii: `[ Template Registry ] ---> [ Categorization Engine ] ---> [ Live Responsive Sandbox ]
                                        |
                            [ Lighthouse 99+ Hydration ]`,
      highlights: [
        "Zero layout shifts and sub-100ms Largest Contentful Paint",
        "Interactive device viewport toggles for immediate client evaluation",
        "Ready-to-deploy modular architectures for immediate production use"
      ]
    }
  }
];
