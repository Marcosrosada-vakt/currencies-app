import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import MenuItem from '@mui/material/MenuItem';
import { Badge, Select } from '@mui/material';

import { useAppContext } from '../../context/app-context';


export default function Header() {
  const { setSidebarOpened, checkoutList } = useAppContext();

  console.log(checkoutList);
  const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];

  const [currency, setCurrency] = useState('EUR');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };

  const handleCart = () => {
    setSidebarOpened(true);
  };

  return (
    <Box sx={{ flexGrow: 1, mb: 5 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Marketplace
          </Typography>

          <div>
            <Select
              value={currency}
              onChange={handleChange}
              variant="standard"
              sx={{ color: '#FFFFFF' }}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>

            <IconButton
              onClick={handleCart}
              color="inherit"
            >
              <Badge badgeContent={checkoutList?.length} color="error">
                <ShoppingCart fontSize="small" />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
