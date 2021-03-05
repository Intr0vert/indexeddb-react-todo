import { CategoryContentView } from 'components';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { State } from 'types';
import {
  CreateCategoryModal,
  DeleteCategoryModal,
  EditCategoryModal,
} from './modals';

type CategoryContentProps = {
  modal: string;
  setModal: Function;
};

export const CategoryContent = ({ modal, setModal }: CategoryContentProps) => {
  const [name, setName] = useState('');
  const { items } = useSelector(({ categoryReducer }: State) => ({
    items: categoryReducer.categories,
  }));

  return (
    <>
      <CategoryContentView
        items={items}
        setModal={setModal}
        setName={setName}
      />
      {modal === 'create' && <CreateCategoryModal setModal={setModal} />}
      {modal === 'edit' && <EditCategoryModal setModal={setModal} />}
      {modal === 'delete' && (
        <DeleteCategoryModal setModal={setModal} text={`категорию ${name}`} />
      )}
    </>
  );
};
