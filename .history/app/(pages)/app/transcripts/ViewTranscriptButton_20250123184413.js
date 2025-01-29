'use client';

export default function ViewTranscriptButton() {
  const handleClick = () => {
    window.open('/Generated_Schedule.pdf', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      View Transcript
    </button>
  );
}
