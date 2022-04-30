import React from 'react';

import ProductItem from '../productItem/ProductItem';
import { useFetch } from '../../pages/api/useFetch';
import { Product } from '../../interfaces';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export default function ProductsList() {
  const { data: productList, isFetching } = useFetch<Product[]>('/products');

  if (isFetching) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Grid container spacing={2} justifyContent="center">
      {productList.map((product) => (
        <Grid key={product.id} item >
          <ProductItem product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
