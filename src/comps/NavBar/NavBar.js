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
            <Link to="/about"><li>about</li></Link>
            <Link to="/contact"><li>contact</li></Link>
            <Link to="/login"><li>login</li></Link>
            <Link to="/register"><li>register</li></Link>
          </ul>
          <Hamburger onClick={this.expandLinks} id="expand-icon" />
        </nav>
      </div>
    )
  }
}
