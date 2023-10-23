import { TextField } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import React from 'react'
import { useRef } from 'react'

export default function SearchBar({ setSearchQuery }) {
    const currentQuery = useRef()

    function setQeury() {
        const query = currentQuery.current.value
        console.log(query)
    }

    return (
        <form className='center'>
            <TextField
                id="search-bar"
                ref={currentQuery}
                className="text"
                onInput={(e) => {
                    setSearchQuery(e.target.value);
                    console.log(e.target.value)
                }}
                label="Enter a payee name"
                variant="outlined"
                placeholder="Search..."
                size="small"
            />
        </form>
  )
}
