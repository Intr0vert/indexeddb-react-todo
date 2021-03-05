import { useDispatch, useSelector } from 'react-redux';
import { Category, Item, State } from 'types';
import { TaskRowView } from 'components';
import { actions } from 'ducks';

export type TaskRowProps = {
  setModal: Function;
  setName: Function;
} & Item &
  Category;

export const TaskRow = (props: TaskRowProps) => {
  const { changeModalData } = actions;
  const dispatch = useDispatch();
  const { categoryId, description, id, name, setModal, setName } = props;
  const { actualCategory } = useSelector(({ categoryReducer }: State) => ({
    actualCategory: categoryReducer.categories.find(
      (category) => category.id === categoryId
    )?.name,
  }));
  const onEdit = () => {
    setModal('edit');
    dispatch(changeModalData({ categoryId, description, name, id }));
  };
  const onDelete = () => {
    setModal('delete');
    dispatch(changeModalData({ categoryId, description, name, id }));
    setName(name);
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
