import { TYPES } from 'common';
import { useSelector } from 'react-redux';
import { State } from 'types';
import './styles.sass';

export const DeleteView = () => {
  const { type, name } = useSelector(
    ({ modalReducer, settingsReducer }: State) => ({
      type: settingsReducer.type,
      name: modalReducer.modalData.name,
    })
  );

  return (
    <div className={'deleteModal--wrapper'}>
      Вы уверены, что хотите удалить{' '}
      {type === TYPES.ITEM ? `задачу "${name}"` : `категорию "${name}"`}?
    </div>
  );
};
