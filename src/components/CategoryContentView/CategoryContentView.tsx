import { TaskRow } from 'components';
import { Category } from 'types';
import { OpenedModal } from './OpenedModal';

type Props = {
  items: Category[];
};

export const CategoryContentView = ({ items }: Props) => (
  <div className={'content'}>
    {items.map((el) => (
      <TaskRow {...el} key={el.id} />
    ))}
    <OpenedModal />
  </div>
);
