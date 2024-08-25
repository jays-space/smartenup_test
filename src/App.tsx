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
      * # this is a note for knowledge sharing
      * 
      * --
      * ## Heading 2
      * ### Heading 3
      * #### Heading 4
      * ##### Heading 5
      * ###### Heading 6
      * --
      *
      * * point
      * - point
      * 1. point
      *
      * ---
      *
      * |column| column |
      * --
      * |1|2|
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
