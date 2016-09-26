import React from 'react'
import {
  browserHistory,
  IndexRoute,
  Router,
  Route
} from 'react-router'

import AboutView from './AboutView/AboutView'
import FrameView from './FrameView/FrameView'
import HomeView from './HomeView/HomeView'
import ContactView from './ContactView/ContactView'

module.exports = (
  <Route path="/" component={FrameView}>
    <IndexRoute component={HomeView} />
    {/* <Route path="/////" component="////"></Route> */}
    <Route path="/about" component={AboutView} />
    <Route path="/contact" component={ContactView} />
  </Route>
)
