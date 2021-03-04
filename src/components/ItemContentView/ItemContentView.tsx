import { TaskRow } from 'containers';
import { Item } from 'types';
import { ItemModal } from './ItemModal';

type Props = {
  items: Item[];
};

export const ItemContentView = ({ items }: Props) => (
  <div className={'content'}>
    {items.map((el) => (
      <TaskRow {...el} key={el.id} />
    ))}
    <ItemModal />
  </div>
);
