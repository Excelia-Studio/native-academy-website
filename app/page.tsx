import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";
import WhoWeAre from "./components/WhoWeAre/WhoWeAre";
import Services from "./components/Services/Services";
import WhyTrust from "./components/WhyTrust/WhyTrust";
import Testimonials from "./components/Testimonials/Testimonials";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import WelcomeVoice from "./components/WelcomeVoice/WelcomeVoice";

export default function Home() {
  return (
    <>
      <WelcomeVoice />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <WhatWeDo />
        <WhoWeAre />
        <Services />
        <WhyTrust />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
