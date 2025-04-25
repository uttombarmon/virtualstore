import type { Metadata } from "next";
import { Geist, Geist_Mono, Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
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
        className={`${geistSans.variable} ${geistMono.variable} ${openSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
