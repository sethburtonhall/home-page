import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { frontend } from "../data/data"
// import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <div className="app">
      <Helmet>
        <title>Seth Hall - {frontend} Dev</title>
      </Helmet>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a
          href="https://www.gatsbyjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby
        </a>{" "}
        &{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout"
          target="_blank"
          rel="noopener noreferrer"
        >
          CSS Grids
        </a>
        <div className="footer-bg"></div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
