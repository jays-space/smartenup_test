export type ButtonVariantType = "primary" | "secondary";
export interface IButton {
  label: string;
  variant?: ButtonVariantType;
  onClick?: () => void;
}
