import React from 'react';
import { Grid } from '@mui/material';
import NewCard from './NewCard';
import { useAppSelector } from '../redux/hook';
import EditNewFormModal from './EditNewFormModal';

export default function NewList(): JSX.Element {
  const news = useAppSelector((state) => state.newsSlice.news);

  return (
    <Grid container spacing={3}>
      {news?.map((card) => (
        <Grid key={card.id} item xs={4}>
          <NewCard novelty={card} />
        </Grid>
      ))}
      <EditNewFormModal />
    </Grid>
  );
}
