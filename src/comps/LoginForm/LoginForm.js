import React, { Component } from 'react'
import { Link } from 'react-router'
import style from './LoginForm.styl'

export default class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <div className="LoginForm">
        <form>
          <h3>Login</h3>
          <input placeholder="username"/>
          <input placeholder="password" type="password"/>
        </form>
      </div>
    )
  }
}
