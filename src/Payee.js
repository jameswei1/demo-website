import React from 'react'

import ListItem from '@mui/material/ListItem';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

export default function Payee({ payee }) {
  return (
    <ListItem
      secondaryAction={
        <>
          <IconButton>
            <DeleteIcon/>
          </IconButton>
          <IconButton>
            <EditIcon/>
          </IconButton>
        </>
      }
    >
      {payee.name}
      {payee.url}
    </ListItem>
    // <div>{payee}</div>
  )
}
