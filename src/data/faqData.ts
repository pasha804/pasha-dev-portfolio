export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  highlight?: string;
}

export const faqData: FAQItem[] = [
  {
    id: "cost",
    question: "How much does a website cost?",
    answer: "Projects start from PKR 3,000 for simple landing pages. Final pricing depends on scope, number of pages, custom features, and third-party integrations.",
    highlight: "Starting from PKR 3,000"
  },
  {
    id: "hosting-included",
    question: "Is hosting included in the price?",
    answer: "No. Hosting and domain are separate from development. Development is a one-time project fee, while hosting and domain are recurring infrastructure costs paid directly to providers.",
    highlight: "Separate transparent costs"
  },
  {
    id: "online-store",
    question: "Can you build an online store?",
    answer: "Yes. Online stores start from PKR 15,000 depending on required functionality, such as product catalogs, cart, cash on delivery (COD), WhatsApp checkout, and payment gateways.",
    highlight: "Stores from PKR 15,000"
  },
  {
    id: "custom-software",
    question: "Can you build custom software?",
    answer: "Yes. Custom web applications, admin portals, and offline desktop software (e.g. POS and inventory systems) are quoted based on your exact requirements and workflows.",
    highlight: "Web apps & desktop POS"
  },
  {
    id: "maintenance",
    question: "Do you provide maintenance after launch?",
    answer: "Yes. Every project includes a free 15-to-30 day bug-fix support window after delivery. Ongoing maintenance or content update packages can be arranged separately if needed.",
    highlight: "Includes free bug support"
  },
  {
    id: "timeline",
    question: "How long does development take?",
    answer: "Timeline depends on project scope. A simple landing page can be ready in 1 to 3 days, standard business websites take 4 to 7 days, and custom applications typically take 2 to 3 weeks.",
    highlight: "1-3 days for landing pages"
  },
  {
    id: "see-work",
    question: "Can I see the work before hiring?",
    answer: "Yes. You can explore the portfolio section on this website, inspect live demos, and discuss your specific requirements before committing to any project.",
    highlight: "Live interactive demos"
  }
];
