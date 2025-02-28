import AuthLayout from '../../(index-page)/_components/auth-layout';
import ViewTranscriptButton from './ViewTranscriptButton'; // Import the client component

// Simulate manually adding generated transcripts
const transcripts = [
  {
    id: 1,
    date: '2025-01-23',
    name: 'Spring 2026 - Computer Science Transcript',
  },
  {
    id: 2,
    date: '2025-01-23',
    name: 'Spring 2026 - Computer Science Transcript',
  },
  {
    id: 3,
    date: '2025-01-22',
    name: 'Spring 2026 - Computer Science Transcript',
  },
];

export default function Transcripts() {
  return (
    <AuthLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Your Transcripts</h1>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {transcripts.length === 0 ? (
            <p className="text-gray-600">No transcripts generated yet.</p>
          ) : (
            transcripts.map((transcript) => (
              <div key={transcript.id} className="mb-4 p-4 border-b">
                <h2 className="text-xl font-semibold">{transcript.name}</h2>
                <p className="text-gray-600">Generated on: {transcript.date}</p>
                {/* Use the client component */}
                <ViewTranscriptButton />
              </div>
            ))
          )}
        </div>
      </div>
    </AuthLayout>
  );
}
