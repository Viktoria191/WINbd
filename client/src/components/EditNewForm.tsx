import React from 'react';
import { Box, Button, FormControl } from '@mui/material';
import CustomTextField from './CustomTextField/CustomTextField';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import type { AddNewFormData } from '../types/new/new';
import { thunkEditNew } from '../redux/slices/news/createAsyncThunk';
import { clearCurrentNew } from '../redux/slices/news/newsSlice';

function EditNewForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const content = useAppSelector((state) => state.newsSlice.currentNew);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.currentTarget)) as AddNewFormData;
        console.log(content?.id);
        void dispatch(thunkEditNew({ formData, id: content.id }));
      }}
    >
      <FormControl
        sx={{
          margin: '30px',
          padding: '10px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
          height: '600px',
          borderRadius: '12px',
        }}
      >
        <CustomTextField name="title" label="Заголовок" type="text" defaultValue={content?.title} />
        <CustomTextField
          name="text"
          label="Текст"
          type="text"
          defaultValue={content?.text}
        />
        <CustomTextField
          name="quote"
          label="Цитата"
          type="text"
          defaultValue={content?.quote}
        />
        <CustomTextField name="img" label="Изображение" type="text" defaultValue={content?.img} />
        <Box>
          <Button type="submit" color="inherit">
            Изменить
          </Button>
          <Button color="inherit" onClick={() => dispatch(clearCurrentNew())}>
            Закрыть
          </Button>
        </Box>
      </FormControl>
    </form>
  );
}

export default React.memo(EditNewForm);
