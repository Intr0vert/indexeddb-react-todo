import { createSlice } from '@reduxjs/toolkit';
import { ModalState, ShowModal } from 'types';

export const modalSlice = createSlice({
  name: 'modalSlice',
  initialState: {
    actualModal: null,
  },
  reducers: {
    closeModal: (state: ModalState) => {
      state.actualModal = null;
    },
    showModal: (state: ModalState, action: ShowModal) => {
      state.actualModal = action.payload;
    },
  },
});
