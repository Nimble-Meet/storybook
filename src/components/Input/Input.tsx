/** @jsxImportSource @emotion/react */
import { PropsWithChildren } from "react";

import Typography from "../Typography/Typography";
import FlexContainer from "../FlexContainer/FlexContainer";

import { defaultStyle, sizes, invalidStyle } from "./input.style";

import {
  RADIUS_BY_SIZE,
  BASIC_INPUT_RADIUS,
  INVALID_TEXT_SIZE,
  INVALID_TEXT_COLOR,
} from "./Input.constant";

import type { Props } from "./Input.type";

const Input: React.FC<PropsWithChildren<Props>> = ({
  type = "text",
  onChange,
  onKeyDown,
  onBlur,
  value,
  id,
  size = "md",
  placeholder = "placeholder",
  disabled = false,
  width,
  fontSize,
  ref,
  round = false,
  invalid = false,
  invalidMessage = "",
}) => {
  return (
    <FlexContainer direction="column" gap="0.5rem">
      <input
        type={type}
        css={[
          defaultStyle,
          sizes[size],
          {
            width,
            fontSize,
            borderRadius: round ? RADIUS_BY_SIZE[size] : BASIC_INPUT_RADIUS,
          },
          invalid && invalidStyle,
        ].filter(Boolean)}
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
