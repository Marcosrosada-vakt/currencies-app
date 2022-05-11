/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import { render, screen } from '@testing-library/react';
import { AppContextProvider, useAppContext } from '../../context/app-context';
import { Product } from '../../interfaces';
import Header from './Header';

jest.mock('../../context/app-context', () => {
  const module = jest.requireActual('../../context/app-context');
  return {
    ...module,
    useAppContext: jest.fn()
  };
});

describe('Header Component', () => {
  it('should render items counter badge', async () => {
    const mock = useAppContext as jest.MockedFunction<typeof useAppContext>;
    mock.mockImplementation(() => {
      return {
        sidebarOpened: true,
        setSidebarOpened: () => { },
        setCheckoutList: () => { },
        checkoutList: [{ quantity: 2 } as Product, { quantity: 2 } as Product]
      };
    });

    render(
      <AppContextProvider>
        <Header />
      </AppContextProvider>);

    const badge = screen.queryByTestId('counter-items');

    expect(badge).toBeInTheDocument();
    expect(screen.getByText(4)).toBeInTheDocument();
  });

  it('should not be in the document', async () => {
    const mock = useAppContext as jest.MockedFunction<typeof useAppContext>;
    mock.mockImplementation(() => {
      return {
        sidebarOpened: true,
        setSidebarOpened: () => { },
        setCheckoutList: () => { },
        checkoutList: []
      };
    });

    render(
      <AppContextProvider>
        <Header />
      </AppContextProvider>);

    const badge = screen.queryByTestId('counter-items');
    expect(badge).not.toBeInTheDocument();
  });
});
