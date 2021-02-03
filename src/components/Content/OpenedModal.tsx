import { MODALS } from 'commonConstants';
import { CreateCategoryModal, CreateItemModal } from 'components';
import { useSelector } from 'react-redux';
import { State } from 'types';

export const OpenedModal = () => {
  const { modalReducer } = useSelector((state: State) => ({
    modalReducer: state.modalReducer,
  }));

  switch (modalReducer.actualModal) {
    case MODALS.CREATE_ITEM_MODAL:
      return <CreateItemModal />;
    case MODALS.CREATE_CATEGORY_MODAL:
      return <CreateCategoryModal />;
    default:
      return <></>;
  }
};
