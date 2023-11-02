import { ButtonVariantType } from "./Button.types";

/**
 * getButtonStyles - Returns the CSS class name based on the specified variant.
 *
 * @returns {string} - The CSS class name.
 */

export const getButtonStyles = (
  variant: ButtonVariantType | undefined
): string => {
  switch (variant) {
    case "primary":
      return `primaryButton`;

    case "secondary":
      return `secondaryButton`;

    case "default":
      return `defaultButton`;

    default:
      return `defaultButton`;
  }
};
