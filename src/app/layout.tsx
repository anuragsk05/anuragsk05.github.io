import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Anurag Komaragiri',
  description: 'Software Engineer • Musician • Creator',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: ['/favicon-32x32.png'],
    apple: { url: '/favicon-32x32.png' },
    other: [
      {
        rel: 'icon',
        url: '/favicon-32x32.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="shortcut icon" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/favicon-32x32.png" />
      </head>
      <body className={spaceGrotesk.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}