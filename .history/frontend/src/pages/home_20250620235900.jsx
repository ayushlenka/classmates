/* eslint-disable jsx-a11y/anchor-is-valid */
"use client";

import { useState } from "react";
import Footer from "../components/footer/footer";
import { Menu } from "lucide-react";
import "../styles/animations.css";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleLogin = () => {
  window.location.href = "http://localhost:8000/auth/login";
};

  return (
    <div className="bg-[#101010] relative overflow-hidden">
      <main className="flex flex-col items-center pt-[60px] sm:pt-[90px] bg-[#101010]">
        {/* Animated Background Circles */}
        <div className="absolute top-[300px] left-1/4 h-[600px] w-[80vw] max-w-[800px] pointer-events-none">
          <div className="absolute rounded-full opacity-70 blur-[200px] z-10 bg-[#bc55ec] w-[72vw] max-w-[600px] h-[72vw] max-h-[600px] animate-purpleBounce"></div>
          <div className="absolute rounded-full opacity-70 blur-[200px] z-10 bg-[#efff8f] w-[48vw] max-w-[400px] h-[48vw] max-h-[400px] animate-yellowBounce"></div>
          <div className="absolute rounded-full opacity-70 blur-[200px] z-10 bg-[#4fe2e2cc] w-[60vw] max-w-[500px] h-[60vw] max-h-[500px] animate-blueBounce"></div>
        </div>
        
        {/* Header */}
        <header className="flex justify-between items-center w-full px-6 sm:px-12 lg:px-[100px] z-30 mt-[-20px] sm:mt-0">
          <a href="/">
            <img src="logo.png" alt="classmate logo" className="w-10 h-10" />
          </a>

          {/* Desktop login button */}
          <div className="hidden md:flex">
            <a
              className="px-5 py-2 rounded-full bg-[rgba(188,85,236,0.35)] shadow-[0px_0px_20px_0px_rgba(232,184,255,0.34)] text-white text-[16px] sm:text-[18px] font-normal font-inter"
              onClick={handleLogin}
            >
              Sign in with Google
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <Menu className="text-white w-6 h-6" />
            </button>
          </div>
        </header>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden w-full flex flex-col items-end pr-6 pt-2 z-30">
            <a
              className="px-5 py-2 rounded-full bg-[rgba(188,85,236,0.35)] shadow-[0px_0px_20px_0px_rgba(232,184,255,0.34)] text-white text-[16px] font-normal font-inter"
              onClick={handleLogin}
            >
              Sign in with Google
            </a>
          </div>
        )}

        {/* Main Content */}
        <section className="flex flex-col items-center w-full">
          <section className="flex flex-col items-center w-11/12 max-w-[1030px] z-20 text-center">
            <h1 className="mt-16 mb-0 text-white text-[36px] sm:text-[64px] lg:text-[100px] font-thin font-archivo drop-shadow-[0px_4px_40px_rgba(255,255,255,0.4)]">
              Classmates
            </h1>
            <a
              onClick={handleLogin}
              className="inline-block mt-4 mb-12 px-5 py-2 rounded-full bg-[rgba(188,85,236,0.35)] shadow-[0px_0px_20px_0px_rgba(232,184,255,0.34)] text-white text-[16px] sm:text-[18px] font-medium font-inter"
            >
              Get Started →
            </a>
          </section>

          <section className="flex flex-col items-center px-4">
            <img
              src="hero.png"
              alt="transcript generator example"
              className="w-full max-w-[1240px] h-auto z-20 rounded-xl hidden md:block"
            />
          </section>

          <section className="flex flex-col items-center mt-48 gap-16 px-4">
            <h2 className="text-white text-[36px] sm:text-[48px] lg:text-[64px] font-thin font-archivo text-center">How It Works</h2>
            <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
              {[
                {
                  icon: "lucide_lightbulb.svg",
                  title: "AI-Powered Recommendations",
                  desc: "Our advanced AI analyzes your academic history and goals to suggest the most suitable classes for your unique path.",
                },
                {
                  icon: "lucide_cap.svg",
                  title: "Personalized for UCD Students",
                  desc: "Tailored specifically for UC Davis students, ensuring all recommendations align with university requirements.",
                },
                {
                  icon: "mdi_calendar.svg",
                  title: "Efficient Schedule Building",
                  desc: "Save time and stress by quickly generating optimized class schedules that keep you on track for graduation.",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center w-[90vw] max-w-[400px] h-auto p-5 rounded-[20px] border border-white bg-[rgba(255,255,255,0.2)]"
                >
                  <img src={card.icon} alt="icon" className="mt-10 w-[69px] h-[69px]" />
                  <h3 className="mt-[50px] text-white text-[20px] sm:text-[24px] font-extralight text-center font-archivo">
                    <span className="text-[#bc55ec] font-medium">{card.title.split(" ")[0]}</span>{" "}
                    {card.title.split(" ").slice(1).join(" ")}
                  </h3>
                  <p className="text-white text-[16px] sm:text-[18px] font-light text-center font-archivo leading-[26px]">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Middle Circles */}
          <div className="absolute top-[2000px] left-[15%] sm:left-[30%] h-[400px] w-[70vw] max-w-[600px]">
            <div className="absolute rounded-full opacity-70 blur-[200px] z-10 bg-[#bc55ec] w-[60vw] max-w-[300px] h-[60vw] max-h-[300px] animate-purpleBounce"></div>
            <div className="absolute rounded-full opacity-70 blur-[200px] z-10 bg-[#efff8f] w-[30vw] max-w-[150px] h-[30vw] max-h-[150px] animate-yellowBounce"></div>
            <div className="absolute rounded-full opacity-70 blur-[200px] z-10 bg-[#4fe2e2cc] w-[40vw] max-w-[250px] h-[40vw] max-h-[250px] animate-blueBounce"></div>
          </div>

          {/* Let's Get Started */}
          <section className="flex flex-col items-center mt-48 z-20 text-center px-4">
            <img src="logo.png" alt="classmate logo" className="w-[60px] h-[60px] z-20" />
            <h2 className="mt-6 mb-6 text-white text-[36px] sm:text-[48px] font-light font-archivo">Let’s Get Started</h2>
            <a
              href="/auth"
              className="px-5 py-2 rounded-full bg-[rgba(188,85,236,0.35)] shadow-[0px_0px_20px_0px_rgba(232,184,255,0.34)] text-white text-[16px] sm:text-[18px] font-medium font-inter z-20"
            >
              Make my schedule →
            </a>
          </section>

          {/* Community Section */}
          <section className="flex flex-col items-center mt-48 gap-3 px-4 text-center">
            <h2 className="text-white text-[36px] sm:text-[48px] font-thin font-archivo">Join Our Community</h2>
            <p className="text-white text-[18px] sm:text-[24px] font-normal leading-[28px] sm:leading-[36px] font-archivo">
              Connect with fellow UC Davis students and get the latest updates on Classmates.
            </p>
            <a href="#" className="mt-3 px-5 py-2 rounded-full bg-[rgba(188,85,236,0.35)] shadow-[0px_0px_20px_0px_rgba(232,184,255,0.34)] text-white text-[16px] sm:text-[18px] font-medium font-inter">
              Join Our Discord →
            </a>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
}


