import React from 'react';

export default function Courses({ quarter, c1, u1, c2, u2, c3, u3, c4, u4, c5, u5, c6, u6, c7, u7, c8, u8, ct, ut }) {
  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Quarter Badge */}
      <span className="inline-block px-5 py-2 text-white text-[18px] font-thin font-archivo rounded-full border border-[#9747ff] bg-[#262626]">
        {quarter} Quarter
      </span>

      {/* Course Items */}
      {[
        { name: c1, unit: u1 },
        { name: c2, unit: u2 },
        { name: c3, unit: u3 },
        { name: c4, unit: u4 },
        { name: c5, unit: u5 },
        { name: c6, unit: u6 },
        { name: c7, unit: u7 },
        { name: c8, unit: u8 },
      ].map((course, idx) => (
        <div key={idx} className="flex w-full gap-2">
          <div className="w-4/5 p-5 text-white text-[18px] font-normal font-archivo bg-[#282828] border border-gray-500 rounded-md">
            {course.name}
          </div>
          <div className="w-1/5 flex items-center justify-center p-3 text-white text-[18px] font-normal font-archivo bg-[#282828] border border-gray-500 rounded-md">
            {course.unit}
          </div>
        </div>
      ))}

      {/* Totals */}
      <div className="flex justify-between items-center w-full mt-8 pb-14">
        <p className="text-white text-[18px] font-thin font-archivo">
          Total: <span className="text-[#bc55ec]">{ct} course(s)</span>
        </p>
        <p className="text-white text-[18px] font-thin font-archivo">
          {ut} units
        </p>
      </div>
    </div>
  );
}
