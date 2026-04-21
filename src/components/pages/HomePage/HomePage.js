import AboutSection from "./About/About";
import HeroSection from "./Hero/Hero";
import HighlightsSection from "./Highlights/Highlights";
import "./homepage.css";
import TestimonialsSection from "./Testimonials/Testimonials";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <HighlightsSection />
      <TestimonialsSection />
      <AboutSection />
    </>
  );
};

export default HomePage;
