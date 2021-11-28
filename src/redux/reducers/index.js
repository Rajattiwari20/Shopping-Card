import { combineReducers } from 'redux'

const initialItemsState = []
export function itemsReducer(state = initialItemsState, actions) {
  switch (actions.type) {
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
