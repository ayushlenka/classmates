'use client';

import { useState } from 'react';
import AuthLayout from '../../(index-page)/_components/auth-layout';

const graduationDates = [
  'Spring 2025',
  'Fall 2025',
  'Winter 2026',
  'Spring 2026',
  'Fall 2026',
];

const majors = [
  'Computer Science',
  'Design',
  'Biology',
  'Economics',
  'Engineering',
];

export default function Recommender() {
  const [file, setFile] = useState<File | null>(null);
  const [graduationDate, setGraduationDate] = useState('');
  const [major, setMajor] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');
  const [aiNotes, setAiNotes] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the file, graduation date, and major to your backend
    // and receive the generated PDF and AI notes in response
    // For now, we'll just simulate this process
    console.log('Submitting', { file, graduationDate, major });
    setPdfUrl('/sample-transcript.pdf'); // Replace with actual generated PDF URL
    setAiNotes(
      'Based on your transcript and chosen major, we recommend focusing on advanced algorithms courses and considering a minor in data science to complement your computer science degree.'
    );
  };

  return (
    <AuthLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Course Recommender</h1>
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
              onChange={(e) => setMajor(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select a major</option>
              {majors.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Generate Recommendations
            </button>
          </div>
        </form>
        {pdfUrl && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Generated Transcript</h2>
            <iframe
              src={pdfUrl}
              className="w-full h-96 border border-gray-300 rounded"
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
