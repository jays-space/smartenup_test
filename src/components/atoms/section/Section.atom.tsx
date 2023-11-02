import { ReactNode } from "react";

/**
 * Section Component
 *
 * This component represents a generic section in a UI with a title and content.
 *
 * @param children - The content of the section, typically nested components.
 * @param title - The title of the section, which will be used as the section's title and data-testid attribute.
 * @returns A section element containing the specified children with a title and data-testid attribute.
 */
const Section = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  return (
    <section title={title} data-testid={title}>
      {children}
    </section>
  );
};

export default Section;
