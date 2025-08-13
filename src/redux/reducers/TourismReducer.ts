import {
  FETCH_TOURISM_REQUEST,
  FETCH_TOURISM_SUCCESS,
  FETCH_TOURISM_FAILURE,
} from '../types/TourismType';
import { TourismState } from '../types/TourismType';

const initialState: TourismState = {
  loadingInitial: false,
  loadingMore: false,
  data: [],
  error: null,
};

export const tourismReducer = (
  state = initialState,
  action: any,
): TourismState => {
  switch (action.type) {
    case FETCH_TOURISM_REQUEST:
      if (action.payload.append) {
        return { ...state, loadingMore: true, error: null };
      } else {
        return { ...state, loadingInitial: true, error: null };
      }

    case FETCH_TOURISM_SUCCESS:
      if (action.payload.append) {
        return {
          ...state,
          loadingMore: false,
          data: [...state.data, ...action.payload.data], // merge new data to existing data
          error: null,
        };
      } else {
        // turn off loadingInitial
        return {
          ...state,
          loadingInitial: false,
          data: action.payload.data, // set new data
          error: null,
        };
      }

    case FETCH_TOURISM_FAILURE:
      return {
        ...state,
        loadingInitial: false,
        loadingMore: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
