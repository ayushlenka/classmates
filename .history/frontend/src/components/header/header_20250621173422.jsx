import React from 'react';
import { useAuth } from '../../context/AuthContext';

export default function Header() {
  const { user, logout } = useAuth();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <div className="relative pt-10 bg-[#101010]">
      {/* Background circles */}
      <div className="absolute top-[-800px] w-[80%] h-0">
        <div className="absolute w-[800px] h-[800px] rounded-[1033px] opacity-70 blur-[200px] bg-[#bc55ec] animate-purpleBounce"></div>
        <div className="absolute w-[800px] h-[800px] rounded-[1033px] opacity-70 blur-[200px] bg-[#efff8f] animate-yellowBounce"></div>
        <div className="absolute w-[800px] h-[800px] rounded-[1033px] opacity-70 blur-[200px] bg-[rgba(79,226,226,0.8)] animate-blueBounce"></div>
      </div>

      {/* Header */}
      <header className="flex justify-between items-center px-6 sm:px-12 md:px-[100px] h-[100px] bg-[#101010]">
        <a href="/" className="flex items-center">
          <img src="logo.png" alt="Classmates Logo" className="w-10 h-10" />
        </a>

        <section className="flex gap-6 sm:gap-10 bg-white/10 rounded-full px-4 py-2">
          <a href="/input" className="text-white font-[Archivo] text-lg">
            Recommender
          </a>
          <a
            href="/transcript"
            className="text-white font-[Archivo] text-lg bg-white/20 px-4 py-2 rounded-full"
          >
            Your Transcripts
          </a>
        </section>

        {user && (
          <a
            href="#"
            onClick={handleLogout}
            className="text-white font-[Inter] text-lg px-4 py-2 bg-white/20 rounded-full"
          >
            Log out
          </a>
        )}
      </header>
    </div>
  );
}
