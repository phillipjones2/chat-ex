import React, { Component } from 'react'
import { Link } from 'react-router'
import style from './FrameView.styl'

export default class FrameView extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <div className="FrameView">
      <h1>Frame</h1>
      </div>
    )
  }
}
