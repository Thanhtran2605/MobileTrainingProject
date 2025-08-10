import { createSlice } from '@reduxjs/toolkit';
import { fetchTourism } from '../actions/TourismAction';
import { TourismState } from '../types/TourismType';

// const initialState: TourismState = {
//   loading: false,
//   data: [],
//   error: null,
// };

const initialState: TourismState = {
  loadingInitial: false,
  loadingMore: false,
  data: [],
  error: null,
};

const tourismSlice = createSlice({
  name: 'tourism',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTourism.pending, (state, action) => {
        if (action.meta.arg.append) {
          state.loadingMore = true;
        } else {
          state.loadingInitial = true;
        }
        state.error = null;
      })
      .addCase(fetchTourism.fulfilled, (state, action) => {
        if (action.payload.append) {
          state.loadingMore = false;
          state.data = [...state.data, ...action.payload.data];
        } else {
          state.loadingInitial = false;
          state.data = action.payload.data;
        }
        state.error = null;
      });

    // .addCase(fetchTourism.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload as string;
    // });
  },
});

export const tourismReducer = tourismSlice.reducer;
