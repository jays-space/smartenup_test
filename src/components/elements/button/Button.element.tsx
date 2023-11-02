// TYPES
import { IButton } from "./Button.types";

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
  onClick = () => {},
}: IButton): JSX.Element => {
  // Render the button element with the specified properties and CSS class
  return (
    <button onClick={onClick} className={`${getButtonStyles(variant)}`}>
      {label}
    </button>
  );
};

export default Button;
