import React from 'react'

import ListItem from './ListItem'

export default function List({ items }) {
  return (
    items.map(item => {
      return <ListItem name={item.name}/>
    })
  )
} 