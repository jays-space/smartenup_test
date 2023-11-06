export type IconNamesType = "star" | "twitter" | "instagram" | "facebook" | "github";
export interface ICard {
  name: IconNamesType;
  size?: number;
  color?: string;
}
