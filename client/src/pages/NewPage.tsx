import { Container } from '@mui/material';
import React from 'react';
import AddNewForm from '../components/AddNewForm';
import NewList from '../components/NewList';
import Loader from '../components/Loader';
import { useAppSelector } from '../redux/hook';

export default function NewPage(): JSX.Element {
  const auth = useAppSelector((state) => state.authSlice);
  return (
    <Container sx={{ margin: 'auto' }}>
      <AddNewForm />
      <Loader isLoading={auth.user.status === 'pending'}>
        <NewList />
      </Loader>
    </Container>
  );
}
