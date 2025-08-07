import axios from 'axios';

export const getNews = () => {
  return axios.get('https://jsonplaceholder.typicode.com/posts');
};
