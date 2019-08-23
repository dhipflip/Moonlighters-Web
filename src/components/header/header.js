import React from "react"
import styles from "./header.module.css"
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