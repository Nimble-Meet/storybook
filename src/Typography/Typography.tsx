/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";

import { PropsWithChildren } from "react";

type Props = {
  /** children element for your typo */
  children?: React.ReactNode;
  /** font-family foro your typo */
  weight?: "sm" | "md" | "lg";
  /** color for your typo */
  color?:
    | "gray50"
    | "gray100"
    | "gray200"
    | "gray300"
    | "gray400"
    | "gray500"
    | "gray600"
    | "gray700"
    | "gray800"
    | "gray900"
    | "blue50"
    | "blue100"
    | "blue200"
    | "blue300"
    | "blue400"
    | "blue500"
    | "blue600"
    | "blue700"
    | "blue800"
    | "blue900"
    | "red50"
    | "red100"
    | "red200"
    | "red300"
    | "red400"
    | "red500"
    | "red600"
    | "red700"
    | "red800"
    | "red900"
    | "orange50"
    | "orange100"
    | "orange200"
    | "orange300"
    | "orange400"
    | "orange500"
    | "orange600"
    | "orange700"
    | "orange800"
    | "orange900"
    | "green50"
    | "green100"
    | "green200"
    | "green300"
    | "green400"
    | "green500"
    | "green600"
    | "green700"
    | "green800"
    | "green900"
    | "grape50"
    | "grape100"
    | "grape200"
    | "grape300"
    | "grape400"
    | "grape500"
    | "grape600"
    | "grape700"
    | "grape800"
    | "grape900"
    | "violet50"
    | "violet100"
    | "violet200"
    | "violet300"
    | "violet400"
    | "violet500"
    | "violet600"
    | "violet700"
    | "violet800"
    | "violet900"
    | "cyan50"
    | "cyan100"
    | "cyan200"
    | "cyan300"
    | "cyan400"
    | "cyan500"
    | "cyan600"
    | "cyan700"
    | "cyan800"
    | "cyan900"
    | "lime50"
    | "lime100"
    | "lime200"
    | "lime300"
    | "lime400"
    | "lime500"
    | "lime600"
    | "lime700"
    | "lime800"
    | "lime900"
    | "yellow50"
    | "yellow100"
    | "yellow200"
    | "yellow300"
    | "yellow400"
    | "yellow500"
    | "yellow600"
    | "yellow700"
    | "yellow800"
    | "yellow900";
  /** size for your typo */
  size?: string;
};

