import { AppView } from 'components';
import { fetchCategories, fetchItems } from 'ducks';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'types';
import { getView } from './utils';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchItems());
  }, [dispatch]);

  const { type } = useSelector(({ settingsReducer }: State) => ({
    type: settingsReducer.type,
  }));
  const View = getView(type);

  return <AppView View={View} />;
};
