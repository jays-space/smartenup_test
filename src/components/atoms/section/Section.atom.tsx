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
    <section data-testid={title} className={`${className} relative bg-violet-950 w-full min-h-screen px-52 py-20 overflow-x-hidden`}>
      {children}
    </section>
  );
};

export default Section;