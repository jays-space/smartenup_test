import "./App.css";

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
    <div className="relative overflow-x-hidden">
      <Navbar />
      <main className="relative">
        <BannerSection />
        <GameCarouselSection />
        <CTASection />
        <FiltersSection />
        <TestimonialsCarouselSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
