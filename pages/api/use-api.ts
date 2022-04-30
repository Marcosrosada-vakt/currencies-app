import axios from 'axios';

export const useApi = () => {
  const baseURL = `http://localhost:3000`;

  return axios.create({ baseURL: baseURL });
};

export default useApi;
