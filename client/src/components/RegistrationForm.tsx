import { Box, Button, FormControl } from '@mui/material';
import React from 'react';
import CustomTextField from './CustomTextField/CustomTextField';
import type { SignupFormData } from '../types/auth';
import { useAppDispatch } from '../redux/hook';
import { thunkAuthSignup } from '../redux/slices/auth/createAsyncThunk';

export default function RegistrationForm(): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <Box sx={{ marginTop: '50px', display: 'flex', justifyContent: 'center' }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = Object.fromEntries(new FormData(e.currentTarget)) as SignupFormData;
          void dispatch(thunkAuthSignup(formData));
        }}
      >
        <FormControl
          sx={{
            padding: '10px',
            height: '300px',
            justifyContent: 'space-around',
            borderRadius: '12px',
            border: '2px solid #FACDC4',
          }}
        >
          <CustomTextField name="name" label="Имя" type="text" />
          <CustomTextField name="email" label="Почта" type="text" />
          <CustomTextField name="password" label="Пароль" type="text" />
          <Button type="submit">Зарегистрироваться</Button>
        </FormControl>
      </form>
    </Box>
  );
}
