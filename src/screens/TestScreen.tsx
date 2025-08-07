import axios from 'axios';

const fetchMonAn = async () => {
  try {
    const response = await axios.get(
      'https://congdulieu.vn/api/dataset/MTQwNTE0NA==?limit=10&offset=0',
      {
        auth: {
          username: 'apitest1022dn',
          password: 'IOC@1022#',
        },
      }
    );

    console.log('Dữ liệu trả về:', response.data);
    return response.data; 
  } catch (error) {
    console.error('Lỗi gọi API getMonAn:', error);
    return null;
  }
};


