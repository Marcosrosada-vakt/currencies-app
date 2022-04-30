import axios from 'axios';

export const useApi = () => {
  const baseURL = 'http://localhost:3001';

  return axios.create({ baseURL: baseURL });
};

export default useApi;
