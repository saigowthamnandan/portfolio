import type {Metadata} from 'next';
import './globals.css';
import {ThemeProvider} from '@/components/ThemeContext';

export const metadata: Metadata = {
  title: 'Sai Gowtham Nandan Ganta',
  description: 'Portfolio of Sai Gowtham Nandan Ganta',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
