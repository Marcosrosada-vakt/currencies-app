import React, { useState } from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import { useAppContext } from '../../../context/app-context';
import { Product } from '../../../interfaces';
import { handleTotalItemPrice } from '../../../utils/utils';

export default function CheckoutItems() {
  const { checkoutList, setCheckoutList } = useAppContext();
  const [quantitiesList] = useState<number[]>([0, 1, 2, 3, 4, 5, 7, 8, 9, 10]);

  const handleQuantityChange = (product: Product, { target: { value } }: SelectChangeEvent) => {
    const checkoutUpdate = checkoutList.map((item) => {
      if (item.id === product.id) {
        return {
          ...item,
          quantity: parseInt(value),
          total: handleTotalItemPrice(product.price, parseInt(value))
        };
      }

      console.log(item.total)
      return item;
    });

    setCheckoutList([...checkoutUpdate]);
  };

  const handleDeleteItem = (product: Product) => {
    const checklistFiltered = checkoutList.filter((item) => item.id !== product.id);

    setCheckoutList(checklistFiltered);
  };

  return (
    <List sx={{ width: '100%' }}>
      {checkoutList.map((item) => (
        <div key={item.id}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <img alt={item.name} src={item.picture} width="100" />
            </ListItemAvatar>

            <ListItemText sx={{ m: 1 }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center">

                <Typography variant="subtitle1" >
                  {item.name}
                </Typography>

                <Typography variant="subtitle1" >
                  {item.currency} {item.total}
                </Typography>
              </Stack>

              <FormControl sx={{ m: 1 }} size="small">
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}>

                  <Select
                    value={item.quantity.toString()}
                    onChange={(event) => handleQuantityChange(item, event)}
                    sx={{ width: 140, height: 32 }}
                  >
                    {quantitiesList.map((quantity) => (
                      <MenuItem key={quantity} value={quantity}>{quantity}</MenuItem>
                    ))}
                  </Select>
                  <IconButton
                    onClick={() => handleDeleteItem(item)}
                    size="small"
                    color="error">
                    <DeleteIcon />
                  </IconButton>
                </Stack>
              </FormControl>
            </ListItemText>
          </ListItem>
          <Divider />
        </div>
      ))}
    </List>
  );
}
