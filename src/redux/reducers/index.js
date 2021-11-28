import { combineReducers } from 'redux'
import { GET_ITEMS } from '../actions'
const initialItemsState = []
export function itemsReducer(state = initialItemsState, actions) {
  switch (actions.type) {
    case GET_ITEMS:
      return actions.items

    default:
      return state
  }
}

const initialCartState = []
export function cartReducer(state = initialCartState, actions) {
  switch (actions.type) {
    default:
      return state
  }
}

const rootReducer = combineReducers({
  items: itemsReducer,
  cart: cartReducer,
})

export default rootReducer
