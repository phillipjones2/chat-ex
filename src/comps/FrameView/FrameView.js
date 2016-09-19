import React, { Component } from 'react'
import { Link } from 'react-router'
import style from './FrameView.styl'

export default class FrameView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      anything: "new new state!"
    }
    this.stated = () => {
      this.setState({
        anything: "cats"
      })
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
        <h1 onClick={this.stated}>Frame</h1>
        {childrenWithProps}
      </div>
    )
  }
}
