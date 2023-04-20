/** @jsxImportSource @emotion/react */

import { PropsWithChildren } from "react";

type Props = {
  htmlFor: string;
  children: React.ReactNode | string;
};

const Label: React.FC<PropsWithChildren<Props>> = ({ htmlFor, children }) => {
  return <label htmlFor={htmlFor}>{children}</label>;
};

export default Label;
