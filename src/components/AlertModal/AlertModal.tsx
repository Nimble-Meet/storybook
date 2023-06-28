/** @jsxImportSource @emotion/react */
import React, { PropsWithChildren } from "react";
import COLOR from "../../assets/color";

import { AiOutlineClose } from "react-icons/ai";

import Button from "../Button/Button";

import {
  DefaultStyle,
  HeaderStyle,
  BodyStyle,
  FooterStyle,
} from "./AlertModal.style";
import type { Props } from "./AlertModal.type";

const AlertModal: React.FC<PropsWithChildren<Props>> = ({
  isOpen,
  toggle,
  children,
}) => {
  return isOpen ? (
    <div css={DefaultStyle}>
      <header css={HeaderStyle}>
        <AiOutlineClose color={COLOR.gray600} size="1.25rem" />
      </header>
      <div css={BodyStyle}>{children}</div>
      <footer css={FooterStyle} onClick={toggle}>
        <Button size="lg" color="primary">
          확인
        </Button>
      </footer>
    </div>
  ) : (
    <></>
  );
};

export default AlertModal;
