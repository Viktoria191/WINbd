import React from 'react';
import { AppBar, Toolbar, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { thunkAuthLogout } from '../redux/slices/auth/createAsyncThunk';

export default function NavBar(): JSX.Element {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.authSlice);

  return (
    <AppBar position="static" sx={{ backgroundColor: '#DC7A65' }}>
      <Toolbar>
        <Grid container justifyContent="space-around">
          <Grid item display="flex">
            <Typography variant="h6">
              {auth.user.status === 'authenticated'
                ? `Добро пожаловать, ${auth.user.name}!`
                : 'Добро пожаловать!'}
            </Typography>
          </Grid>
          <Grid item>
            <Button color="inherit" component={Link} to="/">
              Главная
            </Button>
            {auth.user.status !== 'authenticated' ? (
              <>
                <Button color="inherit" component={Link} to="/login">
                  Авторизация
                </Button>
                <Button color="inherit" component={Link} to="/registration">
                  Регистрация
                </Button>
              </>
            ) : (
              <Button color="inherit" onClick={() => void dispatch(thunkAuthLogout())}>
                Выйти
              </Button>
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
