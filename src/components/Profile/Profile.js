import React from 'react'
import { Grid } from '@mui/material'
import { data } from '../../common/userData'

const Profile = () => {
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item md={8}>
          <Grid container style={{ marginTop: '50px' }}>
            <Grid item md={4}>
              <img src={data.img} />
            </Grid>
            <Grid item md={3}>
              <Grid container justifyContent="center" direction="column ">
                <Grid>
                  <h2 style={{ color: '#5474ab' }}>{data.name}</h2>
                </Grid>
                <Grid item>
                  <h2 style={{ color: '#5474ab' }}>{data.age}</h2>
                </Grid>
                <Grid item>
                  <h2 style={{ color: '#5474ab' }}>{data.gender}</h2>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={5}>
              <Grid container justifyContent="center" direction="column ">
                <Grid>
                  <h2 style={{ color: '#5474ab' }}>{data.address}</h2>
                </Grid>
                <Grid item>
                  <h2
                    style={{ color: '#5474ab' }}
                  >{`Pin Code : ${data.pincode}`}</h2>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Profile
