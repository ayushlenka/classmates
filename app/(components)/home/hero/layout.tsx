import Link from 'next/link';
import { Righteous } from 'next/font/google';

const righteous = Righteous({ weight: '400', subsets: ['latin'] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-davisblue text-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className={`text-3xl ${righteous.className}`}>
            Classmates
          </Link>
          <Link
            href="/signin"
            className="bg-white text-davisblue px-4 py-2 rounded-md hover:bg-blue-100 transition-colors"
          >
            Sign In
          </Link>
        </div>
      </header>
      <main className="flex-grow">{children}</main>
    </div>
  );
}
