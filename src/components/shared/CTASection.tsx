import React from "react";
import Link from "next/link";
import { Phone, ArrowRight, MessageCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { CONTACT_INFO } from "@/constants/contactInfo";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export default function CTASection({
  title = "Ready to simplify your taxes and secure your loans?",
  subtitle = "Contact ShreeLabh Consultancy today. Get direct support for GST, Income Tax, Home Loans, and Legal Documentation from seasoned experts in Surat.",
}: CTASectionProps) {
  const cleanPhone = CONTACT_INFO.primaryPhone.replace(/\s+/g, "");

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-[#1A4579] to-slate-950 px-8 py-12 md:p-16 text-white shadow-2xl">
          
          {/* Ambient background decoration */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-primary/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-3xl mx-auto text-center space-y-6">
            
            {/* Tagline */}
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-secondary border border-white/10">
              Free Consultations
            </span>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight leading-tight">
              {title}
            </h2>

            {/* Subtext */}
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
              {subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              
              {/* Consultation Link */}
              <Link 
                href="/contact" 
                className={buttonVariants({ 
                  variant: "secondary", 
                  size: "lg", 
                  className: "w-full sm:w-auto font-bold shadow-lg flex items-center justify-center text-slate-900 border border-secondary bg-secondary hover:bg-secondary/90 hover:text-slate-900" 
                })}
              >
                Book Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              {/* Direct Phone Call */}
              <a 
                href={`tel:${cleanPhone}`} 
                className={buttonVariants({ 
                  variant: "outline", 
                  size: "lg", 
                  className: "w-full sm:w-auto font-bold flex items-center justify-center text-white border-white/20 hover:bg-white/10 hover:text-white transition-all shadow-md" 
                })}
              >
                <Phone className="mr-2 h-4 w-4 text-secondary" />
                Call {CONTACT_INFO.primaryPhone}
              </a>
            </div>

            {/* WhatsApp Alternative */}
            <p className="text-xs text-slate-400 font-medium">
              Or instant chat with us on{" "}
              <a 
                href={CONTACT_INFO.whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-emerald-400 hover:text-emerald-300 font-semibold underline inline-flex items-center"
              >
                <MessageCircle className="h-3.5 w-3.5 mr-1 inline" />
                WhatsApp
              </a>
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
