// COMPONENTS
import { BlurSphere, Heading, Section, Text } from "@/components/atoms";
import { DoubleButtons, Marquee, Statistic } from "@/components/elements";

// COPY
import { BANNER_SECTION_COPY } from "@/copy";

const BannerSection = () => {
  return (
    <>
      <Section title="Banner Section" className={`flex flex-col !px-0`}>
        {/* artboard */}
        <div className="hidden md:flex absolute right-0 top-0 overflow-clip w-full md:min-w-[160vw] lg:min-w-[140vw] xl:min-w-[1836px] h-full md:min-h-[750px] lg:min-h-[947px] xl:min-h-[900px]">
          <img
            className="w-full mix-blend-color-dodge md:translate-x-60 lg:translate-x-40"
            src="/images/artboard11.png"
          />
        </div>

        {/* blur */}
        <BlurSphere className="left-[-107px] top-[85px] z-10" />

        {/* main content */}
        <div className={`w-full lg:w-9/12 flex flex-col gap-y-8 mt-20`}>
          <div
            className={`flex flex-col gap-y-2 px-6 md:px-12 xl:px-24 2xl:px-56`}
          >
            <div className="z-20 overflow-x-clip lg:overflow-x-hidden">
              {BANNER_SECTION_COPY.headline.map((text, index) => {
                return (
                  <Heading
                    key={index}
                    color={text.includes(
                      BANNER_SECTION_COPY.headline[1].split(" ")[1]
                    )}
                    variant="h1"
                    className="inline-block w-screen"
                  >
                    {text}
                  </Heading>
                );
              })}
            </div>

            <div className={`max-w-xl mt-4 lg:mt-0 z-20`}>
              <Text>{BANNER_SECTION_COPY.blurb}</Text>
            </div>

            <Marquee
              glass
              className={`flex md:hidden -rotate-2 bottom-96 translate-y-24`}
            />

            {/* artboard */}
            <div className="flex md:hidden w-[200vw] h-[480px] -translate-x-96 relative bg-background">
              <img
                className="mix-blend-color-dodge w-full h-full"
                src="/images/artboard11.png"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="px-6 md:px-12 xl:px-24 2xl:px-56">
            <DoubleButtons
              leftBtn={{ label: BANNER_SECTION_COPY.buttonLabels.primary }}
              rightBtn={{ label: BANNER_SECTION_COPY.buttonLabels.secondary }}
            />
          </div>

          <div className="justify-start items-start gap-[31px] inline-flex px-6 md:px-12 xl:px-24 2xl:px-56">
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

        <Marquee
          glass
          className={`hidden md:flex -rotate-2 bottom-0 md:-translate-y-4 lg:translate-y-0 xl:translate-y-0 2xl:translate-y-3`}
        />
      </Section>
    </>
  );
};

export default BannerSection;
