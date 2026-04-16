import AboutSection from "./About/About";
import HeroSection from "./Hero/Hero";
import HighlightsSection from "./Highlights/Highlights";
import "./homepage.css";
import TestimonialsSection from "./Testimonials/Testimonials";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <HighlightsSection />
      <TestimonialsSection />
      <AboutSection />
    </main>
  );
};

export default HomePage;
