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
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: { url: '/favicon-32x32.png' },
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
        <link rel="icon" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/favicon-32x32.png" />
      </head>
      <body className={spaceGrotesk.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}