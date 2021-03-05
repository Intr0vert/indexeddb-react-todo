import { actions } from 'ducks';
import { createItem, deleteItem, editItem } from 'ducks/slices';
import { Dispatch } from 'react';
import { GetState, ModalState } from 'types';

const { clearModal, setError } = actions;

const validate = (modalReducer: ModalState) =>
  !Boolean(modalReducer.modalData.name.trim().length);

export const validateInput = () => (
  dispatch: Dispatch<any>,
  getState: GetState
) => {
  const { modalReducer } = getState();

  dispatch(setError(validate(modalReducer)));
};

export const onCreate = (closeModal: Function) => (
  dispatch: Dispatch<any>,
  getState: GetState
) => {
  const { modalReducer } = getState();
  const { modalData } = modalReducer;
  const isError = validate(modalReducer);

  dispatch(setError(isError));
  if (!isError) {
    const id = new Date().getTime();

    dispatch(createItem({ ...modalData, id }));
    dispatch(clearModal());
    closeModal();
  }
};

export const onEdit = (closeModal: Function) => (
  dispatch: Dispatch<any>,
  getState: GetState
) => {
  const { modalReducer } = getState();
  const { modalData } = modalReducer;
  const isError = validate(modalReducer);

  dispatch(setError(isError));
  if (!isError) {
    const newData: any = modalData.id
      ? modalData
      : { ...modalData, id: new Date().getTime() };

    dispatch(editItem(newData));
    dispatch(clearModal());
    closeModal();
  }
};

export const onDeleteitem = (closeModal: Function) => (
  dispatch: Dispatch<any>,
  getState: GetState
) => {
  const { modalReducer } = getState();
  const { modalData } = modalReducer;
  const { id }: any = modalData;

  dispatch(deleteItem(id));
  dispatch(clearModal());
  closeModal();
};
