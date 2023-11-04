// COMPONENTS
import { Heading, Section } from "@/components/atoms";
import { Button, ButtonVariantType } from "@/components/elements";

// CONSTANTS
import { GRADIENT_BG } from "@/constants";

// COPY
import { FILTERS_SECTION_COPY } from "@/copy";

const FiltersSection = () => {
  return (
    <Section
      title="Filters Section"
      className={`flex flex-col justify-center items-center`}
    >
      <div className={`flex-1 px-14 py-16 flex flex-col items-center gap-y-3`}>
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

        <div className={`mt-9 flex justify-center items-center gap-x-4`}>
          {FILTERS_SECTION_COPY.buttons.map(({ label, variant }, index) => {
            return (
              <Button
                key={index}
                variant={variant as ButtonVariantType}
                label={label}
              />
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default FiltersSection;
