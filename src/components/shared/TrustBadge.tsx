import React from "react";
import { Users, Zap, ShieldCheck, Landmark } from "lucide-react";

interface TrustBadgeProps {
  iconType: "clients" | "speed" | "security" | "expert";
  title: string;
  subtitle: string;
}

export function TrustBadge({ iconType, title, subtitle }: TrustBadgeProps) {
  const getIcon = () => {
    switch (iconType) {
      case "clients":
        return <Users className="h-6 w-6 text-secondary" />;
      case "speed":
        return <Zap className="h-6 w-6 text-secondary" />;
      case "security":
        return <ShieldCheck className="h-6 w-6 text-secondary" />;
      default:
        return <Landmark className="h-6 w-6 text-secondary" />;
    }
  };

  return (
    <div className="flex items-center space-x-3 p-4 rounded-xl bg-white shadow-sm border border-border/60 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-primary/5 text-primary">
        {getIcon()}
      </div>
      <div>
        <h4 className="text-sm font-bold text-foreground font-heading leading-tight">{title}</h4>
        <p className="text-[11px] text-muted-foreground mt-0.5 leading-tight">{subtitle}</p>
      </div>
    </div>
  );
}

export function TrustStrip() {
  const badges = [
    { iconType: "clients", title: "1000+ Clients Served", subtitle: "Trusted by individuals & MSMEs" },
    { iconType: "speed", title: "Fast Processing", subtitle: "Quick document filings & response" },
    { iconType: "expert", title: "Expert Guidance", subtitle: "Tax & revenue law consultants" },
    { iconType: "security", title: "Secure & Confidential", subtitle: "Privacy of your financial assets" },
  ] as const;

  return (
    <div className="w-full py-8 bg-slate-50 border-y border-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, idx) => (
            <TrustBadge 
              key={idx}
              iconType={badge.iconType} 
              title={badge.title} 
              subtitle={badge.subtitle} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
