# Task 6: Lead Generation Forms, Validation & Email Integrations

## Goal
Establish a robust validation schema, anti-spam mechanisms, and server integrations to deliver user inquiries directly to the consulting team.

## Checklist

- [ ] Create the lead contact form validation schema using Zod:
  - `fullName`: Required, 3 to 100 characters.
  - `mobileNumber`: Required, matches 10-digit Indian numbers (`^[6-9]\d{9}$`).
  - `email`: Optional, validated format if provided.
  - `service`: Selected drop-down option from the list of services.
  - `message`: Optional, text field up to 1000 characters.
- [ ] Implement a hidden Honeypot spam protection input field inside the form layout.
- [ ] Build Next.js Server Action or API route (`src/app/actions/send-lead.ts` or `src/app/api/contact/route.ts`) to validate inputs server-side.
- [ ] Integrate **Resend Email Service** (or fallback to Nodemailer) to format and send notification emails to `shreelabhconsultancy@yahoo.in` including:
  - Submission date & time
  - Name, Phone, Email, Selected Service, Message text.
- [ ] Set up client-side lead handling:
  - Trigger successful submission popup toast notification.
  - Transition or redirect the user to a "Thank You" state page.
  - Render a post-submission CTA offering to immediately connect details directly to Vivek Vekariya's WhatsApp.
