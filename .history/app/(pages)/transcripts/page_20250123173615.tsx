import AuthLayout from '../(index-page)/_components/auth-layout';

// This would typically come from your backend
const transcripts = [
  { id: 1, date: '2023-06-15', name: 'Spring 2023 Transcript' },
  { id: 2, date: '2023-12-20', name: 'Fall 2023 Transcript' },
  { id: 3, date: '2024-03-25', name: 'Winter 2024 Transcript' },
];

export default function Transcripts() {
  return (
    <AuthLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Your Transcripts</h1>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {transcripts.map((transcript) => (
            <div key={transcript.id} className="mb-4 p-4 border-b">
              <h2 className="text-xl font-semibold">{transcript.name}</h2>
              <p className="text-gray-600">Generated on: {transcript.date}</p>
              <button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                View Transcript
              </button>
            </div>
          ))}
        </div>
      </div>
    </AuthLayout>
  );
}
