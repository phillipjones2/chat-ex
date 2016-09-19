import React, { Component } from 'react'
import { Link } from 'react-router'
import style from './FrameView.styl'

import NavBar from '../NavBar/NavBar'

export default class FrameView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      anything: "new new state!"
    }
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
      happy: this.state.anything
      })
    )
    return(
      <div className="FrameView">
        <NavBar />
        {childrenWithProps}
      </div>
    )
  }
}
