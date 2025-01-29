import Image from 'next/image';

const testimonials = [
  {
    name: 'Emerson Lo',
    major: 'Design',
    quote: 'Classmates helped me plan my entire academic year in minutes!',
    avatar: '/placeholder.svg',
  },
  {
    name: 'Johnson Ou',
    major: 'Cognitive Science',
    quote:
      "I discovered classes I never knew existed. It's been a game-changer for my degree.",
    avatar: '/placeholder.svg',
  },
  {
    name: 'Linden Wang',
    major: 'Computer Science',
    quote:
      "The AI recommendations are spot-on. It's like having a personal academic advisor.",
    avatar: '/placeholder.svg',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Users Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.major}
                  </p>
                </div>
              </div>
              <p className="italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
