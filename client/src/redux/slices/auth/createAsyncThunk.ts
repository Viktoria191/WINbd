import { createAsyncThunk } from '@reduxjs/toolkit';
import type { LoginFormData, SignupFormData } from '../../../types/auth';
import AuthService from '../../../services/authService';

export const thunkAuthLogin = createAsyncThunk(
  'authSlice/thunkAuthLogin',
  async (formData: LoginFormData) => AuthService.login(formData),
);

export const thunkAuthSignup = createAsyncThunk(
  'authSlice/thunkAuthSignup',
  async (formData: SignupFormData) => AuthService.signup(formData),
);

export const thunkAuthCheck = createAsyncThunk('authSlice/thunkCheckAuth', async () =>
  AuthService.check(),
);

export const thunkAuthLogout = createAsyncThunk('authSlice/thunkAuthLogout', async () =>
  AuthService.logout(),
);

export const thunkAuthRefresh = createAsyncThunk('authSlice/thunkAuthRefresh', async () =>
  AuthService.refresh(),
);
