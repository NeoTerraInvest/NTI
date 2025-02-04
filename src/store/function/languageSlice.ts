import { createSlice } from '@reduxjs/toolkit';

const languageSlice = createSlice({
  name: 'languageManager',
  initialState: { language: 'eng' },
  reducers: {
    eng: (state) => {
      state.language = 'eng';
    },
    kor: (state) => {
      state.language = 'kor';
    },
  },
});

export const { eng, kor } = languageSlice.actions;
export default languageSlice.reducer;
