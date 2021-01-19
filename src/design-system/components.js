import system from "system-components" // provides cleaner styled system css functions to style reusable components via props
import styled from "styled-components"
// import css from "@styled-system/css" // allows sass like nesting and access to theme file
import { device } from "./MediaQueries"
import { theme } from "./theme"

// Layout
export const StyledLayout = styled.div`
  &.code {
    nav .nav-link.active-code {
      background: ${theme.white};
      padding: 10px 15px;
      border-radius: 100px;
      color: ${theme.black};
    }
  }

  &.film {
    nav .nav-link.active-film {
      background: ${theme.black};
      padding: 10px 16px;
      border-radius: 100px;
      color: ${theme.white};
    }
  }

  main {
    height: 100%;
  }

  .toggle-content {
    position: relative;
    text-align: center;

    @media ${device.laptop} {
      text-align: left;
    }

    &.toggle-header {
      height: 45px;
    }

    &.toggle-intro {
      height: 100%;
    }

    &.toggle-avatar {
      height: 250px;
      width: 250px;
    }

    .code-content,
    .film-content {
      position: absolute;
      width: 100%;
    }
  }

  &.code {
    .code-content {
      opacity: 1;
      transition: opacity 0.25s ease-in-out;
      z-index: 1;
    }

    .film-content {
      opacity: 0;
      transition: opacity 0.25s ease-in-out;
      z-index: 0;
    }

    .content-footer {
      button {
        background: ${theme.white};
        border: none;
        transition: all 0.25s ease-in-out;

        &:hover {
          background: ${theme.black};

          a {
            color: ${theme.white};
            transition: all 0.25s ease-in-out;
          }
        }

        a {
          color: ${theme.black};
        }
      }

      .social .code-content {
        position: relative;
      }
    }

    .social a {
      .fa-stack {
        .fa-stack-2x {
          color: ${theme.white};
          transition: color 0.25s ease-in-out;
        }

        .fa-stack-1x {
          color: ${theme.black};
          transition: color 0.25s ease-in-out;
        }
      }

      &:hover {
        .fa-stack {
          .fa-stack-2x {
            color: ${theme.black};
          }

          .fa-stack-1x {
            color: ${theme.white};
          }
        }
      }
    }
  }

  &.film {
    .code-content {
      opacity: 0;
      transition: opacity 0.25s ease-in-out;
      z-index: 0;
    }

    .film-content {
      opacity: 1;
      transition: opacity 0.25s ease-in-out;
      z-index: 1;
    }

    .content-footer {
      button {
        background: ${theme.black};
        border: none;
        transition: all 0.25s ease-in-out;

        &:hover {
          background: ${theme.white};

          a {
            color: ${theme.black};
            transition: all 0.25s ease-in-out;
          }
        }

        a {
          color: ${theme.white};
        }
      }

      .social .code-content {
        position: relative;
        z-index: -1;
      }
    }

    .social a {
      .fa-stack {
        .fa-stack-2x {
          color: ${theme.black};
          transition: color 0.25s ease-in-out;
        }

        .fa-stack-1x {
          color: ${theme.white};
          transition: color 0.25s ease-in-out;
        }
      }

      &:hover {
        .fa-stack {
          .fa-stack-2x {
            color: ${theme.white};
          }

          .fa-stack-1x {
            color: ${theme.black};
          }
        }
      }
    }
  }
`

