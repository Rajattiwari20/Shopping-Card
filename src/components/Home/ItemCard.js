import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addToCart, increaseItemQty } from '../../redux/actions'

const ItemCard = (props) => {
  const { item } = props
  // const [quantity, setQuantity] = useState(0)
  // item.quantity = quantity
  const [showButton, setShowButton] = useState(true)
  const handleAdd = (item) => {
    // setQuantity(quantity + 1)
    const cartPayload = {
      title: item.title,
      image: item.image,
      id: item.id,
      price: item.price,
      // quantity: item.quantity,
    }
    props.dispatch(addToCart(cartPayload, item.price))
    setShowButton(false)
  }

  // const increaseQuantity = (item) => {
  //   setQuantity(quantity + 1)
  //   props.dispatch(increaseItemQty(item.price))
  // }
  return (
    <>
      <h3>{`Id : ${item.id}`}</h3>
      <img src={item.image} alt="Loading" width="100px" height="100px" />
      <h3>{`Title : ${item.title}`}</h3>
      <h3>{`Description : ${item.description}`}</h3>
      <h3>{`Rating : ${item.rating.rate}`}</h3>
      <h3>{`Price : ${item.price}`}</h3>
      {showButton && (
        <button onClick={() => handleAdd(item)}>Add to Cart</button>
      )}

      {/* {item.quantity === 0 ? (
        <button onClick={() => handleAdd(item)}>Add to Cart</button>
      ) : (
        <button onClick={() => increaseQuantity(item)}>
          {`Increase Quantity ${quantity}`}
        </button>
      )} */}
    </>
  )
}
function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}
export default connect(mapStateToProps)(ItemCard)
