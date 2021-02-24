import { useDispatch, useSelector } from 'react-redux';
import { actions } from 'ducks';
import { State } from 'types';
import { ACTION_NAMES, TYPES } from 'commonConstants';
import './styles.sass';
import { switcher } from 'utils';

export const Header = () => {
  const { type } = useSelector(({ settingsReducer }: State) => ({
    ...settingsReducer,
  }));
  const { changeType } = actions;
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(switcher(ACTION_NAMES.CREATE_MODAL, type));
  };

  return (
    <div className={'header'}>
      <div className={'header--left'}>
        <div className={'header--name'}>ToDo List</div>
        <div className={'header--tabs'}>
          <span
            className={`${
              type === TYPES.ITEM ? 'header--tabs-active' : ''
            } header--tab`}
            onClick={() => dispatch(changeType(TYPES.ITEM))}
          >
            Задачи
          </span>
          <span>|</span>
          <span
            className={`${
              type === TYPES.CATEGORY ? 'header--tabs-active' : ''
            } header--tab`}
            onClick={() => dispatch(changeType(TYPES.CATEGORY))}
          >
            Категории
          </span>
        </div>
      </div>
      <div className={'header--right'} onClick={openModal}>
        Добавить {type === TYPES.ITEM ? 'задачу' : 'категорию'}
      </div>
    </div>
  );
};
