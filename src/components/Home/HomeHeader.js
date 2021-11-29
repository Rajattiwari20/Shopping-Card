import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Grid } from '@mui/material'

const HomeHeader = (props) => {
  const { totalItem } = props.cart
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item md={6} xm={6} sm={3}>
          <Grid
            container
            justifyContent="space-around"
            className="home-header-inner-container"
          >
            <Grid item className="item">
              <Link to="/" className="link">
                Items
              </Link>
            </Grid>
            <Grid item className="item">
              <Link to="/cart" className="link">{`Cart ${totalItem}`}</Link>
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

export default connect(mapStateToProps)(HomeHeader)
