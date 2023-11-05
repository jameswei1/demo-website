import React from 'react'
import { useState, useEffect } from 'react';
import './Ribbon.css';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import axios from 'axios';

export default function Ribbon() {
  const [publicIp, setPublicIP] = useState("")
  useEffect(() => {
    axios
    .get('https://api.ipify.org?format=json')
    .then((res) => {
      setPublicIP(res.data.ip)
    })
  }, [])

  return (
    <Box display="flex" justifyContent="flex-end" alignItems="flex-end" >
        <AppBar position='static'>
            <Toolbar display="flex" justifyContent="flex-end">
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} paddingLeft={2}>
                    James Wei - Flipp Takehome Assessment - Host's Public IP Address: {publicIp}
                </Typography>
                <Button variant='contained'>Logout</Button>
            </Toolbar>
        </AppBar>
    </Box>
  )
}
