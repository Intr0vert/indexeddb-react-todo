import { ACTION_NAMES } from 'common';
import { actions } from 'ducks';
import { Dispatch } from 'react';
import { Category, GetState, Item } from 'types';
import { switcher } from 'utils';

const { changeModalData } = actions;

export const openDeleteModal = (modalData: Item | Category) => (
  dispatch: Dispatch<any>,
  getState: GetState
) => {
  const { settingsReducer } = getState();
  const { type } = settingsReducer;

  dispatch(changeModalData(modalData));
  dispatch(switcher(ACTION_NAMES.DELETE_MODAL, type));
};

export const openEditModal = (modalData: Item | Category) => (
  dispatch: Dispatch<any>,
  getState: GetState
) => {
  const { settingsReducer } = getState();
  const { type } = settingsReducer;

  dispatch(changeModalData(modalData));
  dispatch(switcher(ACTION_NAMES.EDIT_MODAL, type));
};
