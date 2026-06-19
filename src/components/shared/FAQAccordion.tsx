"use client";

import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export default function FAQAccordion() {
  const faqs: FAQItem[] = [
    {
      id: "faq-1",
      question: "What primary services does ShreeLabh Consultancy offer?",
      answer: "We offer comprehensive financial compliance and legal solutions including Income Tax Return (ITR) filing, GST registration & return compliance, Home Loans, Mortgage Loans (Loan Against Property), Revenue services (income certificates, land records, mutation entries), and Legal Documentation (agreements, sale deeds, power of attorney)."
    },
    {
      id: "faq-2",
      question: "What documents are required to file my Income Tax Return (ITR)?",
      answer: "To file your ITR, you typically need: PAN card, Aadhaar card, Form 16 (for salaried persons), bank account statements, investment proofs (under 80C, 80D, etc.), home loan interest certificate (if applicable), and profit & loss statements/balance sheets (for businesses)."
    },
    {
      id: "faq-3",
      question: "How long does it take to obtain a GST registration?",
      answer: "A new GST registration typically takes between 3 to 7 working days, depending on the response time of the GST department and document validation. We handle the entire application and document verification process to ensure zero delay."
    },
    {
      id: "faq-4",
      question: "What is a Mortgage Loan / Loan Against Property (LAP)?",
      answer: "A Mortgage Loan (or LAP) is a secured loan where you pledge your residential or commercial property as collateral to a bank or financial institution. This allows you to secure larger amounts of funding for business expansion, personal needs, or working capital at much lower interest rates than unsecured loans."
    },
    {
      id: "faq-5",
      question: "How does your revenue department service help individuals?",
      answer: "Our team guides you through the complex processes of property verification, retrieving old and current land revenue records, filing for Mutation Entries (Hak Patrak), and securing official government certificates like Income Certificates and Non-Creamy Layer Certificates."
    },
    {
      id: "faq-6",
      question: "Can you help draft agreements and execute legal stamp papers?",
      answer: "Yes, we draft all standard legal documents including Sale Deeds, Rental/Lease Agreements, Partnership Agreements, Affidavits, and Power of Attorney (POA). We also help coordinate notary public attestations and stamp duty payments."
    },
    {
      id: "faq-7",
      question: "How do you calculate your consultancy fees?",
      answer: "Our pricing structure is completely transparent and depends on the specific service required. Simple tax returns and certificate works have standard flat rates, while loan syndications and complex land/revenue cases are charged on a project-by-project basis. We discuss all costs upfront with zero hidden charges."
    },
    {
      id: "faq-8",
      question: "Do I need to visit your office physically to submit my documents?",
      answer: "Not necessarily. For your convenience, we support completely digital document collection. You can share scanned documents securely through our email or WhatsApp. However, you are always welcome to visit our Surat offices if you prefer in-person consultation."
    },
    {
      id: "faq-9",
      question: "How does the loan application process work with ShreeLabh?",
      answer: "We follow a 4-step pipeline: (1) Free initial eligibility assessment, (2) Document gathering & verification, (3) Direct submission to multiple banks for best interest rate comparison, and (4) Coordination with the bank for sanction and quick disbursement."
    },
    {
      id: "faq-10",
      question: "Is my personal and financial information kept confidential?",
      answer: "Absolutely. Confidentiality is one of our primary core values. We protect all documents, tax statements, and property records with strict data safety protocols. Your information is never shared with any unauthorized third parties."
    },
    {
      id: "faq-11",
      question: "What are the office hours for ShreeLabh Consultancy?",
      answer: "Our office is open from Monday to Saturday, between 09:00 AM and 07:00 PM. We are closed on Sundays and government holidays."
    },
    {
      id: "faq-12",
      question: "How do I book a free initial consultation?",
      answer: "You can book a free consultation by submitting the contact form on our website, calling us directly at +91 9714595920, or sending a message on WhatsApp. Our representative will contact you within a few business hours."
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Accordion defaultValue={["faq-1"]} className="space-y-4">
        {faqs.map((faq) => (
          <AccordionItem 
            key={faq.id} 
            value={faq.id}
            className="bg-white px-6 py-1.5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <AccordionTrigger className="text-sm md:text-base font-bold font-heading text-slate-800 hover:text-primary transition-colors py-4">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-xs md:text-sm text-slate-600 leading-relaxed pt-1 pb-4">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
