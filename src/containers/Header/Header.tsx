import { useDispatch, useSelector } from 'react-redux';
import { actions } from 'ducks';
import { State, Types } from 'types';
import { ACTION_NAMES, TYPES } from 'common';
import { HeaderView } from 'components';
import './styles.sass';
import { switcher } from 'utils';

export const Header = () => {
  const dispatch = useDispatch();
  const { type } = useSelector(({ settingsReducer }: State) => ({
    ...settingsReducer,
  }));
  const { changeType } = actions;
  const tabs: any[] = Object.keys(TYPES);
  const onChangeType = (type: Types) => dispatch(changeType(type));
  const openModal = () => dispatch(switcher(ACTION_NAMES.CREATE_MODAL, type));

  return (
    <HeaderView
      onOpenModal={openModal}
      onChangeType={onChangeType}
      tabs={tabs}
      type={type}
    />
  );
};
