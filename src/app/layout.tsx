import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Header from "@/components/header";
import ThemeProviders from "@/app/theme-provider";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={cn(
          inter.className,
          "antialiased bg-primary-light dark:bg-primary-dark text-slate-950 dark:text-white"
        )}
      >
        <ThemeProviders>
          <div className="max-w-3xl mx-auto xl:max-w-5xl xl:px-0 min-h-screen flex flex-col">
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProviders>
      </body>
    </html>
  );
}
