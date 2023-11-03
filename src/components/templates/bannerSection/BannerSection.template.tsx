// COMPONENTS
import { Heading, Section, Text } from "@/components/atoms";

// COPY
import { BANNER_SECTION_COPY } from "@/copy";

const BannerSection = () => {
  return (
    <Section title="Banner Section" className={`flex flex-col`}>
      {/* artboard */}
      <div className="flex absolute w-9/12 h-[95%] right-0 top-0">
        <img
          className="mix-blend-color-dodge w-full h-full"
          src="../../../../public/images/artboard11.png"
        />
      </div>
      {/* blur */}
      <div className="w-[341px] h-[341px] left-[-107px] top-[85px] absolute bg-fuchsia-600 rounded-full blur-[584px]" />

      {/* main content */}
      <div className={`w-7/12`}>
        <div>
          <Heading variant="h1">{BANNER_SECTION_COPY.headline[0]}</Heading>
          <Heading variant="h1">{BANNER_SECTION_COPY.headline[1]}</Heading>
          <Heading variant="h1">{BANNER_SECTION_COPY.headline[2]}</Heading>
        </div>

        <Text>
          {BANNER_SECTION_COPY.blurb}
        </Text>
      </div>
    </Section>
  );
};

export default BannerSection;
