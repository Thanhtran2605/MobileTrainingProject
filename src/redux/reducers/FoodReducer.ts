import { createSlice } from '@reduxjs/toolkit';
import { fetchFood } from '../actions/FoodAction';
import { FoodState } from '../types/FoodType';

const initialState: FoodState = {
  loading: false,
  data: [],
  error: null,
};

const foodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchFood.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFood.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchFood.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const foodReducer = foodSlice.reducer;
