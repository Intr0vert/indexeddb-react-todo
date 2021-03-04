import { ModalWrapperHOC } from 'HOC';
import { onCreate, onDeleteitem, onEdit } from './handlers';
import { DeleteModalView } from 'components';
import { View } from './Views';
import { MODAL_PROPS } from './constants';

const createTaskProps = {
  ...MODAL_PROPS.DEFAULT,
  title: 'Создание задачи',
  onSubmit: onCreate,
};

const editTaskProps = {
  ...MODAL_PROPS.DEFAULT,
  submitText: 'Сохранить',
  title: 'Редактирование задачи',
  onSubmit: onEdit,
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

export const CreateItemModal = () => (
  <ModalWrapperHOC {...createTaskProps}>
    <View />
  </ModalWrapperHOC>
);

export const EditItemModal = () => (
  <ModalWrapperHOC {...editTaskProps}>
    <View />
  </ModalWrapperHOC>
);

export const DeleteItemModal = ({ text }: { text: string }) => (
  <ModalWrapperHOC {...deleteTaskProps}>
    <DeleteModalView text={text} />
  </ModalWrapperHOC>
);
