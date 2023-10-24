// /** @jsx jsx */
import { jsx } from '@emotion/react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PayeeList from './PayeeList';
import SearchBar from './SearchBar';
import './mainPage.css'
import { Button } from '@mui/material';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

export default function MainPage() {
  const [payees, setPayees] = useState([]);
  const [displayedPayees, setDisplayedPayees] = useState(payees);
  const [searchQuery, setSearchQuery] = useState("");
  const [selected, setSelected] = useState([]);
  const [openDelete, setOpenDelete] = useState(false);

  useEffect(() => {
    axios
    .get('https://pokeapi.co/api/v2/pokemon')
    .then((res) => {
      setPayees(res.data.results.map((p) => p.name))
    })
  }, [])

  useEffect(() => {
    setDisplayedPayees(payees)
  }, [payees])

  useEffect(() => {
    if (searchQuery) {
      let data = payees
      let result = data.filter((d) => d.toLowerCase().includes(searchQuery));
      setDisplayedPayees(result)
    } else {
      setDisplayedPayees(payees)
    }
  }, [searchQuery])

  function removePayee(payee) {
    const index = payees.indexOf(payee)
    let payeesCopy = [...payees]
    payeesCopy.splice(index, 1)
    setPayees(payeesCopy)
  }

  function editPayee(payee, newName) {
    let payeesCopy = [...payees]
    const index = payeesCopy.indexOf(payee)
    payeesCopy[index] = newName
    setPayees(payeesCopy)
  }

  function selectHandler(payee, checked) {
    let selectedCopy = [...selected]
    console.log(checked)
    selectedCopy.push(payee)
    setSelected(selectedCopy)
  }

  function bulkDelete() {
    selected.map((s) => (
      removePayee(s)
    ))
    handleDeleteClose()
    setSelected([])
  }

  function handleDeleteOpen() {
    if (selected.length == 0) {

    } else {
      setOpenDelete(true)
    }
  }

  function handleDeleteClose() {
    setOpenDelete(false)
  }

  return (
    <>
      <Container maxWidth="md">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', boxShadow: '10px 10px 5px grey'}}>
          <div className='inline'>
            <SearchBar setSearchQuery={setSearchQuery}/>
            <Button variant='contained' disabled={selected ? false : true} onClick={handleDeleteOpen}>Bulk Delete</Button>
            <Button variant='contained'>Add Payee</Button>
          </div>
          <PayeeList payees={displayedPayees} deleteHandler={removePayee} editHandler={editPayee} selectHandler={selectHandler}/>
        </Box>
      </Container>
      <Dialog open={openDelete} onClose={handleDeleteClose}>
        <DialogTitle>Bulk Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete {selected.length} payees?
          </DialogContentText>
          <Button onClick={bulkDelete}>Yes</Button>
          <Button onClick={handleDeleteClose}>Cancel</Button>
        </DialogContent>
      </Dialog>
    </>
    
    
  );
}
