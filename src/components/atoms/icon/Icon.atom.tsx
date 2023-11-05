import { AiFillStar } from "react-icons/ai";

// TYPES
import { ICard } from "./Icon.types";

const Icon = ({ name, size = 14, color = "white" }: ICard) => {
  if (!name) return null;
  switch (name) {
    case "star":
      return <AiFillStar color={color} size={size} />;
  }
};

export default Icon;
