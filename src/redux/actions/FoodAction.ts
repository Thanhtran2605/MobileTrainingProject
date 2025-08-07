import { createAsyncThunk } from '@reduxjs/toolkit';
import { FoodItem } from '../types/FoodType';
import { getFood } from '../../services/foodsService';

export const fetchFood = createAsyncThunk<FoodItem[]>(
  'food/fetchFood',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getFood();
      return response;
    } catch (err: any) {
      return rejectWithValue(err.message || 'Error fetching food');
    }
  },
);
