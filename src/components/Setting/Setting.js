import React, { useState } from 'react'
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
      <h1>Please set your Budget</h1>
      <input onChange={(e) => handleChange(e)} />
      <button onClick={() => handleClick(budget)}>Set Budget</button>
    </div>
  )
}
function mapStateToProps(state) {
  return {
    state,
  }
}
export default connect(mapStateToProps)(Setting)
