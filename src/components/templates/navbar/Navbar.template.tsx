import { useState } from "react";

// CONSTANTS
import { NAV_LINKS } from "@/constants";

const Navbar = () => {
  const [isActive, setIsActive] = useState<string>(NAV_LINKS[0].label);

  return (
    <nav
      className={`sticky h-7 -mt-5 flex flex-row justify-between items-center z-50`}
    >
      <img src="/images/logo.png" className="h-full" />

      <div className={`w-8/12 flex flex-row justify-between items-center`}>
        <span className={`flex flex-row items-center gap-x-10`}>
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

        <img src="/images/icons/icon_bag.png" className="w-6 aspect-square" />
      </div>
    </nav>
  );
};

export default Navbar;
