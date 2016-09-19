import React, { Component } from 'react'
import { Link } from 'react-router'
import style from './NavBar.styl'
import Hamburger from './menu.svg'

export default class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <div className="NavBar">
        <nav>
          <p id="logo">LOGO</p>
          <ul id="nav-links">
            <li>about</li>
            <li>contact</li>
            <li>login</li>
            <li>register</li>
          </ul>
          <Hamburger id="expand-icon" />
        </nav>
      </div>
    )
  }
}
