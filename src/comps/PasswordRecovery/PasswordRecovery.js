import React, { Component } from 'react'
import { Link } from 'react-router'
import style from './PasswordRecovery.styl'

export default class PasswordRecovery extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <div className="PasswordRecovery">
        <form>
          <h3>Need to Reset your password? </h3>
          <input placeholder="email"/>
          <p onClick={this.props.toRecoveryForm}>Back to Login</p>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
