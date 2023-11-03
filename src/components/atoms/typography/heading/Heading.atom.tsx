// TYPES
import { IHeading } from "./Heading.types";
import { getHeadingStyles } from "./Heading.utils";

/**
 * The `Heading` component is used to render different heading levels (h1, h2, h3, h4, h5, h6).
 *
 * @param {IHeading} props - The component's props.
 * @param {string} props.children - The content to be displayed within the heading.
 * @param {string} props.variant - The variant determines the HTML heading element to use (e.g., "h1", "h2"). If not provided, it defaults to "h1".
 * @returns {JSX.Element} - Returns the appropriate heading element with the specified content.
 */

const Heading = ({ children, variant = undefined }: IHeading): JSX.Element => {
  // Determine the appropriate heading element based on the provided 'variant' prop.
  switch (variant) {
    case "h1": {
      return <h1 className={`${getHeadingStyles(variant)}`}>{children}</h1>;
    }

    case "h2": {
      return <h2 className={`${getHeadingStyles(variant)}`}>{children}</h2>;
    }

    case "h3": {
      return <h3 className={`${getHeadingStyles(variant)}`}>{children}</h3>;
    }

    case "h4": {
      return <h4 className={`${getHeadingStyles(variant)}`}>{children}</h4>;
    }

    case "h5": {
      return <h5 className={`${getHeadingStyles(variant)}`}>{children}</h5>;
    }

    case "h6": {
      return <h6 className={`${getHeadingStyles(variant)}`}>{children}</h6>;
    }

    // Default case: If 'variant' is not provided or invalid, it defaults to "h1".
    default:
      return <h1 className={`${getHeadingStyles(variant)}`}>{children}</h1>;
  }
};

export default Heading;
