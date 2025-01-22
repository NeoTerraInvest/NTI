// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './function/counterSlice';

const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
