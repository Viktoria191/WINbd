import axios from 'axios';
import type { AuthSliceState, LoginFormData, SignupFormData, UserType } from '../types/auth';

export const authInstance = axios.create({
  baseURL: 'http://localhost:3000/api/v1/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

class AuthService {
  static async refresh(): Promise<AuthSliceState> {
    const response = await authInstance.get<{ user: UserType; accessToken: string }>(
      '/tokens/refresh',
    );

    const authState: AuthSliceState = {
      ...response.data,
      user: { ...response.data.user, status: 'authenticated' },
    };
    console.log('refresh', authState);
    return authState;
  }

  static async login(formData: LoginFormData): Promise<AuthSliceState> {
    const response = await authInstance.post<{ user: UserType; accessToken: string }>(
      '/auth/login',
      formData,
    );
    const authState: AuthSliceState = {
      ...response.data,
      user: { ...response.data.user, status: 'authenticated' },
    };
    return authState;
  }

  static async signup(formData: SignupFormData): Promise<AuthSliceState> {
    const response = await authInstance.post<{ user: UserType; accessToken: string }>(
      '/auth/signup',
      formData,
    );
    const authState: AuthSliceState = {
      ...response.data,
      user: { ...response.data.user, status: 'authenticated' },
    };
    return authState;
  }

  static async logout(): Promise<void> {
    try {
      await authInstance.get('/auth/logout');
    } catch (error) {
      console.log(error);
    }
  }

  static async check(): Promise<AuthSliceState> {
    const response = await authInstance.get<{ user: UserType; accessToken: string }>('/auth/check');
    const authState: AuthSliceState = {
      ...response.data,
      user: { ...response.data.user, status: 'authenticated' },
    };
    return authState;
  }
}

export default AuthService;
