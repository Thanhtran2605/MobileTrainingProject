export const FETCH_TOURISM_REQUEST = 'FETCH_TOURISM_REQUEST';
export const FETCH_TOURISM_SUCCESS = 'FETCH_TOURISM_SUCCESS';
export const FETCH_TOURISM_FAILURE = 'FETCH_TOURISM_FAILURE';

export interface Tourism {
  id: string;
  hinh_thuc_du_lich: string;
  gioi_thieu: number;
  mo_ta: string;
  hinh_anh: string;
}

export interface TourismState {
  loadingInitial: boolean;
  loadingMore: boolean;
  data: Tourism[];
  error: string | null;
}

export interface FetchParams {
  searchText?: string;
  limit?: number;
  offset?: number;
  append?: boolean;
}
