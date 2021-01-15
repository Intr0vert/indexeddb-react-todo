import type { HeaderProps } from './types';
import { useDispatch } from 'react-redux';
import { actions } from 'ducks';
import './styles.sass';

export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { changeIsTask, isTask } = props;
  const { createItem } = actions;
  const dispatch = useDispatch();

  return (
    <div className={'header'}>
      <div className={'header--left'}>
        <div className={'header--name'}>ToDo List</div>
        <div className={'header--tabs'}>
          <span
            className={isTask ? 'header--tabs-active' : ''}
            onClick={() => {
              changeIsTask(true);
            }}
          >
            Задачи
          </span>
          <span>|</span>
          <span
            className={!isTask ? 'header--tabs-active' : ''}
            onClick={() => {
              changeIsTask(false);
            }}
          >
            Категории
          </span>
        </div>
      </div>
      <div
        className='header--right'
        onClick={() =>
          dispatch(
            createItem({
              id: '2',
              name: 'name',
              description: 'description',
              categoryId: 'as',
            })
          )
        }
      >
        Добавить {isTask ? 'задачу' : 'категорию'}
      </div>
    </div>
  );
};
