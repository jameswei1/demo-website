import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import Payee from './Payee';

export default function PayeeList({ payees, deleteHandler, editHandler, selectHandler }) {
    const [checked, setChecked] = useState([]);

    return (
        <List sx={{ width: '100%', bgcolor: '#cfe8fc' }}>
            {payees.map(p => (
                <Payee payee={p} deleteHandler={deleteHandler} editHandler={editHandler} selectHandler={selectHandler}/>
            ))}
        </List>
    )
}