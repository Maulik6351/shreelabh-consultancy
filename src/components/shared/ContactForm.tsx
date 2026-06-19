"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Send, CheckCircle2, MessageCircle, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT_INFO } from "@/constants/contactInfo";

// Zod Schema for Validation according to skill.md
const contactSchema = z.object({
  fullName: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(100, "Name must not exceed 100 characters")
    .trim(),
  mobileNumber: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian mobile number"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .or(z.literal("")), // optional but validates if filled
  service: z.string().min(1, "Please select a service"),
  message: z.string().max(1000, "Message must not exceed 1000 characters").optional(),
  honeypot: z.string().max(0, { message: "Spam detected" }).optional(), // Honeypot field
});

type ContactFormValues = z.infer<typeof contactSchema>;

interface ContactFormProps {
  defaultService?: string;
}

export default function ContactForm({ defaultService = "" }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  const serviceOptions = [
    "Income Tax Return",
    "GST Services",
    "Home Loan",
    "Mortgage Loan",
    "Business Loan",
    "Personal Loan",
    "Loan Against Property",
    "Revenue Work",
    "Legal Documentation",
    "Sale Deed",
    "Affidavit",
    "Power Of Attorney",
    "Income Certificate",
    "Udyam Registration",
    "Partnership Registration",
    "Property Documentation",
    "Other",
  ];

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      mobileNumber: "",
      email: "",
      service: defaultService,
      message: "",
      honeypot: "",
    },
  });

  const selectedService = watch("service");

  const onSubmit = async (data: ContactFormValues) => {
    // Check honeypot for bots
    if (data.honeypot) {
      toast.error("Spam submission blocked.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API form submission via Resend / Database
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("Inquiry submitted successfully!");
      setSubmittedName(data.fullName);
      setIsSubmitted(true);
      reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    // Custom WhatsApp message pre-fill
    const waText = encodeURIComponent(
      `Hello Vivek, my name is ${submittedName}. I just submitted an inquiry on your website for "${selectedService || defaultService || "Consultancy Services"}". I would like to discuss it further.`
    );
    const waUrl = `https://wa.me/91${CONTACT_INFO.whatsappNumber}?text=${waText}`;

    return (
      <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-slate-100 shadow-xl text-center space-y-6 animate-fade-in">
        <div className="mx-auto w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center border border-emerald-100">
          <CheckCircle2 className="w-8 h-8 text-emerald-500" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-slate-900 font-heading">Thank You, {submittedName}!</h3>
          <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
            Your inquiry has been received. Our team will verify your details and call you back shortly.
          </p>
        </div>
        
        <div className="pt-4 border-t border-slate-100 space-y-3">
          <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
            Want to speed up your inquiry?
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold transition-all shadow-lg hover:shadow-emerald-500/20 group gap-2"
          >
            <MessageCircle className="w-5 h-5 fill-white stroke-emerald-500 group-hover:scale-110 transition-transform" />
            Connect via WhatsApp
          </a>
          <a
            href={`tel:+91${CONTACT_INFO.whatsappNumber}`}
            className="inline-flex items-center justify-center w-full px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold transition-all shadow-lg gap-2"
          >
            <PhoneCall className="w-4 h-4 text-secondary group-hover:scale-110 transition-transform" />
            Call Lead Consultant
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-8 md:p-10 rounded-3xl border border-border/80 shadow-2xl shadow-slate-100/50 space-y-6 relative overflow-hidden"
    >
      {/* Decorative accent top line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-primary/40" />

      {/* Honeypot field (hidden) */}
      <div className="hidden">
        <input type="text" {...register("honeypot")} tabIndex={-1} autoComplete="off" />
      </div>

      <div className="space-y-1">
        <h3 className="text-xl md:text-2xl font-black text-foreground font-heading">
          Get Free Consultation
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Submit your details below and our expert consultants will contact you shortly.
        </p>
      </div>

      <div className="space-y-4">
        {/* Full Name */}
        <div className="space-y-1.5">
          <label htmlFor="fullName" className="text-xs font-bold text-foreground">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <Input
            id="fullName"
            type="text"
            placeholder="John Doe"
            className={`h-11 rounded-xl bg-slate-50 border-slate-200 focus:bg-white focus:ring-primary focus:border-primary transition-all ${
              errors.fullName ? "border-rose-500 focus:ring-rose-500 focus:border-rose-500" : ""
            }`}
            {...register("fullName")}
          />
          {errors.fullName && (
            <p className="text-xs font-semibold text-rose-500 mt-1">{errors.fullName.message}</p>
          )}
        </div>

        {/* Mobile Number */}
        <div className="space-y-1.5">
          <label htmlFor="mobileNumber" className="text-xs font-bold text-foreground">
            Mobile Number <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
              +91
            </span>
            <Input
              id="mobileNumber"
              type="tel"
              placeholder="9876543210"
              className={`h-11 pl-12 rounded-xl bg-slate-50 border-slate-200 focus:bg-white focus:ring-primary focus:border-primary transition-all ${
                errors.mobileNumber ? "border-rose-500 focus:ring-rose-500" : ""
              }`}
              {...register("mobileNumber")}
            />
          </div>
          {errors.mobileNumber && (
            <p className="text-xs font-semibold text-rose-500 mt-1">{errors.mobileNumber.message}</p>
          )}
        </div>

        {/* Email Address */}
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-xs font-bold text-foreground">
            Email Address <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            className={`h-11 rounded-xl bg-slate-50 border-slate-200 focus:bg-white focus:ring-primary focus:border-primary transition-all ${
              errors.email ? "border-rose-500 focus:ring-rose-500" : ""
            }`}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs font-semibold text-rose-500 mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Service */}
        <div className="space-y-1.5">
          <label htmlFor="service" className="text-xs font-bold text-foreground">
            Required Service <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <select
              id="service"
              className={`w-full h-11 px-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all text-sm text-foreground appearance-none ${
                errors.service ? "border-rose-500 focus:ring-rose-500" : ""
              }`}
              value={selectedService}
              onChange={(e) => setValue("service", e.target.value, { shouldValidate: true })}
            >
              <option value="" disabled>Select a Service</option>
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>
          {errors.service && (
            <p className="text-xs font-semibold text-rose-500 mt-1">{errors.service.message}</p>
          )}
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <label htmlFor="message" className="text-xs font-bold text-foreground">
            Message <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <Textarea
            id="message"
            placeholder="Tell us about your requirements..."
            className={`min-h-[100px] rounded-xl bg-slate-50 border-slate-200 focus:bg-white focus:ring-primary focus:border-primary transition-all resize-none ${
              errors.message ? "border-rose-500 focus:ring-rose-500" : ""
            }`}
            maxLength={1000}
            {...register("message")}
          />
          {errors.message && (
            <p className="text-xs font-semibold text-rose-500 mt-1">{errors.message.message}</p>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-12 rounded-xl bg-primary hover:bg-primary/95 text-white font-bold shadow-lg hover:shadow-primary/10 transition-all flex items-center justify-center gap-2 mt-2"
      >
        {isSubmitting ? (
          <>
            <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Submitting Inquiry...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Inquiry Request
          </>
        )}
      </Button>
    </form>
  );
}
