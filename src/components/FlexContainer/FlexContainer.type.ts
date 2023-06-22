import { SerializedStyles } from "@emotion/react";

export interface Props {
  children: React.ReactNode;
  direction?: "row" | "column";
  justifyContent?: "center" | "start" | "end" | "between" | "evenly" | "normal";
  alignItems?: "center" | "start" | "end" | "between" | "evenly" | "normal";
  gap?: string;
  basis?: string;
  grow?: number;
  wrap?: "wrap" | "nowrap";
  customCss?: SerializedStyles[] | SerializedStyles;
  ref?: React.Ref<HTMLDivElement> | null;
}
