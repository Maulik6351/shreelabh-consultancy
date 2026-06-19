"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MessageCircle, Phone, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CONTACT_INFO } from "@/constants/contactInfo";

export default function FloatingCTA() {
  const [showTooltip, setShowTooltip] = useState(false);

  // Auto show a tooltip after 4 seconds of page load to catch user's attention
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);

    // Hide it again after 8 seconds
    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 12000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  const cleanPhone = CONTACT_INFO.primaryPhone.replace(/\s+/g, "");

  return (
    <>
      {/* 1. Floating WhatsApp Button for Desktop/Tablet (and positioned higher on Mobile to avoid overlapping sticky bar) */}
      <div className="fixed z-40 right-4 bottom-20 md:right-8 md:bottom-8">
        <div className="relative flex items-center">
          
          {/* Animated Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: 20 }}
                className="absolute right-16 bg-white text-slate-800 text-xs font-semibold py-2 px-3 rounded-lg shadow-xl border border-slate-100 whitespace-nowrap hidden sm:block"
              >
                <div className="relative">
                  Chat with an Expert
                  {/* Tooltip arrow */}
                  <div className="absolute top-1/2 -translate-y-1/2 -right-[18px] w-0 h-0 border-8 border-transparent border-l-white" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating WhatsApp Action Button */}
          <motion.a
            href={CONTACT_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl transition-colors cursor-pointer"
            aria-label="Contact us on WhatsApp"
          >
            <MessageCircle className="h-6 w-6 md:h-7 md:w-7 fill-white stroke-emerald-500" />
          </motion.a>
        </div>
      </div>

      {/* 2. Mobile Sticky Call Bar (displayed on screens below 768px (md)) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background border-t border-border flex items-center h-16 shadow-2xl">
        
        {/* Left Action: Direct Call */}
        <a
          href={`tel:${cleanPhone}`}
          className="flex-1 flex flex-col items-center justify-center h-full text-foreground hover:bg-slate-50 transition-colors"
        >
          <Phone className="h-5 w-5 text-primary" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mt-1">
            Call Now
          </span>
        </a>

        {/* Center Action: WhatsApp */}
        <a
          href={CONTACT_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center h-full text-foreground hover:bg-slate-50 transition-colors border-x border-border"
        >
          <MessageCircle className="h-5 w-5 text-emerald-500 fill-emerald-500/10" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mt-1">
            WhatsApp
          </span>
        </a>

        {/* Right Action: Free Consultation Inquiry Form link */}
        <Link
          href="/contact"
          className="flex-1 flex flex-col items-center justify-center h-full text-foreground hover:bg-slate-50 transition-colors"
        >
          <FileText className="h-5 w-5 text-secondary" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mt-1">
            Inquiry
          </span>
        </Link>
      </div>
    </>
  );
}
