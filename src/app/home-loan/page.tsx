"use client";

import React from "react";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import ContactForm from "@/components/shared/ContactForm";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { CheckCircle2, FileText, BadgePercent, ShieldCheck, HelpCircle } from "lucide-react";

export default function HomeLoanPage() {
  const breadcrumbs = [
    { label: "Services", href: "#" },
    { label: "Home Loan" }
  ];

  const loanTypes = [
    {
      title: "New Home Loan",
      description: "Secure funding for purchasing flats, apartments, bungalows, or plots of land. We help compare rates across major nationalized and private banks to ensure the lowest interest rates."
    },
    {
      title: "Home Loan Balance Transfer",
      description: "Transfer your active high-interest loan to a bank offering a lower Rate of Interest (ROI). Reduce your monthly EMI burden and save lakhs in interest payments."
    },
    {
      title: "Top-Up Loan syndications",
      description: "Get additional funds over and above your existing home loan at home loan interest rates (much cheaper than personal loans) for home renovation, business, or education."
    }
  ];

  const benefits = [
    "Lowest Interest Rates from Top Lenders",
    "Complete File Documentation Review beforehand",
    "Fast Sanction & Smooth Disbursement coordinates",
    "Expert Advice on Hidden Charges & Processing Fees",
    "No-Objection Certificate (NOC) and Balance Transfers",
    "Flexible Tenures up to 30 Years for lower EMIs"
  ];

  const processSteps = [
    { step: "01", title: "Eligibility Check", desc: "We review your income, age, and existing loans to calculate maximum loan eligibility." },
    { step: "02", title: "Document Collation", desc: "Gather required papers for applicant and co-applicant according to bank norms." },
    { step: "03", title: "Lender Matching", desc: "Submit file to multiple top banks for competitive interest rate negotiations." },
    { step: "04", title: "Sanction & Payout", desc: "Secure the sanction letter and complete final property verification for payout." }
  ];

  // Document list exactly translated from Reference/visiting card-2.jpeg
  const requiredDocuments = [
    {
      id: "hl-doc-1",
      title: "General Verification",
      items: [
        "Passport size photos: 3 (three) copies",
        "Cheques: 2 cancel cheques (for processing fee & ECS setup)",
        "Master File: Satakhat (Sale Agreement) & Construction Agreement"
      ]
    },
    {
      id: "hl-doc-2",
      title: "Identity & Address (KYC)",
      items: [
        "Identity Proof: PAN Card / Aadhaar Card / Voter ID Card",
        "Address Proof: Electricity Bill / Municipal Tax Bill / Rent Agreement"
      ]
    },
    {
      id: "hl-doc-3",
      title: "Business Proofs (If Self-Employed)",
      items: ["Gumastadhara (Shop Act License)", "Municipal Tax Bill in business name", "GST Registration / Udyam Registration Certificate"]
    },
    {
      id: "hl-doc-4",
      title: "Financial Statements",
      items: [
        "Bank Statements: Last 1 year's Salary, Current, or Savings account statements",
        "Income Proof: Form 16 / last 6 months' Salary Slips",
        "Tax returns: Last 3 years' Income Tax Returns (ITR)"
      ]
    },
    {
      id: "hl-doc-5",
      title: "Existing Liabilities",
      items: ["Running Loan Statement of Account", "No-Objection Certificate (NOC) from existing lender"]
    }
  ];

  const faqs = [
    {
      q: "What is the role of a co-applicant in a home loan?",
      a: "A co-applicant is a co-owner or immediate family member whose income can be clubbed with yours to increase overall loan eligibility. Standard KYC (PAN, Aadhaar, Photo) and income proofs are required for both applicant and co-applicant."
    },
    {
      q: "How does a Home Loan Balance Transfer (HLBT) save money?",
      a: "By transferring your remaining loan balance to a bank offering a lower interest rate (e.g. from 9.5% down to 8.5%), you either lower your monthly EMI amount or reduce the remaining loan tenure, saving you thousands of rupees over time."
    },
    {
      q: "What is a Satakhat / Sale Agreement?",
      a: "A Satakhat is a legally binding agreement between a property seller and buyer detailing the sale terms, final price, advance booking payment, and target sale deed date. It is a mandatory document banks verify before sanctioning a home loan."
    },
    {
      q: "Can I get a home loan if I am a self-employed business owner?",
      a: "Absolutely. Self-employed applicants can secure loans by submitting their business registration proofs (Gumastadhara, GST, Udyam) along with bank statements and past 3 years' Income Tax Returns (ITRs) to prove repayment capacity."
    }
  ];

  return (
    <div className="space-y-24 md:space-y-32">
      {/* 1. Page Hero */}
      <PageHero
        title="Home Loan Services"
        description="Secure new home loans, transfer existing loans to lower rates, and request top-ups. We handle all applicant and co-applicant documentation for quick approvals."
        breadcrumbs={breadcrumbs}
      />

      {/* 2. Overview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
              Loan Syndications
            </span>
            <h2 className="text-3xl font-extrabold font-heading text-slate-900 leading-tight">
              A Home of Your Own, <br />
              <span className="text-primary font-black">Financed Affordably</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Buying a house or commercial shop is one of life&apos;s biggest decisions. ShreeLabh Consultancy guides you through the complex banking procedures. We partner with India&apos;s leading government and private banks to secure the best rates.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Whether you are a salaried employee requiring Form 16 or a self-employed business owner with ITR records, we check your documents, resolve eligibility issues, and manage the bank interaction from file setup to disbursement.
            </p>
          </div>
          
          <div className="lg:col-span-6 space-y-6">
            {loanTypes.map((type, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100/80 shadow-sm">
                <h3 className="text-base font-bold text-slate-900 font-heading mb-2 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                  {type.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {type.description}
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
            badge="Why Apply with Us"
            title="Benefits of Loan | Syndication"
            subtitle="We optimize loan files to secure faster bank approvals with minimal processing fees."
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
          badge="Step-by-step"
          title="Our Home Loan | Process"
          subtitle="Our systematic submission pipeline ensures your file gets approved quickly and securely."
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

      {/* 5. Required Documents Section (Translated Checklist) */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Checklist (Applicant & Co-Applicant)"
            title="Required Documents | Home Loan"
            subtitle="Please prepare the following papers to ensure rapid processing of your housing loan file."
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
              Applying for applicant and co-applicant jointly increases eligibility and improves the loan approval rate.
            </p>
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Home Loan FAQ"
          title="Frequently Asked | Questions"
          subtitle="Typical home buyer, salaried, and self-employed loan questions resolved."
        />
        <div className="max-w-4xl mx-auto">
          <Accordion defaultValue={["hl-faq-0"]} className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`hl-faq-${idx}`}
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
              Get Sanction Letter
            </span>
            <h2 className="text-3xl font-extrabold font-heading text-slate-900 leading-tight">
              Ready to secure your <br />
              <span className="text-primary font-black">Home Loan?</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Submit your details. Our lead advisor Pravinbhai Sudani will review your financial records and negotiate terms with top bankers.
            </p>
            <div className="space-y-2 text-xs font-semibold text-slate-500">
              <p>• Flexible tenure structures (up to 30 years)</p>
              <p>• Complete documentation checking by advisors</p>
              <p>• Balance transfers with minimum processing fee</p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ContactForm defaultService="Home Loan" />
          </div>
        </div>
      </section>
    </div>
  );
}
