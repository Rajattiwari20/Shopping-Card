//actions types
export const GET_ITEMS = 'GET_ITEMS'
export const GET_CART_ITEMS = 'GET_CART_ITEMS'
export const Add_TO_CART = 'Add_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const SET_BUDGET = 'SET_BUDGET'
// export const INCREASE_QTY = 'INCREASE_QTY'

//action creators
export function getItems(items) {
  return {
    type: GET_ITEMS,
    items,
  }
}

export function getCartItems(cart) {
  return {
    type: GET_CART_ITEMS,
    cart,
  }
}

export function addToCart(cartPayload, price) {
  return {
    type: Add_TO_CART,
    cartPayload,
    price,
  }
}

export function removeFromCart(id, price) {
  return {
    type: REMOVE_FROM_CART,
    id,
    price,
  }
}

export function getBudget(budgetPrice) {
  return {
    type: SET_BUDGET,
    budgetPrice,
  }
}

// export function increaseItemQty(price, cartPayload) {
//   return { type: INCREASE_QTY, price, cartPayload }
// }

//using redux thunk to make api call (redux thunk helps us with dispatch function)

export function fetchItems() {
  const url = 'https://fakestoreapi.com/products'
  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((item) => {
        // console.log('Items =>', item)
        dispatch(getItems(item))
      })
  }
}

export function fetchCart() {
  const url = 'https://fakestoreapi.com/carts'
  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((item) => {
        console.log('Items =>', item)
        dispatch(getCartItems(item))
      })
  }
}
