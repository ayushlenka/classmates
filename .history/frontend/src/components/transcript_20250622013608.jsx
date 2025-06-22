import React from 'react';
import Courses from './courseq';


// Mock transcript data for demonstration
const transcriptData = [
  {
    year: '1',
    quarters: [
      { quarter: 'Fall', c1: 'Intro to CS', u1: '4', c2: 'Calc I', u2: '4', c3: 'English 1', u3: '3', c4: 'History 10', u4: '3', c5: 'Elective A', u5: '3', c6: 'Elective B', u6: '3', c7: 'PE 1', u7: '1', c8: 'Lang 1', u8: '3', ct: '8', ut: '24' },
      { quarter: 'Winter', c1: 'Data Structures', u1: '4', c2: 'Calc II', u2: '4', c3: 'English 2', u3: '3', c4: 'Philosophy 1', u4: '3', c5: 'Elective C', u5: '3', c6: 'Elective D', u6: '3', c7: 'PE 2', u7: '1', c8: 'Lang 2', u8: '3', ct: '8', ut: '24' },
      { quarter: 'Spring', c1: 'Algorithms', u1: '4', c2: 'Calc III', u2: '4', c3: 'English 3', u3: '3', c4: 'Philosophy 2', u4: '3', c5: 'Elective E', u5: '3', c6: 'Elective F', u6: '3', c7: 'PE 3', u7: '1', c8: 'Lang 3', u8: '3', ct: '8', ut: '24' },
    ],
  },
  {
    year: '2',
    quarters: [
      { quarter: 'Fall', c1: 'Databases', u1: '4', c2: 'Linear Algebra', u2: '4', c3: 'Writing 1', u3: '3', c4: 'Science 1', u4: '3', c5: 'Elective G', u5: '3', c6: 'Elective H', u6: '3', c7: '', u7: '', c8: '', u8: '', ct: '6', ut: '20' },
      { quarter: 'Winter', c1: 'Operating Sys', u1: '4', c2: 'Statistics', u2: '4', c3: 'Writing 2', u3: '3', c4: 'Science 2', u4: '3', c5: 'Elective I', u5: '3', c6: 'Elective J', u6: '3', c7: '', u7: '', c8: '', u8: '', ct: '6', ut: '20' },
      { quarter: 'Spring', c1: 'Networks', u1: '4', c2: 'Probability', u2: '4', c3: 'Writing 3', u3: '3', c4: 'Science 3', u4: '3', c5: 'Elective K', u5: '3', c6: 'Elective L', u6: '3', c7: '', u7: '', c8: '', u8: '', ct: '6', ut: '20' },
    ],
  },
];

// Placeholder AI notes
const aiNotes = `Our AI selected courses in a sequence that builds foundational knowledge in computer science, followed by advanced topics and practical electives, ensuring prerequisites are met and optimizing for graduation requirements.`;

export default function Transcript() {
  return (
    <div className="bg-[#101010] min-h-screen px-24 pt-24">
      {/* Page Title */}
      <h1 className="text-white text-4xl font-thin font-archivo mb-12 text-center">
        Your Recommended Schedule
      </h1>

      {/* Description */}
      <div className="flex items-center gap-4 bg-white/10 p-5 rounded-2xl mb-12 max-w-4xl mx-auto">
        <img src="/sparkle.svg" alt="sparkle icon" className="h-6 w-6" />
        <p className="text-white text-lg font-light font-archivo leading-8">
          Based on your transcripts and chosen major, <span className="text-[#bc55ec] font-normal">Design</span>, we recommend focusing on courses that align with your career goal as a <span className="text-[#bc55ec] font-normal">UX Designer</span>. Consider exploring advanced courses and internship opportunities in your field to gain practical experience.
        </p>
      </div>

      {/* Completed & Recommended Courses */}
      <div className="max-w-4xl mx-auto space-y-16">
        {['Completed Courses', 'Recommended Courses'].map((section, si) => (
          <div key={si}>
            <h2 className="text-white text-[32px] font-thin font-archivo text-center mb-4">
              {section}
            </h2>
            <svg xmlns="http://www.w3.org/2000/svg" width="517" height="2" viewBox="0 0 517 2" className="mx-auto mb-8">
              <path d="M1 1H516" stroke={`url(#gradient${si})`} strokeLinecap="round" />
              <defs>
                <linearGradient id={`gradient${si}`} x1="1" y1="1.5" x2="516" y2="1.5" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#E2E2E2" stopOpacity="0" />
                  <stop offset="0.065" stopColor="#B9B9B9" />
                  <stop offset="0.58" stopColor="#B9B9B9" />
                  <stop offset="1" stopColor="#E2E2E2" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            {transcriptData.map(({ year, quarters }) => (
              <div key={year} className="space-y-8">
                <h4 className="text-white text-2xl font-light font-archivo uppercase tracking-wider">
                  Academic Year {year}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  {quarters.map((q, idx) => (
                    <Courses key={idx} {...q} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* AI Notes */}
      <div className="max-w-4xl mx-auto mt-16">
        <div className="flex items-center gap-4 mb-4">
          <img src="/ai_icon.svg" alt="AI icon" className="h-6 w-6" />
          <h2 className="text-white text-2xl font-thin font-archivo">AI Notes</h2>
        </div>
        <p className="text-white text-lg font-light font-archivo leading-7">
          {aiNotes}
        </p>
      </div>

      {/* Save & Download Section */}
      <div className="max-w-4xl mx-auto mt-12">
        <p className="text-white text-xl font-thin font-archivo mb-4">Schedule Name</p>
        <div className="flex flex-wrap gap-4 items-center">
          <input
            type="text"
            defaultValue="Computer Science Schedule 1"
            className="flex-grow p-4 rounded-md border border-gray-500 bg-[#282828] text-white placeholder-gray-400"
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

  );
}