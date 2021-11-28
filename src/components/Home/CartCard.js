import React from 'react'

const CartCard = (props) => {
  //   console.log('Props =>', props.cartItem.title.title)
  const { title, price } = props.cartItem

  return (
    <>
      <h1>{title}</h1>
      {/* <button onClick={() => handleRemove(item)}>Remove from Cart</button> */}
    </>
  )
}

export default CartCard
