import React from 'react'
import ReactDOM from 'react-dom'
import {
  browserHistory,
  IndexRoute,
  Router,
  Route
} from 'react-router'

import FrameView from './comps/FrameView/FrameView'
import HomeView from './comps/HomeView/HomeView'


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={FrameView}>
      <IndexRoute component={HomeView}></IndexRoute>
      {/* <Route path="/////" component="////"></Route> */}
    </Route>
  </Router>,
  document.getElementById('root')
)
