import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';

export default function PayeeList({ payees }) {
    const [count, setCount] = useState(0);
    const [checked, setChecked] = useState([]);

    function handleToggle() {
        console.log("Toggled")
    }

    return (
        <div className='center'>
          {payees.map(p => (
            <div key={p}>{p}</div>
          ))}
        </div>
    )
}


            // let curr = count
            // setCount(curr + 1)
            // let value = curr
            // let labelId = `checkbox-list-label-${value}`;
            // return (
            //     <ListItem
            //         key={value}
            //         secondaryAction={
            //         <IconButton edge="end" aria-label="comments">
            //             <DeleteIcon />
            //         </IconButton>
            //         }
            //         disablePadding
            //     >
            //         <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
            //         <ListItemIcon>
            //             <Checkbox
            //             edge="start"
            //             checked={checked.indexOf(value) !== -1}
            //             tabIndex={-1}
            //             disableRipple
            //             inputProps={{ 'aria-labelledby': labelId }}
            //             />
            //         </ListItemIcon>
            //         <ListItemText id={labelId} primary={p} />
            //         </ListItemButton>
            //     </ListItem>
            // )