// TYPES
import { IText } from "./Text.types";

// UTILS
import { getTextStyles } from "./Text.utils";

/**
 * Text Component
 *
 * A simple component for rendering text content within a paragraph or span element, depending on the 'interactive' prop.
 *
 * @param {IText} props - The properties for the Text component.
 * @param {React.ReactNode} props.children - The content to be displayed within the paragraph or span.
 * @param {boolean} [props.interactive=false] - A flag to determine whether the text is interactive or not. Defaults to 'false'.
 *
 * @example
 * Render text within a paragraph element (non-interactive):
 * <Text>This is some text content.</Text>
 *
 * Render text within a span element (interactive):
 * <Text interactive={true}>Interactive text.</Text>
 */

const Text = ({ children, interactive = false }: IText): JSX.Element => {
  // Determine the element type (paragraph or span) based on the 'interactive' prop.
  const Element = interactive ? "span" : "p";

  // Get the appropriate text styles using the 'getTextStyles' utility function.
  const styles = getTextStyles(interactive);

  return (
    <Element className={`${styles}`}>{children}</Element>
  );
};


export default Text;
