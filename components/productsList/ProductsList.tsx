import React from 'react';

import ProductItem from '../productItem/ProductItem';
import { useFetch } from '../../pages/api/useFetch';
import { Product } from '../../interfaces';
import Grid from '@mui/material/Grid';

export default function ProductsList() {
  const { data: productList, isFetching } = useFetch<Product[]>('/products');

  if (isFetching) {
    return null;
  }

  console.log(productList);

  return (
    <Grid container spacing={2}>
      {productList.map((product) => (
        <Grid key={product.id} item xs={4}>
          <ProductItem product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
