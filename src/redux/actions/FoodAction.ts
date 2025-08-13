import { Dispatch } from 'redux';
import { getFood } from '../../services/api/foodsService';
import { FoodItem } from '../types/FoodType';
import {
  FETCH_FOOD_REQUEST,
  FETCH_FOOD_SUCCESS,
  FETCH_FOOD_FAILURE,
} from '../types/FoodType';

export const fetchFoodRequest = () => ({
  type: FETCH_FOOD_REQUEST,
});

export const fetchFoodSuccess = (data: FoodItem[]) => ({
  type: FETCH_FOOD_SUCCESS,
  payload: data,
});

export const fetchFoodFailure = (error: string) => ({
  type: FETCH_FOOD_FAILURE,
  payload: error,
});

export const fetchFood = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchFoodRequest());
    try {
      const response = await getFood();
      dispatch(fetchFoodSuccess(response));
    } catch (err: any) {
      dispatch(fetchFoodFailure(err.message || 'Error fetching food'));
    }
  };
};
