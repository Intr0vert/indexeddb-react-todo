import { MODAL_PROPS } from '../constants';
import { ModalWrapperHOC } from '../ModalWrapperHOC';
import { onCreate, onDeleteCategory, onEdit } from '../handlers';
import { View } from './Views';
import { DeleteView } from '../DeleteView';

const createCategoryProps = {
  ...MODAL_PROPS.DEFAULT,
  title: 'Создание категории',
  onSubmit: onCreate,
};

const editCategoryProps = {
  ...MODAL_PROPS.DEFAULT,
  submitText: 'Сохранить',
  title: 'Редактирование категории',
  onSubmit: onEdit,
};

const deleteCategoryProps = {
  ...MODAL_PROPS.DEFAULT,
  cancelText: 'Нет',
  onSubmit: onDeleteCategory,
  modalWidth: 600,
  submitText: 'Да',
  submitWidth: 120,
  title: 'Удаление категории',
};

export const CreateCategoryModal = () => {
  return <ModalWrapperHOC View={View} {...createCategoryProps} />;
};

export const EditCategoryModal = () => {
  return <ModalWrapperHOC View={View} {...editCategoryProps} />;
};

export const DeleteCategoryModal = () => {
  return <ModalWrapperHOC View={DeleteView} {...deleteCategoryProps} />;
};
