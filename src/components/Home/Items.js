import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchItems } from '../../redux/actions'
import HomeHeader from './HomeHeader'

const Items = (props) => {
  console.log('Items props =>', props)
  useEffect(() => {
    props.dispatch(fetchItems())
  }, [])
  return (
    <>
      <HomeHeader />
    </>
  )
}

function mapStateToProps(state) {
  return {
    items: state.items,
  }
}

export default connect(mapStateToProps)(Items)
