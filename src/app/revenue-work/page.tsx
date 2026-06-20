"use client";

import React from "react";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import ContactForm from "@/components/shared/ContactForm";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { CheckCircle2, FileText } from "lucide-react";

export default function RevenueWorkPage() {
  const breadcrumbs = [
    { label: "Services", href: "#" },
    { label: "Revenue Work" }
  ];

  const subServices = [
    {
      title: "Property Records & 7/12 (AnyRoR)",
      description: "Securing official and updated land records including 7/12 (Satbara), 8A, and 6 Index records from the Gujarat revenue portal. We check land title chains to ensure zero encumbrance."
    },
    {
      title: "Mutation Entry (Hak Patrak)",
      description: "Filing and tracking mutation entries (Varasai, Sale, Mortgage, Partition, Release) to update land ownership records in government registers after buying/inheriting property."
    },
    {
      title: "Official Certificates",
      description: "Fast processing for official government-certified documents including Income Certificates (Aavak no Dakhlo) and Non-Creamy Layer (NCL) Certificates."
    },
    {
      title: "Satakhat & Pedhinamu (Family Tree)",
      description: "Drafting Satakhat (Agreement to Sale) and executing legal Pedhinamu (certified family genealogy tree) required for property inheritance and division."
    }
  ];

  const benefits = [
    "Expertise in complex Gujarat Land Revenue Codes",
    "Fast processing of Income & Non-Creamy Layer certificates",
    "Complete legal check of property chains (Satakhat deeds)",
    "Eliminate running around government circles/Mamlatdar offices",
    "Accurate verification of land title clearance",
    "Complete transparency with zero hidden agent costs"
  ];

  const processSteps = [
    { step: "01", title: "Information Intake", desc: "Submit details about your property survey numbers, family heir structures, or income proofs." },
    { step: "02", title: "Record Verification", desc: "Our specialists pull matching records from AnyRoR and sub-registrar registers for thorough checks." },
    { step: "03", title: "Application Draft", desc: "We prepare files, draft affidavit declarations, and coordinate with revenue officers." },
    { step: "04", title: "Record Update", desc: "Secure the final certified mutation entry copy (6/12) or government certificate." }
  ];

  const requiredDocuments = [
    {
      id: "rw-doc-1",
      title: "Income & NCL Certificates",
      items: [
        "Applicant's Aadhaar Card & PAN Card",
        "Last 3 years' Income Tax Returns (ITR) or Salary Slip",
        "Talati Income Report (Aavak no Dakhlo report)",
        "School Leaving Certificate (for caste verification in NCL)"
      ]
    },
    {
      id: "rw-doc-2",
      title: "Inheritance (Pedhinamu)",
      items: [
        "Death Certificate of the original property owner",
        "Pedhinamu drafted affidavit (signed by family and witnesses)",
        "Talati certification / Panchkam report",
        "Aadhaar & PAN cards of all surviving heirs"
      ]
    },
    {
      id: "rw-doc-3",
      title: "Property Records & Mutation",
      items: [
        "Registered Sale Deed / Partition Deed copy",
        "Old 7/12, 8A, and 6 Index records",
        "Electricity bill or tax bill of the property",
        "Society NOC (for urban residential mutation)"
      ]
    }
  ];

  const faqs = [
    {
      q: "What is a 7/12 (Satbara) extract and an 8A extract in Gujarat?",
      a: "The 7/12 extract is an official document containing details of a specific piece of land in Gujarat, including survey number, area, owner names, and crop details. The 8A extract lists all land holdings under a specific owner's name in a particular village. Together, they act as primary proof of agricultural land ownership."
    },
    {
      q: "What is a Mutation Entry (Hak Patrak) and why is it necessary?",
      a: "A Mutation Entry is the official process of transferring or updating land title ownership in the local government's land revenue register (Form 6). It is necessary after buying, selling, inheriting, or mortgaging property. Until a mutation entry is certified by a revenue officer, you do not officially exist as the owner in government records."
    },
    {
      q: "How long does it take to secure an Income Certificate or Non-Creamy Layer?",
      a: "Normally, an official Income Certificate or Non-Creamy Layer (NCL) Certificate takes about 5 to 7 working days once all Talati reports and KYC verifications are submitted. We manage the entire file setup to avoid queries or rejections."
    },
    {
      q: "What is a Pedhinamu and when is it required?",
      a: "A Pedhinamu (Family Tree) is a sworn affidavit certifying the legal heirs of a deceased person. It is mandatory when transferring land, houses, bank accounts, or gold from a deceased relative to their surviving children, spouse, or siblings."
    }
  ];

  return (
    <div className="space-y-12 md:space-y-16">
      {/* 1. Page Hero */}
      <PageHero
        title="Revenue & Land Records Work"
        description="Filing mutation entries, Pedhinamu setup, property verifications, and fast processing for Income & Non-Creamy Layer certificates in Surat, Gujarat."
        breadcrumbs={breadcrumbs}
      />

      {/* 2. Overview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
              Revenue & Land Law
            </span>
            <h2 className="text-3xl font-extrabold font-heading text-slate-900 leading-tight">
              Simplify Complex Land Records & <br />
              <span className="text-primary font-black">Official Certifications</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Gujarat land laws and municipal revenue processes can be incredibly complicated. From Mamlatdar office procedures to Talati reports, local bureaucracy often leaves property buyers and heirs confused.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              ShreeLabh Consultancy offers professional assistance. We coordinate with local talatis and revenue offices, file mutation entries, update ownership titles in official registers, and secure government certificates with zero hassle.
            </p>
          </div>
          
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {subServices.map((svc, idx) => (
              <div key={idx} className="bg-slate-50 p-5 md:p-6 rounded-xl md:rounded-2xl border border-slate-100/80 shadow-sm flex flex-col justify-between">
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
            badge="Expertise Advantage"
            title="Benefits of Revenue | Advisory"
            subtitle="Secure legal ownership and certified credentials through clean revenue documentation."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl border border-slate-100 flex items-start gap-3 md:gap-3.5 shadow-sm">
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
          badge="Execution Timeline"
          title="Our Land Record | Update Steps"
          subtitle="We follow a systematic legal channel to update records at sub-registrar and mamlatdar offices."
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
            title="Required Documents | Revenue Work"
            subtitle="Prepare these records to ensure error-free submission at revenue departments."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {requiredDocuments.map((doc) => (
              <div key={doc.id} className="bg-white p-5 md:p-6 rounded-2xl md:rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-heading border-b border-slate-100 pb-2.5 mb-3 md:pb-3 md:mb-4 flex items-center gap-2">
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
          badge="Land Records FAQ"
          title="Frequently Asked | Questions"
          subtitle="Common mutation, Pedhinamu, and 7/12 extract queries solved."
        />
        <div className="max-w-4xl mx-auto">
          <Accordion defaultValue={["rw-faq-0"]} className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`rw-faq-${idx}`}
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
              Submit Revenue Request
            </span>
            <h2 className="text-3xl font-extrabold font-heading text-slate-900 leading-tight">
              Ready to clear your <br />
              <span className="text-primary font-black">Land & Property records?</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Submit your inquiry. Our expert revenue team will verify your survey numbers, check land titles, and draft necessary documents.
            </p>
            <div className="space-y-2 text-xs font-semibold text-slate-500">
              <p>• Mamlatdar & Talati level files support</p>
              <p>• Verified legal search certificates</p>
              <p>• Clean updates on AnyRoR portal registers</p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ContactForm defaultService="Revenue Work" />
          </div>
        </div>
      </section>
    </div>
  );
}
