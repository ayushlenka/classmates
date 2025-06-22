import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Footer from '../components/footer';
import '../styles/animations.css';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, login } = useAuth();

  return (
    <div className="bg-[#101010] relative overflow-hidden text-white">
      <main className="flex flex-col items-center pt-[60px] sm:pt-[90px] bg-[#101010]">
        <div className="absolute top-[300px] left-1/4 h-[600px] w-[80vw] max-w-[800px] pointer-events-none">
          <div className="absolute rounded-full opacity-70 blur-[200px] z-10 bg-[#bc55ec] w-[72vw] max-w-[600px] h-[72vw] max-h-[600px] animate-purpleBounce"></div>
          <div className="absolute rounded-full opacity-70 blur-[200px] z-10 bg-[#efff8f] w-[48vw] max-w-[400px] h-[48vw] max-h-[400px] animate-yellowBounce"></div>
          <div className="absolute rounded-full opacity-70 blur-[200px] z-10 bg-[#4fe2e2cc] w-[60vw] max-w-[500px] h-[60vw] max-h-[500px] animate-blueBounce"></div>
        </div>

        <header className="flex justify-between items-center w-full px-6 sm:px-12 lg:px-[100px] z-30 mt-[-20px] sm:mt-0">
          <a href="/">
            <img src="logo.png" alt="classmate logo" className="w-10 h-10" />
          </a>

          <div className="hidden md:flex">
            {!user && (
              <button
                onClick={login}
                className="cursor-pointer px-5 py-2 rounded-full bg-[rgba(188,85,236,0.35)] shadow-[0px_0px_20px_0px_rgba(232,184,255,0.34)] text-white text-[16px] sm:text-[18px] font-normal font-inter"
              >
                Sign in with Google
              </button>
            )}
          </div>

          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <Menu className="text-white w-6 h-6" />
            </button>
          </div>
        </header>

        {menuOpen && !user && (
          <div className="md:hidden w-full flex flex-col items-end pr-6 pt-2 z-30">
            <button
              onClick={login}
              className="cursor-pointer px-5 py-2 rounded-full bg-[rgba(188,85,236,0.35)] shadow-[0px_0px_20px_0px_rgba(232,184,255,0.34)] text-white text-[16px] font-normal font-inter"
            >
              Sign in with Google
            </button>
          </div>
        )}

        <section className="flex flex-col items-center w-full">
          <section className="flex flex-col items-center w-11/12 max-w-[1030px] z-20 text-center">
            <h1 className="mt-16 mb-0 text-white text-[36px] sm:text-[64px] lg:text-[100px] font-thin font-archivo drop-shadow-[0px_4px_40px_rgba(255,255,255,0.4)]">
              Classmates
            </h1>
            {!user && (
              <button
                onClick={login}
                className="cursor-pointer inline-block mt-4 mb-12 px-5 py-2 rounded-full bg-[rgba(188,85,236,0.35)] shadow-[0px_0px_20px_0px_rgba(232,184,255,0.34)] text-white text-[16px] sm:text-[18px] font-medium font-inter"
              >
                Get Started →
              </button>
            )}
          </section>

          <section className="flex flex-col items-center px-4">
            <img
              src="hero.png"
              alt="transcript generator example"
              className="w-full max-w-[1240px] h-auto z-20 rounded-xl hidden md:block"
            />
          </section>

          <section className="flex flex-col items-center mt-48 gap-16 px-4">
            <h2 className="text-white text-[36px] sm:text-[48px] lg:text-[64px] font-thin font-archivo text-center">
              How It Works
            </h2>
            <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
              {['AI-Powered Recommendations', 'Tailored for UC Davis', 'Efficient Schedule Building'].map((title, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center w-[90vw] max-w-[400px] h-auto p-5 rounded-[20px] border border-white bg-[rgba(255,255,255,0.2)]"
                >
                  <img src={[
                    'lucide_lightbulb.svg',
                    'lucide_cap.svg',
                    'mdi_calendar.svg'
                  ][i]} alt="icon" className="mt-10 w-[69px] h-[69px]" />
                  <h3 className="mt-[50px] text-white text-[20px] sm:text-[24px] font-extralight text-center font-archivo">
                    <span className="text-[#bc55ec] font-medium">{title.split(' ')[0]}</span> {title.split(' ').slice(1).join(' ')}
                  </h3>
                  <p className="text-white text-[16px] sm:text-[18px] font-light text-center font-archivo leading-[26px]">
                    {[
                      'Our AI analyzes your academic history and goals to suggest the best classes.',
                      'Built for UCD students, aligned with real graduation requirements.',
                      'Generate balanced schedules that save time and meet your graduation plan.'
                    ][i]}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="flex flex-col items-center mt-48 z-20 text-center px-4">
            <img src="logo.png" alt="classmate logo" className="w-[60px] h-[60px] z-20" />
            <h2 className="mt-6 mb-6 text-white text-[36px] sm:text-[48px] font-light font-archivo">
              Let’s Get Started
            </h2>
            <a
              href={user ? '/input' : '#'}
              onClick={(e) => {
                if (!user) {
                  e.preventDefault();
                  login();
                }
              }}
              className="px-5 py-2 rounded-full bg-[rgba(188,85,236,0.35)] shadow-[0px_0px_20px_0px_rgba(232,184,255,0.34)] text-white text-[16px] sm:text-[18px] font-medium font-inter z-20"
            >
              Make My Schedule →
            </a>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
}