// Content
export const StyledContent = styled.div.attrs({
  className: "styled-content",
})`
  min-height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 260px 400px;
  grid-gap: 0px;
  grid-template-areas:
    "header"
    "avatar"
    "content"
    "footer";
  justify-items: center;
  align-items: center;
  padding: 30px;

  @media ${device.laptop} {
    height: 100%;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 200px 250px;
    grid-gap: 0 30px;
    grid-template-areas:
      "header header"
      "avatar content"
      "footer footer";

    width: 100%;
    margin: 0 auto;
  }

  @media ${device.tabletUp} {
    width: 90%;
    margin: 0 auto;
  }

  @media ${device.laptop} {
    width: 85%;
    padding: 30px 0;
  }

  @media ${device.desktop} {
    width: 60%;
  }

  .header {
    grid-area: header;
    width: 150px;
    align-self: start;

    @media ${device.laptop} {
      justify-self: right;
    }
  }

  .avatar {
    grid-area: avatar;
    align-self: start;

    @media ${device.laptop} {
      /* padding-top: 100px; */
    }

    .image {
      border-radius: 150px;
      width: 250px;
      max-width: 300px;
      border: 3px solid ${theme.white};
    }
  }

  .content {
    grid-area: content;
    color: ${theme.white};
    text-align: center;
    align-self: start;
    padding-top: 30px;
    width: 100%;

    @media ${device.laptop} {
      text-align: left;
      padding-top: 0;
    }

    p {
      text-align: justify;
      margin: 0;
    }

    .link {
      background-color: #ae2676;
      font-weight: normal;
      padding: 1px 10px;
      &:hover {
        color: white;
        border-bottom: 1px dotted white;
      }
    }
  }

  .footer {
    grid-area: footer;
    display: flex;
    flex-direction: column;
    align-self: end;
    width: 100%;

    @media ${device.laptop} {
      grid-column-start: 2;
      align-self: start;
    }

    .content-footer {
      display: flex;
      justify-content: space-between;
      align-content: center;

      button {
        width: 125px;
        padding: 5px 0;
        border-radius: 5px;
        cursor: pointer;

        a {
          padding: 8px 0;

          &:hover {
            text-decoration: none;
          }
        }
      }

      .social {
        display: flex;
        justify-content: space-between;
        width: 225px;
        font-size: 18px;

        .has-content {
          position: relative;
          top: -2px;
          right: 1px;
          font-size: 14px;
        }
      }
    }
  }
`

