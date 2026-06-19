import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Loan Consultant Surat - MSME & Working Capital Funding | ShreeLabh",
  description: "Fuel your business growth with MSME loans, machinery funding, and working capital syndication. ShreeLabh Consultancy manages bank files end-to-end in Surat.",
  alternates: {
    canonical: "/business-loan",
  },
};

export default function BusinessLoanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
