import React from "react"
import PropTypes from "prop-types"

// Components
import { Helmet } from "react-helmet"

// Styles
import { StyledLayout } from "../design-system"

const Layout = ({ children, toggle }) => {
  return (
    <StyledLayout className={`app ${toggle ? 'film' : 'code'}`}>
      <Helmet>
        <script
          src="https://kit.fontawesome.com/856c74694a.js"
          crossorigin="anonymous"
        ></script>
      </Helmet>
      <main>{children}</main>
    </StyledLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
