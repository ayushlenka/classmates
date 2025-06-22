import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const careerOptions = {
  'Computer Science': ['Software Engineer', 'Data Scientist', 'Systems Engineer', 'Backend Developer'],
  'Design': ['UI/UX Designer', 'Graphic Designer', 'Product Designer', 'Interaction Designer'],
  'Cognitive Science': ['Data Analyst', 'HCI Researcher', 'AI Ethicist', 'Neuroscience Intern'],
};

const gradOptions = [
  'December 2025','March 2026','June 2026','September 2026',
  'December 2026','March 2027','June 2027','September 2027',
  'December 2027','March 2028','June 2028','September 2028',
  'December 2028','March 2029','June 2029'
];

export default function Generator() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [gradDate, setGradDate] = useState('');
  const [major, setMajor] = useState('');
  const [career, setCareer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // TODO: upload file & formData, then get jobId
    setTimeout(() => navigate('/transcripts/123'), 1000);
  };

  return (
    <div className="bg-[#101010] min-h-screen px-24 pt-24">
      <h1 className="text-white text-4xl font-thin font-archivo mb-8 text-center">Schedule Generator</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-12 max-w-4xl mx-auto">
        {/* File Upload */}
        <div className="flex flex-col">
          <label className="mb-3 text-white text-lg font-thin font-archivo">Upload Unofficial Transcript</label>
          <label htmlFor="file-upload" className="cursor-pointer w-full h-64 flex items-center justify-center border-2 border-dashed border-white bg-[#282828] rounded-md text-white hover:bg-gray-700 transition">
            {file ? file.name : 'Click or Drag to Upload'}
            <input id="file-upload" type="file" accept=".pdf,.csv" className="hidden" onChange={(e) => setFile(e.target.files[0])} required/>
          </label>
        </div>

        {/* Selections */}
        <div className="flex gap-5">
          <div className="flex flex-col w-1/2">
            <label className="mb-3 text-white text-lg font-thin font-archivo">Expected Graduation</label>
            <select value={gradDate} onChange={(e) => setGradDate(e.target.value)} className="p-5 rounded-md border border-gray-500 bg-[#282828] text-white" required>
              <option value="" disabled>Select a date</option>
              {gradOptions.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col w-1/2">
            <label className="mb-3 text-white text-lg font-thin font-archivo">Major</label>
            <select value={major} onChange={(e) => { setMajor(e.target.value); setCareer(''); }} className="p-5 rounded-md border border-gray-500 bg-[#282828] text-white"required>
              <option value="" disabled>Select a major</option>
              {Object.keys(careerOptions).map(m => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>
        </div>

        {major && (
          <div className="flex flex-col w-1/2 mx-auto">
            <label className="mb-3 text-white text-lg font-thin font-archivo">Career Path</label>
            <select value={career} onChange={(e) => setCareer(e.target.value)} className="p-5 rounded-md border border-gray-500 bg-[#282828] text-white" required>
              <option value="" disabled>Select a career</option>
              {careerOptions[major].map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        )}

        <button type="submit" disabled={loading} className={`mt-5 w-44 py-5 text-white text-lg font-archivo rounded-full bg-[rgba(188,85,236,0.35)] shadow-lg ${loading ? 'opacity-50' : 'opacity-100'}`}>
          {loading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
            </div>
          ) : (
            'Create Schedule'
          )}
        </button>
      </form>
    </div>
  )
}