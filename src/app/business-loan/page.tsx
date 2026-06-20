"use client";

import React from "react";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import ContactForm from "@/components/shared/ContactForm";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { CheckCircle2, FileText } from "lucide-react";

export default function BusinessLoanPage() {
  const breadcrumbs = [
    { label: "Services", href: "#" },
    { label: "Business Loan" }
  ];

  const categories = [
    {
      title: "MSME / Working Capital Loans",
      description: "Secure cash credit (CC) limits, overdraft (OD) facilities, or term loans to manage inventory purchases, operational cash flows, and daily merchant settlements."
    },
    {
      title: "Machinery & Equipment Finance",
      description: "Secure funding for high-cost commercial equipment, manufacturing setups, or machinery. Lenders fund up to 75-80% of the machinery invoice amount."
    },
    {
      title: "Startup & Retail Funding",
      description: "Tailored business expansion loans for established retail outlets, franchise stores, and registered startups seeking capital for scaling up."
    }
  ];

  const benefits = [
    "Secure Unsecured Funding up to ₹50 Lakhs (subject to credit parameters)",
    "Custom Term Loans or Overdraft / Cash Credit (CC) limits",
    "Expert Restructuring of Business Audited Financials",
    "Quick File Processing and direct coordination with bank credit managers",
    "Competitive Rates with flexible repayment tenure structures",
    "End-to-End Assistance for E-Sign and Disbursement protocols"
  ];

  const processSteps = [
    { step: "01", title: "Financial Assessment", desc: "We analyze your GST filings, business turnover, and banking patterns to determine loan viability." },
    { step: "02", title: "Balance Sheet Dressing", desc: "Our financial experts review your Profit & Loss statement and balance sheet to ensure healthy credit parameters." },
    { step: "03", title: "Credit Negotiation", desc: "Pitch the loan file to leading NBFCs and nationalized banks for best interest rates." },
    { step: "04", title: "Sanction & Payout", desc: "Coordinate document signings and finalize disbursement into your current account." }
  ];

  const requiredDocuments = [
    {
      id: "bl-doc-1",
      title: "Business Registrations",
      items: [
        "Gumastadhara / Shop Act License",
        "GST Registration Certificate (if applicable)",
        "Udyam Registration Certificate",
        "Partnership Deed / Incorporation Certificate"
      ]
    },
    {
      id: "bl-doc-2",
      title: "KYC & Identity Proof",
      items: [
        "PAN Card of the Business Entity & all Partners/Directors",
        "Aadhaar Card of all Partners/Directors/Proprietor",
        "Recent Electricity Bill of Business premises and Residence"
      ]
    },
    {
      id: "bl-doc-3",
      title: "Financial Statements",
      items: [
        "Last 12 months' Bank Statement of all current and savings accounts",
        "Last 3 years' Income Tax Returns (ITR)",
        "Audited Balance Sheet & Profit & Loss statements (with Annexures & computation)",
        "Last 12 months' GST Returns (GSTR-3B filings)"
      ]
    }
  ];

  const faqs = [
    {
      q: "What is the difference between Term Loan and Cash Credit (CC) facility?",
      a: "A Term Loan is a lump-sum amount disbursed by the bank, which is repaid over a fixed tenure with regular monthly EMIs. A Cash Credit (CC) is a revolving credit limit granted against your business inventory and debtors. You only pay interest on the amount you actually withdraw and use."
    },
    {
      q: "Can I get a business loan without collateral?",
      a: "Yes, unsecured business loans (also known as CGTMSE scheme loans for MSMEs) do not require physical collateral. However, banks require a healthy CIBIL score, steady business turnover, and clean bank statement transactions to sanction unsecured funds."
    },
    {
      q: "Why are past 3 years' audited financials required?",
      a: "For large term loans or CC/OD limits, banks analyze your business growth, debt-to-equity ratio, net profit margin, and liquidity over a 3-year period to assess long-term creditworthiness and repayment capacity."
    },
    {
      q: "How does Udyam Registration help in securing a business loan?",
      a: "Udyam Registration registers your business under the MSME Ministry of India. It qualifies you for government-backed loan schemes, lower interest rates, subsidies on processing fees, and priority sector lending benefits at nationalized banks."
    }
  ];

  return (
    <div className="space-y-12 md:space-y-16">
      {/* 1. Page Hero */}
      <PageHero
        title="Business Loan Syndication"
        description="Secure working capital, CC/OD limits, machinery finance, and startup term loans. We structure your balance sheets and tax returns to ensure rapid banking sanction."
        breadcrumbs={breadcrumbs}
      />

      {/* 2. Overview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
              Enterprise Funding
            </span>
            <h2 className="text-3xl font-extrabold font-heading text-slate-900 leading-tight">
              Fuel Your Business Growth <br />
              <span className="text-primary font-black">With Flexible Capital</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Every growing business requires timely liquidity. Whether you need to stock up on inventory for festive demand, purchase advanced CNC machinery, or secure credit limits, we find the right financial match for your enterprise.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              ShreeLabh Consultancy specializes in structuring business files. We help prepare your project report, audit balance sheets, reconcile GST filings, and build a healthy financial narrative that credit managers at top-tier banks look for.
            </p>
          </div>
          
          <div className="lg:col-span-6 space-y-6">
            {categories.map((cat, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100/80 shadow-sm">
                <h3 className="text-base font-bold text-slate-900 font-heading mb-2 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
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
      <section className="py-12 md:py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Funding Advantages"
            title="Benefits of Business | Loans"
            subtitle="Secure working capital terms with lowest processing fee margins and flexible repayment schedules."
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
          badge="Funding Pipeline"
          title="Our Business Loan | Steps"
          subtitle="Our systematic check ensures your financial audits match the underwriting parameters of banks."
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
            badge="Checklist"
            title="Required Documents | Business Loan"
            subtitle="Prepare these commercial files and corporate registration proofs to initiate your loan application."
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
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Business Loan FAQ"
          title="Frequently Asked | Questions"
          subtitle="Typical credit limits, balance sheet structures, and collateral requirements explained."
        />
        <div className="max-w-4xl mx-auto">
          <Accordion defaultValue={["bl-faq-0"]} className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`bl-faq-${idx}`}
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
              Request Business Loan
            </span>
            <h2 className="text-3xl font-extrabold font-heading text-slate-900 leading-tight">
              Ready to grow your <br />
              <span className="text-primary font-black">Business operations?</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Submit your inquiry form. Our advisors will audit your financials and pitch your files directly to banking credit underwriters.
            </p>
            <div className="space-y-2 text-xs font-semibold text-slate-500">
              <p>• Unsecured and secured commercial structures</p>
              <p>• Fast balance sheet auditing by experts</p>
              <p>• Government backed priority sector lending benefits</p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ContactForm defaultService="Business Loan" />
          </div>
        </div>
      </section>
    </div>
  );
}
