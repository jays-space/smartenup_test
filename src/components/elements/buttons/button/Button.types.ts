import { ButtonVariantType } from "../buttons.types";

export interface IButton {
  label: string;
  variant?: ButtonVariantType;
  onClick?: () => void;
}
