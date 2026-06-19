"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FileText, 
  TrendingUp, 
  Home, 
  Building, 
  Landmark, 
  Scale, 
  ArrowRight,
  Briefcase
} from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: "tax" | "gst" | "home-loan" | "mortgage" | "revenue" | "legal" | "business-loan";
  href: string;
}

const iconMap = {
  tax: <FileText className="h-6 w-6" />,
  gst: <TrendingUp className="h-6 w-6" />,
  "home-loan": <Home className="h-6 w-6" />,
  mortgage: <Building className="h-6 w-6" />,
  revenue: <Landmark className="h-6 w-6" />,
  legal: <Scale className="h-6 w-6" />,
  "business-loan": <Briefcase className="h-6 w-6" />
};

export default function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-200 transition-all flex flex-col justify-between"
    >
      {/* Decorative colored corner bar */}
      <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-transparent group-hover:bg-primary transition-all duration-300" />
      
      <div className="space-y-4">
        {/* Icon container */}
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-50 text-primary border border-slate-100 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 shadow-inner">
          {iconMap[icon] || <FileText className="h-6 w-6" />}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold font-heading text-slate-900 group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-xs text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>

      {/* Button link */}
      <div className="pt-6 mt-6 border-t border-slate-50 flex items-center justify-between">
        <Link 
          href={href} 
          className="text-xs font-bold text-slate-800 group-hover:text-primary transition-colors inline-flex items-center gap-1.5"
        >
          Explore Details
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
