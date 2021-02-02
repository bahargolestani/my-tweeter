import axios from 'axios';

export const getaxiosInstance = () => {
  return axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
      all: {
        API_KEY: 'jjsggyhkokjssgpejgl',
      },
    },
  });
};
