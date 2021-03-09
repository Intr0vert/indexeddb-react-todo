import { useDispatch, useSelector } from 'react-redux';
import { actions } from 'ducks';
import { State, Types } from 'types';
import { TYPES } from 'common';
import { HeaderView } from 'components';
import './styles.sass';

type HeaderProps = {
  setModal: Function;
};

export const Header = ({ setModal }: HeaderProps) => {
  const dispatch = useDispatch();
  const { type } = useSelector(({ settingsReducer }: State) => ({
    ...settingsReducer,
  }));
  const { changeType, changeModalData } = actions;
  const tabs: any[] = Object.keys(TYPES);
  const onChangeType = (type: Types) => dispatch(changeType(type));
  const openModal = () => {
    dispatch(
      changeModalData({
        categoryId: undefined,
        description: '',
        name: '',
        id: undefined,
      })
    );
    setModal('create');
  };

  return (
    <HeaderView
      onOpenModal={openModal}
      onChangeType={onChangeType}
      tabs={tabs}
      type={type}
    />
  );
};
