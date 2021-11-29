import React from 'react'
import { Link } from 'react-router-dom'
import { Grid } from '@mui/material'
import '../common/style.css'
const Header = () => {
  return (
    <div>
      <Grid container justifyContent="center" className="main-container">
        <Grid item md={8} sm={8} xs={8}>
          <Grid
            container
            justifyContent="space-around"
            className="inner-container"
          >
            <Grid item className="item">
              <Link to="/" className="link">
                Home
              </Link>
            </Grid>
            <Grid item className="item">
              <Link to="/profile" className="link">
                Profile
              </Link>
            </Grid>
            <Grid item className="item">
              <Link to="/setting" className="link">
                Setting
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Header
