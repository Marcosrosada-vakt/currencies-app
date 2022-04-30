import Divider from '@mui/material/Divider';
import React from 'react';

import { AppContextProvider } from '../context/app-context';
import Header from '../components/header/Header';
import ProductsList from '../components/productsList/ProductsList';
import SidebarCheckout from '../components/sidebarCheckout/sidebarCheckout';

export default function Home() {
  return (
    <AppContextProvider>
      <Header />
      <Divider sx={{ mb: 5 }} />
      <ProductsList />
      <SidebarCheckout />
    </AppContextProvider>
  );
}