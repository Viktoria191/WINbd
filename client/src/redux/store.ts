import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './slices/news/newsSlice';
import authReducer from './slices/auth/authSlice';

export const store = configureStore({
  reducer: {
    authSlice: authReducer,
    newsSlice: newsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
