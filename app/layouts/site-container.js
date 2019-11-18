import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Header from 'components/header'
import HomeLayout from './home'

// Site container is designed for sharing components across the whole website
// like site header, site footer, etc,.
const SiteContainer = (_props, _context) => (
  <div className="site-container pb-4">
    <Header />
    <div className="site-body">
      <Switch>
        <Route exact path="/" render={props => <HomeLayout {...props} />} />
        <Redirect to="/" />
      </Switch>
    </div>
  </div>
)

export default SiteContainer
