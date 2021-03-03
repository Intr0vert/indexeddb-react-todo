import { ItemContentView } from 'components';
import { useSelector } from 'react-redux';
import { State } from 'types';

export const ItemContent = () => {
  const { items } = useSelector(({ itemReducer }: State) => {
    return {
      items: itemReducer.items,
    };
  });

  return <ItemContentView items={items} />;
};
