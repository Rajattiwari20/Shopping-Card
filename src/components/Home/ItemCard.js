import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../../redux/actions'

const ItemCard = (props) => {
  const { item } = props
  const handleAdd = (item) => {
    props.dispatch(addToCart(item))
  }
  return (
    <>
      <h3>{`Id : ${item.id}`}</h3>
      <img src={item.image} alt="Loading" width="100px" height="100px" />
      <h3>{`Title : ${item.title}`}</h3>
      <h3>{`Description : ${item.description}`}</h3>
      <h3>{`Rating : ${item.rating.rate}`}</h3>
      <h3>{`Price : ${item.price}`}</h3>
      <button onClick={() => handleAdd(item)}>Add to Cart</button>
    </>
  )
}
function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}
export default connect(mapStateToProps)(ItemCard)
