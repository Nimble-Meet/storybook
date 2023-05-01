/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";

import { ChangeEventHandler, PropsWithChildren } from "react";

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
  id?: string;
  size?: "md" | "lg" | "xl";
  disabled?: boolean;
  placeholder: string;
  width?: string | number;
  fontSize?: string;
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
}) => {
  return (
    <input
      type={type}
      css={[style, sizes[size], { width, fontSize }]}
      value={value}
      id={id}
      disabled={disabled}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      required
    />
  );
};

const sizes = {
  md: css`
    height: 2rem;
  `,
  lg: css`
    height: 2.5rem;
    border-radius: 1.5rem;
  `,
  xl: css`
    height: 3rem;
    border-radius: 2rem;
  `,
};

const style = css`
  box-sizing: border-box;
  height: 2rem;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  line-height: 1;
  font-weight: 500;
  border: 1px solid gray;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1);

  &:disabled {
    cursor: not-allowed;
  }
`;

export default Input;
