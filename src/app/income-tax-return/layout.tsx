import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Income Tax Consultant Surat - File ITR A.Y. 2026-27 | ShreeLabh",
  description: "Minimize tax liabilities and file your ITR accurately for AY 2026-27. Connect with Vivek Vekariya, Surat's premier income tax filing and planning advisor.",
  alternates: {
    canonical: "/income-tax-return",
  },
};

export default function IncomeTaxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
