import { ButtonVariantType } from "./Button.types";

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
      return `primary-button-styles ${commonStyles} px-12 py-4 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-fuchsia-950`;

    case "secondary":
      return `secondary-button-styles ${commonStyles} bg-gradient-to-r from-violet-500  via-fuchsia-500 to-fuchsia-950`;

    default:
      return `default-button-styles ${commonStyles}`;
  }
};
