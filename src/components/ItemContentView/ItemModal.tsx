import { MODALS } from 'common';
import { CreateItemModal, DeleteItemModal, EditItemModal } from './modals';
import { useSelector } from 'react-redux';
import { State } from 'types';

export const ItemModal = () => {
  const { actualModal, name } = useSelector(({ modalReducer }: State) => ({
    actualModal: modalReducer.actualModal,
    name: modalReducer.modalData.name,
  }));

  switch (actualModal) {
    case MODALS.CREATE_ITEM_MODAL:
      return <CreateItemModal />;
    case MODALS.EDIT_ITEM_MODAL:
      return <EditItemModal />;
    case MODALS.DELETE_ITEM_MODAL:
      return <DeleteItemModal text={`задачу ${name}`} />;
    default:
      return <></>;
  }
};
