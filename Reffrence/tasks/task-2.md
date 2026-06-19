# Task 2: Layout & Shared UI Components

## Goal
Implement the master layout skeleton, navigation, footer, and floating call/WhatsApp CTAs that appear across all pages.

## Checklist

- [ ] Design and implement the global `Navbar` component:
  - Desktop: Premium styling, dropdown list for Services, logo container, and "Get Free Consultation" CTA button.
  - Mobile: Hamburger sheet navigation with links to all services and active call links.
- [ ] Build the `Footer` component:
  - Business information dynamically referenced (logo, address, email, phone).
  - Quick Links (Home, About, Services, Contact, Terms, Privacy Policy).
  - Branch 1 and Branch 2 quick maps / address lines.
- [ ] Build Floating CTA Action buttons (visible bottom-right on all pages):
  - WhatsApp Floating Button (directly pre-fills consultation message).
  - Mobile Sticky Call Bar (displayed on mobile screens only).
- [ ] Build the following shared, reusable components:
  - `SectionHeading.tsx`: Standardized component for title, subtitle, and primary/secondary accent highlights.
  - `PageHero.tsx`: Dynamic banner for inner pages accepting title, subtitle, and breadcrumbs.
  - `TrustBadge.tsx`: Displays key indicators (e.g. "1000+ Clients Served", "Confidential & Secure").
  - `CTASection.tsx`: Action banner positioned at the bottom of all service pages.
