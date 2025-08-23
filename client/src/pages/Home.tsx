import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import PainPoints from '@/components/PainPoints';
import Solutions from '@/components/Solutions';
import Benefits from '@/components/Benefits';
import Process from '@/components/Process';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SEO, { SEOConfigs } from '@/components/SEO';

export default function Home() {
  return (
    <div className='min-h-screen'>
      <SEO {...SEOConfigs.home} />
      <Navigation />
      <Hero />
      <PainPoints />
      <Solutions />
      <Benefits />
      <Process />
      <About />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
