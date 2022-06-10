import React from 'react'
import {ListItem,ListItemText} from '@mui/material';

function ListElement({todo}) {
  return (
    <ListItem>
      <ListItemText primary={todo}  secondary={`dummy deadline ⏰`} />
  </ListItem>
  )
}

export default ListElement