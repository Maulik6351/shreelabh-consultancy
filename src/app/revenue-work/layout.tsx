import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Revenue Work Consultant Surat - Land Records & Mutation Entries | ShreeLabh",
  description: "Professional land revenue advisory in Surat, Gujarat. Resolve property mutation entries, income certificate documentation, and title verification with Pravinbhai Sudani.",
  alternates: {
    canonical: "/revenue-work",
  },
};

export default function RevenueLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
