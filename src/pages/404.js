import React from "react"

// Components
import Layout from "../components/layout"
import SEO from "../components/Seo"
import { Helmet } from "react-helmet"

// Data
import gif from "../images/404-2.gif"

// Styles
import { ThemeProvider } from "styled-components"
import { theme, Text, Giphy, Image } from "../design-system"

const style = {
  height: "100vh",
}

const NotFoundPage = () => (
  <ThemeProvider theme={theme}>
    <Layout className="code">
      <SEO title="Home" />
      <div style={style}>
        <Helmet>
          <title>Seth Hall - 404</title>
        </Helmet>
        <Giphy
          display="flex"
          flexDirection="column"
          justifyContent="space-evenly"
          minHeight="100vh"
          m="auto"
        >
          <Text fontSize="40px" color="white" textAlign="center">
            You are lost in deep space. <br />
            📡 🌎 🚀 😞 <br />
            Please go back and try again.
          </Text>
          <Image
            src={gif}
            alt="404 Giphy"
            m="0 auto"
            height="auto"
            width="100%"
            minWidth="100px"
            maxWidth="750px"
            boxShadow="0 0 60px -10px #AD5969"
            border={4}
          />
        </Giphy>
      </div>
    </Layout>
  </ThemeProvider>
)

export default NotFoundPage
