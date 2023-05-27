import { css, jsx } from "@emotion/react";
import COLOR from "../../assets/color";

export const sizes = {
  md: css`
    height: 2rem;
  `,
  lg: css`
    height: 2.5rem;
  `,
  xl: css`
    height: 3rem;
  `,
};

export const defaultStyle = css`
  box-sizing: border-box;
  height: 2rem;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  line-height: 1;
  font-weight: 500;
  border: 1px solid ${COLOR.gray700};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1);

  &:disabled {
    cursor: not-allowed;
  }
`;

export const invalidStyle = css`
  @keyframes vibration {
    from {
      transform: rotate(0.5deg);
    }
    to {
      transform: rotate(-0.5deg);
    }
  }

  border: 1px solid ${COLOR.red600};

  animation: vibration 0.1s linear;
`;