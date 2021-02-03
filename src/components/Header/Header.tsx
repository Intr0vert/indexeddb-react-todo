import { useDispatch, useSelector } from 'react-redux';
import { actions } from 'ducks';
import './styles.sass';
import { State } from 'types';
import { MODALS } from 'commonConstants';

export const Header = () => {
  const { isTask } = useSelector(({ settingsReducer }: State) => ({
    ...settingsReducer,
  }));
  const { changeIsTask, showModal } = actions;
  const dispatch = useDispatch();

  const openModal = () =>
    isTask
      ? dispatch(showModal(MODALS.CREATE_ITEM_MODAL))
      : dispatch(showModal(MODALS.CREATE_CATEGORY_MODAL));

  return (
    <div className={'header'}>
      <div className={'header--left'}>
        <div className={'header--name'}>ToDo List</div>
        <div className={'header--tabs'}>
          <span
            className={`${isTask ? 'header--tabs-active' : ''} header--tab`}
            onClick={() => dispatch(changeIsTask(true))}
          >
            Задачи
          </span>
          <span>|</span>
          <span
            className={`${!isTask ? 'header--tabs-active' : ''} header--tab`}
            onClick={() => dispatch(changeIsTask(false))}
          >
            Категории
          </span>
        </div>
      </div>
      <div className='header--right' onClick={openModal}>
        Добавить {isTask ? 'задачу' : 'категорию'}
      </div>
    </div>
  );
};
