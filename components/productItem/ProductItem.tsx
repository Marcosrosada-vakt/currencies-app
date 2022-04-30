import * as React from 'react';
import { styled } from '@mui/material/styles';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Product } from '../../interfaces';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

interface ProductItemProps {
  product: Product;
}

export default function ProductItem({ product }: ProductItemProps) {
  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 400,
        flexGrow: 1,
      }}
    >
      <Grid container >
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src="/static/images/grid/complex.jpg" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" >
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" >
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                Remove
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" >
              {product.currency}{product.price}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
