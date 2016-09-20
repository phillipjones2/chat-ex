import React, { Component } from 'react'
import { Link } from 'react-router'
import style from './LoginForm.styl'

import PasswordRecovery from '../PasswordRecovery/PasswordRecovery'

export default class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showPasswordRecovery: false
    }
    this.toRecoveryForm = () => {
      this.setState({
        showPasswordRecovery: !this.state.showPasswordRecovery
      })
    }
  }


  render() {
    const LoginForm = (<form>
              <h3>Login</h3>
              <input placeholder="username"/>
              <input placeholder="password" type="password"/>
              <p onClick={this.toRecoveryForm}>Forgot password?</p>
              <button>Submit</button>
            </form>)

    const form = (() => {
      if (this.state.showPasswordRecovery) {
        return <PasswordRecovery toRecoveryForm={this.toRecoveryForm}/>
      } else {
        return LoginForm
      }
    })()
    return(
      <div className="LoginForm">
        {form}
      </div>
    )
  }
}
