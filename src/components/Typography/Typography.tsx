/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { PropsWithChildren } from "react";

import { FontWeight, FontColor } from "./Typography.style";

import type { Props } from "./Typography.type";

const Typography: React.FC<PropsWithChildren<Props>> = ({
  value,
  // optional props
  color = "gray900",
  weight = "md",
  size = "16px",
  wordBreak = false,
  preLine = false,
}) => {
  return (
    <span
      css={[
        FontWeight[weight],
        FontColor[color],
        {
          wordBreak: wordBreak ? "keep-all" : "break-all",
          whiteSpace: preLine ? "pre-line" : "normal",
        },
        css`
          font-size: ${size};
          white-space: pre-line;
        `,
      ]}
    >
      {value}
    </span>
  );
};

export default Typography;
