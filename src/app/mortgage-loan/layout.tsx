import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mortgage Loan Consultant Surat - Loan Against Property (LAP) | ShreeLabh",
  description: "Unlock the value of your commercial or residential property in Surat with quick mortgage loan options and professional documentation syndication.",
  alternates: {
    canonical: "/mortgage-loan",
  },
};

export default function MortgageLoanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
