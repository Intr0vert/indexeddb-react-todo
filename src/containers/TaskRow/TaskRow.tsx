import { useDispatch, useSelector } from 'react-redux';
import { Category, Item, State } from 'types';
import { TaskRowView } from 'components';
import { openDeleteModal, openEditModal } from './handlers';

export type TaskRowProps = Item & Category;

export const TaskRow = (props: TaskRowProps) => {
  const { categoryId, description, name } = props;
  const { actualCategory } = useSelector(({ categoryReducer }: State) => ({
    actualCategory: categoryReducer.categories.find(
      (category) => category.id === categoryId
    )?.name,
  }));
  const dispatch = useDispatch();
  const onEdit = () => {
    dispatch(openEditModal(props));
  };
  const onDelete = () => {
    dispatch(openDeleteModal(props));
  };

  return (
    <TaskRowView
      actualCategory={actualCategory}
      categoryId={categoryId}
      description={description}
      name={name}
      onEdit={onEdit}
      onDelete={onDelete}
    />
  );
};
