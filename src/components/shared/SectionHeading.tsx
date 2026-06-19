import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string; // Supports "|" character to highlight the second part in secondary color
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  // If the title contains a "|", split it to highlight the second portion in secondary amber color
  const titleParts = title.split("|");

  return (
    <div
      className={cn(
        "max-w-3xl mb-12 md:mb-16",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {/* Dynamic Badge Pill */}
      {badge && (
        <span className="inline-block px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 mb-4 animate-fade-in">
          {badge}
        </span>
      )}

      {/* Styled Title with optional highlighted second part */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-foreground leading-tight tracking-tight">
        {titleParts[0]}
        {titleParts.length > 1 && (
          <span className="text-secondary ml-2 font-black">{titleParts[1]}</span>
        )}
      </h2>

      {/* Underline separator */}
      <div
        className={cn(
          "w-12 h-1 bg-secondary rounded-full mt-4",
          align === "center" ? "mx-auto" : "mr-auto"
        )}
      />

      {/* Subtitle Description */}
      {subtitle && (
        <p className="mt-5 text-sm sm:text-base text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
