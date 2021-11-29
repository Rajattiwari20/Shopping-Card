import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import HomeHeader from '../HomeHeader'
import ItemCard from './ItemCard'
const Items = (props) => {
  const items = props.items
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
