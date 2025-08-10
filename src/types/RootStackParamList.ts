import { FoodItem } from '../redux/types/FoodType';
import { Tourism } from '../redux/types/TourismType';

export type RootStackParamList = {
  Home: undefined;
  SubMenu: undefined;
  Food: undefined;
  FoodMap: { food: FoodItem };
  Tourism: undefined;
  TourismDetail: { tourism: Tourism };
};
