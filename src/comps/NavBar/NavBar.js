import React, { Component } from 'react'
import { Link } from 'react-router'
import style from './NavBar.styl'
import Hamburger from './menu.svg'

export default class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.expandLinks = () => {
      const navLinks = document.getElementById('nav-links')
      navLinks.classList.toggle('down')
    }
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
          <Hamburger onClick={this.expandLinks} id="expand-icon" />
        </nav>
      </div>
    )
  }
}
