import React from 'react';

export default function CourseQuarter({ quarter, courses, ct, ut }) {
  // Map quarter to outline color
  const colorMap = {
    Fall: 'border-purple-500',
    Winter: 'border-blue-400',
    Spring: 'border-green-400',
  };
  const colorClass = colorMap[quarter] || 'border-gray-500';

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Quarter Badge */}
      <span className={`inline-block px-5 py-2 text-white text-lg font-thin font-archivo rounded-full border ${colorClass} bg-[#262626]`}>
        {quarter} Quarter
      </span>

      {/* Dynamic Course Items */}
      {courses.map((course, idx) => (
        <div key={idx} className="flex w-full gap-4">
          <div className="flex-grow p-4 text-white text-lg font-normal font-archivo bg-[#282828] border border-gray-600 rounded-md">
            {course.name}
          </div>
          <div className="w-20 flex items-center justify-center p-4 text-white text-lg font-normal font-archivo bg-[#282828] border border-gray-600 rounded-md">
            {course.units}
          </div>
        </div>
      ))}

      {/* Totals */}
      <div className="flex justify-between items-center w-full mt-4 pb-8">
        <p className="text-white text-lg font-thin font-archivo">
          Total: <span className="text-[#bc55ec]">{ct} course(s)</span>
        </p>
        <p className="text-white text-lg font-thin font-archivo">
          {ut} units
        </p>
      </div>
    </div>
  )
}