import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../../../redux/actions'
import { Grid } from '@mui/material'

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
      <Grid container justifyContent="center">
        <Grid
          item
          md={10}
          sm={10}
          xs={6}
          style={{ marginTop: '10px', marginBottom: '10px' }}
        >
          <Grid container style={{ backgroundColor: '#c7ced4' }}>
            <Grid item md={1} style={{ padding: '10px', marginTop: '2%' }}>
              <img src={item.image} alt="Loading" width="50px" height="50px" />
            </Grid>
            <Grid item md={9}>
              <Grid container direction="column">
                <Grid item>
                  <h5>{item.title}</h5>
                </Grid>
                <Grid item>
                  <h5>{item.description}</h5>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={2}>
              <Grid container direction="column">
                <Grid item>
                  <h3>{`$ ${item.price}`}</h3>
                </Grid>
                <Grid item>
                  {showButton && (
                    <button
                      onClick={() => handleAdd(item)}
                      style={{ backgroundColor: 'transparent' }}
                    >
                      Add to Cart
                    </button>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

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
