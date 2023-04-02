import Demo from '../components/demo/demo';
import Faq from '../components/faq/faq';
import Features from '../components/features/features';
import Footer from '../components/footer/footer';
import Hero from '../components/hero/hero';
import Navbar from '../components/navbar/navbar';
import Roadmap from '../components/roadmap/roadmap';
import Token from '../components/token/token';

export function Index() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Token />
      <Roadmap />
      <Demo />
      <Faq />
      <Footer />
    </>
  );
}

export default Index;
