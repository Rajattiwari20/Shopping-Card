//actions types
export const GET_ITEMS = 'GET_ITEMS'
export const GET_CART_ITEMS = 'GET_CART_ITEMS'
export const Add_TO_CART = 'Add_TO_CART'

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

export function addToCart(itemAdded, price) {
  return {
    type: Add_TO_CART,
    itemAdded,
    price,
  }
}

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
