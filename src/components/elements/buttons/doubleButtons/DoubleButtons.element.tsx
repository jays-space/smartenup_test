// TYPES
import { IDoubleButtons } from "./DoubleButtons.types";

// COMPONENTS
import { Button } from "../button";

const DoubleButtons = ({ leftBtn, rightBtn }: IDoubleButtons) => {
  return (
    <div className={`flex flex-row items-center gap-x-8`}>
      <Button variant={leftBtn.variant || "primary"} label={leftBtn.label} />
      <Button
        variant={rightBtn.variant || "secondary"}
        label={rightBtn.label}
      />
    </div>
  );
};

export default DoubleButtons;
