import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";

// Inter - Font leggibile per body text
const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

// Airborne 86 - Font militare SOLO per titoli
const airborne = localFont({
  src: '../public/fonts/Airborne86.ttf',
  variable: '--font-airborne',
  display: 'swap',
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Otherwise Athletics Evolved | Functional Fitness Ferrara",
  description: "Il box CrossFit di Ferrara. 300m² di spazio, coach certificati, risultati veri. Classes, personal training, open gym. Dal lunedì alla domenica.",
  keywords: "crossfit ferrara, palestra ferrara, otherwise, box crossfit, allenamento funzionale, fitness ferrara, wod ferrara, gym ferrara, personal trainer ferrara",
  authors: [{ name: "Otherwise Athletics Evolved" }],
  creator: "Otherwise Athletics Evolved",
  publisher: "Otherwise Athletics Evolved",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://otherwise-ferrara.it'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Otherwise Athletics Evolved | CrossFit Ferrara',
    description: 'Il box CrossFit di Ferrara. Coach certificati, attrezzatura top, community forte.',
    url: 'https://otherwise-ferrara.it',
    siteName: 'Otherwise Athletics Evolved',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Otherwise Athletics Evolved - Ferrara',
      },
    ],
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Otherwise Athletics Evolved | CrossFit Ferrara',
    description: 'Il box CrossFit di Ferrara. Coach certificati, attrezzatura top, community forte.',
    images: ['/twitter-image.jpg'],
  },
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
  verification: {
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="scroll-smooth">
      <body
        className={`${inter.variable} ${airborne.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {/* Skip to main content link for keyboard navigation - WCAG */}
        <a 
          href="#main-content" 
          className="absolute left-[-9999px] top-4 z-[100] px-6 py-3 bg-rosso-controllo text-bianco-luce font-mono text-sm tracking-wider uppercase focus:left-4"
        >
          Salta al contenuto principale
        </a>
        <main id="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}

