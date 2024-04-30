import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import type { AxiosError } from 'axios';
import NewPage from './pages/NewPage';
import NavBar from './components/NavBar';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import PrivateRouter from './components/PrivateRouter/PrivateRouter';
import { useAppDispatch, useAppSelector } from './redux/hook';
import Loader from './components/Loader';
import ApiService from './services/apiService';
import { thunkNewsLoad } from './redux/slices/news/createAsyncThunk';
import { thunkAuthCheck, thunkAuthRefresh } from './redux/slices/auth/createAsyncThunk';

export default function App(): JSX.Element {
  const auth = useAppSelector((state) => state.authSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(thunkAuthCheck());
    void dispatch(thunkNewsLoad());
  }, []);

  // useEffect(() => {
  //   const requestInterceptor = ApiService.interceptors.request.use(
  //     (config) => {
  //       if (!config.headers.Authorization) {
  //         config.headers.Authorization = `Bearer ${auth.accessToken}`;
  //       }
  //       return config;
  //     },
  //     (err) => Promise.reject(err),
  //   );

  //   const responseInterceptor = ApiService.interceptors.response.use(
  //     (res) => res,
  //     async (err) => {
  //       const prevRequest = err.config;
  //       if (err.response?.status === 403) {
  //         prevRequest.sent = true;
  //         const newAccessToken = await dispatch(thunkAuthRefresh()).unwrap();
  //         console.log('111', newAccessToken);
  //         prevRequest.headers.Authorization = `Bearer ${newAccessToken.accessToken}`;
  //         return ApiService(prevRequest);
  //       }
  //       return Promise.reject(err);
  //     },
  //   );

  //   return () => {
  //     ApiService.interceptors.request.eject(requestInterceptor);
  //     ApiService.interceptors.response.eject(responseInterceptor);
  //   };
  // }, [auth.accessToken]);

  // console.log(auth.user.status);
  return (
    <Loader isLoading={auth.user.status === 'pending'}>
      <>
        <NavBar />
        <Routes>
          <>
            <Route
              element={
                <PrivateRouter isAllowed={auth.user.status === 'authenticated'} redirectPath="/" />
              }
            >
              <Route path="/login" element={<LoginPage />} />
              <Route path="/registration" element={<RegistrationPage />} />
            </Route>
            <Route
              element={
                <PrivateRouter
                  isAllowed={auth.user.status !== 'authenticated'}
                  redirectPath="/login"
                />
              }
            >
              <Route path="/" element={<NewPage />} />
            </Route>
          </>
        </Routes>
      </>
    </Loader>
  );
}
