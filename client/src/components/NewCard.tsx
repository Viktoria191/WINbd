import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import type { NewType } from '../types/new/new';
import { useAppDispatch } from '../redux/hook';
import { setCurrentNew } from '../redux/slices/news/newsSlice';
import { thunkDeleteNew } from '../redux/slices/news/createAsyncThunk';

type NewTypeProps = {
  novelty: NewType;
};

function NewCard({ novelty }: NewTypeProps): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 300 }} image={novelty.img} title="new" />
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          {novelty.title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {novelty.text}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {novelty.quote}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => void dispatch(thunkDeleteNew(novelty.id))}>
          Удалить
        </Button>
        <Button
          size="small"
          onClick={() => {
            dispatch(setCurrentNew(novelty));
          }}
        >
          Изменить
        </Button>
      </CardActions>
    </Card>
  );
}

export default React.memo(NewCard);
