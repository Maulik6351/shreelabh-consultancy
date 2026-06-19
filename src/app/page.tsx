import React from "react";
import SectionHeading from "@/components/shared/SectionHeading";
import { TrustStrip } from "@/components/shared/TrustBadge";
import CTASection from "@/components/shared/CTASection";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Basic Hero Placeholder */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-primary/30 text-white pt-24 pb-20 md:pt-36 md:pb-32 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-secondary border border-white/10 tracking-wider">
            Surat&apos;s Premier Consultants
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading leading-tight tracking-tight">
            Trusted Revenue & <span className="text-secondary">Tax Consultants</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Income Tax, GST, Loans, Revenue Work & Legal Documentation Under One Roof. We provide end-to-end guidance for individuals and businesses in Gujarat.
          </p>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustStrip />

      {/* Services Overview Segment */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Expertise"
          title="Consulting Services | That Deliver Growth"
          subtitle="ShreeLabh Consultancy offers a comprehensive suite of business and tax solutions to ensure complete compliance and financial peace of mind."
        />
        {/* Placeholder grid for services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
            <h3 className="font-bold font-heading text-lg text-foreground">Taxation Services</h3>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              Expert income tax return filing, tax saving planning, notice handling, and PAN/TDS documentation.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
            <h3 className="font-bold font-heading text-lg text-foreground">GST Compliance</h3>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              Timely GST returns, new registrations, consultation, amendments, and strict compliance advisory.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
            <h3 className="font-bold font-heading text-lg text-foreground">Loan Syndication</h3>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              Secure home loans, mortgage loans (LAP), and business/MSME working capital funding.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
