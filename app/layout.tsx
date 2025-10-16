import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import { MainHeader } from "@/components/ui/main-header";

export const metadata: Metadata = {
  title: "Горбуфет «Шашлычная»",
  description: "Домашние блюда, приготовленные с душой.",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const grotesk = localFont({
  src: "./soyuz-grotesk-bold.otf",
  display: "swap",
  variable: "--font-grotesk",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log(grotesk.className);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${grotesk.variable} antialiased`}
      >
        <MainHeader className={`${grotesk.className} `} />

        {children}
      </body>
    </html>
  );
}
