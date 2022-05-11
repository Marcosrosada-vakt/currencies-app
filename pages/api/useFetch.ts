import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import useApi from './useApi';

export function useFetch<T = unknown>(path: string, baseUrl = 'http://localhost:3001') {
  const httpClient = useApi(baseUrl);
  const [data, setData] = useState<T | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    httpClient.get(path)
      .then((response: AxiosResponse) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsFetching(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, error, isFetching };
}
