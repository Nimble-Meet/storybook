/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { PropsWithChildren } from "react";

import { FontWeight, FontColor } from "./Typography.style";

import type { Props } from "./Typography.type";

const Typography: React.FC<PropsWithChildren<Props>> = ({
  value,
  color = "gray900",
  weight = "md",
  size = "16px",
}) => {
  return (
    <span
      css={[
        FontWeight[weight],
        FontColor[color],
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
