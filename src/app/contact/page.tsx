"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock, 
  MapPin, 
  ArrowUpRight 
} from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import ContactForm from "@/components/shared/ContactForm";
import { CONTACT_INFO } from "@/constants/contactInfo";

export default function ContactPage() {
  const breadcrumbs = [{ label: "Contact Us" }];

  const cleanPrimaryPhone = CONTACT_INFO.primaryPhone.replace(/\s+/g, "");
  const cleanSecondaryPhone = CONTACT_INFO.secondaryPhone.replace(/\s+/g, "");
  const cleanWhatsappNumber = CONTACT_INFO.whatsappNumber.replace(/\s+/g, "");

  // Google Maps standard embed URLs
  const mapEmbeds = {
    branch1: "https://maps.google.com/maps?q=202%20Beel%20Mall%20Varachha%20Main%20Road%20Surat&t=&z=15&ie=UTF8&iwloc=&output=embed",
    branch2: "https://maps.google.com/maps?q=302%20Martin%20Arcade%20Olpad-Sayan%20Road%20Surat&t=&z=15&ie=UTF8&iwloc=&output=embed"
  };

  return (
    <div className="space-y-24 md:space-y-32">
      {/* 1. Page Hero */}
      <PageHero
        title="Contact ShreeLabh Consultancy"
        description="Connect with our lead consultants today. Submit an inquiry for tax planning, loan approvals, or property documentation."
        breadcrumbs={breadcrumbs}
      />

      {/* 2. Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Embed ContactForm (Top of grid) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Column: Contact Details, Business Hours & Direct Actions */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Connection Options (Floating Action links styled as interactive cards) */}
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Quick Connect
              </span>
              
              <div className="grid grid-cols-1 gap-3">
                {/* Call Primary */}
                <a
                  href={`tel:${cleanPrimaryPhone}`}
                  className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/20 hover:bg-primary/5 transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 block uppercase">Call Principal Lead</span>
                      <span className="text-sm font-bold text-slate-900 block mt-0.5">
                        {CONTACT_INFO.primaryPhone}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                {/* WhatsApp */}
                <a
                  href={CONTACT_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-500/20 hover:bg-emerald-50/50 transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                      <MessageCircle className="h-5 w-5 fill-emerald-600/10" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 block uppercase">Instant WhatsApp Chat</span>
                      <span className="text-sm font-bold text-slate-900 block mt-0.5">
                        +91 {cleanWhatsappNumber}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-emerald-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                {/* Email Support */}
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-500/20 hover:bg-blue-50/40 transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 block uppercase">Email Support</span>
                      <span className="text-sm font-bold text-slate-900 block mt-0.5 truncate max-w-[200px] sm:max-w-xs">
                        {CONTACT_INFO.email}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-primary border border-slate-100 shrink-0">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">
                  Office Hours
                </span>
                <p className="text-sm font-bold text-slate-900 leading-normal">
                  Monday to Saturday: {CONTACT_INFO.businessHours.weekdays}
                </p>
                <p className="text-xs font-semibold text-rose-500">
                  Sunday: {CONTACT_INFO.businessHours.sunday}
                </p>
              </div>
            </div>

            {/* Lead Experts Helplines */}
            <div className="bg-slate-900 text-white p-6 rounded-3xl border border-slate-800 shadow-xl space-y-4">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Expert Helplines
              </span>
              
              <div className="space-y-4 divide-y divide-slate-800">
                {/* Expert 1 */}
                <div className="pt-0">
                  <span className="text-xs font-bold text-slate-300 block">{CONTACT_INFO.people[0].name}</span>
                  <span className="text-[10px] text-slate-500 block mt-0.5">{CONTACT_INFO.people[0].role}</span>
                  <a 
                    href={`tel:${cleanPrimaryPhone}`}
                    className="inline-flex items-center text-sm font-bold text-secondary hover:underline gap-1.5 mt-2 transition-all"
                  >
                    <Phone className="h-3.5 w-3.5 text-secondary shrink-0" />
                    {CONTACT_INFO.primaryPhone}
                  </a>
                </div>

                {/* Expert 2 */}
                <div className="pt-4">
                  <span className="text-xs font-bold text-slate-300 block">{CONTACT_INFO.people[1].name}</span>
                  <span className="text-[10px] text-slate-500 block mt-0.5">{CONTACT_INFO.people[1].role}</span>
                  <a 
                    href={`tel:${cleanSecondaryPhone}`}
                    className="inline-flex items-center text-sm font-bold text-secondary hover:underline gap-1.5 mt-2 transition-all"
                  >
                    <Phone className="h-3.5 w-3.5 text-secondary shrink-0" />
                    {CONTACT_INFO.secondaryPhone}
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Branch Offices & Google Maps Integration */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Branches"
            title="Locate ShreeLabh | Offices"
            subtitle="Visit our offices in Surat for direct, in-person document reviews and financial consultations."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
            
            {/* Branch 1 (Main Office) Card */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex flex-col justify-between group hover:shadow-md transition-shadow">
              <div className="p-6 md:p-8 space-y-6">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base sm:text-lg font-bold font-heading text-slate-900">
                        {CONTACT_INFO.branches[0].branchName}
                      </h3>
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-primary/10 text-primary uppercase">
                        Head Office
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      {CONTACT_INFO.branches[0].address}
                    </p>
                  </div>
                </div>

                {/* Google Maps Iframe */}
                <div className="relative w-full h-[280px] bg-slate-100 rounded-2xl overflow-hidden border border-slate-100">
                  <iframe
                    src={mapEmbeds.branch1}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map embed for ShreeLabh Consultancy Head Office Varachha"
                  />
                </div>
              </div>

              <div className="px-6 py-4 md:px-8 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Varachha Branch</span>
                <a
                  href={CONTACT_INFO.branches[0].mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-bold text-primary hover:text-primary/80 transition-colors gap-1"
                >
                  Open in Google Maps
                  <ArrowUpRight className="h-3.5 w-3.5 text-secondary" />
                </a>
              </div>
            </div>

            {/* Branch 2 Card */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex flex-col justify-between group hover:shadow-md transition-shadow">
              <div className="p-6 md:p-8 space-y-6">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-heading text-slate-900">
                      {CONTACT_INFO.branches[1].branchName}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      {CONTACT_INFO.branches[1].address}
                    </p>
                  </div>
                </div>

                {/* Google Maps Iframe */}
                <div className="relative w-full h-[280px] bg-slate-100 rounded-2xl overflow-hidden border border-slate-100">
                  <iframe
                    src={mapEmbeds.branch2}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map embed for ShreeLabh Consultancy Branch 2 Olpad Sayan"
                  />
                </div>
              </div>

              <div className="px-6 py-4 md:px-8 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Olpad Sayan Branch</span>
                <a
                  href={CONTACT_INFO.branches[1].mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-bold text-primary hover:text-primary/80 transition-colors gap-1"
                >
                  Open in Google Maps
                  <ArrowUpRight className="h-3.5 w-3.5 text-secondary" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
