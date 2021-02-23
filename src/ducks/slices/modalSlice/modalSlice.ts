import { createSlice } from '@reduxjs/toolkit';
import {
  ChangeField,
  ChangeModalData,
  ModalState,
  SetError,
  ShowModal,
} from 'types';

export const modalSlice = createSlice({
  name: 'modalSlice',
  initialState: {
    actualModal: null,
    modalData: {
      id: undefined,
      categoryId: undefined,
      name: '',
      description: '',
    },
    isNameError: false,
  },
  reducers: {
    changeField: (state: ModalState, action: ChangeField) => {
      state.modalData[action.payload.field] = action.payload.value;
    },
    changeModalData: (state: ModalState, action: ChangeModalData) => {
      state.modalData = {
        ...action.payload,
      };
    },
    closeModal: (state: ModalState) => {
      state.actualModal = null;
      state.modalData = {
        description: '',
        categoryId: undefined,
        name: '',
      };
    },
    setError: (state: ModalState, action: SetError) => {
      state.isNameError = action.payload;
    },
    showModal: (state: ModalState, action: ShowModal) => {
      state.actualModal = action.payload;
    },
  },
});
