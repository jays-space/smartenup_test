/**
 * Returns the appropriate text styles based on the value of the 'interactive' parameter.
 * @param interactive - A boolean flag indicating whether the text should have interactive styles.
 * @returns A string representing the CSS classes for the text styles.
 */

export const getTextStyles = (interactive: boolean) => {
  // Common text styles shared between interactive and non-interactive text
  const commonStyles = ` text-body text-lg font-normal `;

  if (interactive) {
    // Return interactive text styles with common styles
    return `text-interactive-styles ${commonStyles} font-heading uppercase font-extrabold leading-snug tracking-wide cursor-pointer`;
  } else {
    // Return default text styles with common styles
    return `text-default-styles ${commonStyles} font-body leading-[34.64px] tracking-wide`;
  }
};
