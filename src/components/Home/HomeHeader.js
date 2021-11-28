import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const HomeHeader = (props) => {
  const { totalItem } = props.cart
  return (
    <>
      <Link to="/items">Items</Link>
      <Link to="/cart">{`Cart ${totalItem}`}</Link>
    </>
  )
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(HomeHeader)
