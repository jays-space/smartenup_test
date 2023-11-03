import { ReactNode } from "react";

export type HeadingVariantTypes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

/**
 * Props interface for the Heading component.
 */
export interface IHeading {
  children: ReactNode; // The content to be displayed within the heading.
  variant?: HeadingVariantTypes; // Optional variant to specify the heading level (default is 'h1').
}
