import { ReactNode } from "react";

export interface ISection {
  children: ReactNode;
  title: string;
  className?: string;
}
