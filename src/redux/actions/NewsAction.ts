import { createAsyncThunk } from '@reduxjs/toolkit';
import {getNews} from '../../services/newsService';
import { News } from '../types/NewsType';

export const fetchNews = createAsyncThunk<News[]>(
  'news/fetchNews',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getNews();
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.message || 'Error fetching news');
    }
  },
);
