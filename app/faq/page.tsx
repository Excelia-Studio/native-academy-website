import type { Metadata } from 'next';
import ScrollProgress from '../components/ScrollProgress';
import Navbar from '../components/Navbar/Navbar';
import FAQPage from '../components/FAQ/FAQPage';
import Footer from '../components/Footer/Footer';

export const metadata: Metadata = {
  title: 'Got Questions? We Have Answers — FAQ | Native Academy',
  description:
    'Explore frequently asked questions about Native Academy programs, age groups, online class structures, and languages offered for children and youth in the African diaspora.',
};

export default function FAQPageRoute() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="overflow-hidden bg-white">
        <FAQPage />
      </main>
      <Footer />
    </>
  );
}
