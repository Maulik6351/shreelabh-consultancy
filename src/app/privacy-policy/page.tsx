import React from "react";
import { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import { CONTACT_INFO } from "@/constants/contactInfo";
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  Database, 
  Share2, 
  UserCheck, 
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Understand how ShreeLabh Consultancy collects, protects, and manages your personal, financial, and property data.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const breadcrumbs = [
    { label: "Privacy Policy" }
  ];

  const policySections = [
    {
      icon: Eye,
      title: "1. Information We Collect",
      description: "To provide accurate tax filings, revenue services, and loan syndications, we collect the following categories of information:",
      bullets: [
        "Personal Identity: Full name, date of birth, Aadhaar card number, PAN card number, and passport size photographs.",
        "Contact Information: Mobile numbers, email addresses, and residential/business addresses.",
        "Financial & Tax Records: Income records, salary slips, bank account statements, tax invoices, GST login credentials, and books of accounts.",
        "Property & Legal Files: Old registered sale deeds, land index copies, Satakhat (sale agreements), property tax receipts, and municipal records."
      ],
      bgColor: "bg-blue-50/50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-100"
    },
    {
      icon: Database,
      title: "2. How We Use Your Information",
      description: "We utilize your personal and financial information strictly to execute the services you request, including:",
      bullets: [
        "Processing and filing Income Tax Returns (ITR) and handling IT notices.",
        "Filing GST registration applications and monthly/quarterly/annual compliance returns.",
        "Compiling loan files and negotiating terms for Home, Mortgage, or Business Loans with partner banks.",
        "Drafting sale deeds, partnership agreements, affidavits, and verifying land records with the revenue department."
      ],
      bgColor: "bg-emerald-50/50",
      iconColor: "text-emerald-600",
      borderColor: "border-emerald-100"
    },
    {
      icon: Share2,
      title: "3. Data Sharing & Third Parties",
      description: "We do not sell, trade, or rent your personal information to third parties. We share your documents only with authorized portals and institutions:",
      bullets: [
        "Government Portals: Income Tax Department of India, GST Common Portal, and Gujarat State Revenue Department for official submissions.",
        "Lending Institutions: Partner banks and NBFCs directly involved in processing and sanctioning your requested loans.",
        "Legal Attestation: Notary publics and sub-registrar office systems for registration of legal deeds."
      ],
      bgColor: "bg-amber-50/50",
      iconColor: "text-amber-600",
      borderColor: "border-amber-100"
    },
    {
      icon: Lock,
      title: "4. Information Security",
      description: "We implement robust safety measures to protect your sensitive financial records and identity documentation:",
      bullets: [
        "Double-verification checking processes to prevent file mix-ups or data misplacement.",
        "Strict digital storage protocols for passwords, credentials, and scan copies.",
        "Confidential handling of physical files, accessible only to authorized consultants (Vivek Vekariya and Pravinbhai Sudani)."
      ],
      bgColor: "bg-purple-50/50",
      iconColor: "text-purple-600",
      borderColor: "border-purple-100"
    },
    {
      icon: UserCheck,
      title: "5. Data Retention & Client Control",
      description: "You maintain control over your files, and we keep your records only as long as required:",
      bullets: [
        "We retain client tax archives and property files to assist in multi-year filings or audits.",
        "You can request the deletion, return, or correction of your information from our files at any point.",
        "Digital copies are archived securely, and paper records are returned upon service completion."
      ],
      bgColor: "bg-rose-50/50",
      iconColor: "text-rose-600",
      borderColor: "border-rose-100"
    }
  ];

  return (
    <div className="space-y-12 md:space-y-16 pb-16">
      {/* Page Hero */}
      <PageHero
        title="Privacy Policy"
        description="Learn how ShreeLabh Consultancy collects, utilizes, and safeguards your financial, tax, and property data."
        breadcrumbs={breadcrumbs}
      />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content Areas */}
          <div className="lg:col-span-8 space-y-10">
            <div className="prose prose-slate max-w-none">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                <ShieldCheck className="h-4.5 w-4.5 text-primary" />
                <span>Effective Date: June 20, 2026</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 leading-tight">
                Our Commitment to Your Privacy
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-4">
                At <strong>ShreeLabh Consultancy</strong>, we understand that handling your tax filings, property deeds, and loan files requires absolute trust. We are registered tax and revenue consultants operating in Surat, Gujarat. We hold ourselves to the highest ethical standards in protecting all records entrusted to us.
              </p>
            </div>

            {/* Policy Cards Grid */}
            <div className="space-y-8">
              {policySections.map((section, idx) => {
                const IconComponent = section.icon;
                return (
                  <div 
                    key={idx} 
                    className={`p-6 sm:p-8 rounded-3xl border ${section.borderColor} ${section.bgColor} shadow-sm space-y-4 transition-all duration-300 hover:shadow-md`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`p-2.5 rounded-2xl bg-white shadow-sm shrink-0`}>
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

            {/* Policy Consent/Updates */}
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 space-y-3">
              <h4 className="text-sm font-bold text-slate-900 font-heading">
                Updates to this Policy
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                We may update this Privacy Policy from time to time to align with changes in Indian tax laws, RBI guidelines, or local land revenue rules. Any modifications will be posted here with an updated effective date. Continued use of our advisory implies agreement with the updated policy terms.
              </p>
            </div>

          </div>

          {/* Sidebar Contact Info Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-28 bg-slate-900 text-white p-8 rounded-[36px] shadow-xl border border-slate-800 space-y-6 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/15">
                  <ShieldCheck className="h-6 w-6 text-secondary" />
                </div>
                
                <h3 className="text-xl font-bold font-heading">
                  Privacy Queries?
                </h3>
                
                <p className="text-xs text-slate-300 leading-relaxed">
                  If you have any questions regarding how your documents are processed or want to request removal of your tax credentials from our archives, feel free to reach out directly to us.
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
