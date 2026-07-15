import type { Metadata } from 'next';
import ScrollProgress from '../components/ScrollProgress';
import Navbar from '../components/Navbar/Navbar';
import ServicesHero from '../components/ServicesPage/ServicesHero';
import YorubaAcademy from '../components/ServicesPage/YorubaAcademy';
import LanguageWaitlist from '../components/ServicesPage/LanguageWaitlist';
import Footer from '../components/Footer/Footer';

export const metadata: Metadata = {
  title: 'Interactive Language Programs — Native Academy',
  description:
    'Vibrant online Yoruba language classes and culture tracks tailored for children and youth in the African diaspora. Join our flagship program or register for upcoming language waitlists.',
};

export default function ServicesPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="overflow-hidden bg-white">
        <ServicesHero />
        <YorubaAcademy />
        {/* <LanguageWaitlist /> */}
      </main>
      <Footer />
    </>
  );
}
