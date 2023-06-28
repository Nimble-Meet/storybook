/** @jsxImportSource @emotion/react */
import { PropsWithChildren } from "react";

import Typography from "../Typography/Typography";
import FlexContainer from "../FlexContainer/FlexContainer";

import { DefaultStyle, InputSize, InvalidAnimation } from "./input.style";

import {
  RADIUS_BY_SIZE,
  BASIC_INPUT_RADIUS,
  INVALID_TEXT_SIZE,
  INVALID_TEXT_COLOR,
} from "./Input.constant";

import type { Props } from "./Input.type";

const Input: React.FC<PropsWithChildren<Props>> = ({
  value,
  placeholder = "placeholder",
  onChange,
  // optional props
  name,
  type = "text",
  size = "md",
  disabled = false,
  round = false,
  invalid = false,
  invalidMessage = "",
  id,
  width,
  fontSize,
  ref,
  onKeyDown,
  onBlur,
}) => {
  return (
    <FlexContainer direction="column" gap="0.5rem">
      <input
        type={type}
        css={[
          DefaultStyle,
          InputSize[size],
          {
            width,
            fontSize,
            borderRadius: round ? RADIUS_BY_SIZE[size] : BASIC_INPUT_RADIUS,
          },
          invalid && InvalidAnimation,
        ].filter(Boolean)}
        name={name}
        value={value}
        id={id}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        ref={ref}
        required
      />
      {invalid && (
        <Typography
          value={invalidMessage}
          size={INVALID_TEXT_SIZE}
          color={INVALID_TEXT_COLOR}
        />
      )}
    </FlexContainer>
  );
};

export default Input;
