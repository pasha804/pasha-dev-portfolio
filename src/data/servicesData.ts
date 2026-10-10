export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  startingPrice: string;
  startingPriceNumber: number;
  icon: string;
  image: string;
  features: string[];
  deliverables: string[];
  timeline: string;
  tech: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "websites",
    number: "01",
    title: "Business Websites",
    tagline: "Tailored digital identity",
    description: "Professional, responsive websites engineered around your business goals, not a cookie-cutter template.",
    startingPrice: "PKR 8,000+",
    startingPriceNumber: 8000,
    icon: "Globe",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
    features: [
      "Custom UI/UX layout",
      "Mobile-first responsive design",
      "Direct WhatsApp / Call CTA buttons",
      "Fast page load speed & basic SEO structure",
      "Contact inquiry form & Google Maps"
    ],
    deliverables: ["Custom frontend code", "Domain/hosting configuration", "15 days bug-fix support"],
    timeline: "3 to 7 business days",
    tech: ["React", "TypeScript", "Tailwind CSS", "HTML5/CSS3"]
  },
  {
    id: "stores",
    number: "02",
    title: "Online Stores",
    tagline: "High-converting e-commerce",
    description: "E-commerce experiences featuring clean product catalogs, cart, checkout flows, and direct WhatsApp or payment gateway orders.",
    startingPrice: "PKR 15,000+",
    startingPriceNumber: 15000,
    icon: "ShoppingBag",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&q=80",
    features: [
      "Product catalog with category filters",
      "Shopping cart & fast checkout flow",
      "Cash on Delivery (COD) & WhatsApp order triggers",
      "Inventory & order management dashboard",
      "Local payment gateway support (JazzCash/EasyPaisa/PayFast)"
    ],
    deliverables: ["Complete store setup", "Admin credential setup", "Product management guide"],
    timeline: "7 to 14 business days",
    tech: ["React", "Python / Node.js", "PostgreSQL", "Tailwind CSS"]
  },
  {
    id: "web-apps",
    number: "03",
    title: "Custom Web Applications",
    tagline: "Scalable product engineering",
    description: "Full-stack web applications with robust Python/FastAPI backends, secure relational databases, and custom business logic.",
    startingPrice: "PKR 20,000+",
    startingPriceNumber: 20000,
    icon: "Layers",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    features: [
      "Role-based authentication (Admin, Staff, Customer)",
      "Relational database modeling & migrations",
      "Custom business workflows & data processing",
      "Secure REST APIs & third-party integrations",
      "Excel/PDF reporting & analytics generation"
    ],
    deliverables: ["Production-ready web application", "Database architecture", "API documentation"],
    timeline: "12 to 24 business days",
    tech: ["Python", "FastAPI / Django", "React", "PostgreSQL", "Docker"]
  },
  {
    id: "admin-dashboards",
    number: "04",
    title: "Admin Dashboards",
    tagline: "Clarity over your operations",
    description: "Custom control centers and operational dashboards designed for fast data entry, clean tables, charts, and metrics.",
    startingPrice: "PKR 10,000+",
    startingPriceNumber: 10000,
    icon: "LayoutDashboard",
    image: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&w=800&q=80",
    features: [
      "Data tables with instant search, filter & pagination",
      "Visual charts & real-time metric cards",
      "Secure login & role-based permissions",
      "CRUD operations for resources & products",
      "Responsive layout optimized for tablet & desktop"
    ],
    deliverables: ["Dashboard UI & Backend", "Role permissions setup", "Data export features"],
    timeline: "5 to 10 business days",
    tech: ["React", "FastAPI / Django", "Tailwind CSS", "Recharts"]
  },
  {
    id: "desktop-software",
    number: "05",
    title: "Desktop Software",
    tagline: "Reliable offline-first systems",
    description: "Offline-first desktop software for retail shops, pharmacies, billing counters, thermal printing, and barcode hardware.",
    startingPrice: "PKR 15,000+",
    startingPriceNumber: 15000,
    icon: "Monitor",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=800&q=80",
    features: [
      "100% offline capability (works without internet)",
      "Thermal receipt printer & barcode scanner integration",
      "Fast POS checkout & customer ledger",
      "Daily sales, profit/loss, and inventory stock tracking",
      "Local automatic database backups"
    ],
    deliverables: ["Standalone desktop installer (.exe)", "Local database setup", "Hardware testing"],
    timeline: "7 to 15 business days",
    tech: ["Python", "PyQt / Flet", "SQLite", "ReportLab"]
  },
  {
    id: "ai-integrations",
    number: "06",
    title: "AI Integrations",
    tagline: "Intelligent software features",
    description: "Practical AI integrations: custom chatbot assistants, automated customer support on WhatsApp, text summarizers, and LLM APIs.",
    startingPrice: "PKR 12,000+",
    startingPriceNumber: 12000,
    icon: "Sparkles",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    features: [
      "OpenAI & Gemini API integrations",
      "Custom business knowledge chatbot",
      "Automated WhatsApp lead reply flows",
      "Document parsing, extraction & categorization",
      "Strict cost & token guardrails"
    ],
    deliverables: ["AI integration module", "API prompt tuning", "Safety & cost throttling"],
    timeline: "4 to 8 business days",
    tech: ["Python", "LangChain / LLM APIs", "FastAPI", "Webhooks"]
  },
  {
    id: "backend-apis",
    number: "07",
    title: "Backend & APIs",
    tagline: "High-throughput engines",
    description: "Clean, documented, high-speed RESTful APIs and microservices engineered with Python for web, mobile, or third-party sync.",
    startingPrice: "PKR 10,000+",
    startingPriceNumber: 10000,
    icon: "Server",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    features: [
      "High-performance FastAPI / Django endpoints",
      "Token authentication (JWT / OAuth2)",
      "Database query optimization & indexing",
      "Payment gateway webhook handlers",
      "Swagger / OpenAPI documentation"
    ],
    deliverables: ["Deployed backend service", "Swagger documentation", "Database schemas"],
    timeline: "5 to 10 business days",
    tech: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker"]
  },
  {
    id: "redesign",
    number: "08",
    title: "Website Redesign",
    tagline: "Elevate your digital standard",
    description: "Revamp slow, outdated, or broken websites into modern, high-converting, mobile-perfect digital assets that command respect.",
    startingPrice: "PKR 6,000+",
    startingPriceNumber: 6000,
    icon: "RefreshCw",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    features: [
      "Complete visual UI/UX overhaul",
      "Mobile responsiveness fix & modernization",
      "Speed optimization & asset compression",
      "Clean code rewrite (ditching heavy slow plugins)",
      "Preservation of existing domain authority & links"
    ],
    deliverables: ["Refreshed modern website", "Speed performance report", "SEO preservation"],
    timeline: "3 to 6 business days",
    tech: ["React", "HTML5", "Modern CSS", "Tailwind"]
  }
];
