/** @jsxImportSource @emotion/react */
import { Global, css, jsx } from "@emotion/react";

import Line_Bd from "../assets/fonts/LINESeedKR-Bd.ttf";
import Line_Rg from "../assets/fonts/LINESeedKR-Rg.ttf";
import Line_Th from "../assets/fonts/LINESeedKR-Th.ttf";

export const GlobalStyle = () => (
  <Global
    styles={css`
      @font-face {
        font-family: "Line_Th";
        src: url(${Line_Th}) format("opentype");
      }

      @font-face {
        font-family: "Line_Rg";
        src: url(${Line_Rg}) format("opentype");
      }

      @font-face {
        font-family: "Line_Bd";
        src: url(${Line_Bd}) format("opentype");
      }

      * {
        box-sizing: border-box;
      }

      textarea,
      input {
        border: none;
        outline: none;
        resize: none;
      }
      input:-webkit-autofill,
      input:-webkit-autofill:hover,
      input:-webkit-autofill:focus,
      input:-webkit-autofill:active {
        transition: background-color 5000s ease-in-out 0s;
      }

      a {
        text-decoration: none;
      }
    `}
  />
);
