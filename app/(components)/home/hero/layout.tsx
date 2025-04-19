'use client';

import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession(); // ✅ Get session status

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-davisblue text-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-3xl font-bold">
            Classmates
          </Link>

          {/* ✅ Sign In/Sign Out Button (No /signin href) */}
          {session ? (
            <button
              onClick={() => signOut({ callbackUrl: '/' })} // ✅ Logs out and redirects home
              className="bg-white text-davisblue px-4 py-2 rounded-md hover:bg-blue-100 transition-colors"
            >
              Sign Out
            </button>
          ) : (
            <button
              onClick={() => signIn('google')} // ✅ This should redirect to Google OAuth
              className="bg-white text-davisblue px-4 py-2 rounded-md hover:bg-blue-100 transition-colors"
            >
              Sign In
            </button>
          )}
        </div>
      </header>

      <main className="flex-grow">{children}</main>
    </div>
  );
}
