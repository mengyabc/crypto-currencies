import { Provider } from 'react-redux'
import { configureStore } from 'redux_and_actions/'
import Routes from './routes'

const store = configureStore()
const container = document.getElementById('main')

// Copyright 2014-2017 The Bootstrap Authors
// Copyright 2014-2017 Twitter, Inc.
// Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  const msViewportStyle = document.createElement('style')
  msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'))
  document.head.appendChild(msViewportStyle)
}


if (module.hot) {
  console.log('Hot reload module enabled ...')
  const AppContainer = require('react-hot-loader').AppContainer

  const render = (Component) => {
    console.log('Hot reload accepted ...')
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <Component />
        </Provider>
      </AppContainer>,
      container,
    )
  }

  module.hot.accept(render(Routes))
} else {
  ReactDOM.render(<Provider store={store}><Routes /></Provider>, container)
}

