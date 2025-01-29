import Link from 'next/link';
import { Righteous } from 'next/font/google';
import { usePathname } from 'next/navigation';

const righteous = Righteous({ weight: '400', subsets: ['latin'] });

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/app" className={`text-3xl ${righteous.className}`}>
            Classmates
          </Link>
          <nav className="space-x-4">
            <Link
              href="/recommender"
              className={`hover:text-blue-200 ${
                pathname === '/app/recommender' ? 'underline' : ''
              }`}
            >
              Recommender
            </Link>
            <Link
              href="/transcripts"
              className={`hover:text-blue-200 ${
                pathname === '/app/transcripts' ? 'underline' : ''
              }`}
            >
              Transcripts
            </Link>
          </nav>
          <Link
            href="/signout"
            className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-100 transition-colors"
          >
            Sign Out
          </Link>
        </div>
      </header>
      <main className="flex-grow bg-gray-100">{children}</main>
    </div>
  );
}
