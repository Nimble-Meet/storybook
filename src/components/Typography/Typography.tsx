/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { PropsWithChildren } from "react";

import { FONT_WEIGHT, FONT_COLOR } from "./Typography.constant";

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
        FONT_WEIGHT[weight],
        FONT_COLOR[color],
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
