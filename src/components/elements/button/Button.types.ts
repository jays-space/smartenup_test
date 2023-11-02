export type ButtonVariantType = "default" | "primary" | "secondary";
export interface IButton {
  label: string;
  variant?: ButtonVariantType;
  onClick?: () => void;
}
