// /** @jsx jsx */
import { jsx } from '@emotion/react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PayeeList from './PayeeList';
import SearchBar from './SearchBar';
import './mainPage.css'

export default function MainPage() {
  const [payees, setPayees] = useState([]);
  const [displayedPayees, setDisplayedPayees] = useState(payees);
  const [searchQuery, setSearchQuery] = useState("");

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

  return (
    <Container maxWidth="md">
      <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', border: 'solid'}}>
        <SearchBar setSearchQuery={setSearchQuery}/>
        <PayeeList payees={displayedPayees} deleteHandler={removePayee} editHandler={editPayee}/>
      </Box>
    </Container>
  );
}
