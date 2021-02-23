import { useSelector } from 'react-redux';
import { State } from 'types';
import './styles.sass';

export const DeleteView = () => {
  const { isTask, name } = useSelector(
    ({ modalReducer, settingsReducer }: State) => ({
      isTask: settingsReducer.isTask,
      name: modalReducer.modalData.name,
    })
  );

  return (
    <div className={'deleteModal--wrapper'}>
      Вы уверены, что хотите удалить{' '}
      {isTask ? `задачу "${name}"` : `категорию "${name}"`}?
    </div>
  );
};
