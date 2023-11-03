// TYPES
import { IText } from "./Text.types";

/**
 * Text Component
 *
 * A simple component for rendering text content within a paragraph element.
 *
 * @param {IText} props - The properties for the Text component.
 * @param {React.ReactNode} props.children - The content to be displayed within the paragraph.
 *
 * @example
 * <Text>This is some text content.</Text>
 */

const Text = ({ children }: IText): JSX.Element => {
  return <p className={`text-body text-lg font-body font-normal leading-[34.64px] tracking-wide`}>{children}</p>;
};

export default Text;
