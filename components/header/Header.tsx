import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';

import { useAppContext } from '../../context/app-context';

export default function Header() {
  const { setSidebarOpened, checkoutList } = useAppContext();
  const [counterItems, setCounterItems] = useState<number | null>(null);

  useEffect(() => {
    if (!checkoutList) {
      return;
    }

    const totalItems = checkoutList.reduce<number>((acc, item) => {
      return acc + item.quantity;
    }, 0);

    setCounterItems(totalItems);
  }, [checkoutList, setCounterItems]);

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
            <IconButton
              onClick={handleCart}
              color="inherit"
            >
              {counterItems ?
                (
                  <Badge data-testid="counter-items" badgeContent={counterItems} color="error">
                    <ShoppingCart fontSize="small" />
                  </Badge>
                ) :
                (
                  <ShoppingCart fontSize="small" />
                )}
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
