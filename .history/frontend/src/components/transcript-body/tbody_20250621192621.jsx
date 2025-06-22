import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Transcripts() {
  const [list, setList] = useState([]);

  useEffect(() => {
    // TODO: fetch GET /api/transcripts
    setList([
      { id: '1', title: 'Computer Science Transcript', semester: 'Spring 2026', date: '2025-01-23' },
      { id: '2', title: 'CS Transcript', semester: 'Spring 2026', date: '2025-01-23' },
      // ...
    ]);
  }, []);

  return (
    <div className="flex flex-col items-center bg-[#101010] py-24 px-12">
      <div className="w-full max-w-4xl">
        <h1 className="text-white text-4xl font-thin font-archivo mb-6">
          Your Generated Schedules
        </h1>
        <div className="flex items-center gap-4 bg-white/10 p-5 rounded-2xl mb-10">
          <img src="sparkle.svg" alt="" className="h-6 w-6" />
          <p className="text-white text-lg font-light font-archivo">
            Here are the schedules you generated in the past.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10">
          {list.map(item => (
            <Link to={`/transcripts/${item.id}`} key={item.id}>
              <div className="p-6 bg-white/5 rounded-xl hover:bg-white/10 transition">
                <h2 className="text-white text-2xl font-medium font-archivo">{item.title}</h2>
                <p className="text-white/70 mt-2">{item.semester}</p>
                <p className="text-white/50 mt-1 text-sm">{item.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}