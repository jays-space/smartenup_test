import { HeadingVariantTypes } from "./Heading.types";

/**
 * This utility function returns a CSS class string based on the provided heading variant.
 * It's designed to be used in styling for different heading elements (h1, h2, h3, etc.).
 *
 * @param variant - The heading variant type (e.g., "h1", "h2", etc.) or undefined if not specified.
 * @returns A CSS class string representing the styles for the specified heading variant.
 */
export const getHeadingStyles = (variant: HeadingVariantTypes | undefined) => {
  // Common styles shared by all heading variants.
  const commonStyles = `text-body font-heading font-extrabold uppercase`;

  switch (variant) {
    case "h1":
      // Styles for h1 headings with specific font size, weight, line height, and tracking.
      return `h1-styles ${commonStyles} text-[40.29px] lg:text-6xl leading-[44.56px] lg:leading-[76.24px] tracking-widest lg:tracking-[2.76px]`;
    case "h2":
      // Styles for h2 headings with common styles.
      return `h2-styles ${commonStyles} text-5xl leading-[55.97px]`;
    case "h3":
      // Styles for h3 headings with common styles.
      return `h3-styles ${commonStyles} `;
    case "h4":
      // Styles for h4 headings with common styles.
      return `h4-styles ${commonStyles} `;
    case "h5":
      // Styles for h5 headings with common styles.
      return `h5-styles ${commonStyles} `;
    case "h6":
      // Styles for h6 headings with common styles.
      return `h6-styles ${commonStyles} `;

    default:
      // Default styles to be applied when the variant is not specified.
      return `h1-styles ${commonStyles} text-6xl leading-[76.24px] tracking-[2.76px]`;
  }
};
