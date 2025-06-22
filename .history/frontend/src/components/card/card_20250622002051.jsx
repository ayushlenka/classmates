import React from 'react';

export default function Card({ title, year, date, link }) {
  return (
    <div className="flex flex-col p-10 bg-[#282828] border border-gray-500 rounded-[20px]">
      {/* Top Row */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-white text-[24px] font-medium font-archivo">{title}</h3>
        <span className="px-5 py-2 rounded-full border border-[#9747ff] bg-white/10 text-white text-[18px] font-normal font-archivo">
          {year}
        </span>
      </div>

      {/* Date Line */}
      <p className="text-white italic font-light font-archivo text-[18px]">
        Generated on: <span className="text-[#bc55ec]">{date}</span>
      </p>

      {/* Action Button */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-12 px-5 py-2 w-[200px] text-white text-[18px] font-medium font-inter bg-[rgba(232,184,255,0.34)] rounded-full shadow-[0px_0px_20px_rgba(232,184,255,0.34)] text-center"
      >
        View transcript →
      </a>
    </div>
  );
}