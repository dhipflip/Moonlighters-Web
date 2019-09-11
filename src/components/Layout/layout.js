import React from "./node_modules/react"
import PropTypes from "./node_modules/prop-types"
import { Header } from "../header/header"
import { Footer } from "../footer/footer"
import styles from "./layout.module.scss"

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.body}>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
