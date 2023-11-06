export type IconNamesType =
  | "star"
  | "twitter"
  | "instagram"
  | "facebook"
  | "github"
  | "menu"
  | "close";
export interface ICard {
  name: IconNamesType;
  size?: number;
  color?: string;
}
