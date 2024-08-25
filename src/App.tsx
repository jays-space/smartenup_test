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
      /**
      * #region KnowledgeHub
      * ##this is a note for knowledge sharing
      * #endregion KnowledgeHub
      */
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
