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

export default function Payee({ payee, deleteHandler, editHandler }) {
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [newName, setNewName] = useState(""); 

  function handleDeleteOpen() {
    setOpenDelete(true)
  }

  function handleDeleteClose() {
    setOpenDelete(false)
  }

  function handleDelete() {
    console.log('axios.delete(https://pokeapi.co/api/v2/pokemon/'+payee+')')
    deleteHandler(payee)
    setOpenDelete(false)
  }

  function handleEdit() {
    console.log('axios.post(https://pokeapi.co/api/v2/pokemon/'+payee+', {name: '+newName+'})')
    editHandler(payee, newName)
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
            onChange={(e) => {
              setNewName(e.target.value)
            }}
          />
          <Button onClick={handleEdit}>Done</Button>
          <Button onClick={handleEditClose}>Cancel</Button>
        </DialogContent>
      </Dialog>
    </>
  )
}
