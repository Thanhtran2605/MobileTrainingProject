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
