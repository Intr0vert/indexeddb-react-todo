import { TaskRow } from 'components';
import { useSelector } from 'react-redux';
import { State, Item, Category } from 'types';
import { OpenedModal } from './OpenedModal';
import './styles.sass';
import { ContentItems } from './types';

export const Content = () => {
  const { items } = useSelector(
    ({
      categoryReducer,
      itemReducer,
      settingsReducer,
    }: State): ContentItems => {
      return {
        items: settingsReducer.isTask
          ? itemReducer.items
          : categoryReducer.categories,
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
