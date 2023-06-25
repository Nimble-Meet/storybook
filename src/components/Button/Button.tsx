/** @jsxImportSource @emotion/react */
import React, { PropsWithChildren } from "react";

import { DefaultStyle, ButtonSizes, ButtonColors } from "./Button.style";

import { RADIUS_BY_SIZE, BASIC_BUTTON_RADIUS } from "./Button.constant";

import type { Props } from "./Button.type";

const Button: React.FC<PropsWithChildren<Props>> = ({
  children,
  // optional props
  width,
  fontSize,
  color = "primary",
  size = "md",
  disabled = false,
  round = false,
  onClick,
}) => {
  return (
    <button
      css={[
        DefaultStyle,
        ButtonColors[color],
        ButtonSizes[size],
        {
          width,
          fontSize,
          borderRadius: round ? RADIUS_BY_SIZE[size] : BASIC_BUTTON_RADIUS,
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
