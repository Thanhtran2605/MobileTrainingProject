import axiosInstance from '../axiosInstance';

export const getFood = async () => {
  try {
    const response = await axiosInstance.get('/MTQwNTE0NA==?limit=10&offset=0');

    console.log('Dữ liệu trả về:', response.data);
    return response.data;
  } catch (error) {
    console.error('Lỗi gọi API getMonAn:', error);
    return null;
  }
};
