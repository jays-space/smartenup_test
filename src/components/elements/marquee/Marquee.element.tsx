// UTILS
import { generateMarqueeContent } from "./Marquee.utils";

/**
 * Marquee Component
 *
 * A React component that renders a marquee effect by repeating a set of text elements.
 *
 * @returns {JSX.Element} The Marquee component.
 */
const Marquee = ({
  nofLoops = 2,
  className = "",
  glass = false,
}: {
  nofLoops?: number;
  className?: string;
  glass?: boolean;
}): JSX.Element => {
  return (
    <div
      data-testid="Marquee"
      className={`absolute -left-2 z-20 flex flex-row gap-14 min-w-[150vw] py-6 ${
        glass
          ? "bg-violet-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border-y-[2px] border-violet-500 border-opacity-30"
          : ""
      } ${className}`}
    >
      {generateMarqueeContent(nofLoops)}
    </div>
  );
};

export default Marquee;
