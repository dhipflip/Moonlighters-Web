import React from "react"
import styles from "./Footer.module.scss"
import logo from "../../images/moonlighters-logo-light.svg"

export const Footer = () => {
  return (
    <>
    <header>
      <div className={styles.footer}>
      <img src={logo} alt='Moonlighters Logo'/>
      © {new Date().getFullYear()}, Moonlighters.io
      </div>
    </header>
    </>
  )
}