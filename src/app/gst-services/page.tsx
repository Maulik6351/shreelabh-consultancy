"use client";

import React from "react";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import ContactForm from "@/components/shared/ContactForm";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { CheckCircle2, FileText } from "lucide-react";

export default function GstServicesPage() {
  const breadcrumbs = [
    { label: "Services", href: "#" },
    { label: "GST Services" }
  ];

  const subServices = [
    {
      title: "GST Registration",
      description: "Fast registration setup for sole proprietors, partnerships, LLP, and private limited companies. We verify files to avoid department clarifications (queries)."
    },
    {
      title: "GST Return Filing",
      description: "Accurate monthly, quarterly, and annual GST return filings (GSTR-1, GSTR-3B, GSTR-9/9C) maximizing your legal Input Tax Credit (ITC) reconciliation."
    },
    {
      title: "GST Amendments",
      description: "Change business name, core business address, add or delete directors/partners, or modify commodity codes on your active GSTIN."
    },
    {
      title: "GST Cancellation & Revocation",
      description: "Clean cancellation of GSTIN if the business has closed down, or response drafting for revocation of suspended GST registrations."
    }
  ];

  const benefits = [
    "Clean Input Tax Credit (ITC) Reconciliation",
    "Avoid Late Fees (₹50/day) & GSTR Suspension Notices",
    "Professional Audit & Annual Reconciliation Support",
    "End-to-End Handling of Department Clarifications",
    "Continuous Updates on GST Law Amendments",
    "Direct Support for E-Way Bills & E-Invoicing"
  ];

  const processSteps = [
    { step: "01", title: "Document Intake", desc: "Submit KYC, business address bills, and promoter photos." },
    { step: "02", title: "GST Application", desc: "We prepare and submit registration forms or draft returns." },
    { step: "03", title: "ITC Verification", desc: "Reconciliation of GSTR-2B credit ledgers for complete accuracy." },
    { step: "04", title: "Submission & ARN", desc: "File GSTR with digital signs / OTP and provide filing receipts." }
  ];

  const requiredDocuments = [
    {
      id: "gst-doc-1",
      title: "Promoter Documents",
      items: ["PAN Card of all Directors/Partners/Proprietor", "Aadhaar Card of all Directors/Partners/Proprietor", "Passport size photos (1) of the primary applicant"]
    },
    {
      id: "gst-doc-2",
      title: "Business Address Proof",
      items: [
        "Electricity Bill / Municipal Tax Bill (in owner's name)",
        "Rent Agreement / Lease Deed (if property is rented)",
        "NOC (No Objection Certificate) from the owner"
      ]
    },
    {
      id: "gst-doc-3",
      title: "Bank Documentation",
      items: ["Cancel Cheque of the primary business bank account", "First page of Bank Passbook or active Bank Statement"]
    },
    {
      id: "gst-doc-4",
      title: "Entity Incorporation",
      items: [
        "Partnership Deed (for partnership firms)",
        "Certificate of Incorporation (for LLPs/Companies)",
        "Gumastadhara / Shop Act License (if available)"
      ]
    }
  ];

  const faqs = [
    {
      q: "What is the threshold limit for mandatory GST registration in Gujarat?",
      a: "For businesses supplying goods, GST registration is mandatory if turnover exceeds ₹40 Lakhs. For service providers, the threshold limit is ₹20 Lakhs. Special registration is required for inter-state sellers regardless of turnover."
    },
    {
      q: "What are the consequences of not filing GST returns on time?",
      a: "Late filing of GST returns attracts a daily late fee of ₹50 (₹20 for Nil returns) under GSTR-1 and GSTR-3B, along with 18% interest on net cash tax liability. Continuous non-filing for over 6 months can lead to suspension and cancellation of the GSTIN by the department."
    },
    {
      q: "What is Input Tax Credit (ITC) reconciliation?",
      a: "ITC reconciliation involves matching the purchase tax paid (recorded in your purchase ledger) with the purchases uploaded by your suppliers (GSTR-2B). We ensure you claim 100% genuine tax credit without matching errors."
    },
    {
      q: "How can I cancel my GST registration?",
      a: "You can apply for GST cancellation if your business closes down, or if your turnover falls below the threshold. We verify that all pending tax liabilities are cleared and file the cancellation application (Form GST REG-16) to ensure a clean exit."
    }
  ];

  return (
    <div className="space-y-12 md:space-y-16">
      {/* 1. Page Hero */}
      <PageHero
        title="GST Services"
        description="Fast GST registrations, accurate monthly return filings, reconciliation audits, and seamless compliance support for Surat's businesses."
        breadcrumbs={breadcrumbs}
      />

      {/* 2. Overview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
              GST Solutions
            </span>
            <h2 className="text-3xl font-extrabold font-heading text-slate-900 leading-tight">
              Complete GST Registrations & <br />
              <span className="text-primary font-black">Monthly Return Filings</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Handling GST returns and maintaining complete invoice records can be challenging. Our professional advisors take care of the entire compliance loop, preparing your GSTR-1 and GSTR-3B filings on time, every month.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              We also handle new registrations, amendments, and cancelations, keeping you protected from heavy penalties, late fees, or audit notices from the Gujarat State Tax department.
            </p>
          </div>
          
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {subServices.map((svc, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100/80 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-heading mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {svc.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Benefits Section */}
      <section className="py-12 md:py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Compliance benefits"
            title="Maintain Clean | GST Compliance"
            subtitle="Let us manage your tax ledgers so you can focus entirely on growing your business operations."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 flex items-start gap-3.5 shadow-sm">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-xs font-bold text-slate-800 leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Process Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Filing Cycle"
          title="Our GST Execution | Steps"
          subtitle="Our systematic GST filing and registration process ensures 100% accuracy and zero delay."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step) => (
            <div key={step.step} className="space-y-3 p-5 bg-slate-50 rounded-2xl border border-slate-100/60 shadow-sm">
              <span className="text-2xl font-black font-heading text-primary block">{step.step}</span>
              <h4 className="text-base font-bold font-heading text-slate-900">{step.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Required Documents Section */}
      <section className="py-12 md:py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Documents Checklist"
            title="Required Documents | GST Setup"
            subtitle="Keep these documents scanned and ready to secure a new GSTIN within 3 to 5 business days."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {requiredDocuments.map((doc) => (
              <div key={doc.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                <h4 className="text-sm font-bold text-slate-900 font-heading border-b border-slate-100 pb-3 mb-4 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-primary" />
                  {doc.title}
                </h4>
                <ul className="space-y-2">
                  {doc.items.map((item, idx) => (
                    <li key={idx} className="text-xs text-slate-600 leading-normal flex items-start">
                      <span className="text-secondary mr-2 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="GST FAQ"
          title="Frequently Asked | Questions"
          subtitle="Common questions regarding GST audits, threshold limits, and cancellations."
        />
        <div className="max-w-4xl mx-auto">
          <Accordion defaultValue={["gst-faq-0"]} className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`gst-faq-${idx}`}
                className="bg-white px-6 py-1.5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-sm md:text-base font-bold font-heading text-slate-800 hover:text-primary transition-colors py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-xs md:text-sm text-slate-600 leading-relaxed pt-1 pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 7. Lead Form Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-slate-50 p-8 md:p-12 rounded-[40px] border border-slate-100 shadow-sm">
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-center">
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 mr-auto">
              Get GSTIN Setup
            </span>
            <h2 className="text-3xl font-extrabold font-heading text-slate-900 leading-tight">
              Ready to file your <br />
              <span className="text-primary font-black">GST Returns?</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Contact ShreeLabh Consultancy today. Submit details and we will coordinate for instant registration or return files.
            </p>
            <div className="space-y-2 text-xs font-semibold text-slate-500">
              <p>• Avoid suspension of your business GSTIN</p>
              <p>• Clean reconciliations for input credits</p>
              <p>• Professional amendment assistance</p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ContactForm defaultService="GST Services" />
          </div>
        </div>
      </section>
    </div>
  );
}
