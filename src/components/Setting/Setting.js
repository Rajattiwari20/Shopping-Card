import React, { useState } from 'react'
import { Paper, Grid, TextField, Button } from '@mui/material'
import { connect } from 'react-redux'
import { getBudget } from '../../redux/actions'

const Setting = (props) => {
  const [budget, setBudget] = useState(0)

  const handleChange = (e) => {
    setBudget(e.target.value)
  }

  const handleClick = (budget) => {
    props.dispatch(getBudget(budget))
    console.log('budget =>', budget)
  }
  return (
    <div>
      <Grid container justifyContent="center" style={{ marginTop: '100px' }}>
        <Paper elevation={3} style={{ minWidth: '60%' }}>
          <Grid
            item
            md={12}
            style={{ minHeight: '50vh', marginTop: '100px', marginLeft: '30%' }}
          >
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <h1 style={{ color: '#5474ab' }}>Please set your Budget</h1>
              </Grid>
              <Grid item md={6}>
                <TextField
                  id="outlined-basic"
                  label="Amount"
                  variant="outlined"
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
              <Grid item>
                <Button variant="contained" onClick={() => handleClick(budget)}>
                  Set Budget
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </div>
  )
}
function mapStateToProps(state) {
  return {
    state,
  }
}
export default connect(mapStateToProps)(Setting)
