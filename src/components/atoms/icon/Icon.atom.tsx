import {
  AiFillStar,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillGithub,
} from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";

// TYPES
import { ICard } from "./Icon.types";

const Icon = ({ name, size = 14, color = "white" }: ICard) => {
  if (!name) return null;
  switch (name) {
    case "star":
      return <AiFillStar color={color} size={size} />;

    case "twitter":
      return <AiOutlineTwitter color={color} size={size} />;

    case "facebook":
      return <BiLogoFacebook color={color} size={size} />;

    case "instagram":
      return <AiOutlineInstagram color={color} size={size} />;

    case "github":
      return <AiFillGithub color={color} size={size} />;
  }
};

export default Icon;
