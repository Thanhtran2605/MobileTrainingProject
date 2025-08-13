export const FETCH_FOOD_REQUEST = 'FETCH_FOOD_REQUEST';
export const FETCH_FOOD_SUCCESS = 'FETCH_FOOD_SUCCESS';
export const FETCH_FOOD_FAILURE = 'FETCH_FOOD_FAILURE';

export interface FoodItem {
  id: string;
  ten: string;
  dia_chi: string;
  hinh_anh: string;
  kinh_do: string;
  vi_do: string;
}

// id, ten, dia_chi, hinh_anh

export interface FoodState {
  loading: boolean;
  data: FoodItem[];
  error: string | null;
}
