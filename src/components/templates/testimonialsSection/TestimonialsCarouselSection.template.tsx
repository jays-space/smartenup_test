import { useEffect, useRef, useState } from "react";

// COMPONENTS
import { BlurSphere, Card, Icon, Section, Text } from "@/components/atoms";
import { Button, Marquee } from "@/components/elements";

// CONSTANTS
import { GRADIENT_BG } from "@/constants";

// COPY
import { TESTIMONIALS_SECTION_COPY } from "@/copy";
import { ReactNode } from "react";

const TestimonialsCarouselSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [currIndex, setCurrIndex] = useState<number>(0);
  const nofIndexes = TESTIMONIALS_SECTION_COPY.testimonials.length;

  const handleNext = () => {
    setCurrIndex((v) => (v >= nofIndexes ? 1 : v + 1));
  };

  // const handlePrev = () => {
  //   setCurrIndex((v) => (v <= 1 ? 1 : v - 1));
  // };

  useEffect(() => {
    ref.current?.classList.remove(`translate-x-0`);
    ref.current?.classList.remove(`-translate-x-[${(currIndex - 1) * 488}px]`);

    ref.current?.classList.add(
      currIndex >= nofIndexes
        ? `translate-x-0`
        : `-translate-x-[${currIndex * 488}px]`
    );
  }, [currIndex, nofIndexes]);

  return (
    <Section
      title="Testimonials Carousel Section"
      className={`flex flex-col items-center mb-20 h-[140vh] md:h-[120vh] lg:h-auto`}
    >
      <BlurSphere className={`-top-96 left-0`} />

      <Marquee />

      <div
        ref={ref}
        className={`mt-40 flex flex-row justify-center gap-x-8 w-[200vw] md:w-full absolute left-2 transition-transform duration-300`}
      >
        {TESTIMONIALS_SECTION_COPY.testimonials.map(
          ({ comment, company, fullName, rating, verified, avatar }, index) => {
            const Stars: ReactNode[] = [];
            const nofStars = 5;
            for (let i = 0; i < nofStars; i++) {
              Stars.push(
                <Icon
                  key={i}
                  name="star"
                  size={28}
                  color={rating <= i ? undefined : "#DD00B8"}
                />
              );
            }

            return (
              <Card
                key={`card_${index}`}
                className={`px-12 py-14 flex flex-col relative w-[488px]`}
              >
                <span
                  className={`flex flex-row items-center gap-x-4 absolute right-8 -top-12`}
                >
                  <img src={`/images/cap_pink.png`} className={`w-10 h-20 `} />
                  <img
                    src={`/images/cap_violet.png`}
                    className={`w-10 h-20 `}
                  />
                </span>
                <div className={`flex flex-row items-center`}>{Stars}</div>
                <Text
                  className={`!text-base !font-normal !leading-[29.62px] !tracking-wide`}
                >
                  {comment}
                </Text>
                {/* hr */}
                <span
                  className={`w-full h-[1px] bg-gradient-to-r from-body to-transparent my-7`}
                />

                {/* about user */}
                <div className={`flex flex-row items-center gap-x-3`}>
                  {/* profile image */}
                  <img
                    src={avatar}
                    className={`w-16 aspect-square rounded-full`}
                  />
                  <div
                    className={`w-full flex flex-row items-center justify-between`}
                  >
                    {/* full name */}
                    <div className={`flex flex-col`}>
                      <Text className={`text-[21px] !font-medium`}>
                        {fullName}
                      </Text>
                      <Text className={`!text-sm font-light`}>{company}</Text>
                    </div>

                    {/* badge */}
                    {verified ? (
                      <div
                        className={`flex flex-row justify-center items-center gap-x-2`}
                      >
                        <img
                          src={`/images/verified_badge.png`}
                          className={`w-7 aspect-square`}
                        />
                        <Text className={`text-sm`}>Verified</Text>
                      </div>
                    ) : null}
                  </div>
                </div>
              </Card>
            );
          }
        )}
      </div>

      <div className="w-screen h-10 z-50 absolute bottom-10 flex flex-row justify-center items-center gap-x-2">
        {TESTIMONIALS_SECTION_COPY.testimonials.map((_, index) => {
          return (
            <div
              className={`w-4 aspect-square rounded-full ${
                index + 1 === currIndex ? GRADIENT_BG : "bg-white"
              }`}
            />
          );
        })}
      </div>

      <div className="w-10 h-10 z-50 absolute bottom-0 flex flex-row justify-center items-center gap-x-10">
        {/* <Button label="prev" onClick={handlePrev} /> */}
        <Button label="next" onClick={handleNext} />
      </div>
    </Section>
  );
};

export default TestimonialsCarouselSection;
