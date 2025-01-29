import { DiscIcon as Discord } from 'lucide-react';

export default function DiscordAndFooter() {
  return (
    <section className="bg-davisblue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl mb-6">
            Connect with fellow UC Davis students and get the latest updates on
            Classmates.
          </p>
          <button className="bg-white text-davisblue px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-100 transition-colors inline-flex items-center">
            <Discord className="mr-2 h-5 w-5" />
            Join our Discord
          </button>
        </div>
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Classmates. All rights reserved.
          </p>
          <p className="text-sm mt-2">
            Classmates is not affiliated with or endorsed by the University of
            California, Davis.
          </p>
        </div>
      </div>
    </section>
  );
}
