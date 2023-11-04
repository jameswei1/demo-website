import React from 'react'
import './Ribbon.css';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'

export default function Ribbon() {
  return (
    <Box display="flex" justifyContent="flex-end" alignItems="flex-end" >
        <AppBar position='static'>
            <Toolbar display="flex" justifyContent="flex-end">
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} paddingLeft={2}>
                    James Wei - Flipp Takehome Assessment Edited
                </Typography>
                <Button variant='contained'>Logout</Button>
            </Toolbar>
        </AppBar>
    </Box>
  )
}
