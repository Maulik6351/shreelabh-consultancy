# skill.md

# ShreeLabh Consultancy - Development Rules & Standards

> Purpose:
> This file acts as the master development guide for Cursor, Antigravity, AI Agents, Developers, Designers, and Future Contributors.
>
> Every page, component, API, style, and feature must follow these standards to maintain consistency across the entire project.

---

# Project Overview

Project Name:
ShreeLabh Consultancy

Business Type:
Revenue & Tax Consultancy

Goal:
Generate leads, build trust, improve local SEO, and convert visitors into inquiries.

Website Type:
Professional Consultancy Website

Architecture:
Frontend Only + Server Actions/API Routes for Contact Forms

---

# Tech Stack

## Framework

Next.js 15 (App Router)

Reason:

* SEO Friendly
* Fast
* Server Components
* Easy Deployment

---

## Language

TypeScript

Required:
TRUE

Do NOT use JavaScript.

---

## Styling

Tailwind CSS

---

## Component Library

shadcn/ui

Use:

* Button
* Card
* Accordion
* Dialog
* Sheet
* Tabs
* Badge
* Input
* Select
* Textarea
* Toast

Avoid custom UI when shadcn component already exists.

---

## Icons

lucide-react

Do NOT use multiple icon libraries.

---

## Forms

React Hook Form
Validation:
Zod

---

## Email Service

Preferred:
Resend

Fallback:
Nodemailer

---

## Deployment

Vercel

---

# Folder Structure
src/
app/
components/
features/
services/
lib/
types/
hooks/
constants/
actions/
schemas/
public/

---

# Naming Convention
Components:
PascalCase

Example:
HeroSection.tsx

ContactForm.tsx
ServiceCard.tsx

---

Functions:
camelCase

Example:
sendLeadEmail()
validatePhone()

---

Constants:
UPPER_CASE

Example:
SERVICE_TYPES
CONTACT_INFO

---

# Design System

## Fonts

Heading:
Poppins

Body:
Inter

Never use more than 2 font families.

---

## Colors

Primary
#1D4E89

Secondary
#F59E0B

Success
#16A34A

Danger
#DC2626

Background
#F8FAFC

Text
#111827

---

# Design Principles

Always:
* Clean
* Premium
* Professional
* Modern
* Trustworthy

Avoid:
* Cheap gradients
* Neon colors
* Over animations
* Cluttered UI
* Dark theme by default

---

# Animations

Library:
Framer Motion

Rules:
Subtle Only

Allowed:
* Fade In
* Slide Up
* Hover Scale
* Hover Shadow

Not Allowed:
* Bouncing
* Continuous Animation
* Flashing Elements

---

# Layout Rules
Desktop Container:
max-width: 1280px
Centered
Consistent spacing

---

Section Padding
Desktop:
py-24

Tablet:
py-20

Mobile:
py-16

---

# SEO Standards
Every page must contain:
* Title
* Meta Description
* Open Graph
* Canonical URL

Required:
generateMetadata()

Use Next.js metadata API.

---

# Accessibility

Required
Every form field:
* Label
* Placeholder
* Error Message

Images:
Must have alt tags

Buttons:
Accessible labels

---

# Performance Standards

Target Lighthouse Score:
Performance:
95+

SEO:
100

Accessibility:
95+

Best Practices:
100

---

# Images
Format:
WebP

Use:
next/image

Never use raw img tag.

---

# Contact Form Rules
Required Fields
* Full Name
* Mobile Number
* Service
* Message

Optional
* Email

---

# Contact Form Validation
Name

Minimum:
3 Characters

Maximum:
100 Characters

---

Phone
Only Indian Mobile Number
10 Digits
Required

---

Email
Valid Email Only
Optional

---

Message
Maximum:
1000 Characters

---

# Spam Protection
Required
Implement:
* Honeypot Field
* Rate Limiting
* Server Validation

Optional:
Cloudflare Turnstile

---

# Lead Management

When inquiry submitted:
1. Validate Data
2. Send Email
4. Show Success Toast
5. Redirect User To Thank You State

---

# Email Format
Subject:
New Inquiry Received

Include:
Name
Phone
Email
Service
Message
Date
Time

---

# WhatsApp Integration
Floating Button
Visible On All Pages
Bottom Right
Always Available

---

# Mobile Experience
Priority:
HIGH

Most Users:
Mobile

Design Mobile First

---

Required:
Sticky Call Button
Sticky WhatsApp Button
Responsive Forms
Clickable Phone Numbers

---

# Pages

Required Pages
/
/about
/services
/income-tax-return
/gst-services
/home-loan
/mortgage-loan
/business-loan
/revenue-work
/legal-documentation
/contact
/privacy-policy
/terms-and-conditions

---

# Service Page Structure

Hero
Overview
Benefits
Process
Required Documents
FAQ
Lead Form
CTA
Footer
Every Service Page Must Follow Same Structure.

---

# Home Page Structure

Navbar
Hero
Trust Indicators
Services
Why Choose Us
Process
Testimonials
FAQ
Contact CTA
Footer
Never Change This Order.

---

# Reusable Components

Navbar
Footer
SectionHeading
CTASection
ServiceCard
FAQAccordion
ContactForm
WhatsAppButton
CallButton
PageHero
TestimonialCard
TrustBadge

---

# Content Guidelines
Tone:
Professional
Simple
Trustworthy
Human
Avoid:
Corporate jargon
Complex tax language
Legal confusion

---

# Error Handling
Always Show:
Friendly Messages

Example:
"Something went wrong. Please try again."

Never expose:
Server errors
Stack traces
Internal API responses

---

# Security

Never expose:
API Keys
Email Credentials
Secrets
Store:
.env.local
Only server-side access.

---

# Code Quality

Use:
ESLint
Prettier
TypeScript Strict Mode
No any types.
No console.log in production.

---

# Git Standards

Branches

main
development

feature/*

fix/*

---

Commit Format

feat:

fix:

refactor:

style:

docs:

---


Google Review Sync

---

# AI Agent Master Prompt
When generating code:

1. Follow Next.js 15 App Router.
2. Use TypeScript everywhere.
3. Use Tailwind CSS.
4. Use shadcn/ui components.
5. Create reusable components.
6. Maintain consistent spacing.
7. Mobile-first responsive design.
8. Follow SEO best practices.
9. Use semantic HTML.
10. Optimize for Lighthouse 95+.
11. Use clean folder structure.
12. Do not create duplicate components.
13. Do not hardcode contact information.
14. Read contact-details.md for all business information.
15. Read Product Requirement Document (PRD) before generating any page.
16. Follow design system strictly.
17. Ensure all pages feel like one unified product.
18. Prioritize conversion and lead generation.
19. Every page must contain CTA sections.
20. Maintain premium consultancy website standards throughout the project.

END OF FILE
