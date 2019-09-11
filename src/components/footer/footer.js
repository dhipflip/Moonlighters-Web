import React from "react"
import styles from "./footer.module.scss"
import logo from "../../images/moonlighters-logo-light.svg"

export const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div>
          <img src={logo} alt="Moonlighters Logo" className={styles.logo} />
          <div className={styles.date}>
            {" "}
            © {new Date().getFullYear()}, Moonlighters.io
          </div>
        </div>
      </footer>
    </>
  )
}
