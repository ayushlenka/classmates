import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const careerOptions = {
  'Computer Science': ['Software Engineer', 'Data Scientist', 'Systems Engineer', 'Backend Developer'],
  'Design': ['UI/UX Designer', 'Graphic Designer', 'Product Designer', 'Interaction Designer'],
  'Cognitive Science': ['Data Analyst', 'HCI Researcher', 'AI Ethicist', 'Neuroscience Intern'],
};

export default function Input() {
  const navigate = useNavigate();
  const [transcriptFile, setTranscriptFile] = useState(null);
  const [gradDate, setGradDate] = useState('');
  const [major, setMajor] = useState('');
  const [career, setCareer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // TODO: upload file & form data to backend, get jobId
    // simulate delay
    setTimeout(() => {
      navigate('/results');
    }, 1000);
  };

  return (
    <div className="pl-24">
      <h1 className="mt-32 mb-20 text-white text-[48px] font-archivo font-thin">
        Schedule Generator
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-[1240px]">
        <label className="mb-3 text-white text-[18px] font-archivo font-thin">
          Upload Unofficial Transcript
        </label>
        <input
          type="file"
          accept=".pdf,.csv"
          onChange={(e) => setTranscriptFile(e.target.files[0])}
          className="w-full h-[260px] rounded-md border border-dashed border-white bg-[#282828] text-white"
          required
        />

        <div className="flex justify-center gap-5 mt-12">
          <div className="flex flex-col w-1/2">
            <label className="mb-3 text-white text-[18px] font-archivo font-thin">
              Expected Graduation Date
            </label>
            <input
              type="date"
              value={gradDate}
              onChange={(e) => setGradDate(e.target.value)}
              className="p-5 rounded-md border border-[#7c7c7c] bg-[#282828] text-white"
              required
            />
          </div>

          <div className="flex flex-col w-1/2">
            <label className="mb-3 text-white text-[18px] font-archivo font-thin">
              Major
            </label>
            <select
              value={major}
              onChange={(e) => { setMajor(e.target.value); setCareer(''); }}
              className="p-5 rounded-md border border-[#7c7c7c] bg-[#282828] text-white"
              required
            >
              <option value="" disabled>Select a major</option>
              {Object.keys(careerOptions).map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>
        </div>

        {major && (
          <div className="flex flex-col mt-12 w-1/2">
            <label className="mb-3 text-white text-[18px] font-archivo font-thin">
              Career Path
            </label>
            <select
              value={career}
              onChange={(e) => setCareer(e.target.value)}
              className="p-5 rounded-md border border-[#7c7c7c] bg-[#282828] text-white"
              required
            >
              <option value="" disabled>Select a career</option>
              {careerOptions[major].map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className={`mt-10 w-[174px] py-5 text-white text-[18px] font-archivo rounded-full bg-[rgba(188,85,236,0.35)] shadow-[0px_0px_20px_rgba(232,184,255,0.34)] ${loading ? 'opacity-50' : 'opacity-100'}`}
        >
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
  );
}