import { ReactNode } from "react";

// COMPONENTS
import { Star } from "@/components/atoms/star";

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
        return text.includes("-") ? (
          <span key={index} className="flex flex-row items-center gap-x-6">
            <Star />
            <span className="text-white text-base lg:text-3xl font-bold font-heading uppercase leading-[33.18px] tracking-wide min-w-fit flex-1">
              {text.split(/-/i)}
            </span>
          </span>
        ) : (
          <span key={index} className="flex flex-row items-center gap-x-6">
            <Star />
            <span className="text-white text-base lg:text-3xl font-bold font-heading uppercase leading-[33.18px] tracking-wide min-w-fit flex-1">
              {text}
            </span>
          </span>
        );
      })
    );
  }

  // Return the generated marquee content.
  return content;
};
