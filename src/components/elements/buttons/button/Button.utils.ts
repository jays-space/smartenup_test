// TYPES
import { ButtonVariantType } from "../buttons.types";

// CONSTANTS
import { GRADIENT_BG } from "../../../../constants/index";

/**
 * getButtonStyles - Returns the CSS class name based on the specified variant.
 *
 * @returns {string} - The CSS class name.
 */

export const getButtonStyles = (
  variant: ButtonVariantType | undefined
): string => {
  const commonStyles = `flex flex-row justify-center items-center`;

  switch (variant) {
    case "primary":
      return `primary-button-styles ${commonStyles} px-8 lg:px-12 py-4 lg:py-5 ${GRADIENT_BG}`;

    case "secondary":
      return `secondary-button-styles ${commonStyles} ${GRADIENT_BG}`;

    default:
      return `default-button-styles ${commonStyles}`;
  }
};
