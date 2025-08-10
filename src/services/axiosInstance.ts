import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://congdulieu.vn/api/dataset',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;