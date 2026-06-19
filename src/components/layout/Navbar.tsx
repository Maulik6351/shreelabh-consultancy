"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, 
  ChevronDown, 
  Phone, 
  Mail, 
  TrendingUp, 
  Building, 
  Scale, 
  FileText
} from "lucide-react";
import { CONTACT_INFO, SERVICES_MENU } from "@/constants/contactInfo";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";


// Helper to match service icons based on category
const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Tax Services":
      return <FileText className="h-5 w-5 text-primary" />;
    case "GST Services":
      return <TrendingUp className="h-5 w-5 text-primary" />;
    case "Loan Services":
      return <Building className="h-5 w-5 text-primary" />;
    default:
      return <Scale className="h-5 w-5 text-primary" />;
  }
};

export default function Navbar() {
  const pathname = usePathname();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  // Monitor scroll to apply sticky header styling (glassmorphism on scroll)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "#", hasDropdown: true },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground font-bold text-xl shadow-lg transition-transform group-hover:scale-105">
              SL
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-secondary rounded-full border-2 border-background" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-foreground font-heading">
                Shree<span className="text-secondary">Labh</span>
              </span>
              <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground -mt-1">
                Consultancy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button
                      className={`flex items-center text-sm font-semibold transition-colors focus:outline-none py-2 ${
                        pathname.startsWith("/income-tax") ||
                        pathname.startsWith("/gst") ||
                        pathname.startsWith("/home-loan") ||
                        pathname.startsWith("/mortgage-loan") ||
                        pathname.startsWith("/business-loan") ||
                        pathname.startsWith("/revenue") ||
                        pathname.startsWith("/legal")
                          ? "text-primary"
                          : "text-foreground/80 hover:text-primary"
                      }`}
                    >
                      {link.label}
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} />
                    </button>

                    {/* Services Dropdown Panel */}
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 15 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-background border border-border shadow-xl rounded-xl overflow-hidden grid grid-cols-2 p-6 gap-6"
                        >
                          {SERVICES_MENU.map((menuSection) => (
                            <div key={menuSection.category} className="space-y-3">
                              <div className="flex items-center space-x-2 border-b border-border/60 pb-2">
                                {getCategoryIcon(menuSection.category)}
                                <span className="font-bold text-sm tracking-wide text-foreground font-heading">
                                  {menuSection.category}
                                </span>
                              </div>
                              <ul className="space-y-2">
                                {menuSection.items.map((item) => (
                                  <li key={item.name}>
                                    <Link
                                      href={item.href}
                                      className="block p-2 rounded-lg hover:bg-muted/80 transition-colors group"
                                      onClick={() => setIsServicesOpen(false)}
                                    >
                                      <span className="block text-xs font-semibold text-foreground group-hover:text-primary transition-colors">
                                        {item.name}
                                      </span>
                                      <span className="block text-[10px] text-muted-foreground mt-0.5 line-clamp-1">
                                        {item.description}
                                      </span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors py-2 ${
                    isActive ? "text-primary border-b-2 border-primary" : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA Section */}
          <div className="hidden md:flex items-center space-x-4">
            <a href={`tel:${CONTACT_INFO.primaryPhone.replace(/\s+/g, "")}`} className="flex items-center text-sm font-semibold text-foreground hover:text-primary transition-colors">
              <Phone className="h-4 w-4 text-secondary mr-2" />
              {CONTACT_INFO.primaryPhone}
            </a>
            <Link 
              href="/contact" 
              className={buttonVariants({ 
                variant: "default", 
                size: "sm", 
                className: "font-semibold shadow-md bg-primary hover:bg-primary/95 text-white hover:text-white" 
              })}
            >
              Get Free Consultation
            </Link>
          </div>

          {/* Mobile Navigation Trigger */}
          <div className="md:hidden flex items-center space-x-4">
            <a href={`tel:${CONTACT_INFO.primaryPhone.replace(/\s+/g, "")}`} className="p-2 rounded-lg bg-muted text-primary hover:text-primary-foreground hover:bg-primary transition-all">
              <Phone className="h-4 w-4" />
            </a>

            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger render={<Button variant="ghost" size="icon" className="text-foreground" />}>
                <Menu className="h-6 w-6" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] p-6 flex flex-col justify-between">
                <div className="space-y-6">
                  <SheetHeader className="text-left border-b border-border/60 pb-4">
                    <SheetTitle>
                      <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground font-bold text-lg shadow-md">
                          SL
                        </div>
                        <div className="flex flex-col">
                          <span className="text-lg font-bold tracking-tight text-foreground font-heading">
                            Shree<span className="text-secondary">Labh</span>
                          </span>
                          <span className="text-[9px] font-medium uppercase tracking-wider text-muted-foreground -mt-1">
                            Consultancy
                          </span>
                        </div>
                      </Link>
                    </SheetTitle>
                  </SheetHeader>

                  <div className="flex flex-col space-y-4 py-2">
                    <Link
                      href="/"
                      className={`text-base font-semibold py-1 border-b border-border/20 ${pathname === "/" ? "text-primary" : "text-foreground/80"}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Home
                    </Link>
                    <Link
                      href="/about"
                      className={`text-base font-semibold py-1 border-b border-border/20 ${pathname === "/about" ? "text-primary" : "text-foreground/80"}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      About Us
                    </Link>

                    {/* Services Dropdown for Mobile (Custom state toggle) */}
                    <div className="space-y-2 border-b border-border/20 py-1">
                      <button
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        className={`flex items-center justify-between w-full text-base font-semibold hover:text-primary ${
                          pathname.startsWith("/income-tax") ||
                          pathname.startsWith("/gst") ||
                          pathname.startsWith("/home-loan") ||
                          pathname.startsWith("/mortgage-loan") ||
                          pathname.startsWith("/business-loan") ||
                          pathname.startsWith("/revenue") ||
                          pathname.startsWith("/legal")
                            ? "text-primary"
                            : "text-foreground/80"
                        }`}
                      >
                        <span>Services</span>
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180" : ""}`} />
                      </button>
                      
                      <AnimatePresence>
                        {isMobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-2 pt-2 space-y-4"
                          >
                            {SERVICES_MENU.map((menuSection) => (
                              <div key={menuSection.category} className="space-y-2">
                                <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                                  {menuSection.category}
                                </div>
                                <div className="flex flex-col space-y-2 pl-2">
                                  {menuSection.items.map((item) => (
                                    <Link
                                      key={item.name}
                                      href={item.href}
                                      className={`text-sm font-medium py-1 transition-colors hover:text-primary ${pathname === item.href ? "text-primary font-semibold" : "text-foreground/70"}`}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                      {item.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <Link
                      href="/contact"
                      className={`text-base font-semibold py-1 border-b border-border/20 ${pathname === "/contact" ? "text-primary" : "text-foreground/80"}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>

                {/* Mobile Drawer Footer with Contact Information */}
                <div className="space-y-4 pt-6 border-t border-border/60">
                  <div className="space-y-2">
                    <a
                      href={`tel:${CONTACT_INFO.primaryPhone.replace(/\s+/g, "")}`}
                      className="flex items-center text-sm font-semibold text-foreground hover:text-primary py-2 px-3 rounded-lg bg-muted/60"
                    >
                      <Phone className="h-4 w-4 text-secondary mr-3" />
                      {CONTACT_INFO.primaryPhone}
                    </a>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="flex items-center text-sm font-semibold text-foreground hover:text-primary py-2 px-3 rounded-lg bg-muted/60"
                    >
                      <Mail className="h-4 w-4 text-secondary mr-3" />
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                  <Link 
                    href="/contact" 
                    className={buttonVariants({ 
                      variant: "default", 
                      className: "w-full font-semibold bg-primary hover:bg-primary/95 text-white hover:text-white flex items-center justify-center h-9" 
                    })}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Free Consultation
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </header>
  );
}
