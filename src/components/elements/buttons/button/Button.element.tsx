// TYPES
import { IButton } from "./Button.types";

// COMPONENTS
import { Text } from "../../../atoms/typography/text";

// CONSTANTS
import { GRADIENT_BG } from "../../../../constants";

// UTILS
import { getButtonStyles } from "./Button.utils";

/**
 * Button component is a reusable button element that can have different styling variants.
 *
 * @param {IButton} props - The properties for the Button component.
 * @param {string} props.label - The text to display on the button.
 * @param {string} [props.variant] - The styling variant of the button (primary, secondary, or default).
 * @param {() => void} [props.onClick] - The click event handler for the button.
 *
 * @returns {JSX.Element} - A button element with the specified properties.
 */
const Button = ({
  label,
  variant = undefined,
  className = "",
  onClick = () => {},
}: IButton): JSX.Element => {
  // Render the button element with the specified properties and CSS class
  return (
    <button onClick={onClick} className={`${getButtonStyles(variant)} -skew-x-12`}>
      {variant === "secondary" ? (
        <span data-testid={`secondaryButtonContentBackground`} className={`text-content-background bg-background m-[1px] px-12 py-4 cursor-pointer ${className}`}>
          <Text interactive className={`${GRADIENT_BG} inline-block text-transparent bg-clip-text skew-x-12`}>{label}</Text>
        </span>
      ) : (
        <Text interactive className={`skew-x-12 ${className}`}>{label}</Text>
      )}
    </button>
  );
};

export default Button;