import React from 'react'
import { Link } from 'react-router-dom'

const HomeHeader = () => {
  return (
    <>
      <Link to="/items">Items</Link>
      <Link to="/cart">Cart</Link>
    </>
  )
}

export default HomeHeader
