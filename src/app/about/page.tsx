"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { 
  ShieldCheck, 
  Award, 
  Phone, 
  Target, 
  Compass, 
  CheckCircle2, 
  TrendingUp, 
  Briefcase 
} from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import CTASection from "@/components/shared/CTASection";
import { CONTACT_INFO } from "@/constants/contactInfo";

// Motion animation configurations
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 25, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function AboutPage() {
  const breadcrumbs = [{ label: "About Us" }];
  const cleanVivekPhone = CONTACT_INFO.people[0].phone.replace(/\s+/g, "");
  const cleanPravinPhone = CONTACT_INFO.people[1].phone.replace(/\s+/g, "");

  const coreValues = [
    {
      title: "Trust",
      description: "A relationship-first approach backed by government-registered operations, complete client data security, and confidentiality.",
      icon: ShieldCheck,
      color: "text-emerald-500",
      bgColor: "bg-emerald-50"
    },
    {
      title: "Transparency",
      description: "No hidden charges, direct communication, and realistic expectations regarding timelines, procedures, and official fees.",
      icon: Compass,
      color: "text-secondary",
      bgColor: "bg-amber-50"
    },
    {
      title: "Accuracy",
      description: "Double-verified checking mechanisms for tax filings and property applications to eliminate documentation rejection risk.",
      icon: Target,
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    }
  ];

  const milestones = [
    { label: "Years of Experience", value: "15+", desc: "Serving clients since 2008" },
    { label: "Satisfied Clients", value: "5,000+", desc: "Individuals & local businesses" },
    { label: "Success Rate", value: "99.8%", desc: "On filing & documentation verification" },
    { label: "Loan Syndications", value: "₹50Cr+", desc: "Disbursed via leading partner banks" }
  ];

  return (
    <div className="space-y-24 md:space-y-32">
      {/* 1. Page Hero */}
      <PageHero
        title="About ShreeLabh Consultancy"
        description="Surat's trusted pathfinders in revenue documentation, taxation compliance, and strategic loan syndication since 2008."
        breadcrumbs={breadcrumbs}
      />

      {/* 2. Company Narrative & Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Narrative Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 leading-tight">
              Surat&apos;s Premier Revenue & <br />
              <span className="text-primary font-black">Taxation Experts</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Founded in 2008, ShreeLabh Consultancy has evolved into a premier financial advisory and legal documentation service firm in Surat, Gujarat. We bridge the gap between complex government procedures and individuals or business owners seeking quick, reliable outcomes.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Our firm specializes in a broad suite of integrated services including Income Tax Return filing, GST compliances, Home and Mortgage Loan syndications, and intricate revenue matters (such as land records, mutation entries, and property deeds verification).
            </p>
            
            {/* Quick checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <CheckCircle2 className="h-4.5 w-4.5 text-secondary shrink-0" />
                <span>100% Tax Notice Resolution</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <CheckCircle2 className="h-4.5 w-4.5 text-secondary shrink-0" />
                <span>Direct Partner Bank Network</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <CheckCircle2 className="h-4.5 w-4.5 text-secondary shrink-0" />
                <span>Government Registered Firm</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <CheckCircle2 className="h-4.5 w-4.5 text-secondary shrink-0" />
                <span>Clear & Honest Timelines</span>
              </div>
            </div>
          </motion.div>

          {/* Interactive Shell / Sidebar Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="bg-slate-900 text-white p-8 rounded-[36px] shadow-xl relative overflow-hidden border border-slate-800">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/15">
                  <Award className="h-6 w-6 text-secondary" />
                </div>
                
                <h3 className="text-xl font-bold font-heading text-white">
                  Our Mission & Vision
                </h3>
                
                <p className="text-xs text-slate-300 leading-relaxed">
                  To empower small business owners, salaried individuals, and land holders in Gujarat with seamless tax optimization, rapid finance options, and secure documentation support, eliminating bureaucratic stress.
                </p>

                <div className="pt-6 border-t border-white/10 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-secondary/15 flex items-center justify-center">
                      <TrendingUp className="h-4 w-4 text-secondary" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider">Our Goal</span>
                      <span className="text-xs text-white font-bold block">Zero-defects document processing</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <Briefcase className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider">Our Focus</span>
                      <span className="text-xs text-white font-bold block">Affordable expert consultation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. Core Values Grid */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Pillars"
            title="Values That Guide | ShreeLabh"
            subtitle="Our operational standard is anchored on three core tenets that define our client relationships and professional ethics."
          />

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4"
          >
            {coreValues.map((value) => {
              const IconComp = value.icon;
              return (
                <motion.div 
                  key={value.title} 
                  variants={itemVariants}
                  className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 rounded-2xl ${value.bgColor} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300`}>
                    <IconComp className={`h-6 w-6 ${value.color}`} />
                  </div>
                  <h3 className="text-lg font-bold font-heading text-slate-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 4. Experience & Statistics Metrics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-[40px] px-8 py-12 md:p-16 shadow-2xl relative overflow-hidden border border-slate-800">
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="space-y-2">
                <span className="text-4xl sm:text-5xl md:text-6xl font-black font-heading text-secondary tracking-tight block">
                  {milestone.value}
                </span>
                <span className="text-sm font-bold text-white block">
                  {milestone.label}
                </span>
                <span className="text-xs text-slate-400 block">
                  {milestone.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Meet the Experts / Consultants */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Leadership"
          title="Meet Our Lead | Consultants"
          subtitle="Direct, personalized advisory from seasoned experts who manage your files and compliance with care."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto pt-4">
          
          {/* Consultant 1: Vivek Vekariya */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex flex-col justify-between group hover:shadow-md transition-shadow"
          >
            <div className="p-8 space-y-6">
              {/* Profile Card Top */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center font-black text-xl text-primary font-heading shrink-0">
                  VV
                </div>
                <div>
                  <h3 className="text-lg font-bold font-heading text-slate-900 group-hover:text-primary transition-colors">
                    {CONTACT_INFO.people[0].name}
                  </h3>
                  <p className="text-xs text-muted-foreground font-semibold mt-0.5">
                    {CONTACT_INFO.people[0].role}
                  </p>
                </div>
              </div>
              
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Expert in Income Tax rules, capital gains audits, GST return workflows, and property documentation. Vivek Vekariya leads file inspections and structures custom loan syndication applications for large MSME accounts.
              </p>
              
              {/* Expert details list */}
              <div className="space-y-2 pt-2 text-xs text-slate-500 font-semibold">
                <div className="flex items-center gap-2">• Specialized in ITR AY 2026-27 compliance</div>
                <div className="flex items-center gap-2">• 15+ years of direct tax advisory</div>
                <div className="flex items-center gap-2">• Handled 3,000+ personal and enterprise files</div>
              </div>
            </div>

            {/* CTA action bottom */}
            <div className="px-8 py-5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Direct Helpline</span>
              <a 
                href={`tel:${cleanVivekPhone}`}
                className="inline-flex items-center text-xs font-bold text-primary hover:text-primary/80 transition-colors gap-1.5"
              >
                <Phone className="h-3.5 w-3.5 text-secondary shrink-0" />
                {CONTACT_INFO.people[0].phone}
              </a>
            </div>
          </motion.div>

          {/* Consultant 2: Pravinbhai Sudani */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex flex-col justify-between group hover:shadow-md transition-shadow"
          >
            <div className="p-8 space-y-6">
              {/* Profile Card Top */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-secondary/15 flex items-center justify-center font-black text-xl text-secondary font-heading shrink-0">
                  PS
                </div>
                <div>
                  <h3 className="text-lg font-bold font-heading text-slate-900 group-hover:text-primary transition-colors">
                    {CONTACT_INFO.people[1].name}
                  </h3>
                  <p className="text-xs text-muted-foreground font-semibold mt-0.5">
                    {CONTACT_INFO.people[1].role}
                  </p>
                </div>
              </div>
              
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Veteran legal documentation and land records consultant. Specializes in mutation entry filings, revenue records verification, drafting complex sale deeds, partnership registrations, and notary coordination.
              </p>

              {/* Expert details list */}
              <div className="space-y-2 pt-2 text-xs text-slate-500 font-semibold">
                <div className="flex items-center gap-2">• Land revenue regulations expert (Gujarat region)</div>
                <div className="flex items-center gap-2">• Verified property documentation expert</div>
                <div className="flex items-center gap-2">• Partnership and trust deed notary handler</div>
              </div>
            </div>

            {/* CTA action bottom */}
            <div className="px-8 py-5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Direct Helpline</span>
              <a 
                href={`tel:${cleanPravinPhone}`}
                className="inline-flex items-center text-xs font-bold text-primary hover:text-primary/80 transition-colors gap-1.5"
              >
                <Phone className="h-3.5 w-3.5 text-secondary shrink-0" />
                {CONTACT_INFO.people[1].phone}
              </a>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 6. CTA Section */}
      <CTASection 
        title="Need Trusted Advisors for Your Financial and Legal Affairs?"
        subtitle="Get in touch with Vivek Vekariya & Pravinbhai Sudani today for verified, stress-free consultancy in Surat."
      />
    </div>
  );
}
