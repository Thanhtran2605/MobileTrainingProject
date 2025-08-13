import { Dispatch } from 'redux';
import { getTourism } from '../../services/api/tourismService';
import { Tourism, FetchParams } from '../types/TourismType';
import {
  FETCH_TOURISM_REQUEST,
  FETCH_TOURISM_SUCCESS,
  FETCH_TOURISM_FAILURE,
} from '../types/TourismType';

export const fetchTourismRequest = (append: boolean) => ({
  type: FETCH_TOURISM_REQUEST,
  payload: { append },
});

export const fetchTourismSuccess = (data: Tourism[], append: boolean) => ({
  type: FETCH_TOURISM_SUCCESS,
  payload: { data, append },
});

export const fetchTourismFailure = (error: string) => ({
  type: FETCH_TOURISM_FAILURE,
  payload: error,
});

export const fetchTourism = ({
  searchText,
  limit = 10,
  offset = 0,
  append = false,
}: FetchParams) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchTourismRequest(append));
    try {
      const response = await getTourism(searchText, limit, offset);
      dispatch(fetchTourismSuccess(response || [], append));
    } catch (err: any) {
      dispatch(fetchTourismFailure(err.message || 'Error fetching tourism'));
    }
  };
};
