import { bucket, edit, folder } from 'assets';
import { useDispatch, useSelector } from 'react-redux';
import './styles.sass';
import { TaskRowProps } from './types';
import { openDeleteModal, openEditModal } from './handlers';
import { State } from 'types';

export const TaskRow = (props: TaskRowProps) => {
  const { categoryId, description, name } = props;
  const { actualCategory } = useSelector(({ categoryReducer }: State) => ({
    actualCategory: categoryReducer.categories.find(
      (category) => category.id === categoryId
    )?.name,
  }));
  const dispatch = useDispatch();

  return (
    <div className={'taskRow'}>
      <div className='taskRow--left'>
        <div className='taskRow--top'>
          <span className='taskRow--top--black'>{name}</span>
          {categoryId && (
            <span className='taskRow--top--blue'>
              <img src={folder} alt='' />
              {actualCategory}
            </span>
          )}
        </div>
        <div className='taskRow--bottom'>{description}</div>
      </div>
      <div className='taskRow--right'>
        <img src={edit} alt='' onClick={() => dispatch(openEditModal(props))} />
        <img
          src={bucket}
          alt=''
          onClick={() => {
            dispatch(openDeleteModal(props));
          }}
        />
      </div>
    </div>
  );
};
