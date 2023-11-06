// TYPES
import { ISection } from "./Section.types";

/**
 * Section Component
 *
 * This component represents a generic section in a UI with a title and content.
 *
 * @param children - The content of the section, typically nested components.
 * @param title - The title of the section, which will be used as the section's title and data-testid attribute.
 * @returns A section element containing the specified children with a title and data-testid attribute.
 */
const Section = ({ children, title, className = "" }: ISection) => {
  return (
    <section data-testid={title} className={`${className} relative bg-background w-full min-h-screen px-6 md:px-12 xl:px-24 2xl:px-56 py-20 overflow-visible`}>
      {children}
    </section>
  );
};

export default Section;
