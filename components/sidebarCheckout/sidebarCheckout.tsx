import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import { useAppContext } from '../../context/app-context';
import Typography from '@mui/material/Typography';
import CheckoutItems from './checkoutItems/checkoutItems';


export default function SidebarCheckout() {
  const { sidebarOpened, setSidebarOpened } = useAppContext();

  const toggleDrawer =
    (open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setSidebarOpened(open);
      };

  return (
    <div>
      <Drawer
        anchor="right"
        open={sidebarOpened}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 350 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1, m: 1 }}>
            Checkout
          </Typography>

          <Divider />

          <Typography variant="body2" component="div" sx={{ flexGrow: 1, m: 1 }}>
            Products
          </Typography>

          <CheckoutItems />
        </Box>
      </Drawer>
    </div>
  );
}
