import axiosInstance from '../axiosInstance';

export const getTourism = async (
  searchText?: string,
  limit = 10,
  offset = 0,
) => {
  try {
    const baseUrl = `/MTU3MTQxNQ==?limit=${limit}&offset=${offset}`;
    const url =
      searchText && searchText.trim()
        ? `${baseUrl}&q=hinh_thuc_du_lich:${encodeURIComponent(searchText)}`
        : baseUrl;

    const response = await axiosInstance.get(url);

    return response.data;
  } catch (error) {
    console.error('Lỗi gọi API getDuLich:', error);
    return null;
  }
};
