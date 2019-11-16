import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import HomeLayout from './home'

// Site container is designed for sharing components across the whole website
// like site header, site footer, etc,.
const SiteContainer = (_props, _context) => (
  <div className="site-container">
    <div className="site-body">
      <Switch>
        <Route exact path="/" render={props => <HomeLayout {...props} />} />
        <Redirect to="/" />
      </Switch>
    </div>
  </div>
)

export default SiteContainer
