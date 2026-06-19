# Task 1: Project Initialization & Configurations

## Goal
Set up the core workspace repository using Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui. Configure the master design system.

## Checklist

- [ ] Initialize Next.js 15 App in the workspace root directory using `--typescript`, `--tailwind`, `--eslint`, `--app`, and `src/` directory.
- [ ] Configure `tsconfig.json` for strict mode and path aliases.
- [ ] Install essential project dependencies:
  - `framer-motion` (for micro-animations)
  - `lucide-react` (for icons)
  - `react-hook-form`
  - `zod`
- [ ] Initialize `shadcn/ui` and configure core components (Button, Card, Accordion, Dialog, Input, Select, Textarea, Toast, Tabs, Badge).
- [ ] Set up the master Design System variables in `src/app/globals.css`:
  - Primary: `#1D4E89` (Deep Financial Blue)
  - Secondary: `#F59E0B` (Growth Amber)
  - Success: `#16A34A`
  - Danger: `#DC2626`
  - Background: `#F8FAFC`
  - Text: `#111827`
- [ ] Configure Google Fonts inside `src/app/layout.tsx`:
  - Headings: **Poppins** (weights 600, 700, 800)
  - Body: **Inter** (weights 400, 500, 600)
- [ ] Create a `.env.local` template file for local environment configurations (Resend API key, database URI, etc.).
- [ ] Run a test compile to verify configuration setup.
