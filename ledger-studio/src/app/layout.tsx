import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import CookieConsent from '@/components/ui/CookieConsent';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: {
    template: '%s | Ledger Studio',
    default: 'Ledger Studio | The Business Operating System for 2025',
  },
  description: 'Automate your business operations, manage leads, and scale your content marketing with Ledger Studio. The all-in-one platform for modern agencies.',
  keywords: ['Business Automation', 'CRM', 'Agency OS', 'Next.js', 'React', 'Tailwind'],
  openGraph: {
    title: 'Ledger Studio',
    description: 'The Business Operating System for 2025.',
    url: 'https://ledgerstudio.ai',
    siteName: 'Ledger Studio',
    images: [
      {
        url: 'https://ledgerstudio.ai/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ledger Studio',
    description: 'The Business Operating System for 2025.',
    creator: '@ledgerstudio',
  },
  metadataBase: new URL('https://ledgerstudio.ai'),
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Ledger Studio',
  url: 'https://ledgerstudio.ai',
  logo: 'https://ledgerstudio.ai/logo.png',
  sameAs: [
    'https://twitter.com/ledgerstudio',
    'https://linkedin.com/company/ledgerstudio',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-555-555-5555',
    contactType: 'customer service',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
