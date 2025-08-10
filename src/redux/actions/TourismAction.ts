import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTourism } from '../../services/api/tourismService';
import { Tourism } from '../types/TourismType';

// export const fetchTourism = createAsyncThunk<Tourism[], string | undefined>(
//   'tourism/fetchTourism',
//   async (searchText, { rejectWithValue }) => {
//     try {
//       const response = await getTourism(searchText);
//       return response;
//     } catch (err: any) {
//       return rejectWithValue(err.message || 'Error fetching tourism');
//     }
//   },
// );

type FetchTourismParams = {
  searchText?: string;
  limit?: number;
  offset?: number;
  append?: boolean;
};

export const fetchTourism = createAsyncThunk<
  { data: Tourism[]; append: boolean },
  FetchTourismParams
>(
  'tourism/fetchTourism',
  async ({ searchText, limit = 10, offset = 0, append = false }, { rejectWithValue }) => {
    try {
      const response = await getTourism(searchText, limit, offset);
      return { data: response || [], append };
    } catch (err: any) {
      return rejectWithValue(err.message || 'Error fetching tourism');
    }
  },
);

