import { Lightbulb, GraduationCap, Clock } from 'lucide-react';

const features = [
  {
    icon: Lightbulb,
    title: 'AI-Powered Recommendations',
    description:
      'Our advanced AI analyzes your academic history and goals to suggest the most suitable classes for your unique path.',
  },
  {
    icon: GraduationCap,
    title: 'Personalized for UC Davis',
    description:
      'Tailored specifically for UC Davis students, ensuring all recommendations align with university requirements and offerings.',
  },
  {
    icon: Clock,
    title: 'Efficient Planning',
    description:
      'Save time and stress by quickly generating optimized class schedules that keep you on track for graduation.',
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          How Classmates Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <feature.icon className="h-12 w-12 text-davisblue mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
