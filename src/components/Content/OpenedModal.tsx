import { MODALS } from 'commonConstants';
import {
  CreateCategoryModal,
  CreateItemModal,
  DeleteCategoryModal,
  DeleteItemModal,
  EditCategoryModal,
  EditItemModal,
} from 'components';
import { useSelector } from 'react-redux';
import { State } from 'types';

export const OpenedModal = () => {
  const { modalReducer } = useSelector((state: State) => ({
    modalReducer: state.modalReducer,
  }));

  switch (modalReducer.actualModal) {
    case MODALS.CREATE_CATEGORY_MODAL:
      return <CreateCategoryModal />;
    case MODALS.CREATE_ITEM_MODAL:
      return <CreateItemModal />;
    case MODALS.EDIT_CATEGORY_MODAL:
      return <EditCategoryModal />;
    case MODALS.EDIT_ITEM_MODAL:
      return <EditItemModal />;
    case MODALS.DELETE_CATEGORY_MODAL:
      return <DeleteCategoryModal />;
    case MODALS.DELETE_ITEM_MODAL:
      return <DeleteItemModal />;
    default:
      return <></>;
  }
};
