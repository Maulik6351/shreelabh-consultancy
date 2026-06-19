import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export default function PageHero({
  title,
  description,
  breadcrumbs = [],
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-primary/30 text-white pt-32 pb-16 md:pt-40 md:pb-24 border-b border-slate-900">
      
      {/* Decorative ambient background blur lights */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Fine grid design overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 max-w-3xl">
          
          {/* Breadcrumbs Navigation */}
          {breadcrumbs.length > 0 && (
            <nav className="flex items-center space-x-2 text-xs text-slate-400 font-medium tracking-wide">
              <Link 
                href="/" 
                className="flex items-center hover:text-secondary transition-colors"
              >
                <Home className="h-3.5 w-3.5 mr-1" />
                Home
              </Link>
              {breadcrumbs.map((crumb) => (
                <React.Fragment key={crumb.label}>
                  <ChevronRight className="h-3 w-3 text-slate-600" />
                  {crumb.href ? (
                    <Link 
                      href={crumb.href} 
                      className="hover:text-secondary transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-secondary font-semibold">{crumb.label}</span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white tracking-tight leading-tight">
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              {description}
            </p>
          )}

        </div>
      </div>
    </section>
  );
}
