/** @jsxImportSource @emotion/react */
import React, { PropsWithChildren } from "react";

import {
  basicStyles,
  flexDirectionStyles,
  flexJustifyStyles,
  flexAlignStyles,
} from "./FlexContainer.style";
import type { Props } from "./FlexContainer.type";

const FlexContainer: React.FC<PropsWithChildren<Props>> = React.forwardRef(
  (
    {
      direction = "row",
      justifyContent = "normal",
      alignItems = "normal",
      gap,
      basis,
      grow,
      wrap,
      customCss,
      children,
    },
    ref
  ) => {
    return (
      <div
        css={[
          basicStyles,
          ...(Array.isArray(customCss) ? customCss : [customCss]),
          flexDirectionStyles[direction],
          flexJustifyStyles[justifyContent],
          flexAlignStyles[alignItems],
          { gap, flexBasis: basis, flexGrow: grow, flexWrap: wrap },
        ]}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

export default FlexContainer;
