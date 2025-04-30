import { GlobalStyles } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import LinearProgress from "@mui/material/LinearProgress";
import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Open_Sans,
  Playfair_Display,
  Playwrite_RO,
} from "next/font/google";
import React from "react";
import "./globals.css";

const playwritRO = Playwrite_RO({
  variable: "--font-playwrite-RO",
  display: "swap",
});
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  display: "swap",
  subsets: ["latin"],
});
const openSans = Open_Sans({
  variable: "--font-open-sans",
  display: "swap",
  subsets: ["latin"],
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VirtualStore",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "VirtualStore",
  },
  twitter: {
    card: "summary_large_image",
    title: "VirtualStore",
    description:
      " Discover a wide range of products online at Virtual Store, your trusted e-commerce destination in Bangladesh. Enjoy convenient shopping and secure delivery right to your doorstep in Dinajpur and across the nation.",
    images: "/images/og-image.png",
  },
  keywords: [
    "Virtual store",
    "virtual",
    "store",
    "virtualstore",
    "e-commerce",
    "price",
  ],
  description:
    "Discover a wide range of products online at Virtual Store, your trusted e-commerce destination in Bangladesh. Enjoy convenient shopping and secure delivery right to your doorstep in Dinajpur and across the nation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${openSans.variable} ${playfairDisplay.variable} ${playwritRO.variable} antialiased`}
      >
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <GlobalStyles styles="@layer theme,base,mui,components,utilities;" />
          <React.Suspense fallback={<LinearProgress />}>
            {children}
          </React.Suspense>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
