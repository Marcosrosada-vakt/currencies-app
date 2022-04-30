import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

import { Product } from '../../interfaces';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useAppContext } from '../../context/app-context';

interface ProductItemProps {
  product: Product;
}

export default function ProductItem({ product }: ProductItemProps) {
  const { setCheckoutList, checkoutList } = useAppContext();

  const handleAddItem = () => {
    setCheckoutList([...checkoutList, product]);
  };

  return (
    <Card sx={{ minWidth: 250, maxWidth: 250 }}>
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
              {product.currency}{product.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              per {product.type}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>

      <CardActions disableSpacing>
        <Button variant="outlined" size="small" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="contained" size="small" endIcon={<AddIcon />} sx={{ ml: 'auto' }} onClick={handleAddItem}>
          Add
        </Button>
      </CardActions>

    </Card>
  );
}
