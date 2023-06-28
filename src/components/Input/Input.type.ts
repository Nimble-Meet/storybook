/** @jsxImportSource @emotion/react */
import { ChangeEventHandler, KeyboardEventHandler } from "react";

export interface Props {
  value: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
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
