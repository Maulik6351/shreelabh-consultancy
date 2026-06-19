"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { CONTACT_INFO } from "@/constants/contactInfo";

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact Us", href: "/contact" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
  ];

  const coreServices = [
    { label: "Income Tax Filing", href: "/income-tax-return" },
    { label: "GST Return Filing", href: "/gst-services" },
    { label: "Home Loan Services", href: "/home-loan" },
    { label: "Mortgage Loan (LAP)", href: "/mortgage-loan" },
    { label: "Business Loans", href: "/business-loan" },
    { label: "Revenue & Legal Work", href: "/revenue-work" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-200 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-slate-800 pb-12">
          
          {/* Column 1: Brand & Intro */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary text-primary-foreground font-bold text-lg shadow-md">
                SL
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-white font-heading">
                  Shree<span className="text-secondary">Labh</span>
                </span>
                <span className="text-[9px] font-medium uppercase tracking-wider text-slate-400 -mt-1">
                  Consultancy
                </span>
              </div>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              ShreeLabh Consultancy is a leading Tax, Revenue, and Loan consulting firm in Surat, Gujarat. 
              We provide professional advice, fast processing, and end-to-end support for individuals and businesses.
            </p>
            <div className="space-y-2 pt-2 text-xs">
              <a 
                href={`tel:${CONTACT_INFO.primaryPhone.replace(/\s+/g, "")}`}
                className="flex items-center hover:text-secondary transition-colors"
              >
                <Phone className="h-4 w-4 text-secondary mr-3 shrink-0" />
                {CONTACT_INFO.primaryPhone}
              </a>
              <a 
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center hover:text-secondary transition-colors"
              >
                <Mail className="h-4 w-4 text-secondary mr-3 shrink-0" />
                {CONTACT_INFO.email}
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white font-heading">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-secondary hover:underline transition-all">
                    {link.label}
                  </Link>
                </li>
              ))}
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-secondary hover:underline transition-all">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white font-heading">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-xs">
              {coreServices.map((service) => (
                <li key={service.label}>
                  <Link href={service.href} className="hover:text-secondary hover:underline transition-all">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Branches Information */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white font-heading">
              Office Locations
            </h3>
            <div className="space-y-4 text-xs">
              {CONTACT_INFO.branches.map((branch) => (
                <div key={branch.branchName} className="space-y-1.5 border-l border-slate-800 pl-3">
                  <div className="font-semibold text-white flex items-center justify-between">
                    <span>{branch.branchName}</span>
                    <a 
                      href={branch.mapLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-white transition-colors p-0.5"
                      title="Open in Google Maps"
                    >
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-normal flex items-start">
                    <MapPin className="h-3 w-3 text-secondary mr-2 mt-0.5 shrink-0" />
                    <span>{branch.address}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-[11px] text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} ShreeLabh Consultancy. All Rights Reserved.
          </p>
          <p className="mt-2 sm:mt-0">
            Designed for Trust & Reliability
          </p>
        </div>

      </div>
    </footer>
  );
}
