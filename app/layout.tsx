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
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${grotesk.variable} antialiased bg-yellow-50/30`}
      >
        <MainHeader
          className={`${grotesk.className} fixed top-0 left-0 w-full z-50`}
        />
        <div className="pt-20  min-h-screen ">{children}</div>
        <footer className="row-start-3 flex flex-col items-center justify-center gap-2 py-6 text-sm text-muted-foreground">
          <p>© 2025 Шашлычная</p>
          <p className="text-xs">С любовью приготовлено для вас ❤️</p>
        </footer>
      </body>
    </html>
  );
}
