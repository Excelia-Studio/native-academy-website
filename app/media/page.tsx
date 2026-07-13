import type { Metadata } from 'next';
import ScrollProgress from '../components/ScrollProgress';
import Navbar from '../components/Navbar/Navbar';
import MediaHero from '../components/MediaPage/MediaHero';
import VideoSeries from '../components/MediaPage/VideoSeries';
import QuizSection from '../components/MediaPage/QuizSection';
import Footer from '../components/Footer/Footer';

export const metadata: Metadata = {
  title: 'Èdè Aládùn: Sweet Language Series — Native Academy',
  description:
    'Explore our weekly bite-sized video series teaching the fundamentals of the rich and vibrant Yorùbá language. Access greetings and classroom name episodes, vocabulary reviews, and interactive quizzes.',
};

export default function MediaPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="overflow-hidden bg-white">
        <MediaHero />
        <VideoSeries />
        <QuizSection />
      </main>
      <Footer />
    </>
  );
}
