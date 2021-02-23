import { MODAL_PROPS } from '../constants';
import { ModalWrapperHOC } from '../ModalWrapperHOC';
import { onCreate, onDeleteitem, onEdit } from '../handlers';
import { DeleteView } from '../DeleteView';
import { View } from './Views';

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

export const CreateItemModal = () => {
  return <ModalWrapperHOC View={View} {...createTaskProps} />;
};

export const EditItemModal = () => {
  return <ModalWrapperHOC View={View} {...editTaskProps} />;
};

export const DeleteItemModal = () => {
  return <ModalWrapperHOC View={DeleteView} {...deleteTaskProps} />;
};
