"use client";

import React from "react";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import ContactForm from "@/components/shared/ContactForm";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { CheckCircle2, FileText } from "lucide-react";

export default function MortgageLoanPage() {
  const breadcrumbs = [
    { label: "Services", href: "#" },
    { label: "Mortgage Loan" }
  ];

  const categories = [
    {
      title: "Loan Against Property (LAP)",
      description: "Secure high-value capital by pledging your residential, commercial, or industrial property as collateral. Ideal for business expansion, cash flow funding, or emergency needs."
    },
    {
      title: "Residential Property Mortgage",
      description: "Secure funding against owned flats, bungalows, or plots. Banks offer up to 60-70% of the market valuation at lower interest rates than personal loans."
    },
    {
      title: "Commercial Property Mortgage",
      description: "Secure working capital or business funding by mortaging owned shops, office premises, warehouses, or commercial lands."
    }
  ];

  const benefits = [
    "Lower Interest Rates (compared to unsecured business or personal loans)",
    "Higher Loan Amounts (ranging from ₹15 Lakhs to ₹10 Crores+ based on evaluation)",
    "Flexible Repayment Tenures (ranging from 5 to 15 years)",
    "Continued Usage of Property (your business/residence continues operating normally)",
    "Consolidate High-Interest Debts into a single affordable monthly EMI",
    "Balanced loan-to-value (LTV) options tailored to property type"
  ];

  const processSteps = [
    { step: "01", title: "Property Valuation", desc: "Bank engineers conduct a technical and legal check to estimate the property market value." },
    { step: "02", title: "Document Review", desc: "Review ITRs, financial statements, bank books, and title deed chain documents." },
    { step: "03", title: "Legal Search", desc: "Government registrar search check (usually last 13-30 years) to ensure clear marketable title." },
    { step: "04", title: "Sanction & Pay", desc: "Execute mortgage deed registration at registrar office and secure disbursement." }
  ];

  const requiredDocuments = [
    {
      id: "ml-doc-1",
      title: "Property Document Chain",
      items: [
        "All registered Sale Deeds / Title deeds of the property",
        "Index-2 (registered index copy of sale deed)",
        "Approved construction plans / blueprint from municipal authority",
        "Recent Municipal Tax Receipt / Property Tax Bill",
        "No-Objection Certificate (NOC) from housing society/builder"
      ]
    },
    {
      id: "ml-doc-2",
      title: "Identity & Business KYC",
      items: [
        "PAN Card, Aadhaar Card, and promoter photos (3 copies)",
        "Electricity Bill / Rent Agreement of active residence",
        "Business Proofs: Gumastadhara, GST certificate, or Udyam registration (for self-employed)"
      ]
    },
    {
      id: "ml-doc-3",
      title: "Financial Statements",
      items: [
        "Bank statements: Last 12 months' statements for all active accounts",
        "Salary Proof: Last 6 months' salary slips and Form 16 (for salaried persons)",
        "Income Tax returns: Last 3 years' ITR along with computation, Profit & Loss A/c, and Balance Sheet"
      ]
    }
  ];

  const faqs = [
    {
      q: "What is LTV (Loan-to-Value) ratio in a Mortgage Loan?",
      a: "LTV represents the percentage of the property's market value that a bank is willing to lend. For residential properties, banks generally fund up to 60-70% of the value. For commercial properties, LTV ranges from 50-60%."
    },
    {
      q: "Can I apply for a mortgage loan if the property has multiple owners?",
      a: "Yes. However, all co-owners of the property must join the loan application as co-applicants. This is a mandatory bank requirement to ensure clean legal title."
    },
    {
      q: "What is a Title Search Report and Title Clearance?",
      a: "A Title Search Report is a document prepared by an advocate after searching sub-registrar office records for the last 13 to 30 years. It verifies that the property has no pending disputes, active mortgages, or attachment claims, and has a 'clear and marketable title'."
    },
    {
      q: "Does mortaging my property affect my business operations?",
      a: "Not at all. A mortgage loan is purely a financial pledge. You retain complete ownership, usage, and possession of the property. You can continue running your shop, office, or residing in your home."
    }
  ];

  return (
    <div className="space-y-24 md:space-y-32">
      {/* 1. Page Hero */}
      <PageHero
        title="Mortgage Loan (LAP)"
        description="Unlock the cash potential of your residential or commercial property. We handle legal title verification and bank documentation for seamless Loan Against Property."
        breadcrumbs={breadcrumbs}
      />

      {/* 2. Overview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
              Secured Funding
            </span>
            <h2 className="text-3xl font-extrabold font-heading text-slate-900 leading-tight">
              Unlock the Value of Your Property <br />
              <span className="text-primary font-black">Without Losing Possession</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              If you own a residential house, commercial shop, or office premise, you have access to low-interest, high-value funding. A Loan Against Property (LAP) lets you leverage your static property value to secure business working capital or consolidate debt.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              ShreeLabh Consultancy helps you navigate the technical and legal verification checks banks conduct. We prepare your documentation chain, index records, and tax returns, ensuring your file satisfies banking parameters.
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
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="LAP Benefits"
            title="Why Choose a | Mortgage Loan"
            subtitle="Secure large amounts of capital with flexible terms and interest rates much lower than personal loans."
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
          badge="Disbursement Steps"
          title="Our Mortgage | Processing steps"
          subtitle="Our systematic check guarantees that your property records are cleared legally before banking submission."
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
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Checklist"
            title="Required Documents | Mortgage Loan"
            subtitle="Ensure you have the legal property document chain along with income records to fast-track approval."
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
          badge="Mortgage FAQ"
          title="Frequently Asked | Questions"
          subtitle="Typical property appraisal, LTV, and registration queries resolved."
        />
        <div className="max-w-4xl mx-auto">
          <Accordion defaultValue={["ml-faq-0"]} className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`ml-faq-${idx}`}
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
              Request LAP Approval
            </span>
            <h2 className="text-3xl font-extrabold font-heading text-slate-900 leading-tight">
              Ready to secure a <br />
              <span className="text-primary font-black">Mortgage Loan?</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Fill out the inquiry form. Our advisory team will review your property location and match it with banks offering maximum LTV and lowest ROI.
            </p>
            <div className="space-y-2 text-xs font-semibold text-slate-500">
              <p>• Valuations conducted by bank-certified engineers</p>
              <p>• Complete title clearance search assistance</p>
              <p>• Flexible tenures up to 15 years</p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ContactForm defaultService="Mortgage Loan" />
          </div>
        </div>
      </section>
    </div>
  );
}
