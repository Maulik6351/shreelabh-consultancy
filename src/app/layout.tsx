import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "ShreeLabh Consultancy | Revenue & Tax Consultants",
  description: "ShreeLabh Consultancy is a premier Revenue & Tax Consultancy firm based in Surat, Gujarat. We specialize in Income Tax, GST, Loans, Revenue Work, and Legal Documentation.",
};

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        <div className="flex flex-col min-h-screen">
          <Navbar />
          {/* pt-20 pushes page down below fixed header; pb-16 prevents mobile sticky bar from hiding bottom of page content */}
          <main className="flex-grow pt-20 pb-16 md:pb-0">
            {children}
          </main>
          <Footer />
        </div>
        <FloatingCTA />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
