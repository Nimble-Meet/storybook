/** @jsxImportSource @emotion/react */
import React from "react";

import { defaultStyle, sizes, themes } from "./Button.style";

const RADIUS_BY_SIZE = {
  sm: "1rem",
  md: "1rem",
  lg: "2rem",
  xl: "2rem",
};

interface Props {
  children: React.ReactNode;
  onClick?: (e?: any) => void;
  theme?: "primary" | "link" | "dark" | "basic";
  size?: "sm" | "md" | "lg" | "xl";
  disabled?: boolean;
  width?: string | number;
  fontSize?: string;
  round?: boolean;
}

const Button = ({
  children,
  onClick,
  theme = "primary",
  size = "md",
  disabled = false,
  width,
  fontSize,
  round,
}: Props) => {
  return (
    <button
      css={[
        defaultStyle,
        themes[theme],
        sizes[size],
        {
          width,
          fontSize,
          borderRadius: round ? RADIUS_BY_SIZE[size] : "0.5rem",
        },
      ]}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
