import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
// import { fetchCart } from '../../redux/actions'
import HomeHeader from '../HomeHeader'
import CartCard from '../Cart/CartCard'
const Cart = (props) => {
  // useEffect(() => {
  //   props.dispatch(fetchCart())
  // }, [])
  const cart = props.cart
  const { totalPrice } = props.cart
  console.log('Cart =>', cart)
  return (
    <>
      <HomeHeader />
      <h3>{`CART TOTAL : $ ${totalPrice}`}</h3>
      {cart.cardArray &&
        cart.cardArray.map((cartItem, index) => (
          <CartCard cartItem={cartItem} key={index} />
        ))}
    </>
  )
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(Cart)
