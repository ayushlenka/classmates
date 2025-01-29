'use client';

import { useState } from 'react';
import AuthLayout from '../../(index-page)/_components/auth-layout';

// Define valid majors and their career options
const careerOptions = {
  'Computer Science': [
    'Software Engineer',
    'Data Scientist',
    'QA Engineer',
    'DevOps Engineer',
  ],
  Design: [
    'UX Designer',
    'UI Designer',
    'Product Designer',
    'Graphic Designer',
  ],
  Biology: [
    'Research Scientist',
    'Medical Doctor',
    'Pharmacist',
    'Environmental Scientist',
  ],
  Economics: [
    'Financial Analyst',
    'Economist',
    'Data Analyst',
    'Management Consultant',
  ],
  Engineering: [
    'Mechanical Engineer',
    'Electrical Engineer',
    'Civil Engineer',
    'Chemical Engineer',
  ],
} as const;

type Major = keyof typeof careerOptions;

const graduationDates = [
  'Spring 2025',
  'Fall 2025',
  'Winter 2026',
  'Spring 2026',
  'Fall 2026',
];

export default function Recommender() {
  const [isLoading, setIsLoading] = useState(false);
  const [pdfVisible, setPdfVisible] = useState(false);
  const [graduationDate, setGraduationDate] = useState('');
  const [major, setMajor] = useState<Major | ''>('');
  const [career, setCareer] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [aiNotes, setAiNotes] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setPdfVisible(false);

    console.log('Uploaded file:', file); // Log file details (optional)

    // Simulate a 30-second delay
    setTimeout(() => {
      setIsLoading(false);
      setPdfVisible(true);

      // Generate AI notes based on selected major and career path
      const notes = `Based on your transcript and chosen major (${major}), we recommend focusing on courses that align with your career goal as a ${career}. Consider exploring advanced courses and internship opportunities in your field to gain practical experience.`;
      setAiNotes(notes);
    }, 30000);
  };

  return (
    <AuthLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Transcript Generator</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="transcript"
            >
              Upload Unofficial Transcript
            </label>
            <input
              type="file"
              id="transcript"
              onChange={handleFileChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              disabled={isLoading}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="graduation-date"
            >
              Expected Graduation Date
            </label>
            <select
              id="graduation-date"
              value={graduationDate}
              onChange={(e) => setGraduationDate(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              disabled={isLoading}
            >
              <option value="">Select a date</option>
              {graduationDates.map((date) => (
                <option key={date} value={date}>
                  {date}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="major"
            >
              Major
            </label>
            <select
              id="major"
              value={major}
              onChange={(e) => setMajor(e.target.value as Major)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              disabled={isLoading}
            >
              <option value="">Select a major</option>
              {Object.keys(careerOptions).map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>
          {major && (
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="career"
              >
                Career Path
              </label>
              <select
                id="career"
                value={career}
                onChange={(e) => setCareer(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                disabled={isLoading}
              >
                <option value="">Select a career path</option>
                {careerOptions[major]?.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          )}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              disabled={isLoading || !graduationDate || !major || !career}
            >
              {isLoading ? 'Generating...' : 'Generate Transcript'}
            </button>
          </div>
        </form>
        {isLoading && (
          <div className="mt-4 text-gray-500">
            Processing your transcript, please wait...
          </div>
        )}
        {pdfVisible && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Generated Transcript</h2>
            <iframe
              src="/Generated_Schedule.pdf"
              className="w-full h-96 border border-gray-300 rounded"
              title="Generated Transcript"
            ></iframe>
          </div>
        )}
        {aiNotes && (
          <div className="mt-8 bg-white shadow-md rounded px-8 pt-6 pb-8">
            <h2 className="text-2xl font-bold mb-4">AI Notes</h2>
            <p className="text-gray-700">{aiNotes}</p>
          </div>
        )}
      </div>
    </AuthLayout>
  );
}
