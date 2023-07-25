/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const ZIndex = 1000;

export const HeaderStyle = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
`;

export const BodyStyle = css`
  padding: 0.5rem 2.5rem;
  min-height: 8rem; // 128px
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
  border-radius: 1rem;
  background-color: white;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.04),
    0px 8px 12px rgba(36, 42, 48, 0.11);

  @keyframes modalFadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  animation: modalFadeIn 0.3s ease-in-out;
`;

export const DimStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${ZIndex - 3};
  width: 100%;
  height: 100%;
  background-color: rgba(240, 240, 240, 0.85);
`;
