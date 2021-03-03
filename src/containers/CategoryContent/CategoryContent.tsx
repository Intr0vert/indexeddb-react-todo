import { CategoryContentView } from 'components/CategoryContentView';
import { useSelector } from 'react-redux';
import { State } from 'types';

export const CategoryContent = () => {
  const { items } = useSelector(({ categoryReducer }: State) => {
    return {
      items: categoryReducer.categories,
    };
  });
  return <CategoryContentView items={items} />;
};
