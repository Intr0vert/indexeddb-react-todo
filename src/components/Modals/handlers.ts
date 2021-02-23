import { actions } from 'ducks';
import {
  createCategory,
  createItem,
  deleteAllConections,
  deleteCategory,
  deleteItem,
  editCategory,
  editItem,
} from 'ducks/slices';
import { Dispatch } from 'react';
import { GetState, ModalState } from 'types';

const { closeModal, setError } = actions;

const validate = (modalReducer: ModalState) =>
  !Boolean(modalReducer.modalData.name.trim().length);

export const validateInput = () => (
  dispatch: Dispatch<any>,
  getState: GetState
) => {
  const { modalReducer } = getState();

  dispatch(setError(validate(modalReducer)));
};

export const onCreate = () => (dispatch: Dispatch<any>, getState: GetState) => {
  const { modalReducer, settingsReducer } = getState();
  const { modalData } = modalReducer;
  const isError = validate(modalReducer);

  dispatch(setError(isError));
  if (!isError) {
    const id = new Date().getTime();

    settingsReducer.isTask
      ? dispatch(createItem({ ...modalData, id }))
      : dispatch(createCategory({ ...modalData, id }));
    dispatch(closeModal());
  }
};

export const onEdit = () => (dispatch: Dispatch<any>, getState: GetState) => {
  const { modalReducer, settingsReducer } = getState();
  const { modalData } = modalReducer;
  const isError = validate(modalReducer);

  dispatch(setError(isError));
  if (!isError) {
    const newData: any = modalData.id
      ? modalData
      : { ...modalData, id: new Date().getTime() };

    settingsReducer.isTask
      ? dispatch(editItem(newData))
      : dispatch(editCategory(newData));
    dispatch(closeModal());
  }
};

export const onDeleteitem = () => (
  dispatch: Dispatch<any>,
  getState: GetState
) => {
  const { modalReducer, settingsReducer } = getState();
  const { modalData } = modalReducer;
  const { id }: any = modalData;
  const isError = validate(modalReducer);

  dispatch(setError(isError));
  if (!isError) {
    settingsReducer.isTask
      ? dispatch(deleteItem(id))
      : dispatch(deleteCategory(id));
    dispatch(closeModal());
  }
};

export const onDeleteCategory = () => (
  dispatch: Dispatch<any>,
  getState: GetState
) => {
  const { modalReducer, settingsReducer } = getState();
  const { modalData } = modalReducer;
  const { id }: any = modalData;
  const isError = validate(modalReducer);

  dispatch(setError(isError));
  if (!isError) {
    if (settingsReducer.isTask) {
      dispatch(deleteItem(id));
    } else {
      dispatch(deleteCategory(id));
      dispatch(deleteAllConections(id));
    }
    dispatch(closeModal());
  }
};
