import type { Metadata } from 'next';
import ScrollProgress from '../components/ScrollProgress';
import Navbar from '../components/Navbar/Navbar';
import AboutHero from '../components/About/AboutHero';
import AboutFoundation from '../components/About/AboutFoundation';
import AboutLookingForward from '../components/About/AboutLookingForward';
import Footer from '../components/Footer/Footer';

export const metadata: Metadata = {
  title: 'About Us — Native Academy',
  description:
    'Native Academy is dedicated to promoting native languages and preserving cultural heritage for the African diaspora. Read our origin story, mission, and vision.',
};

export default function AboutUsPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="overflow-hidden">
        <AboutHero />
        <AboutFoundation />
        <AboutLookingForward />
      </main>
      <Footer />
    </>
  );
}
