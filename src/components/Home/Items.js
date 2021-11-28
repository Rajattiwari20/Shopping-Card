import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchItems } from '../../redux/actions'
import HomeHeader from './HomeHeader'
import ItemCard from './ItemCard'

const Items = (props) => {
  useEffect(() => {
    props.dispatch(fetchItems())
  }, [])
  const items = props.items
  // console.log('Items => ', items)
  return (
    <>
      <HomeHeader />
      {items &&
        items.map((item, index) => <ItemCard item={item} key={index} />)}
    </>
  )
}

function mapStateToProps(state) {
  return {
    items: state.items,
  }
}

export default connect(mapStateToProps)(Items)
