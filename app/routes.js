import { BrowserRouter as Router, Route } from 'react-router-dom'
import SiteContainer from 'layouts/site-container'

require('scss/style.scss')

const Routes = (_props, _context) => {
  const site_container = props => <SiteContainer {...props} />
  return (
    <Router>
      <Route render={site_container} />
    </Router>
  )
}

export default Routes
