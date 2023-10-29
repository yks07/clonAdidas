import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';

function Header() {
  return (
    <AppBar position="static" style={{ background: 'white', marginBottom: '1em' }}>
      <Toolbar variant="dense">
        <img style={{ height: '6rem' }} src='https://logowik.com/content/uploads/images/adidas-new-20225326.jpg' alt="Logo" />
        <Typography variant="h6" color="black" component="div">
          Calzado
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
