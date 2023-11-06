// TYPES
import { IStatistic } from "./Statistic.types";

// COMPONENTS
import { Text } from "../../atoms";

// CONSTANTS
import { GRADIENT_BG } from "../../../constants";

const Statistic = ({ text, value, color = false }: IStatistic) => {
  const coloredTextStyles = `${
    color ? `${GRADIENT_BG} !inline-block !text-transparent bg-clip-text` : ""
  }`;
  return (
    <div className="flex flex-col items-center gap-[5px]">
      <div className={`flex items-center gap-x-1`}>
        <Text
          className={`!text-[21.28px] lg:!text-3xl !font-extrabold font-heading uppercase leading-[33.18px] tracking-wide ${
            color ? "colored-value-styles" : "default-value-styles"
          } ${coloredTextStyles}`}
        >{`${value}`}</Text>

        <span
          data-testid={`plus-sign`}
          className={`text-body text-3xl font-heading uppercase leading-[33.18px] tracking-wide ${
            color ? "colored-plus-sign-styles" : "default-plus-sign-styles"
          } ${coloredTextStyles}`}
        >
          &#43;
        </span>
      </div>

      <Text
        className={`text-xs lg:text-base font-extralight capitalize leading-[34.64px] tracking-wide`}
      >
        {text}
      </Text>
    </div>
  );
};

export default Statistic;
