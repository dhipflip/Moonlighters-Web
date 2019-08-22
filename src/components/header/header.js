import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from '../../images/moonlighters-logo-light.svg'

export const Header = () => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
      }}>
    </div>
    <img src={logo} alt='Moonlighters Logo'/>
  </header>
)