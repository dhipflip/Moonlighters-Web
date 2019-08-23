import React from "react"
import PropTypes from "prop-types"
import { Header } from "./header/header.js"
import { Footer } from "./footer/footer.js"
import "../styles/layout.css"

const Layout = ({ children }) => {
   return (
    <>
    <Header/>
      <div>
        <main>{children}</main>
      </div>
    <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
