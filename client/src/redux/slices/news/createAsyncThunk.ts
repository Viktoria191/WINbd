import { createAsyncThunk } from '@reduxjs/toolkit';
import ApiService from '../../../services/apiService';
import type { AddNewFormData, NewType } from '../../../types/new/new';

export const thunkNewsLoad = createAsyncThunk('newsSlice/thunkNewsLoad', async () =>
  ApiService.getNews(),
);

export const thunkAddNew = createAsyncThunk(
  'newsSlice/thunkAddNew',
  async (formData: AddNewFormData) => ApiService.addNew(formData),
);

export const thunkEditNew = createAsyncThunk(
  'newsSlice/thunkEditNew',
  async ({ id, formData }: { id: NewType['id']; formData: AddNewFormData }) =>
    ApiService.editNew(id, formData),
);

export const thunkDeleteNew = createAsyncThunk(
  'newsSlice/thunkDeleteNew',
  async (id: NewType['id']) => ApiService.deleteNew(id),
);
