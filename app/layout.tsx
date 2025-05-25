import type React from "react";
import { Inter, JetBrains_Mono, Space_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import CustomCursor from "@/components/shared/custom-cursor";
import LoadingScreen from "@/components/shared/loading-screen";
import SocialFloat from "@/components/shared/social-float";
import { Providers } from "@/components/providers";
import { PortfolioProvider } from "@/components/providers/portfolio-provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata = {
  title: "Sarthak | Software Developer",
  description: "Portfolio of Sarthak, a Software Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${spaceMono.variable} scroll-smooth`}
    >
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="bg-[#121212] text-gray-200 font-sans">
        <PortfolioProvider>
          <Providers>
            <LoadingScreen />
            <CustomCursor />
            <SocialFloat />
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
            <Toaster />
          </Providers>
        </PortfolioProvider>
      </body>
    </html>
  );
}
