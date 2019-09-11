import React from "react"
import styles from "./header.module.scss"
import logo from "../../images/moonlighters-logo-light.svg"

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div>
          <img src={logo} alt="Moonlighters Logo" className={styles.logo} />
        </div>
      </header>
    </>
  )
}
