import { ReactNode } from "react";

// COPY
import { MARQUEE_COPY } from "../../../copy";

/**
 * Generate Marquee Content
 *
 * Generates the content for the marquee by repeating the provided text elements.
 *
 * @param {number} nofLoops - The number of times the marquee content should be repeated.
 * @returns {ReactNode[] | void} An array of ReactNode elements to be used as the marquee content.
 */
export const generateMarqueeContent = (nofLoops: number): ReactNode[] => {
  // Initialize an array to store the marquee content.
  const content: ReactNode[] | void = [];

  // Loop 'nofLoops' times to repeat the marquee content.
  for (let i = 1; i <= nofLoops; i++) {
    // Map over the MARQUEE_COPY array to create span elements for each text item.
    content.push(
      MARQUEE_COPY.map((text, index) => {
        return (
          <span
            key={index}
            className="text-white text-3xl font-extrabold font-heading uppercase leading-[33.18px] tracking-wide min-w-fit"
          >
            {text}
          </span>
        );
      })
    );
  }

  // Return the generated marquee content.
  return content;
};
