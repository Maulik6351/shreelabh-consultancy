import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ShreeLabh Consultancy - Tax & Revenue Experts in Surat",
  description: "ShreeLabh Consultancy, established in 2008 in Surat, Gujarat, provides premier tax, GST, home loan, mortgage, and land revenue services under Vivek Vekariya & Pravinbhai Sudani.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
