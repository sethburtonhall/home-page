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
      background-color: #8E236F;
      background: url(${bg}) no-repeat center center fixed;
      background-size: cover;;
      transition: background-image 0.25s ease-in-out;
    }
    &.film {
      background-color: #033878;
      background: url(${bg2}) no-repeat center center fixed;
      background-size: cover;
      transition: background-image 0.25s ease-in-out;
    }
  }
`
