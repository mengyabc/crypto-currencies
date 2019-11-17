import { combineReducers } from 'redux'
import { GET_CURRENCY_LISTING } from './actions'

const init_home = () => ({
  currencies: [],
})

function home_reducer(state = init_home(), action) {
  switch (action.type) {
  case GET_CURRENCY_LISTING:
    return {
      ...state,
      currencies: action.payload,
    }
  default:
    return state
  }
}

export const rootReducer = combineReducers({
  home: home_reducer,
})
