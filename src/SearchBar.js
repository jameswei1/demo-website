import { TextField } from '@mui/material'

import React from 'react'

export default function SearchBar({ setSearchQuery }) {
    return (
        <form className='center'>
            <TextField
                id="search-bar"
                className="text"
                onInput={(e) => {
                    setSearchQuery(e.target.value);
                }}
                label="Search payees..."
                variant="outlined"
                placeholder="Search..."
                size="small"
            />
        </form>
  )
}
