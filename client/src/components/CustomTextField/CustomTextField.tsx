import { TextField } from '@mui/material';
import React from 'react';

type CustomTextFieldProps = {
  name: string;
  label: string;
  type: string;
  defaultValue?: string;
};
export default function CustomTextField({
  name,
  label,
  type,
  defaultValue,
}: CustomTextFieldProps): JSX.Element {
  return (
    <TextField
      name={name}
      label={label}
      variant="outlined"
      type={type}
      defaultValue={defaultValue || ''}
      sx={{
        '& label.Mui-focused': {
          color: '#DC7A65',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: '#B2BAC2',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#E0E3E7',
          },
          '&:hover fieldset': {
            borderColor: '#B2BAC2',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#2887D1',
          },
        },
      }}
    />
  );
}
