// COMPONENTS
import { BlurSphere, Card, Icon, Section, Text } from "@/components/atoms";
import { Marquee } from "@/components/elements";

// COPY
import { TESTIMONIALS_SECTION_COPY } from "@/copy";
import { ReactNode } from "react";

const TestimonialsCarouselSection = () => {
  return (
    <Section
      title="Testimonials Carousel Section"
      className={`flex flex-col items-center pb-40`}
    >
      <BlurSphere className={`-top-96 left-0`} />

      <Marquee />

      <div className={`mt-40 flex flex-row gap-x-8`}>
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
              <Card key={`card_${index}`} className={`px-12 py-14 flex flex-col relative`}>
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
    </Section>
  );
};

export default TestimonialsCarouselSection;
