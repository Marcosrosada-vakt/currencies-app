import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import { useAppContext } from '../../../context/app-context';
import { Product } from '../../../interfaces';
import Stack from '@mui/material/Stack';

export default function CheckoutItems() {
  const { checkoutList } = useAppContext();

  console.log(checkoutList);

  return (
    <List sx={{ width: '100%' }}>
      {checkoutList.map((item) => (
        <div key={item.id}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center">

                <Typography variant="subtitle1" >
                  {item.name}
                </Typography>

                <Stack
                  direction="row"
                  justifyContent="left"
                  alignItems="center"
                  spacing={1}>

                  <Typography variant="subtitle1" >
                    {item.currency} {item.price * item.quantity}
                  </Typography>
                </Stack>
              </Stack>
            </ListItemText>
          </ListItem>
          <Divider variant="inset" component="li" />
        </div>
      ))}
    </List>
  );
}
