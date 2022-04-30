import Divider from '@mui/material/Divider';
import React from 'react';

import Header from '../components/header/Header';
import ProductsList from '../components/productsList/ProductsList';
import SidebarCheckout from '../components/sidebarCheckout/sidebarCheckout';

export default function Home() {
  return (
    <>
      <Header />
      <Divider sx={{ mb: 5 }} />
      <ProductsList />
      <SidebarCheckout />
    </>
  );
}