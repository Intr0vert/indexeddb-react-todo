import { MODALS } from 'commonConstants';
import { actions } from 'ducks';
import { Dispatch } from 'react';
import { Category, ChangeModalData, GetState, Item, ShowModal } from 'types';

const { changeModalData, showModal } = actions;

export const openDeleteModal = (modalData: Item | Category) => (
  dispatch: Dispatch<ChangeModalData | ShowModal>,
  getState: GetState
) => {
  const { settingsReducer } = getState();
  const { isTask } = settingsReducer;

  dispatch(changeModalData(modalData));
  dispatch(
    showModal(isTask ? MODALS.DELETE_ITEM_MODAL : MODALS.DELETE_CATEGORY_MODAL)
  );
};

export const openEditModal = (modalData: Item | Category) => (
  dispatch: Dispatch<ChangeModalData | ShowModal>,
  getState: GetState
) => {
  const { settingsReducer } = getState();
  const { isTask } = settingsReducer;

  dispatch(changeModalData(modalData));
  dispatch(
    showModal(isTask ? MODALS.EDIT_ITEM_MODAL : MODALS.EDIT_CATEGORY_MODAL)
  );
};
