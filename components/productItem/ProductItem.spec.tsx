import React from 'react';
import { render, screen, getByRole, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AppContextProvider } from '../../context/app-context';

import { Product } from '../../interfaces';
import ProductItem from './ProductItem';

const mockFunction = jest.fn();

jest.mock('../../context/app-context', () => {
  const module = jest.requireActual('../../context/app-context');
  return {
    ...module,
    useAppContext: () => (
      {
        checkoutList: [],
        setCheckoutList: mockFunction
      }
    )
  };
});

describe('ProductItem Component', () => {
  it('should add items in the cart', async () => {
    render(
      <AppContextProvider>
        <ProductItem product={{} as Product} />
      </AppContextProvider>
    );

    const addItemButton = screen.getByTestId('button-add-item');

    expect(addItemButton).toBeDisabled();

    const selectElement = screen.getByTestId('select-quantity');
    userEvent.click(getByRole(selectElement, 'button'));

    await waitFor(() => userEvent.click(screen.getByText('2')));

    expect(addItemButton).not.toBeDisabled();

    fireEvent.click(addItemButton);

    expect(mockFunction).toHaveBeenCalled();
  });
});

