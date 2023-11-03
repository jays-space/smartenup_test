// TYPES
import { IText } from "./Text.types";

// UTILS
import { getTextStyles } from "./Text.utils";

/**
 * Text Component
 * This component is used to render text content with optional interactivity.
 *
 * @param children - The content to be displayed within the Text component.
 * @param interactive - A boolean flag indicating whether the text should be interactive.
 * @param className - Additional CSS classes to be applied to the Text component.
 *
 * @example
 * Render text within a paragraph element (non-interactive):
 * <Text>This is some text content.</Text>
 *
 * Render text within a span element (interactive):
 * <Text interactive={true}>Interactive text.</Text>
 */

const Text = ({ children, interactive = false, className = "" }: IText): JSX.Element => {
  // Determine the element type (paragraph or span) based on the 'interactive' prop.
  const Element = interactive ? "span" : "p";

  // Get the appropriate text styles using the 'getTextStyles' utility function.
  const styles = getTextStyles(interactive);

  return (
    <Element className={`${styles} ${className}`}>{children}</Element>
  );
};


export default Text;
