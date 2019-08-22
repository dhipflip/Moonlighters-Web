import React from "react"
import PropTypes from "prop-types"
import { Header } from "./header/header.js"
import "../styles/layout.css"

const Layout = ({ children }) => {
   return (
    <>
      <Header/>
      <div
        style={{
          margin: `0 auto`,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Moonlighters.io
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
