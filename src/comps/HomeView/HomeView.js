import React, { Component } from 'react'
import { Link } from 'react-router'
import style from './HomeView.styl'

import LoginForm from '../LoginForm/LoginForm'
import RegisterForm from '../RegisterForm/RegisterForm'

export default class HomeView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showLoginForm: true
    }
    this.switchForm = () => {
      this.setState({
        showLoginForm: !this.state.showLoginForm
      })
    }
  }

  render() {
    const form = (() => {
      if (this.state.showLoginForm) {
        return <LoginForm />
      } else {
        return <RegisterForm />
      }
    })()

    return(
      <div className="HomeView">
        <div>
          {form}
          <p onClick={this.switchForm}>Switch forms.</p>
        </div>
      </div>
    )
  }
}
