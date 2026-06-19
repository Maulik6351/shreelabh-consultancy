# Task 7: SEO, Performance Optimization, and Production Readiness

## Goal
Audit, secure, optimize, and verify the website configurations for production release.

## Checklist

- [ ] Set up the Next.js static Metadata configuration in `src/app/layout.tsx` (Global Title, Meta Descriptions, Canonical URLs, and Favicons).
- [ ] Configure page-specific metadata for SEO using the Next.js `generateMetadata()` API, targeting local SEO keywords (e.g. "GST Consultant Surat", "Income Tax Consultant Surat", "Home Loan Consultant Surat").
- [ ] Implement Open Graph (OG) tags and Twitter card configurations.
- [ ] Create dynamic `sitemap.xml` and static `robots.txt` configuration routing.
- [ ] Convert any local images or templates into lightweight `.webp` formats.
- [ ] Audit all image components ensuring usage of `next/image` to prevent layout shifts.
- [ ] Audit interactive features and forms for Accessibility standards (ARIA labels, error announcements, clear color contrasts).
- [ ] Run verification compile (`npm run build`) to ensure build runs cleanly without warnings or errors.
- [ ] Audit deployment on Vercel test environment and verify performance scores match target (95+ Lighthouse).
