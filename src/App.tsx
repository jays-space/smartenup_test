import "./App.css";

// COMPONENTS
import {
  Navbar,
  BannerSection,
  CTASection,
  FiltersSection,
  Footer,
  GameCarouselSection,
  TestimonialsCarouselSection,
} from "@/components/templates";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <BannerSection />
        <GameCarouselSection />
        <CTASection />
        <FiltersSection />
        <TestimonialsCarouselSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
