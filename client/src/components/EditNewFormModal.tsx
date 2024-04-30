import React from 'react';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import EditNewForm from './EditNewForm';
import { clearCurrentNew } from '../redux/slices/news/newsSlice';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function EditNewFormModals(): JSX.Element {
  const dispatch = useAppDispatch();
  const show = useAppSelector((state) => state.newsSlice.currentNew);
  return (
    <div>
      <Modal
        open={!!show}
        onClose={() => dispatch(clearCurrentNew())}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <EditNewForm />
        </Box>
      </Modal>
    </div>
  );
}
