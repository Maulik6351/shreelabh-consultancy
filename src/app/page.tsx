"use client";

import React from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { 
  Phone, 
  ArrowRight, 
  CheckCircle, 
  MapPin, 
  Clock, 
  Mail, 
  ShieldCheck,
  Landmark,
  Percent,
  Coins,
  Scale,
  Sparkles,
  Calculator,
  ClipboardCheck,
  TrendingUp,
  BookOpen,
  ArrowRightLeft,
  FileCheck
} from "lucide-react";


import SectionHeading from "@/components/shared/SectionHeading";
import { TrustStrip } from "@/components/shared/TrustBadge";
import ServiceCard from "@/components/shared/ServiceCard";
import TestimonialCard from "@/components/shared/TestimonialCard";
import FAQAccordion from "@/components/shared/FAQAccordion";
import ContactForm from "@/components/shared/ContactForm";
import { CONTACT_INFO } from "@/constants/contactInfo";
import { buttonVariants } from "@/components/ui/button";

// Animation Variants for sections
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Home() {
  const cleanPhone = CONTACT_INFO.primaryPhone.replace(/\s+/g, "");

  // Interactive Hub State variables
  const [activeTab, setActiveTab] = React.useState<"tax" | "loan" | "land" | "checklist">("tax");
  const [taxIncome, setTaxIncome] = React.useState<number>(850000); // Default 8.5L
  const [loanAmount, setLoanAmount] = React.useState<number>(3500000); // Default 35L
  const [loanTenure, setLoanTenure] = React.useState<number>(20); // Default 20 years
  const [landStep, setLandStep] = React.useState<number>(0);
  const [checklist, setChecklist] = React.useState({
    itrIncome: true,
    itrBank: false,
    gstPan: true,
    gstAadhaar: false,
    landDeed: false,
    landSatbara: false,
    loanSalary: false,
    loanItr: false,
  });

  const handleToggleCheck = (key: keyof typeof checklist) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Helper formatting function for INR
  const formatINR = (val: number) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    if (val >= 100000) {
      return `₹${(val / 100000).toFixed(1)} Lakh`;
    }
    return `₹${val.toLocaleString("en-IN")}`;
  };

  const formatINRValue = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  // Tax optimization calculations
  const calculateTaxSavings = (income: number) => {
    // Simple visual tax calculation (estimating 15% standard average rate after 7L slab)
    let standardTax = 0;
    const taxable = Math.max(0, income - 700000);
    if (taxable > 0) {
      standardTax = Math.round(taxable * 0.15);
    }
    // Strategic deduction optimization offers ~35% average savings
    const savings = Math.round(standardTax * 0.35);
    const finalTax = Math.max(0, standardTax - savings);

    return {
      standardTax,
      savings,
      finalTax,
    };
  };

  const taxDetails = calculateTaxSavings(taxIncome);

  // EMI calculations
  const calculateEMI = (principal: number, years: number) => {
    const annualRate = 8.4; // starting home loan / LAP syndication rate
    const r = annualRate / 12 / 100;
    const n = years * 12;
    const emi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return {
      emi: isNaN(emi) ? 0 : Math.round(emi),
      totalRepayment: isNaN(emi) ? 0 : Math.round(emi * n),
      interest: isNaN(emi) ? 0 : Math.round(emi * n - principal),
    };
  };

  const emiDetails = calculateEMI(loanAmount, loanTenure);

  // Checklist verification calculations
  const checkedCount = Object.values(checklist).filter(Boolean).length;
  const progressPercent = Math.round((checkedCount / 8) * 100);

  const getChecklistStatus = () => {
    if (progressPercent <= 25) {
      // Return status details
      return { text: "Document Gathering", color: "text-amber-400 bg-amber-400/10 border-amber-400/20" };
    }
    if (progressPercent <= 75) {
      return { text: "Almost Ready", color: "text-sky-400 bg-sky-400/10 border-sky-400/20" };
    }
    return { text: "Ready to File/Apply!", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" };
  };

  const checklistStatus = getChecklistStatus();

  // Gujarat revenue work stages
  const landStages = [
    {
      title: "Title Verification & Search Report",
      short: "Verification",
      gujarati: "દસ્તાવેજ ચકાસણી",
      description: "We review the original registered sale deed, index number 2, and trace the history of land ownership through historical 7/12 records to ensure a clear, marketable title.",
      icon: ShieldCheck,
      badge: "Stage 1",
    },
    {
      title: "Application Logging at e-Dhara Kendra",
      short: "e-Dhara Logging",
      gujarati: "ઈ-ધરા રજીસ્ટ્રેશન",
      description: "The application for mutation entry is officially prepared and submitted at the government e-Dhara center, generating a unique entry registration number.",
      icon: Landmark,
      badge: "Stage 2",
    },
    {
      title: "135-D Notice Service & Objection Period",
      short: "135-D Notice",
      gujarati: "૧૩૫-ડી નોટિસ",
      description: "Revenue authorities serve a 135-D notice to all interested parties/co-owners, initiating a mandatory 30-day period for raising objections or verification.",
      icon: Clock,
      badge: "Stage 3",
    },
    {
      title: "Mamlatdar Approval & Mutation Entry",
      short: "Certified Entry",
      gujarati: "મંજૂરી અને નોંધ",
      description: "After verifying there are no valid objections, the Circle Officer / Mamlatdar officially certifies the entry, updating the state land records database.",
      icon: CheckCircle,
      badge: "Stage 4",
    },
  ];

  const services = [
    {
      title: "Income Tax filing",
      description: "Seamless tax returns filing, tax planning, notice handling, and PAN/TDS documentation.",
      icon: "tax" as const,
      href: "/income-tax-return",
    },
    {
      title: "GST Services",
      description: "Fast GST registrations, return filing, compliance audits, and cancellation consultation.",
      icon: "gst" as const,
      href: "/gst-services",
    },
    {
      title: "Home Loan Services",
      description: "New home loan syndications, balance transfers, and top-ups with competitive rates.",
      icon: "home-loan" as const,
      href: "/home-loan",
    },
    {
      title: "Mortgage Loan (LAP)",
      description: "Unlock the value of your commercial or residential property with quick mortgage loan options.",
      icon: "mortgage" as const,
      href: "/mortgage-loan",
    },
    {
      title: "Revenue Work",
      description: "Income certificates, land records, mutation entries, and property verification in Gujarat.",
      icon: "revenue" as const,
      href: "/revenue-work",
    },
    {
      title: "Legal Documentation",
      description: "Drafting agreements, sale deeds, affidavits, power of attorney, and notary coordination.",
      icon: "legal" as const,
      href: "/legal-documentation",
    },
  ];

  const whyChooseUs = [
    {
      title: "Professional Guidance",
      description: "Direct advisory from seasoned consultants well-versed in tax policies and revenue laws.",
    },
    {
      title: "Fast Processing",
      description: "Streamlined data collection and processing methods to submit filings and loans rapidly.",
    },
    {
      title: "End-to-End Support",
      description: "From documents collation and verification to bank negotiation and notice resolution.",
    },
    {
      title: "Transparent Process",
      description: "Clear fees structure, detailed timelines, and open communication with no hidden rates.",
    },
    {
      title: "Experienced Team",
      description: "Proven record of resolving complex property mutation cases and syndicating high-value loans.",
    },
    {
      title: "Customer Focused",
      description: "A tailored consultancy approach aligned with individual budgets and enterprise objectives.",
    },
  ];

  const timelineSteps = [
    {
      step: "01",
      title: "Submit Inquiry",
      description: "Contact us via form, phone, or WhatsApp to share your financial or documentation needs.",
    },
    {
      step: "02",
      title: "Document Verification",
      description: "Our in-house experts review your documents to ensure compliance, security, and completeness.",
    },
    {
      step: "03",
      title: "Application Processing",
      description: "We handle your file prep, submit tax returns, or negotiate loan terms with top lenders.",
    },
    {
      step: "04",
      title: "Hassle-Free Completion",
      description: "Receive your verified certificates, filing confirmation receipts, or loan disbursement smoothly.",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Patel",
      role: "MSME Owner, Surat",
      content: "ShreeLabh Consultancy sorted out our GST return filings and pending tax notices. Vivek's guidance was prompt and professional. Highly recommended for tax services in Surat!",
      rating: 5,
      time: "2 weeks ago",
    },
    {
      name: "Anjali Desai",
      role: "Home Buyer, Surat",
      content: "Securing a Home Loan was so simple with their help. They handled all the document verification and coordinated with the bank for a fast disbursement. Excellent end-to-end support!",
      rating: 5,
      time: "1 month ago",
    },
    {
      name: "Mahesh Vekariya",
      role: "Property Owner, Kamrej",
      content: "I was struggling with mutation entries for my land records for months. The team at ShreeLabh resolved the revenue documentation within two weeks. Very transparent process!",
      rating: 5,
      time: "3 weeks ago",
    },
    {
      name: "Hardik Savani",
      role: "Software Engineer, Surat",
      content: "Filing income tax returns as a salaried employee with multiple investments used to be stressful. They completed the filing in just a day, maximizing my tax savings.",
      rating: 5,
      time: "2 months ago",
    },
  ];

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="space-y-24 md:space-y-32">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-primary/45 text-white pt-24 pb-20 md:pt-36 md:pb-32">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        
        {/* Ambient glow decoration */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 lg:col-span-6"
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/5 text-secondary border border-white/10 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                </span>
                <span>Surat&apos;s Premier Financial &amp; Land Advisors</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black font-heading leading-[1.15] tracking-tight">
                Trusted Revenue <br />
                <span className="text-secondary bg-clip-text text-transparent bg-gradient-to-r from-secondary to-amber-300">
                  &amp; Tax Consultants
                </span>
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Income Tax, GST, Home Loans, Land Revenue &amp; Legal Deeds under one roof. We guide individuals and businesses in Surat, Gujarat with 100% transparency.
              </p>

              {/* Quick portal links indicator */}
              <div className="space-y-3 pt-2">
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-secondary animate-pulse" />
                  Explore Interactive Calculators:
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: "tax", label: "Tax Optimizer", icon: Percent },
                    { id: "loan", label: "EMI Estimator", icon: Coins },
                    { id: "land", label: "Land Tracker", icon: Landmark },
                    { id: "checklist", label: "Doc Checklist", icon: FileCheck },
                  ].map((chip) => {
                    const ChipIcon = chip.icon;
                    const isSelected = activeTab === chip.id;
                    return (
                      <button
                        key={chip.id}
                        onClick={() => setActiveTab(chip.id as any)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                          isSelected
                            ? "bg-secondary text-slate-950 border-secondary shadow-md shadow-secondary/15"
                            : "bg-white/5 hover:bg-white/10 text-slate-300 border-white/5"
                        }`}
                      >
                        <ChipIcon className="w-3.5 h-3.5" />
                        {chip.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <a
                  href="#contact"
                  onClick={handleScrollToContact}
                  className={buttonVariants({
                    variant: "default",
                    size: "lg",
                    className: "w-full sm:w-auto font-bold shadow-xl shadow-secondary/10 bg-secondary hover:bg-secondary/90 text-slate-900 border border-secondary transition-all flex items-center justify-center group"
                  })}
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href={`tel:${cleanPhone}`}
                  className={buttonVariants({
                    variant: "outline",
                    size: "lg",
                    className: "w-full sm:w-auto font-bold text-white border-white/20 hover:bg-white/10 hover:text-white transition-all shadow-md flex items-center justify-center backdrop-blur-sm"
                  })}
                >
                  <Phone className="mr-2 h-4 w-4 text-secondary animate-pulse" />
                  Call {CONTACT_INFO.primaryPhone}
                </a>
              </div>

              {/* Minimal Trust Indicator */}
              <div className="flex items-center gap-5 pt-4 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary" />
                  Government Registered
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary" />
                  No Hidden Fees
                </div>
              </div>
            </motion.div>

            {/* Right Hero: Consultancy Portal Interface */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-6 w-full"
            >
              <div className="relative group">
                <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-tr from-secondary to-primary opacity-30 blur-xl transition duration-1000 group-hover:opacity-40 pointer-events-none" />
                <div className="relative bg-slate-950/70 border border-white/10 rounded-[32px] p-6 sm:p-8 backdrop-blur-xl shadow-2xl overflow-hidden min-h-[480px] flex flex-col justify-between">
                  
                  {/* Dashboard Top Info */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/5">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-secondary animate-pulse" />
                      <span className="text-[10px] font-black uppercase tracking-wider text-slate-300">
                        ShreeLabh Digital Advisory Hub
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[9px] text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Live Portal
                    </div>
                  </div>

                  {/* Tabs navigation */}
                  <div className="grid grid-cols-4 gap-1 bg-white/5 p-1 rounded-xl my-4 text-center">
                    {(["tax", "loan", "land", "checklist"] as const).map((t) => {
                      const isSelected = activeTab === t;
                      return (
                        <button
                          key={t}
                          onClick={() => setActiveTab(t)}
                          className={`py-2 rounded-lg text-[10px] sm:text-xs font-extrabold uppercase transition-all tracking-wider ${
                            isSelected
                              ? "bg-slate-800 text-white shadow-md border-b-2 border-secondary"
                              : "text-slate-400 hover:text-slate-200"
                          }`}
                        >
                          {t === "tax" && "Tax"}
                          {t === "loan" && "Loan"}
                          {t === "land" && "Land"}
                          {t === "checklist" && "Files"}
                        </button>
                      );
                    })}
                  </div>

                  {/* Dynamic Tabs Content */}
                  <div className="flex-grow py-2 min-h-[260px] flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4"
                      >
                        {/* TAB 1: TAX OPTIMIZER */}
                        {activeTab === "tax" && (
                          <div className="space-y-4">
                            <div className="space-y-1">
                              <h3 className="text-base font-bold text-white flex items-center gap-2">
                                <Percent className="w-4 h-4 text-secondary" />
                                Income Tax Optimizer
                              </h3>
                              <p className="text-[11px] text-slate-400">
                                Estimate your potential tax savings under optimal strategic deductions structure.
                              </p>
                            </div>

                            {/* Slider */}
                            <div className="space-y-2 pt-1">
                              <div className="flex items-center justify-between text-[11px] font-bold text-slate-300">
                                <span>Taxable Income (Annual)</span>
                                <span className="text-secondary text-xs font-extrabold bg-secondary/10 px-2 py-0.5 rounded border border-secondary/20">
                                  {formatINRValue(taxIncome)}
                                </span>
                              </div>
                              <input
                                type="range"
                                min="500000"
                                max="2500000"
                                step="50000"
                                value={taxIncome}
                                onChange={(e) => setTaxIncome(Number(e.target.value))}
                                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-secondary"
                              />
                              <div className="flex justify-between text-[8px] text-slate-500 font-mono">
                                <span>₹5 Lakhs</span>
                                <span>₹15 Lakhs</span>
                                <span>₹25 Lakhs</span>
                              </div>
                            </div>

                            {/* Calculations Output */}
                            <div className="grid grid-cols-2 gap-3">
                              <div className="bg-white/5 border border-white/5 rounded-xl p-3">
                                <span className="text-[9px] text-slate-400 block font-medium uppercase">Est. Base Liability</span>
                                <span className="text-xs font-bold text-slate-300 block mt-1">{formatINRValue(taxDetails.standardTax)}</span>
                              </div>
                              <div className="bg-emerald-500/10 border border-emerald-500/15 rounded-xl p-3 relative overflow-hidden">
                                <span className="text-[9px] text-emerald-400 block font-bold uppercase">Estimated Tax Saved</span>
                                <span className="text-xs font-black text-emerald-300 block mt-1">~{formatINRValue(taxDetails.savings)}</span>
                              </div>
                            </div>

                            {/* Bottom Callout */}
                            <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center justify-between text-xs">
                              <div>
                                <span className="text-[9px] text-slate-400 block">Restructured Liability</span>
                                <span className="text-sm font-black text-white">{formatINRValue(taxDetails.finalTax)}*</span>
                              </div>
                              <a
                                href="#contact"
                                className="text-[11px] font-bold text-secondary flex items-center gap-1 hover:underline transition-all"
                              >
                                Optimize Tax Now
                                <ArrowRight className="w-3 h-3" />
                              </a>
                            </div>
                          </div>
                        )}

                        {/* TAB 2: LOAN CALCULATOR */}
                        {activeTab === "loan" && (
                          <div className="space-y-4">
                            <div className="space-y-1">
                              <h3 className="text-base font-bold text-white flex items-center gap-2">
                                <Coins className="w-4 h-4 text-secondary" />
                                Home Loan &amp; LAP EMI Estimator
                              </h3>
                              <p className="text-[11px] text-slate-400">
                                Calculate your monthly payments at our syndication starting rate of 8.4%*.
                              </p>
                            </div>

                            {/* Slider 1: Loan Amount */}
                            <div className="space-y-2">
                              <div className="flex items-center justify-between text-[11px] font-bold text-slate-300">
                                <span>Principal Amount</span>
                                <span className="text-secondary text-xs font-extrabold bg-secondary/10 px-2 py-0.5 rounded border border-secondary/20">
                                  {formatINR(loanAmount)}
                                </span>
                              </div>
                              <input
                                type="range"
                                min="1000000"
                                max="30000000"
                                step="500000"
                                value={loanAmount}
                                onChange={(e) => setLoanAmount(Number(e.target.value))}
                                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-secondary"
                              />
                              <div className="flex justify-between text-[8px] text-slate-500 font-mono">
                                <span>₹10 Lakh</span>
                                <span>₹1.5 Cr</span>
                                <span>₹3 Cr</span>
                              </div>
                            </div>

                            {/* Slider 2: Tenure */}
                            <div className="space-y-2">
                              <div className="flex items-center justify-between text-[11px] font-bold text-slate-300">
                                <span>Tenure (Years)</span>
                                <span className="text-secondary text-xs font-extrabold bg-secondary/10 px-2 py-0.5 rounded border border-secondary/20">
                                  {loanTenure} Years
                                </span>
                              </div>
                              <input
                                type="range"
                                min="5"
                                max="30"
                                step="1"
                                value={loanTenure}
                                onChange={(e) => setLoanTenure(Number(e.target.value))}
                                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-secondary"
                              />
                              <div className="flex justify-between text-[8px] text-slate-500 font-mono">
                                <span>5 Years</span>
                                <span>18 Years</span>
                                <span>30 Years</span>
                              </div>
                            </div>

                            {/* Output Box */}
                            <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center justify-between text-xs">
                              <div>
                                <span className="text-[9px] text-slate-400 block font-medium uppercase">Est. Monthly EMI</span>
                                <span className="text-base font-black text-secondary">{formatINRValue(emiDetails.emi)}<span className="text-[10px] font-normal text-slate-400">/mo</span></span>
                              </div>
                              <div className="text-right">
                                <span className="text-[8px] text-slate-400 block">Total Repay: {formatINR(emiDetails.totalRepayment)}</span>
                                <span className="text-[8px] text-slate-500 block">Interest: {formatINR(emiDetails.interest)}</span>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* TAB 3: LAND RECORDS TRACKER */}
                        {activeTab === "land" && (
                          <div className="space-y-3">
                            <div className="space-y-1">
                              <h3 className="text-base font-bold text-white flex items-center gap-2">
                                <Landmark className="w-4 h-4 text-secondary" />
                                Gujarat Land Mutation Guide
                              </h3>
                              <p className="text-[11px] text-slate-400">
                                Click through stages to view official procedures for Satbara 7/12 mutation.
                              </p>
                            </div>

                            {/* Steps navigation */}
                            <div className="grid grid-cols-4 gap-1 pb-1">
                              {landStages.map((stage, idx) => {
                                const isSelected = landStep === idx;
                                return (
                                  <button
                                    key={idx}
                                    onClick={() => setLandStep(idx)}
                                    className={`py-1.5 rounded-lg text-center transition-all border ${
                                      isSelected
                                        ? "bg-secondary/15 text-secondary border-secondary/30"
                                        : "bg-white/5 text-slate-400 border-transparent hover:bg-white/10"
                                    }`}
                                  >
                                    <span className="text-[9px] font-bold block">{stage.badge}</span>
                                    <span className="text-[7.5px] font-medium block truncate max-w-full font-mono mt-0.5">{stage.short}</span>
                                  </button>
                                );
                              })}
                            </div>

                            {/* Active Stage Panel */}
                            <div className="bg-white/5 border border-white/5 rounded-xl p-3.5 space-y-2 min-h-[120px] flex flex-col justify-between">
                              <div>
                                <div className="flex items-start justify-between gap-2">
                                  <h4 className="text-[11px] font-bold text-white leading-tight">
                                    {landStages[landStep].title}
                                  </h4>
                                  <span className="text-[7.5px] bg-slate-800 text-slate-300 font-mono px-1.5 py-0.5 rounded border border-slate-700 uppercase shrink-0">
                                    {landStages[landStep].gujarati}
                                  </span>
                                </div>
                                <p className="text-[10px] text-slate-300 leading-normal mt-1.5">
                                  {landStages[landStep].description}
                                </p>
                              </div>
                              <div className="flex justify-between items-center pt-1.5 border-t border-white/5 text-[8.5px] text-slate-400">
                                <span>*Timeline: ~45-60 days</span>
                                <a
                                  href="#contact"
                                  className="text-secondary font-bold hover:underline flex items-center gap-0.5"
                                >
                                  Clear Title <ArrowRight className="w-2.5 h-2.5" />
                                </a>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* TAB 4: COMPLIANCE CHECKLIST */}
                        {activeTab === "checklist" && (
                          <div className="space-y-3">
                            <div className="space-y-1">
                              <h3 className="text-base font-bold text-white flex items-center gap-2">
                                <FileCheck className="w-4 h-4 text-secondary" />
                                File Readiness Checklist
                              </h3>
                              <p className="text-[11px] text-slate-400">
                                Tick available documents to assess if your file is ready for processing.
                              </p>
                            </div>

                            {/* Checklist grid */}
                            <div className="grid grid-cols-2 gap-1.5 text-[9px]">
                              {[
                                { key: "itrIncome", label: "Salary Slips / Form 16" },
                                { key: "itrBank", label: "6M Bank Statements" },
                                { key: "gstPan", label: "PAN & Aadhaar Copies" },
                                { key: "gstAadhaar", label: "Address Proof" },
                                { key: "landDeed", label: "Registered Sale Deed" },
                                { key: "landSatbara", label: "Latest 7/12 Nakal" },
                                { key: "loanSalary", label: "3M Salary Slips" },
                                { key: "loanItr", label: "3 Years ITR Receipts" },
                              ].map((item) => {
                                const isChecked = (checklist as any)[item.key];
                                return (
                                  <button
                                    key={item.key}
                                    onClick={() => handleToggleCheck(item.key as any)}
                                    className={`flex items-center gap-1.5 p-1.5 rounded-lg border text-left transition-all ${
                                      isChecked
                                        ? "bg-emerald-500/10 border-emerald-500/30 text-white"
                                        : "bg-white/5 border-transparent text-slate-400 hover:bg-white/10"
                                    }`}
                                  >
                                    <span
                                      className={`w-3 h-3 rounded flex items-center justify-center border shrink-0 ${
                                        isChecked
                                          ? "bg-emerald-500 border-emerald-500 text-slate-900"
                                          : "border-slate-600 bg-slate-900"
                                      }`}
                                    >
                                      {isChecked && <CheckCircle className="w-2 h-2 stroke-[3]" />}
                                    </span>
                                    <span className="truncate">{item.label}</span>
                                  </button>
                                );
                              })}
                            </div>

                            {/* Progress bar */}
                            <div className="space-y-1.5 pt-0.5">
                              <div className="flex justify-between items-center text-[9px] font-bold text-slate-300">
                                <span>File Readiness</span>
                                <span className={`px-1.5 py-0.5 rounded border text-[8px] font-bold ${checklistStatus.color}`}>
                                  {progressPercent}% - {checklistStatus.text}
                                </span>
                              </div>
                              <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-gradient-to-r from-amber-500 to-emerald-500 transition-all duration-500 ease-out"
                                  style={{ width: `${progressPercent}%` }}
                                />
                              </div>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Dashboard Bottom Info */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/5 text-[9px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-secondary" />
                      100% Secure &amp; Confidential
                    </span>
                    <a
                      href="#contact"
                      onClick={handleScrollToContact}
                      className="text-secondary font-extrabold hover:underline"
                    >
                      Verify Details &rarr;
                    </a>
                  </div>

                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Trust Strip */}
      <section className="relative z-25 -mt-16 sm:-mt-20 md:-mt-24">
        <TrustStrip />
      </section>

      {/* 3. Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24" id="services">
        <SectionHeading
          badge="Our Expertise"
          title="Consulting Services | That Deliver Growth"
          subtitle="ShreeLabh Consultancy offers a comprehensive suite of business and tax solutions to ensure complete compliance and financial peace of mind."
        />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4"
        >
          {services.map((svc) => (
            <motion.div key={svc.title} variants={itemVariants}>
              <ServiceCard
                title={svc.title}
                description={svc.description}
                icon={svc.icon}
                href={svc.href}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Why Choose Us"
            title="Partnering in Your Financial | Success"
            subtitle="We prioritize transparency, efficiency, and customized advisory to deliver unmatched compliance support."
          />

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4"
          >
            {whyChooseUs.map((item, index) => (
              <motion.div 
                key={item.title} 
                variants={itemVariants}
                className="bg-white p-8 rounded-3xl border border-slate-100/80 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
              >
                {/* Corner highlight indicator */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-primary/5 rounded-bl-3xl flex items-center justify-center text-primary font-bold text-xs group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold font-heading text-slate-900 mb-2.5 pr-6">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. Process Steps Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Execution Pipeline"
          title="Our Simple | 4-Step Process"
          subtitle="We eliminate bureaucracy and complex legalities, handling your tasks sequentially for maximum convenience."
        />

        <div className="relative pt-8">
          {/* Connecting line for desktop timeline */}
          <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-slate-200 -translate-y-1/2 hidden lg:block z-0" />
          
          {/* Connecting line for mobile vertical timeline */}
          <div className="absolute top-8 bottom-8 left-7 w-0.5 bg-slate-200 lg:hidden z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
            {timelineSteps.map((step) => (
              <div 
                key={step.step} 
                className="flex lg:flex-col items-start gap-4 lg:gap-6 bg-white lg:bg-transparent p-5 lg:p-0 rounded-2xl border border-slate-100 lg:border-none shadow-sm lg:shadow-none"
              >
                {/* Number Bubble */}
                <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg font-heading shadow-lg border-4 border-slate-50 shrink-0 select-none">
                  {step.step}
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-base md:text-lg font-bold font-heading text-slate-900 mt-1 lg:mt-0">
                    {step.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Client Feedback"
            title="What Our Clients | Say"
            subtitle="Hear directly from local business owners, home buyers, and salaried professionals in Surat who trust us."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {testimonials.map((test) => (
              <TestimonialCard
                key={test.name}
                name={test.name}
                role={test.role}
                content={test.content}
                rating={test.rating}
                time={test.time}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ Accordion */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Frequently Asked Questions"
          title="Common Client | Queries"
          subtitle="Got questions regarding timelines, documents required, and tax structure? We have answered the most common ones below."
        />
        <FAQAccordion />
      </section>

      {/* 8. Contact CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24" id="contact">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-slate-50 p-8 md:p-12 lg:p-16 rounded-[40px] border border-slate-100 shadow-sm">
          
          {/* Left Details */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
                Contact Details
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 leading-tight">
                Let&apos;s discuss your <br />
                <span className="text-primary font-black">Requirements</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Connect with Vivek Vekariya & Pravinbhai Sudani for verified documentation, tax minimization strategy, and quick loan sanctions.
              </p>
            </div>

            {/* Contact list details */}
            <div className="space-y-6 pt-4 border-t border-slate-200/80">
              {/* Phones */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-primary shrink-0 shadow-sm">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 block uppercase">Call Direct</span>
                  <a href={`tel:${cleanPhone}`} className="text-sm font-bold text-slate-900 hover:text-primary transition-colors block mt-0.5">
                    {CONTACT_INFO.primaryPhone} (Vivek)
                  </a>
                  <a href={`tel:${CONTACT_INFO.secondaryPhone.replace(/\s+/g, "")}`} className="text-sm font-bold text-slate-900 hover:text-primary transition-colors block mt-0.5">
                    {CONTACT_INFO.secondaryPhone} (Pravinbhai)
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-primary shrink-0 shadow-sm">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 block uppercase">Email Support</span>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm font-bold text-slate-900 hover:text-primary transition-colors block mt-0.5">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-primary shrink-0 shadow-sm">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 block uppercase">Office Hours</span>
                  <span className="text-sm font-bold text-slate-900 block mt-0.5">
                    Mon - Sat: {CONTACT_INFO.businessHours.weekdays}
                  </span>
                  <span className="text-xs text-slate-500 block mt-0.5">
                    Sunday: {CONTACT_INFO.businessHours.sunday}
                  </span>
                </div>
              </div>
            </div>

            {/* Address Branch Info */}
            <div className="space-y-4 pt-6 border-t border-slate-200/80">
              <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">Office Locations</span>
              {CONTACT_INFO.branches.map((branch) => (
                <div key={branch.branchName} className="space-y-1 bg-white p-3 rounded-2xl border border-slate-100 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">{branch.branchName}</span>
                    <a 
                      href={branch.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] text-secondary font-bold hover:underline flex items-center gap-0.5"
                    >
                      View Map
                    </a>
                  </div>
                  <p className="text-[10px] text-muted-foreground leading-normal flex items-start mt-1">
                    <MapPin className="h-3 w-3 text-secondary mr-1 mt-0.5 shrink-0" />
                    <span>{branch.address}</span>
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Inquiry Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </section>
    </div>
  );
}
