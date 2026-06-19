"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { 
  Phone, 
  ArrowRight, 
  CheckCircle, 
  MapPin, 
  Clock, 
  Mail, 
  MessageSquare,
  ShieldCheck,
  Star
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
    transition: { duration: 0.5, ease: "easeOut" as any },
  },
};

export default function Home() {
  const cleanPhone = CONTACT_INFO.primaryPhone.replace(/\s+/g, "");

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
              className="space-y-6 lg:col-span-7"
            >
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-secondary border border-white/10">
                Surat&apos;s Premier Financial & Land Advisors
              </span>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading leading-tight tracking-tight">
                Trusted Revenue & <br />
                <span className="text-secondary bg-clip-text text-transparent bg-gradient-to-r from-secondary to-amber-300">
                  Tax Consultants
                </span>
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Income Tax, GST, Loans, Revenue Work & Legal Documentation Under One Roof. We provide end-to-end guidance for individuals and businesses in Surat, Gujarat.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <a
                  href="#contact"
                  onClick={handleScrollToContact}
                  className={buttonVariants({
                    variant: "default",
                    size: "lg",
                    className: "w-full sm:w-auto font-bold shadow-lg bg-secondary hover:bg-secondary/90 text-slate-900 border border-secondary transition-all"
                  })}
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>

                <a
                  href={`tel:${cleanPhone}`}
                  className={buttonVariants({
                    variant: "outline",
                    size: "lg",
                    className: "w-full sm:w-auto font-bold text-white border-white/20 hover:bg-white/10 hover:text-white transition-all shadow-md flex items-center justify-center"
                  })}
                >
                  <Phone className="mr-2 h-4 w-4 text-secondary" />
                  Call {CONTACT_INFO.primaryPhone}
                </a>
              </div>

              {/* Minimal Trust Indicator */}
              <div className="flex items-center gap-4 pt-4 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-secondary" />
                  Government Registered
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-secondary" />
                  No Hidden Fees
                </div>
              </div>
            </motion.div>

            {/* Right Hero Graphic: Interactive Dashboard Shell */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 hidden lg:block"
            >
              <div className="relative p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
                
                {/* Visual Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-rose-500" />
                    <div className="w-3.5 h-3.5 rounded-full bg-amber-500" />
                    <div className="w-3.5 h-3.5 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono tracking-wider">SECURE CLIENT PORTAL</span>
                </div>

                {/* Dashboard Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                    <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider">ITR Compliance</span>
                    <span className="text-xl font-bold font-heading text-white block mt-1">100% Filed</span>
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                    <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider">GST Filing</span>
                    <span className="text-xl font-bold font-heading text-white block mt-1">Quarterly/Monthly</span>
                  </div>
                </div>

                {/* Interactive Status Timeline */}
                <div className="space-y-4">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Recent Loan Syndications</span>
                  
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-extrabold text-xs">LAP</div>
                        <div>
                          <span className="text-xs font-bold text-white block">Mortgage Loan Approved</span>
                          <span className="text-[9px] text-slate-400 block mt-0.5">Value: ₹1.2 Cr</span>
                        </div>
                      </div>
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded-full">Disbursed</span>
                    </div>

                    <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary font-extrabold text-xs">HL</div>
                        <div>
                          <span className="text-xs font-bold text-white block">Home Loan Balance Transfer</span>
                          <span className="text-[9px] text-slate-400 block mt-0.5">Save 1.25% ROI</span>
                        </div>
                      </div>
                      <span className="text-[10px] bg-amber-500/20 text-amber-300 font-bold px-2 py-0.5 rounded-full">Completed</span>
                    </div>
                  </div>
                </div>

                {/* Floating graphic overlay badge */}
                <div className="absolute -bottom-2 -left-2 bg-gradient-to-tr from-[#1D4E89] to-blue-500 px-4 py-3.5 rounded-2xl border border-white/10 shadow-xl flex items-center gap-3 animate-pulse">
                  <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
                    <ShieldCheck className="h-4.5 w-4.5 text-secondary" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-300 font-semibold block leading-none">Security Protocol</span>
                    <span className="text-xs font-bold text-white block mt-1">256-bit Encrypted</span>
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
