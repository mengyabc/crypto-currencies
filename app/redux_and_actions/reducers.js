import { combineReducers } from 'redux'

const init_home = () => ({})

function home_reducer(state = init_home(), action) {
  switch (action.type) {
  default:
    return state
  }
}

export const rootReducer = combineReducers({
  home: home_reducer,
})
