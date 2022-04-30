import { useState } from 'react';
import { Product } from '../../../interfaces';
import useApi from '../useApi';


interface UseProductMethods {
  getProducts: () => void;
  products: Product[];
}

export const useProduct = (): UseProductMethods => {
  const httpClient = useApi();
  const [products, updateProducts] = useState<Product[]>([]);

  const getProducts = () => {
    async function handleProducts(): Promise<Product> {
      const { data: productsList } = await httpClient.get('/products');

      return productsList;
    }

    handleProducts().then((products: Product) => {
      console.log(products)
      // updateProducts(products);
    })
      .catch((error) => {
        throw error;
      });
  };

  return {
    getProducts,
    products,
  };
};

export default useProduct;
