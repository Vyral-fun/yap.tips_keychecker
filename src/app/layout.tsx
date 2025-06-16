import type { Metadata } from "next";
import { Geist, Geist_Mono, Jersey_15, Jersey_20 } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Add Jersey fonts
const jersey15 = Jersey_15({
  variable: "--font-jersey-15",
  subsets: ["latin"],
  weight: "400",
});
const jersey20 = Jersey_20({
  variable: "--font-jersey-20",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "NFT Checker",
  description: "Build by VyralFun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jersey15.variable} ${jersey20.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
