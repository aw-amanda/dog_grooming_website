import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import LenisProvider from "./components/LenisProvider";
import { Footer } from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://aw-amanda.github.io/dog_grooming_website';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Best Dog Grooming Services | Professional Pet Care",
    template: "%s | Best Dog Grooming Services",
  },
  description: "Professional dog grooming services in your area. Expert groomers, quality care, affordable prices. Book your appointment today!",
  keywords: ["dog grooming", "best dog groomer", "pet grooming", "dog wash", "mobile dog grooming", "affordable dog grooming"],
  authors: [{ name: "Best Dog Grooming Services" }],
  creator: "Best Dog Grooming Services",
  publisher: "Best Dog Grooming Services",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Best Dog Grooming Services",
    title: "Best Dog Grooming Services | Professional Pet Care",
    description: "Professional dog grooming services in your area. Expert groomers, quality care, affordable prices.",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Best Dog Grooming Services - Professional Pet Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Dog Grooming Services | Professional Pet Care",
    description: "Professional dog grooming services in your area. Expert groomers, quality care, affordable prices.",
    images: [`${baseUrl}/og-image.jpg`],
  },
  alternates: {
    canonical: baseUrl,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#c3dec8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <Navbar />
        <LenisProvider>{children}</LenisProvider>
        <Footer />
      </body>
    </html>
  );
}