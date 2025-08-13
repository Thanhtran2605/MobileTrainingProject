import {
  applyMiddleware,
  combineReducers,
  createStore,
  Middleware,
} from 'redux';
import { newsReducer } from './reducers/NewsReducer';
import { foodReducer } from './reducers/FoodReducer';
import { tourismReducer } from './reducers/TourismReducer';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { thunk } from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['news', 'food', 'tourism'],
};

const rootReducer = combineReducers({
  news: newsReducer,
  food: foodReducer,
  tourism: tourismReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares: Middleware[] = [thunk];

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middlewares),
);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
