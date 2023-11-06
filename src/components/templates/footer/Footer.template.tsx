import { useState } from "react";

// COMPONENTS
import { IconButton, Marquee } from "@/components/elements";
import { Text } from "@/components/atoms";

// CONSTANTS
import { FOOTER_LINKS } from "@/constants/nav.constants";

// COPY
import { FOOTER_COPY } from "@/copy";

const Footer = () => {
  const [selectedSocialIcon, setSelectedSocialIcon] =
    useState<string>("facebook");

  const currentYear = new Date().getFullYear().toString();

  const handleSocialIconSelect = (pressedIconName: string) => {
    setSelectedSocialIcon(pressedIconName);
  };

  return (
    <footer
    className={`bg-background flex flex-col md:justify-center lg:items-center relative px-6 md:px-12 xl:px-24 2xl:px-56 min-h-[76.5vh]`}
    >
      <Marquee glass className={`-top-12`} />
      <div className="absolute -right-2 top-0 min-w-[1900px] h-full overflow-hidden">
        <img src="/images/footer_artboard.png" className="mix-blend-color-dodge w-full h-full" />
      </div>

      <div className={`flex flex-col z-10 translate-y-6`}>
        {/* main content */}
        <div className={`flex flex-col lg:flex-row gap-x-24`}>
          {/* logo section */}
          <div className={`flex flex-col gap-y-8 w-full lg:w-4/12`}>
            {/* logo */}
            <div>
              <img src="/images/logo_large.png" />
            </div>

            {/* blurb */}
            <Text
              className={`!text-base !font-normal !leading-[29.62px] !tracking-wide w-8/12 lg:w-full mb-10 lg:mb-0`}
            >
              {FOOTER_COPY.blurb}
            </Text>
          </div>

          {/* nav section */}
          <div className={`flex flex-row flex-1 gap-x-24 gap-y-16 flex-wrap`}>
            {FOOTER_LINKS.map(({ topic, links }, index) => {
              return (
                <div key={`${topic}-${index}`} className={`flex flex-col`}>
                  <Text
                    className={`!leading-tight !tracking-widest uppercase !font-extrabold !text-base`}
                  >
                    {topic}
                  </Text>

                  <div className={`flex flex-col gap-y-8 mt-6`}>
                    {links.map(({ label, href }, index) => {
                      return (
                        <Text
                          key={`${label}-${index}`}
                          className={`!text-base capitalize !leading-tight !font-light !tracking-widest cursor-pointer`}
                        >
                          <a href={href}>{label}</a>
                        </Text>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* partners */}
        <div className={`flex flex-row items-center gap-12 mt-20 lg:mt-10 flex-wrap`}>
          <div className="w-28">
            <img src="/images/twitch_logo.png" />
          </div>

          <div className="w-28">
            <img src="/images/roblox_logo.png" />
          </div>

          <div className="w-28">
            <img src="/images/asus_logo.png" />
          </div>

          <div className="w-28">
            <img src="/images/canon_logo.png" />
          </div>

          <div className="w-28">
            <img src="/images/ms_logo.png" />
          </div>
        </div>

        {/* social links and TCs */}
        <div className={`mt-14 flex flex-col md:flex-row items-center gap-8`}>
          {/* social links */}
          <div className={`flex flex-row gap-x-3`}>
            <IconButton
              name="twitter"
              onClick={() => handleSocialIconSelect("twitter")}
              isSelected={selectedSocialIcon.includes("twitter")}
            />
            <IconButton
              name="facebook"
              onClick={() => handleSocialIconSelect("facebook")}
              isSelected={selectedSocialIcon.includes("facebook")}
            />
            <IconButton
              name="instagram"
              onClick={() => handleSocialIconSelect("instagram")}
              isSelected={selectedSocialIcon.includes("instagram")}
            />
            <IconButton
              name="github"
              onClick={() => handleSocialIconSelect("github")}
              isSelected={selectedSocialIcon.includes("github")}
            />
          </div>

          {/* TCs */}
          <Text className={`!text-sm !leading-normal !tracking-wide text-center md:text-left`}>
            &copy; Copyright {currentYear}, All Rights Reserved by board
          </Text>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
