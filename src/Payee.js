import { useState } from 'react'

import ListItem from '@mui/material/ListItem';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';


export default function Payee({ payee }) {
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  function handleDeleteOpen() {
    setOpenDelete(true)
  }

  function handleDeleteClose() {
    setOpenDelete(false)
  }

  function handleDelete() {
    // axios.delete('https://pokeapi.co/api/v2/pokemon/'+payee)
    console.log('https://pokeapi.co/api/v2/pokemon/'+payee)

  }

  function handleEdit() {
    payee = "james"
    setOpenEdit(false)
  }

  function handleEditOpen() {
    setOpenEdit(true)
  }

  function handleEditClose() {
    setOpenEdit(false)
  }

  return (
    <>
      <ListItem
        secondaryAction={
          <>
            <IconButton onClick={handleDeleteOpen}>
              <DeleteIcon/>
            </IconButton>
            <IconButton onClick={handleEditOpen}>
              <EditIcon/>
            </IconButton>
          </>
        }
      >
        {payee}
      </ListItem>
      <Dialog open={openDelete} onClose={handleDeleteClose}>
        <DialogTitle>Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete {payee}?
          </DialogContentText>
          <Button onClick={handleDelete}>Yes</Button>
          <Button onClick={handleDeleteClose}>Cancel</Button>
        </DialogContent>
      </Dialog>
      <Dialog open={openEdit} onClose={handleDeleteClose}>
        <DialogTitle>Edit</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter new name for {payee}:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            fullWidth
            variant="standard"
          />
          <Button onClick={handleEdit}>Done</Button>
          <Button onClick={handleEditClose}>Cancel</Button>
        </DialogContent>
      </Dialog>
    </>
  )
}
