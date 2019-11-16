import configureStore from 'redux-mock-store'
import asyncAwait from 'redux-async-await'

const middlewares = [asyncAwait]
const mockStore = configureStore(middlewares)

export default mockStore