export const StyledResume = styled.div`
  a {
    &.github {
      margin-left: 15px;
      color: #091d29;
      font-size: 32px;

      &:hover {
        color: #2b88c2;
      }
    }
  }
  main {
    padding-top: 30px;
  }

  .resume {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 80px 80px auto;
    grid-gap: 30px 60px;
    grid-template-areas:
      "photo"
      "name"
      "about"
      "work"
      "skills"
      "education"
      "projects";

    width: 90%;
    margin: 0 auto;
    padding: 30px;
    background-color: ${theme.white};
    border-radius: ${theme.borderRadius};
    box-shadow: ${theme.boxShadow};

    @media ${device.laptop} {
      grid-template-columns: 2fr 1fr;
      grid-template-rows: auto;
      grid-template-areas:
        "name photo"
        "about about"
        "work work"
        "skills skills"
        "education education"
        "projects projects";
    }

    @media ${device.desktop} {
      grid-template-areas:
        "name photo"
        "about about"
        "work work"
        "skills skills"
        "education education"
        "projects projects";
    }

    @media (min-width: 1600px) {
      width: 50%;
    }

    .header {
      color: gray;
      padding: 15px 0;
      border-top: 1px solid gray;
      border-bottom: 1px solid gray;
      text-transform: uppercase;
    }

    .company,
    .school-name {
      color: $body- ${theme.bg};

      span {
        color: gray;
      }
    }
  }

  .name {
    text-align: center;
    grid-area: name;

    .title {
      color: $body- ${theme.bg};
    }

    @media ${device.laptop} {
      text-align-last: left;
    }
  }

  .photo {
    grid-area: photo;
    text-align: center;

    @media ${device.laptop} {
      text-align: right;
      padding-right: 10px;
    }

    img {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      margin: 0;
    }
  }

  .about {
    grid-area: about;
  }

  .work {
    grid-area: work;

    .job {
      margin-bottom: 30px;
      /* &:first-of-type {
        margin-bottom: 30px;
      } */

      .job-title {
        margin: 10px 0;
      }

      .job-skills {
        margin-top: 30px;
      }
    }
  }

  .education {
    grid-area: education;

    .degree {
      margin: 10px 0;
    }

    .school {
      margin-bottom: 30px;
    }
  }

  .projects {
    grid-area: projects;

    .project-items {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: 30px;

      .project-card {
        overflow: hidden;
        width: 100%;
        background-color: ${theme.white};
        margin-bottom: 30px;
        border: 1px solid ${theme.bg};
        border-radius: ${theme.borderRadius};
        transition: all 0.2s ease-in-out;
        box-shadow: ${theme.boxShadow};

        @media ${device.mobileLUp} {
          width: 47%;
        }

        @media ${device.tabletUp} {
          width: 30%;
        }

        @media ${device.desktop} {
          width: 22%;
        }

        &:hover {
          transform: scale(1.02);
        }

        img {
          margin: 0;
        }

        .project-card-info {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 230px;
          margin-top: -8px;
          text-align: center;
          border-top: 1px solid ${theme.bg};

          .project-card-title {
            margin-top: 20px;
            margin-bottom: 0;
          }

          .project-card-meta {
            font-size: 16px;
            padding: 10px;

            p {
              margin: 0;
            }
          }

          .project-card-footer {
            width: 100%;
            display: flex;
            justify-content: space-evenly;
            background-color: lightGray;
            border-radius: 0 0 border-radius ${theme.borderRadius};
            border-top: 1px solid ${theme.bg};

            a {
              text-decoration: none;
            }

            .site a {
              padding: 12px 29px;
            }

            .source a {
              padding: 12px 18px;
            }

            .site,
            .source {
              padding: 10px 0;
            }
          }
        }
      }
    }
  }

  .skills {
    grid-area: skills;

    .skills-flex {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .skills-wrapper {
        width: 100%;

        @media ${device.tablet} {
          width: 50%;
        }

        .title {
          margin: 10px 0;
        }

        .skills-list {
          margin-bottom: 0;
        }
      }

      @media ${device.tablet} {
        flex-direction: row;
      }
    }
  }

  footer {
    position: relative;
    top: -23px;
    background: rgba(255, 255, 255);
    width: 300px;
    z-index: -1;
    border-radius: 5px;
    text-align: center;
    padding: 10px 0;
    margin: 50px auto 0;

    a {
      color: black;
      text-decoration: none;
      font-weight: bold;

      &:hover {
        color: black;
      }
    }
  }
`

// Header
export const StyledHeader = styled.header`
  nav {
    display: flex;
    justify-content: space-between;

    .nav-link {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      color: ${theme.white};
      letter-spacing: 1px;
      text-decoration: none;
      font-size: 23px;
      padding: 0 15px;
      text-align: center;

      &.active-film {
        padding: 0 16px;
      }

      i {
        margin-bottom: 3px;
      }

      span {
        font-size: 15px;
        text-align: center;
        line-height: 1;
      }

      &:hover {
        color: black;
      }
    }
  }
`

// Footer
export const StyledFooter = styled.footer`
  position: relative;
  top: -23px;
  background: rgba(255, 255, 255);
  width: 300px;
  z-index: -1;
  border-radius: 5px;
  text-align: center;
  padding: 10px 0;
  margin: 50px auto 0;

  a {
    color: black;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      color: black;
    }
  }
`

// Text - uses system-components to allow for styling via component props
export const Text = system("space", "color", "fontSize", "textAlign", "space")

// Image
export const Image = system(
  // defaults
  // System-components automatically applies styled-system functions based on the keys of the default values object.
  {
    is: "img",
  },
  // props
  // Styled System functions ... only what is being used as props on Image component
  "space",
  "height",
  "width",
  "minWidth",
  "maxWidth",
  "borderRadius",
  "borders",
  "borderColor",
  "boxShadow"
)

// 404
export const Giphy = system(
  // Styled System functions ... only what is being used as props on Giphy component
  "display",
  "flexDirection",
  "justifyContent",
  "minHeight",
  "space",
  "color",
  "borders",
  "borderColor",
  "borderRadius"
)
