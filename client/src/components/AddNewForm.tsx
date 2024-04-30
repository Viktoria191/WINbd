import React from 'react';
import { Button, FormControl } from '@mui/material';
import CustomTextField from './CustomTextField/CustomTextField';
import { useAppDispatch } from '../redux/hook';
import type { AddNewFormData } from '../types/new/new';
import { thunkAddNew } from '../redux/slices/news/createAsyncThunk';

function AddNewForm(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.currentTarget)) as AddNewFormData;
        void dispatch(thunkAddNew(formData));
        e.currentTarget.reset();
      }}
    >
      <FormControl
        sx={{
          margin: '30px',
          padding: '10px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '100px',
          borderRadius: '12px',
          border: '2px solid #FACDC4',
        }}
      >
        <CustomTextField name="title" label="Заголовок" type="text" />
        <CustomTextField name="text" label="Текст" type="text" />
        <CustomTextField name="quote" label="Цитата" type="text" />
        <CustomTextField name="img" label="Изображение" type="text" />
        <Button type="submit">Добавить</Button>
      </FormControl>
    </form>
  );
}

export default React.memo(AddNewForm);
