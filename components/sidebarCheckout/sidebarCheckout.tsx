import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';


export default function SidebarCheckout() {
  const [sidebar, setSidebar] = useState<boolean>(false);

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

        setSidebar(open);
      };

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Abrir</Button>
      <Drawer
        anchor="right"
        open={sidebar}
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
