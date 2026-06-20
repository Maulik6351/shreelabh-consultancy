export const CONTACT_INFO = {
  companyName: "ShreeLabh Consultancy",
  tagline: "Revenue & Tax Consultants",
  email: "shreelabhconsultancy@yahoo.in",
  primaryPhone: "+91 9714595920",
  secondaryPhone: "+91 9824910501",
  whatsappNumber: "9714595920",
  whatsappLink: "https://wa.me/919714595920?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20consultancy%20services.",
  businessHours: {
    weekdays: "09:00 AM - 07:00 PM",
    sunday: "Closed"
  },
  branches: [
    {
      branchName: "Branch 1 (Main Office)",
      isHeadOffice: true,
      address: "Office No. 202, Above Saurashtra Medical, Near Somnath Hotel, Baroda Prestige, Varachha Main Road, Surat, Gujarat.",
      mapLink: "https://maps.app.goo.gl/tYrZBpCMR22XLrkv9"
    },
    {
      branchName: "Branch 2",
      isHeadOffice: false,
      address: "302, Maruti Arcade, Delad Patiya, Pariya Gam, Olpad-Sayan Road, Surat, Gujarat.",
      mapLink: "https://maps.app.goo.gl/551KKJTsRxFCoMXH7"
    }
  ],
  people: [
    {
      name: "Vivek Vekariya",
      phone: "+91 9714595920",
      role: "Founder & Lead Consultant"
    },
    {
      name: "Pravinbhai Sudani",
      phone: "+91 9824910501",
      role: "Lead Tax Advisor"
    }
  ]
};

export interface ServiceItem {
  name: string;
  href: string;
  description: string;
}

export interface ServiceCategory {
  categoryName: string;
  href: string;
  items: string[];
}

export const SERVICES_MENU: { category: string; href: string; items: ServiceItem[] }[] = [
  {
    category: "Tax Services",
    href: "/income-tax-return",
    items: [
      { name: "Income Tax Return", href: "/income-tax-return", description: "Seamless filing and tax computation for individuals & businesses." },
      { name: "Tax Planning & Consultation", href: "/income-tax-return", description: "Optimize your tax liabilities with expert financial advice." },
      { name: "Tax Notice Handling", href: "/income-tax-return", description: "Professional response and support for IT Department queries." }
    ]
  },
  {
    category: "GST Services",
    href: "/gst-services",
    items: [
      { name: "GST Registration", href: "/gst-services", description: "Fast registration for proprietorships, partnerships, and companies." },
      { name: "GST Return Filing", href: "/gst-services", description: "Accurate monthly, quarterly, and annual compliance filing." },
      { name: "GST Compliance & Consultation", href: "/gst-services", description: "Advisory services for GST amendments and cancellations." }
    ]
  },
  {
    category: "Loan Services",
    href: "/home-loan", // default route
    items: [
      { name: "Home Loan", href: "/home-loan", description: "New loans, balance transfers, and top-ups with competitive rates." },
      { name: "Mortgage Loan (LAP)", href: "/mortgage-loan", description: "Unlock the value of your commercial or residential property." },
      { name: "Business Loan", href: "/business-loan", description: "MSME working capital, machinery, and startup funding." }
    ]
  },
  {
    category: "Revenue & Legal Work",
    href: "/revenue-work",
    items: [
      { name: "Revenue Work", href: "/revenue-work", description: "Income certificates, land records, mutation entries, and property verification." },
      { name: "Legal Documentation", href: "/legal-documentation", description: "Affidavit drafting, agreements, sale deeds, and notary support." }
    ]
  }
];
