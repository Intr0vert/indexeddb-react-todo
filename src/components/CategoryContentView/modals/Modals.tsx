import { ModalWrapperHOC } from 'HOC';
import { DeleteModalView } from 'components';
import { onCreate, onDeleteCategory, onEdit } from './handlers';
import { View } from './Views';
import { MODAL_PROPS } from './constants';

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

export const CreateCategoryModal = () => (
  <ModalWrapperHOC {...createCategoryProps}>
    <View />
  </ModalWrapperHOC>
);

export const EditCategoryModal = () => (
  <ModalWrapperHOC {...editCategoryProps}>
    <View />
  </ModalWrapperHOC>
);

export const DeleteCategoryModal = ({ text }: { text: string }) => (
  <ModalWrapperHOC {...deleteCategoryProps}>
    <DeleteModalView text={text} />
  </ModalWrapperHOC>
);
