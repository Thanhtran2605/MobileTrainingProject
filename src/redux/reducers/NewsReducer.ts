import { NewsState } from '../types/NewsType';
import {
  News,
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE,
} from '../types/NewsType';

const initialState: NewsState = {
  loading: false,
  data: [],
  error: null,
};

export const newsReducer = (state = initialState, action: any): NewsState => {
  switch (action.type) {
    case FETCH_NEWS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_NEWS_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_NEWS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
