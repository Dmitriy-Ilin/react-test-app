import { configureStore } from '@reduxjs/toolkit';
import { postsApi } from './api';
import cardReducer from './slice';

export const store = configureStore({
  reducer: {
    cardList: cardReducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
