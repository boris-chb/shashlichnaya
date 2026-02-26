import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { Navbar } from "@/components/ui/navbar";
import "./globals.css";

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
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${grotesk.variable} flex h-dvh flex-col overflow-hidden antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar className={`${grotesk.className} z-50 shrink-0`} />
          <div className="flex flex-1 flex-col overflow-y-auto">
            <main className="flex-1 shrink-0">{children}</main>
            <footer className="text-muted-foreground mt-4 flex shrink-0 flex-col items-center justify-center gap-1 pt-4 pb-4 text-sm">
              <p>© 2025 Шашлычная</p>
              <p className="text-xs">С любовью приготовлено для вас ❤️</p>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
