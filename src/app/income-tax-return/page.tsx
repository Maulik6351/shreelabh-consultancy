"use client";

import React from "react";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import ContactForm from "@/components/shared/ContactForm";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { CheckCircle2, FileText } from "lucide-react";

export default function IncomeTaxReturnPage() {
  const breadcrumbs = [
    { label: "Services", href: "#" },
    { label: "Income Tax Return" }
  ];

  const categories = [
    {
      title: "Individual ITR Filing",
      description: "Fast, error-free ITR filing for salaried professionals, pensioners, and house property owners. We maximize your tax savings under 80C, 80D, and other relevant chapters."
    },
    {
      title: "Business & Professional ITR",
      description: "Comprehensive tax computations, audit preparation, balance sheet calculations, and return filing for proprietorships, partnership firms, and independent professionals."
    },
    {
      title: "Investors & Traders ITR",
      description: "Dedicated filing support for stock market traders (F&O, Intraday, Short/Long-Term Capital Gains), mutual fund investors, and real estate sellers."
    }
  ];

  const benefits = [
    "Maximize Tax Deductions (under 80C, 80D, 24B, etc.)",
    "Avoid Late Fees and Section 234F Interest Penalties",
    "Ensure Seamless Processing of Loan Applications",
    "Timely Notice Resolution and Dispute Management",
    "Expert Financial and Tax Planning for Future Assets",
    "Complete Transparency and Secured Documentation"
  ];

  const processSteps = [
    { step: "01", title: "Collect Documents", desc: "Submit your basic details, Form 16, and bank statements securely." },
    { step: "02", title: "Tax Computation", desc: "Our advisors draft tax calculations, choosing the most optimal tax regime." },
    { step: "03", title: "Review & Approve", desc: "Review the draft computation and summary before final filing." },
    { step: "04", title: "ITR Filing & E-verify", desc: "We file your ITR with the IT Department and handle instant e-verification." }
  ];

  // Checklist translated exactly from Reference/visiting card-3.jpeg
  const requiredDocuments = [
    {
      id: "doc-1",
      title: "Identity Documents",
      items: ["PAN Card", "Aadhaar Card"]
    },
    {
      id: "doc-2",
      title: "Bank Statements",
      items: [
        "All Bank Passbooks or Statements",
        "Required Date Range: 01/04/2025 to 31/03/2026 (For A.Y. 2026-27)"
      ]
    },
    {
      id: "doc-3",
      title: "GST Compliance (If Applicable)",
      items: ["Sale & Purchase Register", "GST Cash Ledger & Credit Ledger"]
    },
    {
      id: "doc-4",
      title: "Property Transaction Records (If Applicable)",
      items: ["Photocopies (Xerox) of both Sale and Purchase deeds if property was sold or bought during the fiscal year"]
    },
    {
      id: "doc-5",
      title: "Active Loan Records",
      items: ["Loan Account Statements", "Interest Certificates (representing interest paid under Section 24B/EEA)"]
    },
    {
      id: "doc-6",
      title: "Tax Deductions (80C & 80D)",
      items: [
        "Mediclaim (Health Insurance Premium) Receipts",
        "Children's School Fee Receipts",
        "Life Insurance (LIC) Premium Receipts",
        "Any other eligible investment certificates"
      ]
    },
    {
      id: "doc-7",
      title: "Employment Documents",
      items: ["Form No. 16 (for salaried persons)"]
    },
    {
      id: "doc-8",
      title: "Fixed Deposit Records",
      items: ["FD Interest Certificates issued by the bank"]
    },
    {
      id: "doc-9",
      title: "Stock Market & Mutual Funds (If Invested)",
      items: [
        "Profit & Loss Statement (detailing trade-wise purchase and sale dates)",
        "Holding Statement as on 31/03/2026 (with purchase price/cost of acquisition)",
        "Demat Account Ledger / Account Statements"
      ]
    }
  ];

  const faqs = [
    {
      q: "What is the assessment year for tax returns filed for the financial year 2025-26?",
      a: "For the financial year starting 01-04-2025 and ending 31-03-2026, the corresponding Assessment Year (A.Y.) is 2026-27."
    },
    {
      q: "Can I file my ITR if I missed the primary deadline?",
      a: "Yes, you can file a 'Belated Return' up to December 31st of the assessment year. However, it attracts interest under section 234A and a late filing fee under section 234F."
    },
    {
      q: "How do I choose between Old and New Tax Regimes?",
      a: "The choice depends on your investments, home loan interest, and deductions. We calculate your tax liability under both regimes side-by-side to ensure you select the one with the maximum savings."
    },
    {
      q: "What should I do if I receive an Income Tax notice?",
      a: "Do not panic. Bring the notice to our office. Our expert consultants will draft an official reply and submit it online to satisfy the tax officer's queries."
    }
  ];

  return (
    <div className="space-y-24 md:space-y-32">
      {/* 1. Page Hero */}
      <PageHero
        title="Income Tax Return Filing"
        description="Optimize your tax liabilities, avoid penalties, and file your ITR accurately for Assessment Year 2026-27 with Surat's trusted tax consultants."
        breadcrumbs={breadcrumbs}
      />

      {/* 2. Overview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
              Service Overview
            </span>
            <h2 className="text-3xl font-extrabold font-heading text-slate-900 leading-tight">
              Professional Tax Filing & <br />
              <span className="text-primary font-black">Strategic Planning</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Tax compliance shouldn&apos;t be stressful. Whether you are a salaried employee, a local business owner, or an active stock trader, we help compute your earnings, identify deductions, and file your ITR securely. 
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              We leverage years of experience in taxation laws to keep you fully compliant with the Income Tax Department of India, helping you build a clean financial track record for seamless loan approvals.
            </p>
          </div>
          
          <div className="lg:col-span-6 grid grid-cols-1 gap-6">
            {categories.map((cat, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100/80 shadow-sm">
                <h3 className="text-base font-bold text-slate-900 font-heading mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary" />
                  {cat.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {cat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Benefits Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Why Us"
            title="Benefits of Filing | with ShreeLabh"
            subtitle="Secure maximum savings and absolute compliance with our professional tax consultation services."
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
          badge="How We Work"
          title="Our ITR Filing | Process"
          subtitle="Our structured filing pipeline ensures your tax returns are calculated, reviewed, and filed correctly in 4 simple steps."
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

      {/* 5. Required Documents Checklist Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Checklist A.Y. 2026-27"
            title="Required Documents | ITR Filing"
            subtitle="Please prepare the following documents (for the period 01-04-2025 to 31-03-2026) to initiate your income tax filing."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {requiredDocuments.map((doc) => (
              <div key={doc.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between">
                <div>
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
              </div>
            ))}
          </div>
          <div className="mt-8 text-center bg-white p-4 rounded-2xl border border-slate-100 max-w-xl mx-auto">
            <p className="text-xs font-semibold text-slate-500">
              Note: Tax computation will be customized depending on your business type or salary structure.
            </p>
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="ITR FAQ"
          title="Frequently Asked | Questions"
          subtitle="Typical tax compliance, notices, and planning questions answered by our consulting team."
        />
        <div className="max-w-4xl mx-auto">
          <Accordion defaultValue={["itr-faq-0"]} className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`itr-faq-${idx}`}
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
              File ITR Now
            </span>
            <h2 className="text-3xl font-extrabold font-heading text-slate-900 leading-tight">
              Ready to submit your <br />
              <span className="text-primary font-black">Tax Return?</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Submit your inquiry and our tax advisor Vivek Vekariya will review your details and call you back to collect documents.
            </p>
            <div className="space-y-2 text-xs font-semibold text-slate-500">
              <p>• Fast process (usually 24 hours filing)</p>
              <p>• Government registered tax advisors</p>
              <p>• Optimized tax savings calculation</p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ContactForm defaultService="Income Tax Return" />
          </div>
        </div>
      </section>
    </div>
  );
}
