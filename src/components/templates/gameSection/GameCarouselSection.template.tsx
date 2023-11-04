// COMPONENTS
import { BlurSphere, Heading, Section, Text } from "@/components/atoms";
import { DoubleButtons } from "@/components/elements";

// COPY
import { GAME_SECTION_COPY } from "@/copy";

const GameCarouselSection = () => {
  return (
    <Section
      title="Game Carousel Section"
      className={`flex flex-col justify-center items-center`}
    >
      {/* blur */}
      <BlurSphere className="left-[-107px] top-[85px]" />

      <div className={`flex flex-col gap-y-2 items-center justify-center my-40`}>
        <div
          className={`flex flex-row flex-wrap items-center justify-center gap-x-3 w-8/12`}
        >
          {GAME_SECTION_COPY.headline.map((text, index) => {
            return (
              <Heading
                key={index}
                color={text.includes(
                  GAME_SECTION_COPY.headline[1].split(" ")[1]
                )}
                variant="h1"
                className={`text-center`}
              >
                {text}
              </Heading>
            );
          })}
        </div>

        <div className={`max-w-xl`}>
          <Text className={`text-center`}>{GAME_SECTION_COPY.blurb}</Text>
        </div>
      </div>

      {/* TODO: image carousel */}

      <DoubleButtons
        leftBtn={{ label: GAME_SECTION_COPY.buttonLabels.primary }}
        rightBtn={{ label: GAME_SECTION_COPY.buttonLabels.secondary }}
      />
    </Section>
  );
};

export default GameCarouselSection;
