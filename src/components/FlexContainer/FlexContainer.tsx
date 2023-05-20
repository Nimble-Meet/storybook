/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";
import { PropsWithChildren } from "react";

type FlexContainerProps = {
  children: React.ReactNode;
  direction: "row" | "column";
  justifyContent: "center" | "start" | "end" | "between" | "evenly";
  alignItems: "center" | "start" | "end" | "between" | "evenly";
  gap?: string;
  basis?: string;
  grow?: number;
  wrap?: "wrap" | "nowrap";
  customCss?: SerializedStyles;
  ref?: React.Ref<HTMLDivElement> | null;
};

const FlexContainer: React.FC<PropsWithChildren<FlexContainerProps>> = ({
  direction,
  justifyContent,
  alignItems,
  gap,
  basis,
  grow,
  wrap,
  customCss,
  ref,
  children,
}) => {
  return (
    <div
      css={[
        basicStyles,
        customCss,
        flexJustifyStyles[justifyContent],
        flexDirectionStyles[direction],
        flexAlignStyles[alignItems],
        { gap, flexBasis: basis, flexGrow: grow, flexWrap: wrap },
      ]}
      ref={ref}
    >
      {children}
    </div>
  );
};

const basicStyles = css`
  display: flex;
`;

const flexDirectionStyles = {
  row: css`
    flex-direction: row;
  `,
  column: css`
    flex-direction: column;
  `,
};

const flexJustifyStyles = {
  center: css`
    justify-content: center;
  `,
  start: css`
    justify-content: flex-start;
  `,
  end: css`
    justify-content: flex-end;
  `,
  between: css`
    justify-content: space-between;
  `,
  evenly: css`
    justify-content: space-evenly;
  `,
};

const flexAlignStyles = {
  center: css`
    align-items: center;
  `,
  start: css`
    align-items: flex-start;
  `,
  end: css`
    align-items: flex-end;
  `,
  between: css`
    align-items: space-between;
  `,
  evenly: css`
    align-items: space-evenly;
  `,
};

export default FlexContainer;
