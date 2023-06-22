/** @jsxImportSource @emotion/react */
import React, { PropsWithChildren } from "react";

import {
  BasicStyles,
  FlexDirection,
  FlexJustify,
  FlexAlign,
} from "./FlexContainer.style";
import type { Props } from "./FlexContainer.type";

const FlexContainer: React.FC<PropsWithChildren<Props>> = React.forwardRef(
  (
    {
      children,
      // optional props
      direction = "row",
      justifyContent = "normal",
      alignItems = "normal",
      gap,
      basis,
      grow,
      wrap,
      customCss,
    },
    ref
  ) => {
    return (
      <div
        css={[
          BasicStyles,
          ...(Array.isArray(customCss) ? customCss : [customCss]),
          FlexDirection[direction],
          FlexJustify[justifyContent],
          FlexAlign[alignItems],
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
