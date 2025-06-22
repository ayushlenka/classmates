import React from 'react';
import CourseQuarter from './courseq';


// Mock transcript data (4 years, dynamic course counts)
const transcriptData = [
  {
    year: '1',
    quarters: [
      { quarter: 'Fall', courses: [
          { name: 'Intro to CS', units: '4' },
          { name: 'Calc I', units: '4' },
          { name: 'English 1', units: '3' },
        ], ct: 3, ut: 11 },
      { quarter: 'Winter', courses: [
          { name: 'Data Structures', units: '4' },
          { name: 'Calc II', units: '4' },
          { name: 'English 2', units: '3' },
        ], ct: 3, ut: 11 },
      { quarter: 'Spring', courses: [
          { name: 'Algorithms', units: '4' },
          { name: 'Calc III', units: '4' },
          { name: 'English 3', units: '3' },
        ], ct: 3, ut: 11 },
    ],
  },
  {
    year: '2',
    quarters: [
      { quarter: 'Fall', courses: [
          { name: 'Databases', units: '4' },
          { name: 'Linear Algebra', units: '4' },
          { name: 'Writing 1', units: '3' },
        ], ct: 3, ut: 11 },
      { quarter: 'Winter', courses: [
          { name: 'Operating Systems', units: '4' },
          { name: 'Statistics', units: '4' },
          { name: 'Writing 2', units: '3' },
        ], ct: 3, ut: 11 },
      { quarter: 'Spring', courses: [
          { name: 'Networks', units: '4' },
          { name: 'Probability', units: '4' },
          { name: 'Writing 3', units: '3' },
        ], ct: 3, ut: 11 },
    ],
  },
  {
    year: '3',
    quarters: [
      { quarter: 'Fall', courses: [
          { name: 'Software Eng', units: '4' },
          { name: 'Databases II', units: '4' },
          { name: 'Ethics', units: '3' },
        ], ct: 3, ut: 11 },
      { quarter: 'Winter', courses: [
          { name: 'AI Intro', units: '4' },
          { name: 'Stats II', units: '4' },
          { name: 'Philosophy', units: '3' },
        ], ct: 3, ut: 11 },
      { quarter: 'Spring', courses: [
          { name: 'ML', units: '4' },
          { name: 'HCI', units: '4' },
          { name: 'Research', units: '3' },
        ], ct: 3, ut: 11 },
    ],
  },
  {
    year: '4',
    quarters: [
      { quarter: 'Fall', courses: [
          { name: 'Capstone', units: '4' },
          { name: 'Security', units: '4' },
          { name: 'Elective', units: '3' },
        ], ct: 3, ut: 11 },
      { quarter: 'Winter', courses: [
          { name: 'Elective', units: '4' },
          { name: 'Elective', units: '4' },
          { name: 'Elective', units: '3' },
        ], ct: 3, ut: 11 },
      { quarter: 'Spring', courses: [
          { name: 'Elective', units: '4' },
          { name: 'Elective', units: '4' },
          { name: 'Elective', units: '3' },
        ], ct: 3, ut: 11 },
    ],
  },
];

const aiNotes = `Our AI selected courses in a sequence that builds foundational knowledge, then advanced topics, ensuring prerequisites are met and optimizing for graduation.`;

export default function Transcript() {
  return (
    <div className="bg-[#101010] min-h-screen px-12 lg:px-40 pt-24">
      {/* Page Title */}
      <h1 className="text-white text-5xl font-thin font-archivo mb-12 text-center">
        Your Recommended Schedule
      </h1>

      {/* AI Notes as Description */}
      <div className="flex items-center gap-6 bg-white/10 p-6 rounded-2xl mb-16 max-w-6xl mx-auto">
        <img src="/logo.png" alt="Logo" className="h-8 w-8" />
        <p className="text-white text-xl font-light font-archivo leading-8">
          {aiNotes}
        </p>
      </div>

      {/* All Academic Years */}
      <div className="max-w-6xl mx-auto space-y-16">
        {transcriptData.map(({ year, quarters }) => (
          <div key={year}>
            <h4 className="text-white text-2xl font-light font-archivo uppercase tracking-wider mb-8 text-center">
              Academic Year {year}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {quarters.map((q, idx) => (
                <CourseQuarter key={idx} {...q} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Save & Download Section */}
      <div className="max-w-6xl mx-auto mt-16">
        <p className="text-white text-xl font-thin font-archivo mb-4">Schedule Name</p>
        <div className="flex flex-wrap gap-6 items-center">
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