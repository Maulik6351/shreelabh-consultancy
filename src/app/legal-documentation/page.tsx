"use client";

import React from "react";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import ContactForm from "@/components/shared/ContactForm";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { CheckCircle2, FileText } from "lucide-react";

export default function LegalDocumentationPage() {
  const breadcrumbs = [
    { label: "Services", href: "#" },
    { label: "Legal Documentation" }
  ];

  const subServices = [
    {
      title: "Sale Deeds & Conveyance",
      description: "Complete drafting and registration support for property Sale Deeds (Dastavej), Gift Deeds, and Release Deeds to ensure safe transfer of real estate ownership."
    },
    {
      title: "Agreements & Contracts",
      description: "Drafting bulletproof Partnership Deeds, Lease / Rental Agreements, Satakhat, Business Contracts, and Commercial MOUs aligned with Gujarat laws."
    },
    {
      title: "Power of Attorney (POA)",
      description: "Drafting General Power of Attorney (GPA) and Special Power of Attorney (SPA) for property management, banking operations, and legal representation."
    },
    {
      title: "Affidavits & Notary Services",
      description: "Drafting customized affidavits for name change, address proofs, declarations, and coordinating official stamp paper execution and notary public attestations."
    }
  ];

  const benefits = [
    "Legally sound drafts compliant with Indian Contract Act",
    "Expert stamp duty calculations to avoid penalties",
    "End-to-end guidance for sub-registrar office registration",
    "Hassle-free coordination for notary public attestations",
    "Tailored clauses protecting your assets and liabilities",
    "Secure digital storage of drafts for future retrieval"
  ];

  const processSteps = [
    { step: "01", title: "Share Requirements", desc: "Share details about the agreement parties, property, and specific clauses you need." },
    { step: "02", title: "Drafting Phase", desc: "Our legal specialists write the draft agreement incorporating all necessary protection clauses." },
    { step: "03", title: "Client Review", desc: "Review the draft and suggest modifications or corrections to the content." },
    { step: "04", title: "Print & Attestation", desc: "Print on appropriate stamp papers, sign, and complete notary or sub-registrar registration." }
  ];

  const requiredDocuments = [
    {
      id: "ld-doc-1",
      title: "Parties Verification",
      items: [
        "Aadhaar Card of all executing parties & witnesses",
        "PAN Card of all executing parties & witnesses",
        "Passport size photographs (2 copies)"
      ]
    },
    {
      id: "ld-doc-2",
      title: "Property Papers (For Sale Deeds)",
      items: [
        "Old registered Sale Deed chain copies",
        "Property tax bill or electricity bill of the premises",
        "Society NOC or builder allotment letter"
      ]
    },
    {
      id: "ld-doc-3",
      title: "Financial Details (For Transactions)",
      items: [
        "Payment details: Bank cheque numbers, DD copies, or online transaction reference records",
        "PAN cards of buyer and seller (mandatory for property value exceeding ₹50k)"
      ]
    }
  ];

  const faqs = [
    {
      q: "What is stamp duty and how is it calculated in Gujarat?",
      a: "Stamp duty is a government tax levied on legal documents to make them legally enforceable in a court of law. In Gujarat, stamp duty for property Sale Deeds is usually around 4.9% of the market value (jantri rate) or agreement value, whichever is higher, plus registration fees of 1%."
    },
    {
      q: "Why is a notary public attestation important?",
      a: "A notary attestation certifies the authenticity of the signatures on a document and confirms that the signing parties signed voluntarily under oath. It is standard for affidavits, declarations, and Power of Attorneys."
    },
    {
      q: "What is the difference between General (GPA) and Special Power of Attorney (SPA)?",
      a: "A GPA grants broad powers to an agent to act on your behalf across multiple domains (selling property, handling banks, filing cases). An SPA grants restricted powers to perform a single, specific task (e.g. to sign a specific sale deed on a specific date)."
    },
    {
      q: "How do you protect my legal interests in partnership agreements?",
      a: "We draft partnership deeds detailing capital contribution, profit sharing ratio, dispute resolution mechanisms (arbitration), salary parameters, and dissolution clauses, protecting all partners from future legal confusion."
    }
  ];

  return (
    <div className="space-y-12 md:space-y-16">
      {/* 1. Page Hero */}
      <PageHero
        title="Legal Documentation & Notary"
        description="Drafting sale deeds, partnership agreements, GPA/SPA, affidavits, and rental agreements. We manage stamp papers and notary attestations in Surat."
        breadcrumbs={breadcrumbs}
      />

      {/* 2. Overview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
              Legal Services
            </span>
            <h2 className="text-3xl font-extrabold font-heading text-slate-900 leading-tight">
              Legally Sound Contracts & <br />
              <span className="text-primary font-black">Registered Documentation</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Every property transaction, business partnership, or lease agreement requires a sound legal foundation. A poorly drafted contract or incorrect stamp duty payment can lead to costly court disputes or penalties.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              ShreeLabh Consultancy provides precise drafting support. We help compute exact stamp duties, draft custom clauses protecting your financial interests, and coordinate sub-registrar office registration and notary public attestations.
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
            badge="Drafting Benefits"
            title="Secure Your Legal | Transactions"
            subtitle="Let our documentation experts verify your clauses to ensure complete security."
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
          badge="How We Execute"
          title="Our Documentation | Steps"
          subtitle="Our systematic drafting workflow ensures you approve all content before final prints."
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
            title="Required Documents | Drafting"
            subtitle="Gather these files to ensure the correct drafting of identity names and payment details."
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
          badge="Legal FAQ"
          title="Frequently Asked | Questions"
          subtitle="Typical stamp duty, notary, and power of attorney queries resolved."
        />
        <div className="max-w-4xl mx-auto">
          <Accordion defaultValue={["ld-faq-0"]} className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`ld-faq-${idx}`}
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
              Request Legal Drafting
            </span>
            <h2 className="text-3xl font-extrabold font-heading text-slate-900 leading-tight">
              Ready to draft your <br />
              <span className="text-primary font-black">Legal Agreement?</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Submit your inquiry. Our expert legal team will review your parameters, write custom clauses, and coordinate stamp paper printing.
            </p>
            <div className="space-y-2 text-xs font-semibold text-slate-500">
              <p>• Bulletproof, legally sound document drafts</p>
              <p>• Notary attestation and stamp paper coordination</p>
              <p>• Registered Sale Deeds management at registrar offices</p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ContactForm defaultService="Legal Documentation" />
          </div>
        </div>
      </section>
    </div>
  );
}
