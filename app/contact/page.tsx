import type { Metadata } from 'next';
import ScrollProgress from '../components/ScrollProgress';
import Navbar from '../components/Navbar/Navbar';
import ContactHero from '../components/Contact/ContactHero';
import ContactForm from '../components/Contact/ContactForm';
import ContactDetails from '../components/Contact/ContactDetails';
import ContactFAQs from '../components/Contact/ContactFAQs';
import Footer from '../components/Footer/Footer';

export const metadata: Metadata = {
  title: "Begin Your Child's Journey — Contact Native Academy",
  description:
    "Register for Yoruba language and cultural cohorts or vote for upcoming waitlist tracks. Connect with Native Academy through WhatsApp, email, or social channels.",
};

export default function ContactPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="overflow-hidden bg-white">
        <ContactHero />
        <ContactForm />
        <ContactDetails />
      </main>
      <Footer />
    </>
  );
}
