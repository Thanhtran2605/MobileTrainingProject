import { createAsyncThunk, Dispatch } from '@reduxjs/toolkit';
import { getNews } from '../../services/api/newsService';
import {
  News,
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE,
} from '../types/NewsType';

export const fetchNewsRequest = () => {
  return {
    type: FETCH_NEWS_REQUEST,
  };
};

export const fetchNewsSuccess = (data: News[]) => {
  return {
    type: FETCH_NEWS_SUCCESS,
    payload: data,
  };
};

export const fetchNewsFailure = (error: string) => ({
  type: FETCH_NEWS_FAILURE,
  payload: error,
});

export const fetchNews = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchNewsRequest());

    try {
      const response = await getNews();
      dispatch(fetchNewsSuccess(response.data));
    } catch (error: any) {
      dispatch(fetchNewsFailure(error.message));
    }
  };
};
