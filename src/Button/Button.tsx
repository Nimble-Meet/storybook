/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import COLOR from "../assets/color";

import { PropsWithChildren } from "react";

type Props = {
  /** 버튼의 클릭시 발생하는 함수 */
  onClick?: (e?: any) => void;
  /** 버튼의 생김새를 설정합니다. */
  theme?: "primary" | "secondary" | "link" | "dark";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  /** 버튼의 너비를 임의로 설정합니다. */
  width?: string | number;
};

/**
 * `Button` 컴포넌트는 어떤 작업을 트리거할 때 사용합니다.
 */
const Button: React.FC<PropsWithChildren<Props>> = ({
  children,
  onClick,
  theme = "primary",
  size = "md",
  disabled = false,
  width,
}) => {
  return (
    <button
      css={[style, themes[theme], sizes[size], { width }]}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const sizes = {
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
    border-radius: 2rem;
  `,
};

const themes = {
  primary: css`
    background: #20c997;
    color: white;
    svg {
      fill: white;
    }
    &:hover {
      background: #38d9a9;
    }
    &:active {
      background: #12b886;
    }
    &:disabled {
      background: #aed9cc;
    }
  `,
  secondary: css`
    background: ${COLOR.gray50};
    color: ${COLOR.gray900};
    svg {
      fill: #343a40;
    }
    &:hover {
      background: ${COLOR.gray900};
      color: ${COLOR.gray50};
    }
    &:active {
      background: #dee2e6;
    }
    &:disabled {
      color: #c6d3e1;
      svg {
        fill: #c6d3e1;
      }
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
      color: ${COLOR.gray700};
      border: 1px solid ${COLOR.gray700};
      svg {
        fill: ${COLOR.gray700};
      }
    }
  `,
};

const style = css`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  box-sizing: border-box;
  height: 2rem;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  background: #20c997;
  color: white;
  border-radius: 1rem;
  line-height: 1;
  font-weight: 600;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1);

  &:disabled {
    cursor: not-allowed;
  }

  svg {
    width: 1em;
    margin-right: 1em;
  }
`;

export default Button;
