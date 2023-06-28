/** @jsxImportSource @emotion/react */
import COLOR from "../../assets/color";
import { css } from "@emotion/react";

const ZIndex = 1000;

export const HeaderStyle = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
`;

export const BodyStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 150px;
  border-bottom: 1px solid ${COLOR.gray300};
`;

export const FooterStyle = css`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
`;

export const DefaultStyle = css`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: ${ZIndex};
  overflow: hidden;
  width: 500px;
  border-radius: 0.5rem;
  background-color: white;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 0.5rem 0.5rem rgba(0, 0, 0, 0.01);
`;
