// COMPONENTS
import { BlurSphere, Heading, Section, Text } from "@/components/atoms";
import { Button, Marquee } from "@/components/elements";

// CONSTANTS
import { GRADIENT_BG } from "@/constants";

// COPY
import { CTA_SECTION_COPY } from "@/copy";

const CTASection = () => {
  return (
    <Section
      title="CTA Section"
      className={`flex flex-col justify-center items-center `}
    >
      {/* blur */}
      <BlurSphere className="right-[-107px] top-[85px]" />

      <div
        data-testid={`card`}
        className={`w-full h-[556px] flex flex-row bg-violet-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border-[2px] border-violet-500 border-opacity-30 rounded-[10px] relative`}
      >
        {/* artboard */}
        <div className="flex w-[725px] h-[639px] absolute -left-2 bottom-0 z-10">
          <img
            className="mix-blend-color-dodge w-full h-full"
            src="/images/artboard12.png"
          />
        </div>

        <div className={`flex flex-row w-full`}>
          <div className={`w-6/12`} />
          <div className={`flex-1 px-14 py-16 flex flex-col gap-y-3`}>
            <div className="flex flex-row flex-wrap gap-x-3">
              {CTA_SECTION_COPY.headline.map((text, index) => {
                return (
                  <Heading key={index} variant="h2">
                    {text === CTA_SECTION_COPY.headline[1].split(" ")[0] ? (
                      <span
                        className={`${GRADIENT_BG} !inline-block !text-transparent bg-clip-text`}
                      >
                        {text}
                      </span>
                    ) : (
                      text
                    )}
                  </Heading>
                );
              })}
            </div>

            <div className={`max-w-xl`}>
              <Text className={`!text-base`}>{CTA_SECTION_COPY.blurb}</Text>
            </div>

            <div className={`mt-9`}>
              <Button
                variant="secondary"
                label={CTA_SECTION_COPY.buttonLabels.secondary}
                className={`!bg-[#3B297A]`}
              />
            </div>
          </div>
        </div>
      </div>

      <Marquee className={`bottom-0 translate-y-14`} />
    </Section>
  );
};
// color={text.includes(
//   CTA_SECTION_COPY.headline[1].split(" ")[1]
// )}
export default CTASection;
