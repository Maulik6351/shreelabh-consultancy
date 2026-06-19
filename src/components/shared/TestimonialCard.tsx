"use client";

import React from "react";
import { Star } from "lucide-react";

// Simple fallback avatar because shadcn avatar might require registry install, we can build a pure React one.
// Wait! Let's check if Avatar components exist. We didn't list Avatar in components/ui, we had accordion, badge, button, card, dialog, input, select, sheet, sonner, tabs, textarea.
// So let's build a pure React avatar with initials and styled colors to keep it simple and robust, without external ui package errors!
interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating?: number;
  time?: string;
}

export default function TestimonialCard({ 
  name, 
  role, 
  content, 
  rating = 5, 
  time = "1 month ago" 
}: TestimonialCardProps) {
  
  // Get initials
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  // Curated gradient list for avatars
  const avatarColors = [
    "bg-gradient-to-tr from-blue-500 to-indigo-600",
    "bg-gradient-to-tr from-emerald-500 to-teal-600",
    "bg-gradient-to-tr from-amber-500 to-orange-600",
    "bg-gradient-to-tr from-rose-500 to-pink-600",
    "bg-gradient-to-tr from-violet-500 to-purple-600"
  ];
  
  // Hash name to pick a stable color index
  const colorIndex = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) % avatarColors.length;
  const avatarBg = avatarColors[colorIndex];

  return (
    <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between space-y-6">
      
      {/* Stars and Google logo row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star 
              key={i} 
              className={`w-4 h-4 ${i < rating ? "text-amber-400 fill-amber-400" : "text-slate-200"}`} 
            />
          ))}
        </div>
        {/* Google G icon representing local verified reviews */}
        <div className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded-full border border-slate-100 text-[10px] font-bold text-slate-500">
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              fill="#EA4335"
            />
          </svg>
          Google Review
        </div>
      </div>

      {/* Review Text */}
      <p className="text-xs md:text-sm text-slate-700 italic leading-relaxed font-medium">
        &ldquo;{content}&rdquo;
      </p>

      {/* User Information */}
      <div className="flex items-center gap-3.5 pt-4 border-t border-slate-50">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold ${avatarBg} shadow-inner`}>
          {initials}
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-bold text-slate-900 leading-none">{name}</span>
          <span className="text-[10px] text-muted-foreground mt-1 leading-none">{role}</span>
          <span className="text-[9px] text-slate-400 mt-0.5 leading-none">{time}</span>
        </div>
      </div>

    </div>
  );
}
