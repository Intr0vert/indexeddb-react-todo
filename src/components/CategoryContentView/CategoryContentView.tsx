import { TaskRow } from 'containers';
import { Category } from 'types';

type Props = {
  items: Category[];
  setModal: Function;
  setName: Function;
};

export const CategoryContentView = ({ items, setModal, setName }: Props) => (
  <div className={'content'}>
    {items.map((el) => (
      <TaskRow {...el} key={el.id} setModal={setModal} setName={setName} />
    ))}
  </div>
);
