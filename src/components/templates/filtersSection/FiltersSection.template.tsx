// COMPONENTS
import { Card, Heading, Section, Text } from "@/components/atoms";
import { Button, ButtonVariantType } from "@/components/elements";

// CONSTANTS
import { GRADIENT_BG } from "@/constants";

// COPY
import { FILTERS_SECTION_COPY } from "@/copy";

const FiltersSection = () => {
  return (
    <Section
      title="Filters Section"
      className={`flex flex-col justify-center items-center -mb-16`}
    >
      <div className={`flex-1 pt-16 flex flex-col items-center gap-y-3`}>
        {/* headline */}
        <div className="flex flex-row items-center justify-center flex-wrap gap-x-3 w-9/12">
          {FILTERS_SECTION_COPY.headline.map((text, index) => {
            return (
              <Heading
                key={index}
                variant="h1"
                className={`text-center inline-block`}
              >
                {text === FILTERS_SECTION_COPY.headline[1].split(" ")[0] ? (
                  <span
                    className={`${GRADIENT_BG} !text-transparent bg-clip-text text-center`}
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

        {/* filter buttons */}
        <div
          className={`mt-9 flex justify-center items-center gap-x-4 mb-[77px]`}
        >
          {FILTERS_SECTION_COPY.buttons.map(({ label, variant }, index) => {
            return (
              <Button
                key={index}
                variant={variant as ButtonVariantType}
                label={label}
                className="text-white"
              />
            );
          })}
        </div>

        {/* games list */}
        <div className={`grid grid-cols-3 gap-x-4 gap-y-6 z-10`}>
          {FILTERS_SECTION_COPY.games.map(
            ({ game, gamerInfo, thumbnail }, index) => {
              return (
                <Card key={index} className={`flex flex-col py-5 pb-2 px-4`}>
                  <img src={thumbnail} className="w-full aspect-auto" />

                  <div className={`flex flex-col mt-[30px] mb-[26px]`}>
                    {/* game name */}
                    <Text
                      className={`text-2xl capitalize leading-relaxed tracking-wide`}
                    >
                      {game}
                    </Text>
                    {/* gamer details */}
                    <div className={`flex flex-row gap-x-3 mt-[18px]`}>
                      {/* avatar */}
                      <img
                        src={gamerInfo.avatar}
                        className={`w-14 aspect-square rounded-full`}
                      />
                      {/* full name $ company */}
                      <div className={`flex flex-col`}>
                        <Text
                          className={`!text-lg capitalize leading-tight tracking-wide`}
                        >
                          {gamerInfo.fullName}
                        </Text>
                        <Text
                          className={`!text-xs font-light capitalize leading-[11.06px] tracking-tight`}
                        >
                          {gamerInfo.company}
                        </Text>
                      </div>
                    </div>
                  </div>

                  {/* button */}
                  <Button variant="primary" label="live demo" />
                </Card>
              );
            }
          )}
        </div>
      </div>
    </Section>
  );
};

export default FiltersSection;
