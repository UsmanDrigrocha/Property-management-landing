import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SmoothScrollProvider } from "@/components/layout/smooth-scroll-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amaze Property Management Solutions | Integrated Facility Management",
  description:
    "Amaze Property Management Solutions delivers security, housekeeping, technical, and facility management services in-house — 15,000+ professionals serving 200+ clients across 20M+ sq. ft. pan-India.",
  keywords: [
    "property management",
    "facility management",
    "security services",
    "housekeeping services",
    "Amaze Property Management",
  ],
  openGraph: {
    title: "Amaze Property Management Solutions",
    description: "One-stop, in-house property management solutions — trusted pan-India.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary/25 selection:text-foreground">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
