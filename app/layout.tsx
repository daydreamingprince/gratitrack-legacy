import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gratitrack — One Day at a Time",
  description: "A minimalist gratitude tracker that helps you reflect with peace and purpose.",
  metadataBase: new URL("https://gratitrack.vercel.app"), // Update this URL when deployed to a custom domain.
  openGraph: {
    title: "Gratitrack — One Day at a Time",
    description: "A minimalist gratitude tracker to help you reflect with peace and purpose.",
    url: "https://gratitrack.vercel.app", // Update this too after deploying to a custom domain.
    siteName: "Gratitrack",
    images: [
      {
        url: "/og-image.png", // optional — I'd add this later
        width: 1200,
        height: 630,
        alt: "Gratitrack preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gratitrack — One Day at a Time",
    description: "Track one grateful moment a day. Minimalist, calming, intentional.",
    creator: "@insertmytwitterhandlehere", // this is optional, we can remove this or update in the future.
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/app/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
