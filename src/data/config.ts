export interface SiteConfig {
  brandName: string;
  developerName: string;
  tagline: string;
  supportingLine: string;
  trustLine: string;
  location: string;
  email: string;
  whatsappNumber: string; // international format without + for wa.me link
  whatsappDisplay: string;
  whatsappMessage: string;
  socials: {
    tiktok: string;
    github: string;
    linkedin: string;
  };
}

export const siteConfig: SiteConfig = {
  brandName: "Pasha Dev",
  developerName: "Muhammad Mubashar",
  tagline: "BUILDING DIGITAL PRODUCTS THAT MEAN BUSINESS.",
  supportingLine: "Websites, stores, web apps and software — designed and engineered by Pasha Dev.",
  trustLine: "Web • Apps • Stores • Software",
  location: "Pakistan (Remote / Worldwide)",
  email: "hello@pashadev.com",
  whatsappNumber: "923084453846", // Configure your WhatsApp number here
  whatsappDisplay: "+92 308 4453846",
  whatsappMessage: "Hi Pasha Dev, I want to discuss a project.",
  socials: {
    tiktok: "https://www.tiktok.com/@pasha_dev_",
    github: "https://github.com/pashadev",
    linkedin: "https://linkedin.com/in/pashadev",
  },
};
