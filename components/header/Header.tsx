import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AttachMoney from '@mui/icons-material/AttachMoney';
import CurrencyPound from '@mui/icons-material/CurrencyPound';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import Euro from '@mui/icons-material/Euro';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import { ListItemIcon, ListItemText } from '@mui/material';


export default function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [currencyList] = useState();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCart = (event: React.MouseEvent<HTMLElement>) => {
    console.log('Open Cart')
  };

  return (
    <Box sx={{ flexGrow: 1, mb: 5 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Marketplace
          </Typography>

          <div>
            <Button
              color="inherit"
              size="small"
              onClick={handleMenu}
              endIcon={<CurrencyPound />}>Currency</Button>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <AttachMoney fontSize="small" />
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{ fontSize: 14 }}>USD</ListItemText>
              </MenuItem>

              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Euro fontSize="small" />
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{ fontSize: 14 }}>EUR</ListItemText>
              </MenuItem>

              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <CurrencyPound fontSize="small" />
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{ fontSize: 14 }}>GBP</ListItemText>
              </MenuItem>
            </Menu>
            <IconButton
              onClick={handleCart}
              color="inherit"
            >
              <ShoppingCart fontSize="small" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
