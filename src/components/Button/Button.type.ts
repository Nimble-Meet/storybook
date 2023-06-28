export interface Props {
  type?: "button" | "submit" | "reset";
  width?: string | number;
  fontSize?: string;
  color?: "primary" | "link" | "dark" | "basic";
  size?: "sm" | "md" | "lg" | "xl";
  disabled?: boolean;
  round?: boolean;
  onClick?: (e?: any) => void;
}