/** `Typography` component to display texts */
const Typography: React.FC<PropsWithChildren<Props>> = ({
  children,
  color = "gray900",
  weight = "md",
  size = "16px",
}) => {
  return (
    <span
      css={[
        weights[weight],
        themes[color],
        css`
          font-size: ${size};
        `,
      ]}
    >
      {children}
    </span>
  );
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
  gray50: css`
    color: #f7f7fa;
  `,
  gray100: css`
    color: #f0f0f5;
  `,
  gray200: css`
    color: #e8e8ee;
  `,
  gray300: css`
    color: #e1e1e8;
  `,
  gray400: css`
    color: #cdced6;
  `,
  gray500: css`
    color: #a9abb8;
  `,
  gray600: css`
    color: #858899;
  `,
  gray700: css`
    color: #525463;
  `,
  gray800: css`
    color: #3e404c;
  `,
  gray900: css`
    color: #2b2d36;
  `,
  blue50: css`
    color: #f0f6ff;
  `,
  blue100: css`
    color: #dceafe;
  `,
  blue200: css`
    color: #bad5fd;
  `,
  blue300: css`
    color: #97bffc;
  `,
  blue400: css`
    color: #74aafb;
  `,
  blue500: css`
    color: #5094fa;
  `,
  blue600: css`
    color: #317ef2;
  `,
  blue700: css`
    color: #1d6ce0;
  `,
  blue800: css`
    color: #1959b8;
  `,
  blue900: css`
    color: #1a4b93;
  `,
  red50: css`
    color: #fef1f1;
  `,
  red100: css`
    color: #fdd8db;
  `,
  red200: css`
    color: #fbb7bb;
  `,
  red300: css`
    color: #f9959c;
  `,
  red400: css`
    color: #f7737c;
  `,
  red500: css`
    color: #f5535e;
  `,
  red600: css`
    color: #ec323e;
  `,
  red700: css`
    color: #d91c29;
  `,
  red800: css`
    color: #ae1e27;
  `,
  red900: css`
    color: #8f1e26;
  `,
  orange50: css`
    color: #fff7f0;
  `,
  orange100: css`
    color: #fee9d7;
  `,
  orange200: css`
    color: #fbc08d;
  `,
  orange300: css`
    color: #faa55c;
  `,
  orange400: css`
    color: #f99239;
  `,
  orange500: css`
    color: #f57d14;
  `,
  orange600: css`
    color: #dc6b09;
  `,
  orange700: css`
    color: #b35809;
  `,
  orange800: css`
    color: #984a06;
  `,
  orange900: css`
    color: #7a3c05;
  `,
  green50: css`
    color: #f4faf9;
  `,
  green100: css`
    color: #e3f2ef;
  `,
  green200: css`
    color: #aee0d4;
  `,
  green300: css`
    color: #71d0ba;
  `,
  green400: css`
    color: #36bf9f;
  `,
  green500: css`
    color: #00a881;
  `,
  green600: css`
    color: #048f6f;
  `,
  green700: css`
    color: #08785e;
  `,
  green800: css`
    color: #0a614d;
  `,
  green900: css`
    color: #0b5141;
  `,
  grape50: css`
    color: #fbf2fd;
  `,
  grape100: css`
    color: #f4dbfa;
  `,
  grape200: css`
    color: #e9b8f5;
  `,
  grape300: css`
    color: #e09df1;
  `,
  grape400: css`
    color: #d579ec;
  `,
  grape500: css`
    color: #cc5de8;
  `,
  grape600: css`
    color: #bd41dc;
  `,
  grape700: css`
    color: #a82dc8;
  `,
  grape800: css`
    color: #892ca0;
  `,
  grape900: css`
    color: #712a83;
  `,
  violet50: css`
    color: #f4f1fe;
  `,
  violet100: css`
    color: #e2d9fc;
  `,
  violet200: css`
    color: #c8b8fa;
  `,
  violet300: css`
    color: #b29bf8;
  `,
  violet400: css`
    color: #9c7ff5;
  `,
  violet500: css`
    color: #8662f3;
  `,
  violet600: css`
    color: #744ceb;
  `,
  violet700: css`
    color: #5b2ee0;
  `,
  violet800: css`
    color: #4b25c1;
  `,
  violet900: css`
    color: #412499;
  `,
  cyan50: css`
    color: #f3fbfc;
  `,
  cyan100: css`
    color: #d5f1f6;
  `,
  cyan200: css`
    color: #a6e3ed;
  `,
  cyan300: css`
    color: #7ed9e7;
  `,
  cyan400: css`
    color: #52cde0;
  `,
  cyan500: css`
    color: #1ebad2;
  `,
  cyan600: css`
    color: #1fa8bd;
  `,
  cyan700: css`
    color: #2095a7;
  `,
  cyan800: css`
    color: #217e8c;
  `,
  cyan900: css`
    color: #23707b;
  `,
  lime50: css`
    color: #f8fcf3;
  `,
  lime100: css`
    color: #e9f6d5;
  `,
  lime200: css`
    color: #d3ecac;
  `,
  lime300: css`
    color: #bce382;
  `,
  lime400: css`
    color: #adde63;
  `,
  lime500: css`
    color: #8fd327;
  `,
  lime600: css`
    color: #7cb526;
  `,
  lime700: css`
    color: #6d9c26;
  `,
  lime800: css`
    color: #5e8424;
  `,
  lime900: css`
    color: #4f6d22;
  `,
  yellow50: css`
    color: #fff8e1;
  `,
  yellow100: css`
    color: #ffecb3;
  `,
  yellow200: css`
    color: #ffe082;
  `,
  yellow300: css`
    color: #ffd54f;
  `,
  yellow400: css`
    color: #ffca28;
  `,
  yellow500: css`
    color: #ffc107;
  `,
  yellow600: css`
    color: #f5ac00;
  `,
  yellow700: css`
    color: #eb9300;
  `,
  yellow800: css`
    color: #e07e00;
  `,
  yellow900: css`
    color: #d66b00;
  `,
};

const weights = {
  sm: css`
    font-family: "Line_Th";
  `,
  md: css`
    font-family: "Line_Rg";
  `,
  lg: css`
    font-family: "Line_Bd";
  `,
};

Typography.defaultProps = {
  weight: "md",
  color: "gray900",
  size: "16px",
};

export default Typography;
