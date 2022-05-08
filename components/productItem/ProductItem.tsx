import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

import { useAppContext } from '../../context/app-context';
import { Product } from '../../interfaces';
import { handleTotalItemPrice } from '../../utils/utils';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} sx={{ mt: 6 }} />;
});

interface ProductItemProps {
  product: Product;
}

export default function ProductItem({ product }: ProductItemProps) {
  const { setCheckoutList, checkoutList } = useAppContext();
  const [quantity, setQuantity] = useState<number>(0);
  const quantitiesList = Array.from(Array(6).keys());
  const [open, setOpen] = useState(false);

  const handleQuantityChange = ({ target: { value } }: SelectChangeEvent) => {
    if (!value) {
      const checklistFiltered = checkoutList.filter((item) => item.id !== product.id);

      setCheckoutList(checklistFiltered);
    }

    setQuantity(parseInt(value));
  };

  const handleAddItem = () => {
    setOpen(true);

    const matchItem = checkoutList.find((item) => item.id === product.id);

    if (matchItem) {
      const checklistUpdated = checkoutList.map((item) => {
        if (item.id === product.id) {
          item.quantity += quantity;
          item.total = handleTotalItemPrice(item.price, item.quantity);
          return item;
        }

        return item;
      });

      setCheckoutList([...checklistUpdated]);
      return;
    }

    setCheckoutList([
      ...checkoutList,
      {
        ...product,
        quantity: quantity,
        total: handleTotalItemPrice(product.price, quantity)
      }
    ]);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };


  return (
    <Card sx={{ minWidth: 250, maxWidth: 250 }}>
      <Snackbar
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Item added!
        </Alert>
      </Snackbar>
      <CardMedia
        component="img"
        height="120"
        image={product.picture}
        alt={product.name}
      />
      <CardContent sx={{ p: 1 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center">

          <Typography variant="subtitle1" >
            {product.name}
          </Typography>

          <Stack
            direction="row"
            justifyContent="left"
            alignItems="center"
            spacing={1}>

            <Typography variant="subtitle1" >
              {product.currency} {product.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              per {product.type}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>

      <CardActions>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={1}>

            <Select
              value={quantity.toString()}
              onChange={handleQuantityChange}
              sx={{ width: 140, height: 32 }}
            >
              {quantitiesList.map((quantity) => (
                <MenuItem key={quantity} value={quantity}>{quantity}</MenuItem>
              ))}
            </Select>
            <Button
              variant="contained"
              size="small"
              endIcon={<ShoppingCart />}
              onClick={handleAddItem}
              disabled={!quantity}>
              Add
            </Button>
          </Stack>
        </FormControl>
      </CardActions>
    </Card>
  );
}
