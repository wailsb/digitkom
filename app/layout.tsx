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
  title: {
    default: "DigitKom - Agence Digitale & Communication",
    template: "%s | DigitKom",
  },
  description: "Agence digitale spécialisée en gestion numérique, développement logiciel (SaaS), identité visuelle, production audiovisuelle et sponsoring. Solutions sur mesure pour votre transformation digitale.",
  keywords: [
    "agence digitale",
    "communication digitale",
    "développement web",
    "Software as a Service",
    "SaaS",
    "identité visuelle",
    "création logo",
    "production vidéo",
    "sponsoring",
    "partenariats",
    "gestion numérique",
    "CRM",
    "automatisation",
    "motion design",
    "transformation digitale",
  ],
  authors: [{ name: "DigitKom" }],
  creator: "DigitKom",
  publisher: "DigitKom",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://digitkom.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DigitKom - Agence Digitale & Communication",
    description: "Solutions digitales sur mesure : gestion, développement SaaS, identité visuelle, production audiovisuelle et sponsoring.",
    url: "https://digitkom.com",
    siteName: "DigitKom",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/victordigitkom-2.png",
        width: 1200,
        height: 630,
        alt: "DigitKom - Agence Digitale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DigitKom - Agence Digitale & Communication",
    description: "Solutions digitales sur mesure : gestion, développement SaaS, identité visuelle, production audiovisuelle et sponsoring.",
    images: ["/victordigitkom-2.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/victordigitkom-2.png", type: "image/png", sizes: "32x32" },
      { url: "/victordigitkom-2.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [
      { url: "/victordigitkom-2.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/victordigitkom-2.png"],
  },
  verification: {
    // Add your verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full" lang="fr">
      <head>
        <link rel="icon" href="/victordigitkom-2.png" type="image/png" />
        <link rel="apple-touch-icon" href="/victordigitkom-2.png" />
        <meta name="theme-color" content="#7487c2" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
      >
        {children}
      </body>
    </html> 
  );
}
