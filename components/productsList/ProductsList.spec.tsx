import React from 'react';
import { render } from '@testing-library/react';
import ProductsList from './ProductsList';

describe('ProductsList Component', () => {
  it('should render loading', () => {
    render(<ProductsList />);


  });
});

