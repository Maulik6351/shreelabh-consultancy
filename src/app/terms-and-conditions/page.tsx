import React from "react";
import { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import { CONTACT_INFO } from "@/constants/contactInfo";
import { 
  Scale, 
  HelpCircle, 
  FileCheck, 
  AlertTriangle, 
  CreditCard, 
  Globe, 
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Read the Terms & Conditions governing the services and advisory offered by ShreeLabh Consultancy.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  const breadcrumbs = [
    { label: "Terms & Conditions" }
  ];

  const termsSections = [
    {
      icon: FileCheck,
      title: "1. Scope of Services Offered",
      description: "ShreeLabh Consultancy offers financial and legal advisory support, including:",
      bullets: [
        "Income Tax: ITR preparation, filing, calculation checking, and handling notice responses.",
        "GST Compliance: GST registration, monthly/quarterly return filings, and cancellation support.",
        "Loan Syndication: Assisting with documentation prep, file processing, and lender communications for Home, LAP, and Business Loans.",
        "Revenue & Legal Work: Drafting property sale deeds, Satakhats, GPA, affidavits, and filing mutation entries in local government registries."
      ],
      bgColor: "bg-slate-50",
      iconColor: "text-slate-800",
      borderColor: "border-slate-100"
    },
    {
      icon: AlertTriangle,
      title: "2. Client Obligations & Document Authenticity",
      description: "To ensure successful processing of files, the client represents and warrants that:",
      bullets: [
        "All documents provided (PAN, Aadhaar, bank records, income logs, property titles) are 100% genuine, legal, and correct.",
        "ShreeLabh Consultancy does not verify the truthfulness of documents; the client is solely responsible for legal issues stemming from forged or misleading papers.",
        "Clients must supply required documentation, OTPs, or signatures in a timely manner to prevent statutory filing penalties or loan application expirations."
      ],
      bgColor: "bg-amber-50/50",
      iconColor: "text-amber-600",
      borderColor: "border-amber-100"
    },
    {
      icon: HelpCircle,
      title: "3. Disclaimers & Limitation of Liability",
      description: "Our role is advisory and administrative. Clients must recognize the following terms:",
      bullets: [
        "Loan Sanctions: Loan approval, interest rates, and final disbursal amounts are solely decided by lending banks. ShreeLabh Consultancy does not guarantee loan approval.",
        "Tax Liability: Tax computations are prepared based on records you declare. Any subsequent notices, interest, or penalties issued by the Income Tax Department are the client's responsibility.",
        "Government Delay: Revenue registries, mutation entry clearances, and notary timelines are subject to government office processing speeds and server uptimes, which are beyond our control."
      ],
      bgColor: "bg-red-50/50",
      iconColor: "text-red-600",
      borderColor: "border-red-100"
    },
    {
      icon: CreditCard,
      title: "4. Fees, Payments & Refunds",
      description: "We believe in complete pricing transparency for our professional service fees:",
      bullets: [
        "All fees for GST filings, tax submissions, loan packaging, and legal drafts are discussed and locked with the client beforehand.",
        "Any government-levied fees (stamp duty, registry fee, challans) are to be paid by the client directly or reimbursed in full.",
        "Professional fees paid to ShreeLabh Consultancy for services rendered, drafts completed, or files processed are non-refundable once the drafting/filing process is initiated."
      ],
      bgColor: "bg-emerald-50/50",
      iconColor: "text-emerald-600",
      borderColor: "border-emerald-100"
    },
    {
      icon: Globe,
      title: "5. Governing Law & Jurisdiction",
      description: "These terms and conditions are framed in compliance with local laws and state regulations:",
      bullets: [
        "These terms are governed by the laws of the State of Gujarat and the Republic of India.",
        "Any legal disputes, claims, or actions arising from our consulting services shall be subject to the exclusive jurisdiction of the competent courts in Surat, Gujarat."
      ],
      bgColor: "bg-blue-50/50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-100"
    }
  ];

  return (
    <div className="space-y-12 md:space-y-16 pb-16">
      {/* Page Hero */}
      <PageHero
        title="Terms & Conditions"
        description="Review the terms, liabilities, and guidelines governing our financial and legal advisory services."
        breadcrumbs={breadcrumbs}
      />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Terms & Conditions Panel */}
          <div className="lg:col-span-8 space-y-10">
            <div className="prose prose-slate max-w-none">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                <Scale className="h-4.5 w-4.5 text-primary" />
                <span>Last Updated: June 20, 2026</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 leading-tight">
                Terms of Engagement
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-4">
                By engaging <strong>ShreeLabh Consultancy</strong> (whether via office visits, online submissions, whatsapp contact, or files handed over to Vivek Vekariya and Pravinbhai Sudani), you agree to be bound by the terms and conditions outlined below. These terms define the parameters of our relationship and set expectations for service outcomes.
              </p>
            </div>

            {/* Terms Content List */}
            <div className="space-y-8">
              {termsSections.map((section, idx) => {
                const IconComponent = section.icon;
                return (
                  <div 
                    key={idx} 
                    className={`p-6 sm:p-8 rounded-3xl border ${section.borderColor} ${section.bgColor} shadow-sm space-y-4 transition-all duration-300 hover:shadow-md`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="p-2.5 rounded-2xl bg-white shadow-sm shrink-0">
                        <IconComponent className={`h-6 w-6 ${section.iconColor}`} />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900">
                        {section.title}
                      </h3>
                    </div>
                    
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      {section.description}
                    </p>

                    <ul className="space-y-2.5 pt-2">
                      {section.bullets.map((bullet, bulletIdx) => (
                        <li key={bulletIdx} className="text-xs sm:text-sm text-slate-600 leading-relaxed flex items-start">
                          <span className="text-slate-400 mr-2.5 mt-1 select-none">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* Modification of Terms */}
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 space-y-3">
              <h4 className="text-sm font-bold text-slate-900 font-heading">
                Modifications to terms
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                ShreeLabh Consultancy reserves the right to modify these terms at any time. Changes become effective immediately upon updates being posted on our site. Clients are encouraged to review these terms prior to submitting new documentation files to our experts.
              </p>
            </div>

          </div>

          {/* Sidebar Contact Info Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-28 bg-slate-900 text-white p-8 rounded-[36px] shadow-xl border border-slate-800 space-y-6 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/15">
                  <Scale className="h-6 w-6 text-secondary" />
                </div>
                
                <h3 className="text-xl font-bold font-heading">
                  Need Clarification?
                </h3>
                
                <p className="text-xs text-slate-300 leading-relaxed">
                  If you have queries regarding professional fees, bank coordination processes, or document custody policies, please contact our advisors:
                </p>

                <div className="pt-6 border-t border-white/10 space-y-4">
                  
                  {/* Helpline */}
                  <div className="flex items-start gap-3">
                    <Phone className="h-4.5 w-4.5 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider">Direct Hotline</span>
                      <a href={`tel:${CONTACT_INFO.primaryPhone.replace(/\s+/g, "")}`} className="text-xs text-white font-bold hover:underline">
                        {CONTACT_INFO.primaryPhone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <Mail className="h-4.5 w-4.5 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider">Email Support</span>
                      <a href={`mailto:${CONTACT_INFO.email}`} className="text-xs text-white font-bold hover:underline break-all">
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>

                  {/* Main Branch */}
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4.5 w-4.5 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider">Main Branch Office</span>
                      <span className="text-xs text-slate-300 block font-medium leading-normal">
                        {CONTACT_INFO.branches[0].address}
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
