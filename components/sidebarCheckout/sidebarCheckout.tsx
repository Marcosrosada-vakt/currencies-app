import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import { useAppContext } from '../../context/app-context';


export default function SidebarCheckout() {
  const { sidebarCheckout, setSidebarCheckout } = useAppContext();

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

        setSidebarCheckout(open);
      };

  return (
    <div>
      <Drawer
        anchor="right"
        open={sidebarCheckout}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 350 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          Checkout
          <Divider />
          Products
        </Box>
      </Drawer>
    </div>
  );
}
