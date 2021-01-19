import { createGlobalStyle } from "styled-components"
// import { theme } from "./theme"
import { device } from "./MediaQueries"
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

      .styled-content {
        /* grid-template-rows: 100px 260px 247px;

        @media ${device.laptop} {
          grid-template-rows: 200px 250px;
        } */

        /* .content-footer {
          justify-content: center;

          @media ${device.laptop} {
            justify-content: space-between;
          }
        } */

        /* .film-content {
          height: 0;
        } */
      }
    }
    &.film {
      background-color: #033878;
      background: url(${bg2}) no-repeat center center fixed;
      background-size: cover;
      transition: background-image 0.25s ease-in-out;
    }
  }


`
