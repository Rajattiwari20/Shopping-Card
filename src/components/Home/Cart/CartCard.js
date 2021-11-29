import React from 'react'
import { connect } from 'react-redux'
import { removeFromCart } from '../../../redux/actions'
import { Grid } from '@mui/material'

const CartCard = (props) => {
  const { title, image } = props.cartItem
  const { cartItem } = props
  // console.log('cartItem ==>', cartItem)
  const handleRemove = (cartItem) => {
    props.dispatch(removeFromCart(cartItem.id, cartItem.price))
  }

  return (
    <>
      <Grid container justifyContent="center">
        <Grid
          item
          md={5}
          sm={5}
          xs={5}
          style={{ marginTop: '10px', marginBottom: '10px' }}
        >
          <Grid container style={{ backgroundColor: '#c7ced4' }}>
            <Grid item md={2} style={{ padding: '10px', marginTop: '2%' }}>
              <img src={image} alt="Loading" width="50px" height="50px" />
            </Grid>
            <Grid item md={7} style={{ padding: '5px', marginTop: '1%' }}>
              <h5>{title}</h5>
            </Grid>
            <Grid item md={2} style={{ padding: '5px', marginTop: '2%' }}>
              <button
                onClick={() => handleRemove(cartItem)}
                style={{ backgroundColor: 'transparent' }}
              >
                Remove from Cart
              </button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(CartCard)
