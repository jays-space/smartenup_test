// COMPONENTS
import { BlurSphere, Heading, Section, Text } from "@/components/atoms";
import { DoubleButtons, Marquee, Statistic } from "@/components/elements";
import { Navbar } from "..";

// COPY
import { BANNER_SECTION_COPY } from "@/copy";

const BannerSection = () => {
  return (
    <>
      <Section title="Banner Section" className={`flex flex-col`}>
        <Navbar />

        {/* artboard */}
        <div className="flex absolute right-0 top-0">
          <img
            className="mix-blend-color-dodge w-full h-full"
            src="/images/artboard11.png"
          />
        </div>

        {/* blur */}
        <BlurSphere className="left-[-107px] top-[85px]" />

        {/* main content */}
        <div className={`w-7/12 flex flex-col gap-y-8 z-20 mt-20`}>
          <div className={`flex flex-col gap-y-2`}>
            <div>
              {BANNER_SECTION_COPY.headline.map((text, index) => {
                return (
                  <Heading
                    key={index}
                    color={text.includes(
                      BANNER_SECTION_COPY.headline[1].split(" ")[1]
                    )}
                    variant="h1"
                    className="inline-block"
                  >
                    {text}
                  </Heading>
                );
              })}
            </div>

            <div className={`max-w-xl`}>
              <Text>{BANNER_SECTION_COPY.blurb}</Text>
            </div>
          </div>

          {/* Buttons */}
          <DoubleButtons
            leftBtn={{ label: BANNER_SECTION_COPY.buttonLabels.primary }}
            rightBtn={{ label: BANNER_SECTION_COPY.buttonLabels.secondary }}
          />

          <div className="justify-start items-start gap-[31px] inline-flex">
            {BANNER_SECTION_COPY.statistics.map(({ text, value }, index) => {
              return (
                <Statistic
                  key={index}
                  text={text}
                  value={value}
                  color={index === 1}
                />
              );
            })}
          </div>
        </div>

        <Marquee glass className={`-rotate-2 bottom-0 translate-y-14`} />
      </Section>
    </>
  );
};

export default BannerSection;
