import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://congdulieu.vn/api/dataset',
  auth: {
    username: 'apitest1022dn',
    password: 'IOC@1022#',
  },
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;