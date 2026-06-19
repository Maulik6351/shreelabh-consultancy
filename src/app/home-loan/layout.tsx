import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Loan Consultant Surat - Quick Home Finance & Balance Transfers | ShreeLabh",
  description: "Secure competitive interest rates on new home loans, top-ups, and balance transfers. ShreeLabh Consultancy connects you with top public and private banks in Surat.",
  alternates: {
    canonical: "/home-loan",
  },
};

export default function HomeLoanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
