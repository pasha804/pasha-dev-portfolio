export interface PricingPackage {
  id: string;
  category: 'websites' | 'stores' | 'apps' | 'desktop';
  title: string;
  startingPrice: string;
  startingPriceNumber: number;
  badge?: string;
  pages?: string;
  bestFor: string;
  features: string[];
  timeline: string;
  ctaText: string;
}

export interface PricingCategoryMeta {
  id: 'websites' | 'stores' | 'apps' | 'desktop';
  label: string;
  icon: string;
  description: string;
}

export const pricingCategories: PricingCategoryMeta[] = [
  {
    id: 'websites',
    label: 'Websites',
    icon: 'Globe',
    description: 'Landing pages and multi-page business websites with clean code and high performance.'
  },
  {
    id: 'stores',
    label: 'Online Stores',
    icon: 'ShoppingBag',
    description: 'E-commerce catalogs, checkout flows, and complete inventory management systems.'
  },
  {
    id: 'apps',
    label: 'Applications',
    icon: 'Layers',
    description: 'Custom Python/React web applications, admin dashboards, and database portals.'
  },
  {
    id: 'desktop',
    label: 'Desktop Software',
    icon: 'Monitor',
    description: 'Fast, reliable offline desktop software for retail, billing, and inventory.'
  }
];

