// COMPONENTS
import { Icon } from "@/components/atoms";

// CONSTANTS
import { GRADIENT_BG } from "@/constants";
import { IconNamesType } from "@components/atoms/icon/Icon.types";

const IconButton = ({
  name,
  isSelected = false,
  onClick = () => {},
}: {
  name: IconNamesType;
  isSelected?: boolean;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`h-7 aspect-square flex justify-center items-center rounded-full ${
        isSelected ? GRADIENT_BG : "border border-white"
      }`}
    >
      <Icon name={name} size={18} />
    </button>
  );
};

export default IconButton;
