import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Header } from '@/components/header';

const gilroy = localFont({
  src: [
    { path: './fonts/Gilroy-Medium.ttf', weight: '500', style: 'normal' },
    { path: './fonts/Gilroy-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: './fonts/Gilroy-Bold.ttf', weight: '700', style: 'normal' },
  ],
  variable: '--font-gilroy',
});

export const metadata: Metadata = {
  title: 'TruCourt - Tennis School',
  description: 'Tennis School',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${gilroy.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
