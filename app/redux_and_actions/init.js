import { applyMiddleware, createStore, compose } from 'redux'
import asyncAwait from 'redux-async-await'

import { rootReducer } from './index'

export function configureStore(initialState) {
  if (!configureStore.store) {
    configureStore.store = createStore(
      rootReducer,
      initialState,
      process.env.NODE_ENV !== 'production' ?
        compose(
          applyMiddleware(asyncAwait),
          process.env.NODE_ENV !== 'production' &&
          typeof window !== 'undefined' && window.devToolsExtension
            // eslint-disable-next-line no-underscore-dangle
            ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
            : f => f,
        )
        :
        applyMiddleware(asyncAwait),
    )

    configureStore.native_dispatch = configureStore.dispatch
    const dispatch_wrapper = async function (data) {
      try {
        return await configureStore.native_dispatch(data)
      } catch (Err) {
        console.log(Err)
        return Err
      }
    }

    configureStore.dispatch = dispatch_wrapper
  }

  if (module.hot) {
    module.hot.accept('../redux_and_actions', () => {
      const { rootReducer: nextRootReducer } = require('../redux_and_actions/index')
      configureStore.store.replaceReducer(nextRootReducer)
    })
  }

  return configureStore.store
}
