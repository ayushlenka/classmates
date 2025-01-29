/* eslint-disable prettier/prettier */
"use client";

import Image from 'next/image';
import { Button } from '../../../_globals/components/ui/button';

export default function Hero() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-4">Find Your Perfect Classes</h2>
          <p className="text-xl mb-6">
            Classmates is an AI-powered class recommender system that helps UC
            Davis students pick classes based on their major, expected
            graduation, and current transcript.
          </p>
          <Button size="lg" variant="secondary">
            Get Started
          </Button>
        </div>
        <div className="relative h-[400px]">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Students collaborating"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
