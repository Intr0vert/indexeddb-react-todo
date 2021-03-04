import { MODALS } from 'common';
import {
  CreateCategoryModal,
  DeleteCategoryModal,
  EditCategoryModal,
} from './modals';
import { useSelector } from 'react-redux';
import { State } from 'types';

export const CategoryModal = () => {
  const { actualModal, name } = useSelector(({ modalReducer }: State) => ({
    actualModal: modalReducer.actualModal,
    name: modalReducer.modalData.name,
  }));

  switch (actualModal) {
    case MODALS.CREATE_CATEGORY_MODAL:
      return <CreateCategoryModal />;
    case MODALS.EDIT_CATEGORY_MODAL:
      return <EditCategoryModal />;
    case MODALS.DELETE_CATEGORY_MODAL:
      return <DeleteCategoryModal text={`категорию ${name}`} />;
    default:
      return <></>;
  }
};
