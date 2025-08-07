export interface News {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface NewsState {
  loading: boolean;
  data: News[];
  error: string | null;
}
