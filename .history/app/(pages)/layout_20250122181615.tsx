import '../_globals/globals.css';

export const metadata = {
  title: 'Classmates',
  description: 'AI-powered class recommender system for UC Davis students',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
