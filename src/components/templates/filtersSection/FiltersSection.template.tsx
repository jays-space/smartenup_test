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
        <div className="flex flex-row items-center justify-center flex-wrap gap-x-3 w-7/12 md:w-9/12">
          {FILTERS_SECTION_COPY.headline.map((text, index) => {
            return (
              <Heading
                key={index}
                variant="h1"
                className={`text-center inline-block !text-[34.29px]`}
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
          className={`mt-9 flex justify-center items-center gap-x-4 mb-[77px] translate-x-40 md:translate-x-0`}
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
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 gap-y-6 z-10`}
        >
          {FILTERS_SECTION_COPY.games.map(
            ({ game, gamerInfo, thumbnail }, index) => {
              return (
                <Card
                  key={index}
                  className={`flex !flex-col py-5 pb-2 lg:px-4`}
                >
                  <div className="w-full flex items-center justify-center">
                    <img
                      src={thumbnail}
                      className="w-11/12 lg:w-full aspect-auto"
                    />
                  </div>

                  <div className={`flex flex-col mt-[30px] mb-[26px] px-4`}>
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
                  <div className="w-full flex justify-center items-center px-4 mb-10">
                    <Button variant="primary" label="live demo" buttonClassName="w-full"/>
                  </div>
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
