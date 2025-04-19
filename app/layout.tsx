import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './(pages)/_globals/styles/globals.css';
import SessionProvider from './(components)/SessionProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Classmates App',
  description:
    'A platform for UC Davis students to connect and share schedules',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
