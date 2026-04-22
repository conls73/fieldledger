import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "FarmLedger",
  description: "Bookkeeping for the Modern Farm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans dark", fontSans.variable)}>
      <body
        className="min-h-screen bg-background text-foreground antialiased"
      >
        {children}
      </body>
    </html>
  );
}
