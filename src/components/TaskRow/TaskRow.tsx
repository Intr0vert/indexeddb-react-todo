import { bucket, edit, folder } from 'assets';
import { useDispatch } from 'react-redux';
import { actions } from 'ducks';
import './styles.sass';
import { TaskRowProps } from './types';

export const TaskRow = (props: TaskRowProps) => {
  const { categoryId, description, name } = props;
  const { removeItem } = actions;

  const dispatch = useDispatch();

  return (
    <div className={'taskRow'}>
      <div className='taskRow--left'>
        <div className='taskRow--top'>
          <span className='taskRow--top--black'>{name}</span>
          {categoryId && (
            <span className='taskRow--top--blue'>
              <img src={folder} alt='' /> Категория 1
            </span>
          )}
        </div>
        <div className='taskRow--bottom'>{description}</div>
      </div>
      <div className='taskRow--right'>
        <img src={edit} alt='' />
        <img
          src={bucket}
          alt=''
          onClick={() => {
            dispatch(removeItem(props));
          }}
        />
      </div>
    </div>
  );
};
