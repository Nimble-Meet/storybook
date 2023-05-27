/** @jsxImportSource @emotion/react */
import { ChangeEventHandler, PropsWithChildren } from "react";

import Typography from "../Typography/Typography";
import FlexContainer from "../FlexContainer/FlexContainer";

import { defaultStyle, sizes, invalidStyle } from "./input.style";

const RADIUS_BY_SIZE = {
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
};

type Props = {
  type?:
    | "button"
    | "checkbox"
    | "date"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur?: ChangeEventHandler<HTMLInputElement>;
  value: string;
  placeholder: string;
  id?: string;
  size?: "md" | "lg" | "xl";
  disabled?: boolean;
  width?: string | number;
  fontSize?: string;
  ref?: React.Ref<HTMLInputElement> | null;
  round?: boolean;
  invalid?: boolean;
  invalidMessage?: string;
};

const Input: React.FC<PropsWithChildren<Props>> = ({
  type = "text",
  onChange,
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
  invalidMessage,
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
            borderRadius: round ? RADIUS_BY_SIZE[size] : "0.5rem",
          },
          invalid && invalidStyle,
        ].filter(Boolean)}
        value={value}
        id={id}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        ref={ref}
        required
      />
      {invalid && (
        <Typography value={invalidMessage || ""} size="12px" color="red600" />
      )}
    </FlexContainer>
  );
};

export default Input;
