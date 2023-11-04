import "./App.css";

import {
  // Navbar,
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
      {/* <Navbar /> */}
      <main className="relative overflow-x-hidden">
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
