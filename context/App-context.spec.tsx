import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';

import { Product } from '../interfaces';
import { AppContextProvider, useAppContext } from './app-context';


describe('App Context', () => {
  it('should add item to checkout list', () => {
    const wrapper = ({ children }) => <AppContextProvider>{children}</AppContextProvider>;
    const { result } = renderHook(() => useAppContext(), { wrapper });

    expect(result.current.checkoutList).toHaveLength(0);

    act(() => {
      result.current.setCheckoutList([{} as Product]);
    });

    expect(result.current.checkoutList).toHaveLength(1);
  });
});