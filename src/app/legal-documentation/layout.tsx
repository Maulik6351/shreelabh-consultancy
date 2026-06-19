import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Documentation Surat - Sale Deed & Affidavit Drafting | ShreeLabh",
  description: "Draft legally robust sale deeds, agreements, powers of attorney, affidavits, and notary approvals in Surat. Handled securely by lead documentation expert Pravinbhai Sudani.",
  alternates: {
    canonical: "/legal-documentation",
  },
};

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
