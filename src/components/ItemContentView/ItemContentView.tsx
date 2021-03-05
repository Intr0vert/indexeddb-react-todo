import { TaskRow } from 'containers';
import { Item } from 'types';

type Props = {
  items: Item[];
  setModal: Function;
  setName: Function;
};

export const ItemContentView = ({ items, setModal, setName }: Props) => (
  <div className={'content'}>
    {items.map((el) => (
      <TaskRow {...el} key={el.id} setModal={setModal} setName={setName} />
    ))}
  </div>
);
