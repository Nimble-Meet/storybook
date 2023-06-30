/** @jsxImportSource @emotion/react */
import { ChangeEventHandler, KeyboardEventHandler } from "react";

export interface Props {
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value?: string; // react-hook-form에선 value를 사용하지 않아 optional로 처리
  name?: string;
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
  onBlur?: ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  id?: string;
  size?: "md" | "lg" | "xl";
  disabled?: boolean;
  width?: string | number;
  fontSize?: string;
  ref?: React.Ref<HTMLInputElement> | null;
  round?: boolean;
  invalid?: boolean;
  invalidMessage?: string;
}
