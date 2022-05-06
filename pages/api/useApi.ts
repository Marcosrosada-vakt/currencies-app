import axios from 'axios';

export const useApi = (baseURL: string) => {

  return axios.create({ baseURL: baseURL });
};

export default useApi;
