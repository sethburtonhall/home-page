import { createGlobalStyle } from "styled-components"
import { theme } from "./theme"
import bg from "../images/bg4.jpg"
import bg2 from "../images/bg6.jpg"

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%
  }

  body {
    &.code {
      background: url(${bg}) no-repeat center center fixed;
      background-size: cover;
      background-color: ${theme.bg};
      /* opacity: 0.8; */
      transition: background-image 0.25s ease-in-out;
    }
    &.film {
      background: url(${bg2}) no-repeat center center fixed;
      background-color: ${theme.bg};
      background-size: cover;
      /* opacity: 0.8; */
      transition: background-image 0.25s ease-in-out;
    }
  }
`
