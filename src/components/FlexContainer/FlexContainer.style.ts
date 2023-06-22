import { css } from "@emotion/react";

export const basicStyles = css`
  display: flex;
`;

export const flexDirectionStyles = {
  row: css`
    flex-direction: row;
  `,
  column: css`
    flex-direction: column;
  `,
};

export const flexJustifyStyles = {
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
  normal: css`
    justify-content: normal;
  `,
};

export const flexAlignStyles = {
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
  normal: css`
    align-items: normal;
  `,
};
