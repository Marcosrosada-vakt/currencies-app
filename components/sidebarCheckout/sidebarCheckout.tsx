import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import { useAppContext } from '../../context/app-context';
import Typography from '@mui/material/Typography';
import CheckoutItems from './checkoutItems/checkoutItems';
import IconButton from '@mui/material/IconButton';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import CheckoutSummary from './checkoutSummary/checkoutSummary';
import Paper from '@mui/material/Paper';


export default function SidebarCheckout() {
  const { sidebarOpened, setSidebarOpened, checkoutList } = useAppContext();

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
          onKeyDown={toggleDrawer(false)}

        >
          <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1, m: 1 }}>
            Cart
            <IconButton
              size="small">
              <ShoppingCart />
            </IconButton>
          </Typography>

          <Divider />

          {checkoutList.length === 0 ?
            (
              <Paper
                sx={{ display: 'flex', justifyContent: 'center', m: 5, p: 2, }}
                elevation={2}>
                <Typography variant="subtitle1" >
                  Cart is empty
                </Typography>
              </Paper>
            ) :
            (
              <>
                <CheckoutItems />
                <CheckoutSummary />
              </>
            )
          }
        </Box>
      </Drawer>
    </div>
  );
}
