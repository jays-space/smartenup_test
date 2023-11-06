import { useState } from "react";

// COMPONENTS
import { Icon } from "@/components/atoms";

// CONSTANTS
import { NAV_LINKS } from "@/constants";

const Navbar = () => {
  const [isActive, setIsActive] = useState<string>(NAV_LINKS[0].label);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen((v) => !v);
  };

  return (
    <header
      className={`w-full px-6 md:px-12 xl:px-24 2xl:px-56 mt-8 absolute h-7 flex flex-row justify-between items-center z-50`}
    >
      <img src="/images/logo.png" className="h-full" />

      <nav
        className={`flex lg:w-9/12 xl:w-7/12 flex-row justify-between items-center`}
      >
        <span className={`hidden lg:flex flex-row items-center gap-x-10`}>
          {NAV_LINKS.map(({ label }, index) => {
            return (
              <div
                key={index}
                onClick={() => setIsActive(label)}
                className={`text-white text-base font-body uppercase leading-tight tracking-wide cursor-pointer ${
                  isActive === label ? "font-extrabold" : ""
                }`}
              >
                {label}
              </div>
            );
          })}
        </span>

        <img
          src="/images/icons/icon_bag.png"
          className="w-6 aspect-square hidden lg:flex"
        />
        <button
          className={`w-6 aspect-square flex lg:hidden cursor-pointer`}
          onClick={toggleMenu}
        >
          <Icon name="menu" size={32} />
        </button>
      </nav>

      <div
        className={`w-screen h-[110vh] absolute -top-10 left-0 bg-background backdrop-blur-md bg-opacity-70 flex flex-col justify-center items-center lg:hidden z-30 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className={`w-full flex justify-end px-6 py-10 -mb-20 z-50`}>
          <button
            className={`w-6 aspect-square flex lg:hidden cursor-pointer`}
            onClick={toggleMenu}
          >
            <Icon name="close" size={32} />
          </button>
        </div>

        <span
          className={`w-full h-full flex flex-col justify-center items-center gap-y-6`}
        >
          {NAV_LINKS.map(({ label }, index) => {
            return (
              <div
                key={index}
                onClick={() => setIsActive(label)}
                className={`text-white text-3xl font-body uppercase leading-tight tracking-wide text-center cursor-pointer z-30 ${
                  isActive === label ? "font-extrabold" : ""
                }`}
              >
                {label}
              </div>
            );
          })}
        </span>
      </div>
    </header>
  );
};

export default Navbar;
