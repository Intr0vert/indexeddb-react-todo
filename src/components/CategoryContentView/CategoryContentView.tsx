import { TaskRow } from 'containers';
import { Category } from 'types';
import { CategoryModal } from './CategoryModal';

type Props = {
  items: Category[];
};

export const CategoryContentView = ({ items }: Props) => (
  <div className={'content'}>
    {items.map((el) => (
      <TaskRow {...el} key={el.id} />
    ))}
    <CategoryModal />
  </div>
);
