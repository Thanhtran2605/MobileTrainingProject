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
