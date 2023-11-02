import { ReactNode } from "react";

/**
 * Props interface for the Heading component.
 */

export interface IHeading {
  children: ReactNode; // The content to be displayed within the heading.
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"; // Optional variant to specify the heading level (default is 'h1').
}
