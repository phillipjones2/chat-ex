import React, { Component } from 'react'
import { Link } from 'react-router'
import style from './RegisterForm.styl'

export default class RegisterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return(
      <div className="RegisterForm">
        <form>
          <h3>Register</h3>
          <input placeholder="email"/>
          <input placeholder="username"/>
          <input placeholder="password" type="password"/>
          <input placeholder="confirm password" type="password"/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
