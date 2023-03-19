/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";

import { PropsWithChildren } from "react";

type Props = {
  /** children element for your typo */
  children?: React.ReactNode;
  /** font-family foro your typo */
  font: "Line_Th" | "Line_Rg" | "Line_Bd";
  /** color for your typo */
  color:
    | "primary"
    | "secondary"
    | "grey"
    | "darkGrey"
    | "lightGrey"
    | "alert"
    | "white"
    | "black";
  /** size for your typo */
  size: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
};

const sizes = {
  xs: css`
    font-size: 12px;
  `,
  sm: css`
    font-size: 16px;
  `,
  md: css`
    font-size: 20px;
  `,
  lg: css`
    font-size: 24px;
  `,
  xl: css`
    font-size: 32px;
  `,
  xxl: css`
    font-size: 40px;
  `,
};

const themes = {
  primary: css`
    color: #005b8f;
  `,
  secondary: css`
    color: #38cfac;
  `,
  grey: css`
    color: #c0c0c0;
  `,
  darkGrey: css`
    color: #2d2c2c;
  `,
  lightGrey: css`
    color: #fafafa;
  `,
  alert: css`
    color: #e02020;
  `,
  white: css`
    color: #ffffff;
  `,
  black: css`
    color: #000000;
  `,
};

const fonts = {
  Line_Th: css`
    font-family: "Line_Th";
  `,
  Line_Rg: css`
    font-family: "Line_Rg";
  `,
  Line_Bd: css`
    font-family: "Line_Bd";
  `,
};

/** `Typography` component to display texts */
const Typography: React.FC<PropsWithChildren<Props>> = ({
  children,
  color,
  font,
  size,
}) => {
  return (
    <span css={[fonts[font], themes[color], sizes[size]]}>{children}</span>
  );
};

Typography.defaultProps = {
  font: "Line_Rg",
  color: "secondary",
  size: "sm",
};

export default Typography;
