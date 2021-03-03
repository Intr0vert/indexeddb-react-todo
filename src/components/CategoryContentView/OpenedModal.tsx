import { MODALS } from 'common';
import {
  CreateCategoryModal,
  DeleteCategoryModal,
  EditCategoryModal,
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
    case MODALS.EDIT_CATEGORY_MODAL:
      return <EditCategoryModal />;
    case MODALS.DELETE_CATEGORY_MODAL:
      return <DeleteCategoryModal />;
    default:
      return <></>;
  }
};
