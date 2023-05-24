import { configureStore } from '@reduxjs/toolkit';
import { cardsSlice } from './cards/slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { statisticsSlice } from './statistics/slice';

const cardsPersistConfig = {
  key: 'cards',
  storage,
  whitelist: 'cards',
};
const statisticsPersistConfig = {
  key: 'statistics',
  storage,
  whitelist: 'statistics',
};
export const store = configureStore({
  reducer: {
    cards: persistReducer(cardsPersistConfig, cardsSlice.reducer),
    statistics: persistReducer(
      statisticsPersistConfig,
      statisticsSlice.reducer
    ),
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
