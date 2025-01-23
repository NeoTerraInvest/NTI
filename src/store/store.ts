// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './function/counterSlice';
import languageSlice from './function/languageSlice';

const store = configureStore({
  reducer: {
    counter: counterSlice,
    language: languageSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
