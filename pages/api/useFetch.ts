import { useEffect, useState } from 'react';
import useApi from './useApi';

export function useFetch<T = unknown>(path: string, baseUrl = 'http://localhost:3001') {
  const httpClient = useApi(baseUrl);
  const [data, setData] = useState<T | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    httpClient.get(path)
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
