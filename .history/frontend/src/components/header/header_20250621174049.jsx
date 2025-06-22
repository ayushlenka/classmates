import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Header() {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const path = window.location.pathname;

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };

  const isActive = (route) => path === route;

  return (
    <div className="relative pt-10 bg-[#101010]">
      {/* Background circles */}
      <div className="absolute top-[-800px] w-[80%] h-0">
        <div className="absolute w-[800px] h-[800px] rounded-[1033px] opacity-70 blur-[200px] bg-[#bc55ec] animate-purpleBounce"></div>
        <div className="absolute w-[800px] h-[800px] rounded-[1033px] opacity-70 blur-[200px] bg-[#efff8f] animate-yellowBounce"></div>
        <div className="absolute w-[800px] h-[800px] rounded-[1033px] opacity-70 blur-[200px] bg-[rgba(79,226,226,0.8)] animate-blueBounce"></div>
      </div>

      {/* Header */}
      <header className="flex justify-between items-center px-4 sm:px-8 md:px-[100px] h-[80px] bg-[#101010]">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src="logo.png" alt="Classmates Logo" className="w-10 h-10" />
        </a>

        {/* Desktop Nav */}
        <section className="hidden md:flex gap-6 bg-white/10 rounded-full px-4 py-2">
          <a
            href="/input"
            className={`text-white font-[Archivo] text-lg px-4 py-2 rounded-full ${
              isActive('/input') ? 'bg-white/20' : ''
            }`}
          >
            Recommender
          </a>
          <a
            href="/transcript"
            className={`text-white font-[Archivo] text-lg px-4 py-2 rounded-full ${
              isActive('/transcript') ? 'bg-white/20' : ''
            }`}
          >
            Your Transcripts
          </a>
        </section>

        {/* Logout button for Desktop */}
        {user && (
          <a
            href="#"
            onClick={handleLogout}
            className="hidden md:inline-block text-white font-[Inter] text-lg px-4 py-2 bg-white/20 rounded-full"
          >
            Log out
          </a>
        )}

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-[#101010] py-4 gap-4">
          <a
            href="/input"
            className={`text-white font-[Archivo] text-lg px-4 py-2 rounded-full ${
              isActive('/input') ? 'bg-white/20' : ''
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Recommender
          </a>
          <a
            href="/transcript"
            className={`text-white font-[Archivo] text-lg px-4 py-2 rounded-full ${
              isActive('/transcript') ? 'bg-white/20' : ''
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Your Transcripts
          </a>
          {user && (
            <a
              href="#"
              onClick={(e) => {
                handleLogout(e);
                setMenuOpen(false);
              }}
              className="text-white font-[Inter] text-lg px-4 py-2 bg-white/20 rounded-full"
            >
              Log out
            </a>
          )}
        </div>
      )}
    </div>
  );
}
