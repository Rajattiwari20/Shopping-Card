//actions types
export const GET_ITEMS = 'GET_ITEMS'

//action creators
export function getItems(items) {
  return {
    type: GET_ITEMS,
    items,
  }
}

//using redux thunk to make api call (redux thunk helps us with dispatch function)

export function fetchItems() {
  const url = 'https://fakestoreapi.com/products'
  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((item) => {
        console.log('Items =>', item)
        dispatch(getItems(item))
      })
  }
}
