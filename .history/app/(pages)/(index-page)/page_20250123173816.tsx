import Hero from './_components/Hero/Hero';
import Features from './_components/Hero/Features';
import Testimonials from './_components/Hero/Testimonials';
import Footer from './_components/Footer/Footer';
import Layout from './_components/Hero/layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </Layout>
  );
}
