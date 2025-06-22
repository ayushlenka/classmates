import React from 'react';
import Courses from './courseq';


// Mock transcript data for demonstration (4 years, 3 courses per quarter)
const transcriptData = [
  {
    year: '1',
    quarters: [
      { quarter: 'Fall', c1: 'Intro to CS', u1: '4', c2: 'Calc I', u2: '4', c3: 'English 1', u3: '3', ct: '3', ut: '11' },
      { quarter: 'Winter', c1: 'Data Structures', u1: '4', c2: 'Calc II', u2: '4', c3: 'English 2', u3: '3', ct: '3', ut: '11' },
      { quarter: 'Spring', c1: 'Algorithms', u1: '4', c2: 'Calc III', u2: '4', c3: 'English 3', u3: '3', ct: '3', ut: '11' },
    ],
  },
  {
    year: '2',
    quarters: [
      { quarter: 'Fall', c1: 'Databases', u1: '4', c2: 'Linear Algebra', u2: '4', c3: 'Writing 1', u3: '3', ct: '3', ut: '11' },
      { quarter: 'Winter', c1: 'Operating Systems', u1: '4', c2: 'Statistics', u2: '4', c3: 'Writing 2', u3: '3', ct: '3', ut: '11' },
      { quarter: 'Spring', c1: 'Networks', u1: '4', c2: 'Probability', u2: '4', c3: 'Writing 3', u3: '3', ct: '3', ut: '11' },
    ],
  },
  {
    year: '3',
    quarters: [
      { quarter: 'Fall', c1: 'Software Eng', u1: '4', c2: 'Databases II', u2: '4', c3: 'Ethics', u3: '3', ct: '3', ut: '11' },
      { quarter: 'Winter', c1: 'AI Intro', u1: '4', c2: 'Stats II', u2: '4', c3: 'Philosophy', u3: '3', ct: '3', ut: '11' },
      { quarter: 'Spring', c1: 'ML', u1: '4', c2: 'HCI', u2: '4', c3: 'Research', u3: '3', ct: '3', ut: '11' },
    ],
  },
  {
    year: '4',
    quarters: [
      { quarter: 'Fall', c1: 'Capstone', u1: '4', c2: 'Security', u2: '4', c3: 'Elective', u3: '3', ct: '3', ut: '11' },
      { quarter: 'Winter', c1: 'Elective', u1: '4', c2: 'Elective', u2: '4', c3: 'Elective', u3: '3', ct: '3', ut: '11' },
      { quarter: 'Spring', c1: 'Elective', u1: '4', c2: 'Elective', u2: '4', c3: 'Elective', u3: '3', ct: '3', ut: '11' },
    ],
  },
];

// AI notes now shown in description area
const aiNotes = `Our AI selected courses in a sequence that builds foundational knowledge, then advanced topics, ensuring prerequisites are met and optimizing for graduation.`;

export default function Transcript() {
  return (
    <div className="bg-[#101010] min-h-screen px-24 pt-24">
      {/* Page Title */}
      <h1 className="text-white text-4xl font-thin font-archivo mb-12 text-center">
        Your Recommended Schedule
      </h1>

      {/* AI Notes as Description */}
      <div className="flex items-center gap-4 bg-white/10 p-5 rounded-2xl mb-12 max-w-4xl mx-auto">
        <img src="/ai_icon.svg" alt="AI icon" className="h-6 w-6" />
        <p className="text-white text-lg font-light font-archivo leading-8">
          {aiNotes}
        </p>
      </div>

      {/* All Academic Years */}
      <div className="max-w-4xl mx-auto space-y-16">
        {transcriptData.map(({ year, quarters }) => (
          <div key={year}>
            <h4 className="text-white text-2xl font-light font-archivo uppercase tracking-wider mb-8 text-center">
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

      {/* Save & Download Section */}
      <div className="max-w-4xl mx-auto mt-12">
        <p className="text-white text-xl font-thin font-archivo mb-4">Schedule Name</p>
        <div className="flex flex-wrap gap-4 items-center">
          <input
            type="text"
            defaultValue="Computer Science Schedule 1"
            className="flex-grow p-4 rounded-md border border-gray-500 bg-[#282828] text-white placeholder-gray-400"
          />
          <button className="px-6 py-3 rounded-full bg-white/30 shadow-[0_0_20px_rgba(232,184,255,0.34)] text-white font-arquivo hover:bg-white/40 transition">
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