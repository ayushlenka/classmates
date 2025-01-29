import Hero from '../../(components)/home/hero/Hero';
import Features from '../../(components)/home/hero/Features';
import Testimonials from './_components/Hero/Testimonials';
import Footer from '../../(components)/common/Footer';
import Layout from '../../(components)/home/hero/layout';

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
