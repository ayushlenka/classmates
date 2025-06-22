import React from 'react';
import Courses from '../course-quarter/courseq';

// Mock data
const years = [{ year: '1' }, { year: '2' }];

export default function Transcript() {
  return (
    <div className="bg-[#101010] min-h-screen px-24 pt-24">
      {/* Title */}
      <h1 className="text-white text-4xl font-thin font-archivo mb-8 text-center">
        Your Recommended Schedule
      </h1>

      {/* Description */}
      <div className="flex items-center gap-4 bg-white/10 p-5 rounded-2xl mb-12 max-w-4xl mx-auto">
        <img src="sparkle.svg" alt="sparkle icon" className="h-6 w-6" />
        <p className="text-white text-lg font-light font-archivo leading-8">
          Based on your transcripts and chosen major, <span className="text-[#bc55ec] font-normal">Design</span>, we recommend focusing on courses that align with your career goal as a <span className="text-[#bc55ec] font-normal">UX Designer</span>. Consider exploring advanced courses and internship opportunities in your field to gain practical experience.
        </p>
      </div>

      {/* Completed Courses */}
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h2 className="text-white text-[32px] font-thin font-archivo">Completed Courses</h2>
          <svg xmlns="http://www.w3.org/2000/svg" width="517" height="2" viewBox="0 0 517 2" className="my-4">
            <path d="M1 1H516" stroke="url(#gradient)" strokeLinecap="round" />
            <defs>
              <linearGradient id="gradient" x1="1" y1="1.5" x2="516" y2="1.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#E2E2E2" stopOpacity="0" />
                <stop offset="0.065" stopColor="#B9B9B9" />
                <stop offset="0.58" stopColor="#B9B9B9" />
                <stop offset="1" stopColor="#E2E2E2" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <div className="space-y-8">
            {years.map((item, idx) => (
              <Courses key={idx} year={item.year} />
            ))}
          </div>
        </div>

        {/* Recommended Courses */}
        <div>
          <h2 className="text-white text-[32px] font-thin font-archivo">Recommended Courses</h2>
          <svg xmlns="http://www.w3.org/2000/svg" width="517" height="2" viewBox="0 0 517 2" className="my-4">
            <path d="M1 1H516" stroke="url(#gradient2)" strokeLinecap="round" />
            <defs>
              <linearGradient id="gradient2" x1="1" y1="1.5" x2="516" y2="1.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#E2E2E2" stopOpacity="0" />
                <stop offset="0.065" stopColor="#B9B9B9" />
                <stop offset="0.58" stopColor="#B9B9B9" />
                <stop offset="1" stopColor="#E2E2E2" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <div className="space-y-8">
            {years.map((item, idx) => (
              <Courses key={idx} year={item.year} />
            ))}
          </div>
        </div>

        {/* Save & Download */}
        <div className="mt-12">
          <p className="text-white text-xl font-thin font-archivo mb-4">Schedule Name</p>
          <div className="flex items-center gap-4">
            <input
              type="text"
              defaultValue="Computer Science Schedule 1"
              className="w-3/5 p-4 rounded-md border border-gray-500 bg-[#282828] text-white placeholder-gray-400"
            />
            <button className="px-6 py-3 rounded-full bg-white/30 shadow-[0_0_20px_rgba(232,184,255,0.34)] text-white font-archivo hover:bg-white/40 transition">
              Save Schedule
            </button>
            <button className="px-6 py-3 rounded-full bg-[rgba(188,85,236,0.35)] shadow-[0_0_20px_rgba(232,184,255,0.34)] text-white font-archivo hover:bg-purple-600 transition">
              Download as PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}