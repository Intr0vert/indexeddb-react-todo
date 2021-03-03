import { TaskRow } from 'components';
import { Item } from 'types';
import { OpenedModal } from './OpenedModal';

type Props = {
  items: Item[];
};

export const ItemContentView = ({ items }: Props) => (
  <div className={'content'}>
    {items.map((el) => (
      <TaskRow {...el} key={el.id} />
    ))}
    <OpenedModal />
  </div>
);
