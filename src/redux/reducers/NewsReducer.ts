import { createSlice } from '@reduxjs/toolkit';
import { NewsState } from '../types/NewsType';
import { fetchNews } from '../actions/NewsAction';

const initialState: NewsState = {
  loading: false,
  data: [],
  error: null,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchNews.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const newsReducer = newsSlice.reducer;
