import { ItemContentView } from 'components';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { State } from 'types';
import { CreateItemModal, DeleteItemModal, EditItemModal } from './modals';

type ItemContentProps = {
  modal: string;
  setModal: Function;
};

export const ItemContent = ({ modal, setModal }: ItemContentProps) => {
  const [name, setName] = useState('');
  const { items } = useSelector(({ itemReducer }: State) => ({
    items: itemReducer.items,
  }));

  return (
    <>
      <ItemContentView items={items} setModal={setModal} setName={setName} />
      {modal === 'create' && <CreateItemModal setModal={setModal} />}
      {modal === 'edit' && <EditItemModal setModal={setModal} />}
      {modal === 'delete' && (
        <DeleteItemModal text={`задачу ${name}`} setModal={setModal} />
      )}
    </>
  );
};