export const pricingPackages: PricingPackage[] = [
  // --- WEBSITES ---
  {
    id: 'pkg-landing',
    category: 'websites',
    title: 'Landing Page',
    startingPrice: 'PKR 3,000+',
    startingPriceNumber: 3000,
    pages: '1 Page',
    bestFor: 'Single product promotion, event, portfolio, or lead generation campaign',
    features: [
      '1 targeted, high-conversion landing page',
      '100% mobile-responsive layout',
      'Hero banner & clear Call-To-Action (CTA) sections',
      'Direct WhatsApp chat & call button trigger',
      'Basic smooth animations & fast load time',
      'Social links & contact information'
    ],
    timeline: '1 to 3 Days',
    ctaText: 'GET THIS BUILT'
  },
  {
    id: 'pkg-starter-site',
    category: 'websites',
    title: 'Starter Website',
    startingPrice: 'PKR 6,000+',
    startingPriceNumber: 6000,
    pages: '3–4 Pages',
    bestFor: 'Small local businesses, consultants, personal clinics, or small service firms',
    features: [
      '3 to 4 core pages (Home, About, Services, Contact)',
      'Responsive design tested on mobile & desktop',
      'Interactive contact section with email triggers',
      'WhatsApp integration & Google Maps embed',
      'Basic semantic SEO structure (Title, Meta, Headers)',
      '10 days post-launch technical support'
    ],
    timeline: '3 to 5 Days',
    ctaText: 'GET THIS BUILT'
  },
  {
    id: 'pkg-business-site',
    category: 'websites',
    title: 'Business Website',
    startingPrice: 'PKR 8,000+',
    startingPriceNumber: 8000,
    badge: 'MOST POPULAR',
    pages: '5–7 Pages',
    bestFor: 'Growing companies, schools, real estate agencies, and service providers',
    features: [
      '5 to 7 custom pages tailored to your brand',
      'Bespoke modern UI (no generic template feel)',
      'Lead inquiry form with validation',
      'Interactive Google Maps & WhatsApp floating widget',
      'Smooth micro-animations & scroll interactions',
      'Comprehensive SEO meta tags & image optimization',
      '15 days post-launch technical support'
    ],
    timeline: '5 to 8 Days',
    ctaText: 'GET THIS BUILT'
  },
  {
    id: 'pkg-premium-business',
    category: 'websites',
    title: 'Premium Business',
    startingPrice: 'PKR 12,000+',
    startingPriceNumber: 12000,
    pages: '7–10 Pages',
    bestFor: 'Established businesses demanding superior aesthetics, brand authority, and polish',
    features: [
      '7 to 10 comprehensive pages with custom editorial layout',
      'Advanced interactive sections & custom UI components',
      'High-performance animations & refined typography',
      'Lead capture forms & multi-channel contact endpoints',
      'Deep SEO optimization & OpenGraph social share previews',
      'Performance audit & 30 days post-launch support'
    ],
    timeline: '8 to 14 Days',
    ctaText: 'GET THIS BUILT'
  },

  // --- STORES ---
  {
    id: 'pkg-online-store',
    category: 'stores',
    title: 'Online Store',
    startingPrice: 'PKR 15,000+',
    startingPriceNumber: 15000,
    bestFor: 'Clothing brands, boutique shops, and retail sellers launching online',
    features: [
      'Product listing with category filtering & search',
      'Individual product detail pages with image galleries',
      'Dynamic shopping cart & checkout flow',
      'Cash on Delivery (COD) & Direct WhatsApp order trigger',
      'Responsive mobile shopping experience',
      'Basic product & category configuration'
    ],
    timeline: '7 to 12 Days',
    ctaText: 'GET THIS BUILT'
  },
  {
    id: 'pkg-store-admin',
    category: 'stores',
    title: 'Store + Admin Panel',
    startingPrice: 'PKR 20,000+',
    startingPriceNumber: 20000,
    badge: 'FULL COMMERCE',
    bestFor: 'Serious e-commerce brands needing self-managed stock, orders, and sales tracking',
    features: [
      'Everything in Online Store package',
      'Dedicated Admin Dashboard with secure login',
      'Product management (Add, Edit, Price change, Delete)',
      'Order management & status updates (Pending, Shipped, Delivered)',
      'Customer list & basic sales analytics',
      'Local payment gateway ready (JazzCash/EasyPaisa/Card support)'
    ],
    timeline: '12 to 18 Days',
    ctaText: 'GET THIS BUILT'
  },

  // --- APPLICATIONS ---
  {
    id: 'pkg-admin-dashboard',
    category: 'apps',
    title: 'Admin Dashboard',
    startingPrice: 'PKR 10,000+',
    startingPriceNumber: 10000,
    bestFor: 'Internal operational management, back-office data viewing, and metrics tracking',
    features: [
      'Clean, technical dashboard UI with dark/light harmony',
      'Data tables with instant search, sorting, and pagination',
      'Interactive metrics cards & performance charts',
      'Authentication UI & secure session management',
      'Optimized for tablet, laptop, and desktop workflows'
    ],
    timeline: '5 to 9 Days',
    ctaText: 'GET THIS BUILT'
  },
  {
    id: 'pkg-custom-web-app',
    category: 'apps',
    title: 'Custom Web App',
    startingPrice: 'PKR 20,000+',
    startingPriceNumber: 20000,
    bestFor: 'Portals, booking engines, member directories, and specialized business tools',
    features: [
      'Custom frontend interface built with React & Tailwind',
      'Robust Python backend (FastAPI / Django)',
      'Relational database integration (PostgreSQL / SQLite)',
      'User authentication & protected member routes',
      'REST API endpoints for data communication',
      'Custom business logic tailored to your exact workflow'
    ],
    timeline: '12 to 20 Days',
    ctaText: 'GET THIS BUILT'
  },
  {
    id: 'pkg-medium-web-app',
    category: 'apps',
    title: 'Medium Custom Web App',
    startingPrice: 'PKR 30,000+',
    startingPriceNumber: 30000,
    badge: 'ENTERPRISE READY',
    bestFor: 'Complex portals, multi-role platforms, and SaaS MVPs with advanced logic',
    features: [
      'Advanced multi-role authentication (Admin, Manager, Customer)',
      'Complex relational database schemas & data validations',
      'Interactive dashboards, charts & data export (PDF / Excel)',
      'Automated background jobs & third-party API sync',
      'Fine-grained role permissions & audit logging',
      'Docker containerized deployment setup'
    ],
    timeline: '20 to 30 Days',
    ctaText: 'GET THIS BUILT'
  },

  // --- DESKTOP ---
  {
    id: 'pkg-simple-desktop',
    category: 'desktop',
    title: 'Simple Desktop Software',
    startingPrice: 'PKR 15,000+',
    startingPriceNumber: 15000,
    bestFor: 'Single-counter retail shops, billing counters, and local offline utilities',
    features: [
      '100% offline desktop application (.exe for Windows)',
      'Fast product lookup & quick cash bill generation',
      'Thermal receipt printer integration (80mm/58mm)',
      'Local database (SQLite) requiring zero cloud subscriptions',
      'Daily sales totals & cash reconciliation',
      'Simple, intuitive interface designed for non-tech cashiers'
    ],
    timeline: '7 to 12 Days',
    ctaText: 'GET THIS BUILT'
  },
  {
    id: 'pkg-medium-desktop',
    category: 'desktop',
    title: 'Medium Desktop Software',
    startingPrice: 'PKR 25,000+',
    startingPriceNumber: 25000,
    badge: 'COMPLETE POS',
    bestFor: 'Pharmacies, grocery marts, wholesale distributors, and spare-parts stores',
    features: [
      'Complete Point of Sale (POS) & inventory control system',
      'Barcode scanner integration & custom barcode label printing',
      'Customer & supplier khata (debit/credit ledger)',
      'Low-stock alerts, expiry date tracking, and reorder reports',
      'Detailed profit/loss reports & Excel sheet export',
      'Automated one-click local database backup & restore'
    ],
    timeline: '14 to 22 Days',
    ctaText: 'GET THIS BUILT'
  }
];
