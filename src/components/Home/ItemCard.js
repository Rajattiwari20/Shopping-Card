import React from 'react'

const ItemCard = (props) => {
  console.log('Props Item card =>', props.item)
  const { item } = props
  return (
    <>
      <h3>{`Id : ${item.id}`}</h3>
      <img src={item.image} alt="Loading" width="100px" height="100px" />
      <h3>{`Title : ${item.title}`}</h3>
      <h3>{`Description : ${item.description}`}</h3>
      <h3>{`Rating : ${item.rating.rate}`}</h3>
      <h3>{`Price : ${item.price}`}</h3>
    </>
  )
}

export default ItemCard
