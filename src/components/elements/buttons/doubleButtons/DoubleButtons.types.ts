import { ButtonVariantType } from "../buttons.types";

export interface IDoubleButtons {
  leftBtn: {
    label: string;
    variant?: ButtonVariantType;
  };
  rightBtn: {
    label: string;
    variant?: ButtonVariantType;
  };
}
