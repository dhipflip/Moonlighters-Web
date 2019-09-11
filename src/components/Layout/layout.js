import React from "react"
import PropTypes from "prop-types"
import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"
import styles from "../Layout/Layout.module.scss"

export const Layout = ({ children }) => {
   return (
    <>
    <Header/>
      <div className =  {styles.body}>
        <main>{children}</main>
      </div>
    <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

