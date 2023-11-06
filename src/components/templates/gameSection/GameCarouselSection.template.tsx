// COMPONENTS
import { BlurSphere, Heading, Section, Text } from "@/components/atoms";
import { DoubleButtons } from "@/components/elements";

// COPY
import { GAME_SECTION_COPY } from "@/copy";
import { ReactNode } from "react";

const GameCarouselSection = () => {
  const DecorationPiecesTop: ReactNode[] = [];
  const DecorationPiecesLeft: ReactNode[] = [];
  const DecorationPiecesRight: ReactNode[] = [];

  for (let i = 1; i <= 7; i++) {
    DecorationPiecesTop.push(
      <img
        key={`decoration_topleft_${i}`}
        src="/images/frame/decoration_topleft.png"
        className={`w-5 h-[12px] -mx-[3px]`}
      />
    );
  }

  for (let i = 1; i <= 7; i++) {
    DecorationPiecesTop.push(
      <img
        key={`decoration_topright_${i}`}
        src="/images/frame/decoration_topright.png"
        className={`w-5 h-[12px] -mx-[3px]`}
      />
    );
  }

  for (let i = 1; i <= 7; i++) {
    DecorationPiecesLeft.push(
      <img
        key={`decoration_left_${i}`}
        src="/images/frame/decoration_left.png"
        className={`w-3 h-full -my-[4px]`}
      />
    );
  }

  for (let i = 1; i <= 7; i++) {
    DecorationPiecesRight.push(
      <img
        key={`decoration_right_${i}`}
        src="/images/frame/decoration_right.png"
        className={`w-3 h-full -my-[4px]`}
      />
    );
  }

  return (
    <Section
      title="Game Carousel Section"
      className={`flex flex-col justify-center items-center`}
    >
      {/* blur */}
      <BlurSphere className="left-[-107px] top-[85px]" />

      <div
        className={`flex flex-col gap-y-2 items-center justify-center my-20`}
      >
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
                className={`text-center z-20`}
              >
                {text}
              </Heading>
            );
          })}
        </div>

        <div className={`max-w-xl z-20`}>
          <Text className={`text-center`}>{GAME_SECTION_COPY.blurb}</Text>
        </div>
      </div>

      {/* TODO: image carousel */}
      <div className={`w-screen flex items-center mb-[75px]`}>
        <img src="/images/game2.png" className={`hidden md:inline w-2/12 xl:w-3/12 -translate-x-1/2 min-h-48 max-h-96`} />

        <div className={`flex-1 aspect-video relative`}>
          {/* frame */}
          <img
            src="/images/frame/frame.png"
            className={`w-full h-full absolute top-0 left-0`}
          />

          {/* lines */}
          <div className={``}>
            <img
              src="/images/frame/decoration_dash_fade.png"
              className={`w-2 h-[30%] absolute top-6 left-6 z-10`}
            />
            <img
              src="/images/frame/decoration_dash_fade.png"
              className={`w-2 h-[30%] absolute top-6 right-4 z-10`}
            />
            <img
              src="/images/frame/lines_top.png"
              className={`w-[87%] h-[24.80px] absolute top-6 left-1/2 -translate-x-1/2 pl-1 z-10`}
            />
            <img
              src="/images/frame/lines_left.png"
              className={`h-[53%] absolute bottom-[22px] left-6 z-10`}
            />
            <img
              src="/images/frame/lines_bottom_left.png"
              className={`w-[23%] h-[20px] absolute bottom-5 left-6 z-10`}
            />
            <img
              src="/images/frame/lines_right.png"
              className={`h-[53%] absolute bottom-[22px] right-4 z-10`}
            />
            <img
              src="/images/frame/lines_bottom_right.png"
              className={`w-[24%] h-[20px] absolute bottom-5 right-4 z-10`}
            />
            <img
              src="/images/frame/lines_bottom_group.png"
              className={`w-[46%] h-[1px] absolute bottom-10 left-1/2 -translate-x-1/2 z-10`}
            />
          </div>

          {/* frame decoration top */}
          <span
            className={`flex flex-row absolute left-1/2 -top-2 -translate-x-1/2 z-10`}
          >
            {DecorationPiecesTop}
            <img
              src="/images/frame/logo.png"
              className={`w-[32.54px] h-[24.80px] absolute -top-4 left-1/2 -translate-x-1/2 z-[15]`}
            />
            <img
              src="/images/frame/decoration_sphere.png"
              className={`w-16 aspect-square absolute -top-8 left-1/2 -translate-x-1/2 z-10`}
            />
            <img
              src="/images/frame/decoration_sphere.png"
              className={`w-20 aspect-square absolute -top-10 left-1/2 -translate-x-1/2 opacity-70`}
            />
          </span>

          {/* frame decoration left */}
          <span
            className={`flex flex-col absolute -left-[7px] top-1/2 -translate-y-1/2 pt-1`}
          >
            {DecorationPiecesLeft}
          </span>

          {/* frame decoration right */}
          <span
            className={`flex flex-col absolute -right-[7px] top-1/2 -translate-y-1/2 pt-1`}
          >
            {DecorationPiecesRight}
          </span>

          {/* frame text area */}
          <span
            className={`absolute w-[50%] h-12 bottom-0 left-1/2 -translate-x-1/2 flex z-10`}
          >
            <img
              src="/images/frame/frame_text.png"
              className={`w-[94%] h-[70%] absolute bottom-0 left-1/2 -translate-x-1/2 z-10`}
            />
            <img
              src="/images/frame/frame_text1.png"
              className={`w-full h-[76%] absolute bottom-0`}
            />
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[2px] text-white text-xl font-extrabold font-heading uppercase leading-[31.03px] tracking-wide z-10 w-40">
              sneak peeks
            </div>
          </span>

          {/* image background */}
          <div
            className={`bg-background w-[95%] h-[93%] absolute top-3 left-[14px]`}
          >
            {/* game image */}
            <img src="/images/game1.png" className={`w-full h-full`} />
          </div>
        </div>

        <img src="/images/game3.png" className={`hidden md:inline w-2/12 xl:w-3/12 translate-x-1/2 min-h-48 max-h-96`} />
      </div>

      <DoubleButtons
        leftBtn={{ label: GAME_SECTION_COPY.buttonLabels.primary }}
        rightBtn={{ label: GAME_SECTION_COPY.buttonLabels.secondary }}
      />
    </Section>
  );
};

export default GameCarouselSection;
