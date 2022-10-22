import { AppBar, Box, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router';
const NavBar = () => {
    const navigate = useNavigate()
  return (
    <>
    <Box sx={{ flexGrow: 1, display:'flex' }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>
          <Stack direction='row' sx={{marginLeft:'auto'}}>
          <Button color='inherit'onClick={()=>{
                navigate('/home')
          }}>Home</Button>
          <Button color='inherit' onClick={()=>{
            navigate('/about2')
          }}>About</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  )
}

export default NavBar
