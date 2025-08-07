import { FoodItem } from '../redux/types/FoodType';

export type RootStackParamList = {
  Home: undefined;
  Food: undefined;
  FoodMap: { food: FoodItem };
};
