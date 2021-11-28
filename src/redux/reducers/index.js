import { combineReducers } from 'redux'
import {
  GET_ITEMS,
  GET_CART_ITEMS,
  Add_TO_CART,
  REMOVE_FROM_CART,
  // INCREASE_QTY,
} from '../actions'
const initialItemsState = []
export function itemsReducer(state = initialItemsState, actions) {
  switch (actions.type) {
    case GET_ITEMS:
      return actions.items

    default:
      return state
  }
}

const initialCartState = {
  cardArray: [],
  totalItem: 0,
  totalPrice: 0,
}
export function cartReducer(state = initialCartState, actions) {
  switch (actions.type) {
    case GET_CART_ITEMS:
      return actions.cart
    case Add_TO_CART:
      return {
        cardArray: [actions.cartPayload, ...state.cardArray],
        totalItem: state.totalItem + 1,
        totalPrice: state.totalPrice + actions.price,
      }
    case REMOVE_FROM_CART:
      const filteredArray = state.cardArray.filter(
        (item) => item.id != actions.id,
      )
      console.log('filteredArray ==>', filteredArray)
      return {
        cardArray: filteredArray,
        totalItem: state.totalItem - 1,
        totalPrice: state.totalPrice - actions.price,
      }
    // case INCREASE_QTY:
    //   return {
    //     cardArray: [actions.cartPayload, ...state.cardArray],
    //     totalItem: state.totalItem + 1,
    //     totalPrice: state.totalPrice + actions.price,
    //   }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  items: itemsReducer,
  cart: cartReducer,
})

export default rootReducer
