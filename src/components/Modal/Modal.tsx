/** @jsxImportSource @emotion/react */
import React from "react";
import COLOR from "../../assets/color";

import { AiOutlineClose } from "react-icons/ai";

import {
  DefaultStyle,
  HeaderStyle,
  BodyStyle,
  FooterStyle,
  DimStyle,
} from "./Modal.style";
import type { Props } from "./Modal.type";

interface ModalType extends React.FC<Props> {
  Header: typeof Header;
  Body: typeof Body;
  Footer: typeof Footer;
}

const Modal: ModalType = ({ isOpen, children }) => {
  return isOpen ? (
    <>
      <div css={DefaultStyle}>{children}</div>
      <div css={DimStyle} />
    </>
  ) : (
    <></>
  );
};

const Header = ({ toggle }: { toggle: any }) => {
  return (
    <header css={HeaderStyle}>
      <AiOutlineClose onClick={toggle} color={COLOR.gray600} size="1.25rem" />
    </header>
  );
};

const Body = ({ children }: { children: React.ReactNode }) => {
  return <div css={BodyStyle}>{children}</div>;
};

const Footer = ({ children }: { children: React.ReactNode }) => {
  return <footer css={FooterStyle}>{children}</footer>;
};

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
