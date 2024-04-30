export type UserType = {
  id: number;
  name: string;
  email: string;
};

export type UserState =
  | { status: 'pending' }
  | { status: 'guest' }
  | ({ status: 'authenticated' } & UserType);

export type LoginFormData = {
  email: string;
  password: string;
};

export type SignupFormData = {
  email: string;
  name: string;
  password: string;
};

export type AuthSliceState = {
  user: UserState;
  accessToken: string;
};
