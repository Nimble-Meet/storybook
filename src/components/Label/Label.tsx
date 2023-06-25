/** @jsxImportSource @emotion/react */

import { PropsWithChildren } from "react";

import type { Props } from "./Lable.type";

const Label: React.FC<PropsWithChildren<Props>> = ({ htmlFor, children }) => {
  return <label htmlFor={htmlFor}>{children}</label>;
};

export default Label;
