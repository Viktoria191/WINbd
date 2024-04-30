import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { NewSliceState } from '../../../types/new/new';
import { thunkAddNew, thunkDeleteNew, thunkEditNew, thunkNewsLoad } from './createAsyncThunk';

const initialState: NewSliceState = {
  news: [],
  currentNew: null,
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setCurrentNew: (state, action: PayloadAction<NewSliceState['currentNew']>) => {
      state.currentNew = action.payload;
    },
    clearCurrentNew: (state) => {
      state.currentNew = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(thunkNewsLoad.fulfilled, (state, action) => {
      state.news = action.payload;
    });
    builder.addCase(thunkAddNew.fulfilled, (state, action) => {
      state.news.push(action.payload);
    });
    builder.addCase(thunkEditNew.fulfilled, (state, action) => {
      const indexNew = state.news.findIndex((novelty) => novelty.id === action.payload.id);
      if (indexNew !== -1) {
        state.news[indexNew] = action.payload;
      }
      state.currentNew = null;
    });
    builder.addCase(thunkDeleteNew.fulfilled, (state, action) => {
      const indexNew = state.news.findIndex((novelty) => novelty.id === action.payload);
      if (indexNew !== -1) {
        state.news.splice(indexNew, 1);
      }
      state.currentNew = null;
    });
  },
});

export const { setCurrentNew, clearCurrentNew } = newsSlice.actions;

export default newsSlice.reducer;
