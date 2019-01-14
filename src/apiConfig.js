import axios from 'axios';

export const AXIOS = axios.create({
  baseURL: 'https://api.unsplash.com/',
  timeout: 60000,
});
