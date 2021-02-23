import { TaskRow } from 'components';
import { fetchCategories, fetchItems } from 'ducks';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State, Item, Category } from 'types';
import { OpenedModal } from './OpenedModal';
import './styles.sass';
import { ContentItems } from './types';

export const Content = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchItems());
  }, [dispatch]);
  const { items } = useSelector(
    ({
      categoryReducer,
      itemReducer,
      settingsReducer,
    }: State): ContentItems => {
      const isTask = settingsReducer.isTask;
      return {
        items: isTask ? itemReducer.items : categoryReducer.categories,
      };
    }
  );

  return (
    <div className={'content'}>
      {items.map((el: Item & Category, i: number) => (
        <TaskRow {...el} key={i} />
      ))}
      <OpenedModal />
    </div>
  );
};
