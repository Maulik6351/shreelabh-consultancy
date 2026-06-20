"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MessageCircle, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CONTACT_INFO } from "@/constants/contactInfo";

export default function FloatingCTA() {
  const [showWsTooltip, setShowWsTooltip] = useState(false);
  const [showInqTooltip, setShowInqTooltip] = useState(false);

  // Auto show the WhatsApp tooltip after 4 seconds of page load to catch user's attention
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWsTooltip(true);
    }, 4000);

    // Hide it after 12 seconds
    const hideTimer = setTimeout(() => {
      setShowWsTooltip(false);
    }, 12000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
      {/* Floating Buttons Group Stacked Vertically */}
      <div className="fixed z-40 right-4 bottom-4 md:right-8 md:bottom-8 flex flex-col gap-3.5 items-end">
        
        {/* 1. Inquiry/Contact Form Button */}
        <div className="relative flex items-center justify-end">
          {/* Animated Tooltip */}
          <AnimatePresence>
            {showInqTooltip && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: 20 }}
                className="absolute right-14 md:right-16 bg-white text-slate-800 text-xs font-semibold py-2 px-3 rounded-lg shadow-xl border border-slate-100 whitespace-nowrap hidden sm:block"
              >
                <div className="relative">
                  Send Inquiry Form
                  {/* Tooltip arrow */}
                  <div className="absolute top-1/2 -translate-y-1/2 -right-[18px] w-0 h-0 border-8 border-transparent border-l-white" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating Action Button */}
          <Link href="/contact" passHref legacyBehavior>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setShowInqTooltip(true)}
              onMouseLeave={() => setShowInqTooltip(false)}
              className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary hover:bg-primary/95 text-white shadow-2xl transition-colors cursor-pointer border border-white/10"
              aria-label="Send Inquiry Form"
            >
              <FileText className="h-5 w-5 md:h-6 md:w-6 text-white" />
            </motion.a>
          </Link>
        </div>

        {/* 2. WhatsApp Button */}
        <div className="relative flex items-center justify-end">
          {/* Animated Tooltip */}
          <AnimatePresence>
            {showWsTooltip && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: 20 }}
                className="absolute right-14 md:right-16 bg-white text-slate-800 text-xs font-semibold py-2 px-3 rounded-lg shadow-xl border border-slate-100 whitespace-nowrap hidden sm:block"
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
            onMouseEnter={() => setShowWsTooltip(true)}
            onMouseLeave={() => setShowWsTooltip(false)}
            className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl transition-colors cursor-pointer"
            aria-label="Contact us on WhatsApp"
          >
            <MessageCircle className="h-6 w-6 md:h-7 md:w-7 fill-white stroke-emerald-500" />
          </motion.a>
        </div>

      </div>
    </>
  );
}
