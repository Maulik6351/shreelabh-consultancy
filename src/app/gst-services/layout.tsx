import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GST Consultant Surat - GST Registration & Return Filing | ShreeLabh",
  description: "Fast GST registration, monthly and quarterly return filings, audits, compliance checkups, and notice handling for MSMEs and retailers in Surat, Gujarat.",
  alternates: {
    canonical: "/gst-services",
  },
};

export default function GSTLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
