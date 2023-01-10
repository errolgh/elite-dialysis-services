
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import Header from "./header"
import "./layout.css"
import NavBar from "./Nav/NavBar"
import { createGlobalStyle } from "styled-components"
import Footer from "./Footer"

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

const GlobalStyle = createGlobalStyle`
  body {
    /* color: ${props => (props.theme === "purple" ? "purple" : "white")}; */
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle theme="purple" />
      <NavBar  />
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <div
        style={{
          // margin: `0 auto`,
          // maxWidth: `var(--size-content)`,
          // padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
        <Footer/>
      </div>
    </>
  )
}

export default Layout
