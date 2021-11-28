import React from 'react'
import { connect } from 'react-redux'
import { removeFromCart } from '../../redux/actions'

const CartCard = (props) => {
  const { title, image } = props.cartItem
  const { cartItem } = props
  // console.log('cartItem ==>', cartItem)
  const handleRemove = (cartItem) => {
    props.dispatch(removeFromCart(cartItem.id, cartItem.price))
  }

  return (
    <>
      <img src={image} alt="Loading" width="100px" height="100px" />
      <h1>{title}</h1>
      <button onClick={() => handleRemove(cartItem)}>Remove from Cart</button>
    </>
  )
}
function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(CartCard)
