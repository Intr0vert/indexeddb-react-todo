import { ACTION_NAMES, MODALS, TYPES } from 'commonConstants';
import { actions } from 'ducks';
import { Dispatch } from 'react';
import { ShowModal } from 'types';

const { showModal } = actions;

export const switcher = (actionName: string, type: string) => (
  dispatch: Dispatch<ShowModal>
) => {
  switch (actionName) {
    case ACTION_NAMES.CREATE_MODAL:
      type === TYPES.ITEM
        ? dispatch(showModal(MODALS.CREATE_ITEM_MODAL))
        : dispatch(showModal(MODALS.CREATE_CATEGORY_MODAL));
      break;
    case ACTION_NAMES.DELETE_MODAL:
      type === TYPES.ITEM
        ? dispatch(showModal(MODALS.DELETE_ITEM_MODAL))
        : dispatch(showModal(MODALS.DELETE_CATEGORY_MODAL));
      break;
    case ACTION_NAMES.EDIT_MODAL:
      type === TYPES.ITEM
        ? dispatch(showModal(MODALS.EDIT_ITEM_MODAL))
        : dispatch(showModal(MODALS.EDIT_CATEGORY_MODAL));
      break;
  }
};
