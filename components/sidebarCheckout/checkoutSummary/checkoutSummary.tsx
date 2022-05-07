import React, { useEffect, useState } from 'react';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


import { useAppContext } from '../../../context/app-context';
import { useFetch } from '../../../pages/api/useFetch';
import { Currency, Exchange } from '../../../interfaces';

export default function CheckoutSummary() {
  const { checkoutList } = useAppContext();
  const { data: currenciesAPI, isFetching } = useFetch<Currency>('http://apilayer.net/api/live?access_key=ad30c625b3f869131ea1d1b785db15fc&currencies=EUR,GBP,CAD,PLN&source=USD&format=1');
  const [exchange, setExchange] = useState<Exchange>({ currency: '', exchange: 1 });
  const [exchangesList, setExchangesList] = useState<Exchange[]>([]);
  const [total, settotal] = useState<number>(0);

  useEffect(() => {
    if (!isFetching) {
      const currenciesQuotes = Object.keys(currenciesAPI.quotes).map((currency) => {
        return {
          currency: currency.substring(3, 6),
          exchange: currenciesAPI.quotes[currency]
        };
      });

      const sourceExchange = { currency: currenciesAPI.source, exchange: 1 };

      setExchange(sourceExchange);
      setExchangesList([{ ...sourceExchange }, ...currenciesQuotes]);
    }
  }, [currenciesAPI, isFetching]);

  useEffect(() => {
    const total = checkoutList.reduce<number>((acc, item) => {
      return acc + item.total;
    }, 0);

    settotal(total * exchange.exchange);

  }, [checkoutList, exchange]);

  const handleExchangeChange = ({ target: { value } }: SelectChangeEvent) => {
    const exchange = exchangesList.find((exchange) => exchange.currency === value);

    setExchange(exchange);
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center">

      <Select
        value={exchange.currency}
        onChange={handleExchangeChange}
        sx={{ width: 140, height: 32 }}
      >
        {exchangesList.map((exc) => (
          <MenuItem key={exc.currency} value={exc.currency}>{exc.currency}</MenuItem>
        ))}
      </Select>

      <Stack
        direction="row"
        justifyContent="left"
        alignItems="center"
        spacing={1}>

        <Typography variant="subtitle1" >
          Total Source {total}
        </Typography>
      </Stack>
    </Stack>
  );
}