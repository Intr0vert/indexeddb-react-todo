import { TaskRow } from 'components';
import { useSelector } from 'react-redux';
import { State, Item, ItemState } from 'types';
import './styles.sass';

export const Content = () => {
  const { items } = useSelector(
    ({ itemReducer, categoryReducer }: State): ItemState => ({
      ...itemReducer,
      ...categoryReducer,
    })
  );

  return (
    <div className={'content'}>
      {items && items.map((el: Item, i: number) => <TaskRow {...el} key={i} />)}
    </div>
  );
};
