import React from "react"
import PropTypes from "prop-types"
import { MDXProvider } from "@mdx-js/react"

import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <MDXProvider
      components={{
        p: props => <p {...props} className="mt-4" />,
      }}
    >
      <div
        className="min-h-full grid"
        style={{
          gridTemplateRows: "auto 1fr auto auto",
        }}
      >
        <Header>My Portfolio</Header>
        <main>{children}</main>
        <Footer>Footer</Footer>
      </div>
    </MDXProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout
