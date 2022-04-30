import { useEffect, useState } from 'react';
import useApi from './useApi';

export function useFetch<T = unknown>(url: string) {
  const httpClient = useApi();
  const [data, setData] = useState<T | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    httpClient.get(url)
      .then((response: any) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  return { data, error, isFetching };
}
