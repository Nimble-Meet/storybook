/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

import COLOR from "../../assets/color";

export const ButtonSizes = {
  sm: css`
    height: 1.5rem;
    padding: 0 0.875rem;
  `,
  md: css`
    height: 2rem;
    padding: 0 1rem;
  `,
  lg: css`
    height: 2.5rem;
    padding: 0 1.5rem;
    font-weight: 600;
  `,
  xl: css`
    height: 3rem;
    padding: 0 2rem;
    font-weight: 600;
  `,
};

export const ButtonColors = {
  basic: css`
    background: ${COLOR.white};
    color: ${COLOR.gray900};

    border: 1px solid ${COLOR.gray300};

    svg {
      fill: ${COLOR.gray900};
    }

    &:hover:not(:disabled) {
      background: ${COLOR.gray50};
    }
    &:active:not(:disabled) {
      background: ${COLOR.gray50};
      border: 1px solid ${COLOR.gray500};
    }
    &:disabled {
      background: ${COLOR.white};
      color: ${COLOR.gray300};
    }
  `,
  primary: css`
    background: ${COLOR.blue600};
    color: ${COLOR.white};
    svg {
      fill: ${COLOR.white};
    }
    &:hover:not(:disabled) {
      background: ${COLOR.blue700};
    }
    &:active:not(:disabled) {
      background: ${COLOR.blue800};
    }
    &:disabled {
      background: ${COLOR.blue300};
    }
  `,
  link: css`
    background: ${COLOR.gray50};
    color: ${COLOR.black};
    svg {
      fill: ${COLOR.black};
    }
    &:hover:not(:disabled) {
      color: ${COLOR.gray50};
      background-color: ${COLOR.black};
      border: 1px solid ${COLOR.gray50};
    }
    &:active:not(:disabled) {
      background: ${COLOR.gray800};
    }
    &:disabled {
      color: ${COLOR.gray500};
      svg {
        fill: ${COLOR.gray500};
      }
    }
  `,
  dark: css`
    background: ${COLOR.black};
    color: ${COLOR.gray50};
    border: 1px solid ${COLOR.gray50};
    svg {
      fill: ${COLOR.gray50};
    }
    &:hover:not(:disabled) {
      background: ${COLOR.gray50};
      color: ${COLOR.black};
    }
    &:active:not(:disabled) {
      background: ${COLOR.gray100};
    }
    &:disabled {
      background: ${COLOR.gray400};
      color: ${COLOR.gray500};
      svg {
        fill: ${COLOR.gray500};
      }
    }
  `,
};

export const DefaultStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  box-sizing: border-box;
  height: 2rem;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  line-height: 1;
  font-weight: 500;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1);

  &:disabled {
    cursor: not-allowed;
  }

  svg {
    width: 1em;
    margin-right: 1em;
  }
`;
