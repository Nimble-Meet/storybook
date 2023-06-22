export interface Props {
  onClick?: (e?: any) => void;
  color?: "primary" | "link" | "dark" | "basic";
  size?: "sm" | "md" | "lg" | "xl";
  disabled?: boolean;
  width?: string | number;
  fontSize?: string;
  round?: boolean;
}
