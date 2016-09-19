import React, { Component } from 'react'
import { Link } from 'react-router'
import style from './HomeView.styl'

export default class HomeView extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <div className="HomeView">
      <h3>Happy {this.props.happy}</h3>
      </div>
    )
  }
}
