/** @jsxImportSource @emotion/react */
import {
  ChangeEventHandler,
  KeyboardEventHandler,
  PropsWithChildren,
} from "react";

export interface Props {
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
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
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
}
