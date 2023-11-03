// COPY
import { MARQUEE_COPY } from "../../../copy";

const Marquee = () => {
  return (
    <div data-testid="Marquee" className="absolute flex flex-row -left-2 w-[150vw] py-10 origin-top-left -rotate-2 justify-start items-start gap-14 bg-violet-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border-y-[2px] border-violet-500 border-opacity-30 z-20">
      {MARQUEE_COPY.map((text, index) => {
        return (
          <span
            key={index}
            className="text-white text-3xl font-extrabold font-heading uppercase leading-[33.18px] tracking-wide"
          >
            {text}
          </span>
        );
      })}
    </div>
  );
};

export default Marquee;
