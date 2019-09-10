import React from "react"
import styles from "./Header.module.scss"
import logo from '../../images/moonlighters-logo-light.svg'

export const Header = () => {
  return (
    <>
    <header>
      <div className={styles.header}>
      <img src={logo} alt='Moonlighters Logo'/>
      </div>
    </header>
    </>
  )
}