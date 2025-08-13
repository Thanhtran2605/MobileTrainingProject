import {
  FETCH_FOOD_REQUEST,
  FETCH_FOOD_SUCCESS,
  FETCH_FOOD_FAILURE,
} from '../types/FoodType';
import { FoodState } from '../types/FoodType';

const initialState: FoodState = {
  loading: false,
  data: [],
  error: null,
};

export const foodReducer = (state = initialState, action: any): FoodState => {
  switch (action.type) {
    case FETCH_FOOD_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_FOOD_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_FOOD_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
