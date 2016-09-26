import React from 'react'
import ReactDOM from 'react-dom'
import {
  browserHistory,
  IndexRoute,
  Router,
  Route
} from 'react-router'
import routes from './comps/routes'

ReactDOM.render(
  <Router routes={routes} history={browserHistory} />,
  document.getElementById('root')
)
