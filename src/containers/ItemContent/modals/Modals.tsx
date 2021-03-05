import { ModalWrapperHOC } from 'HOC';
import { onCreate, onDeleteitem, onEdit } from './handlers';
import { DeleteModalView } from 'components';
import { View } from './Views';
import { MODAL_PROPS } from './constants';

const createTaskProps = {
  ...MODAL_PROPS.DEFAULT,
  onSubmit: onCreate,
  title: 'Создание задачи',
};

const editTaskProps = {
  ...MODAL_PROPS.DEFAULT,
  onSubmit: onEdit,
  submitText: 'Сохранить',
  title: 'Редактирование задачи',
};

const deleteTaskProps = {
  ...MODAL_PROPS.DEFAULT,
  cancelText: 'Нет',
  onSubmit: onDeleteitem,
  modalWidth: 600,
  submitText: 'Да',
  submitWidth: 120,
  title: 'Удаление задачи',
};

type Props = {
  setModal: Function;
};

type DeleteProps = {
  text: string;
} & Props;

export const CreateItemModal = ({ setModal }: Props) => (
  <ModalWrapperHOC
    {...createTaskProps}
    clearModal={() => setModal('')}
    setModal={setModal}
  >
    <View />
  </ModalWrapperHOC>
);

export const EditItemModal = ({ setModal }: Props) => (
  <ModalWrapperHOC
    {...editTaskProps}
    clearModal={() => setModal('')}
    setModal={setModal}
  >
    <View />
  </ModalWrapperHOC>
);

export const DeleteItemModal = ({ setModal, text }: DeleteProps) => (
  <ModalWrapperHOC
    {...deleteTaskProps}
    clearModal={() => setModal('')}
    setModal={setModal}
  >
    <DeleteModalView text={text} />
  </ModalWrapperHOC>
);
