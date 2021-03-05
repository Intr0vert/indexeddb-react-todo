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

type Props = {
  setModal: Function;
};

type DeleteProps = {
  text: string;
} & Props;

export const CreateCategoryModal = ({ setModal }: Props) => (
  <ModalWrapperHOC
    {...createCategoryProps}
    clearModal={() => setModal('')}
    setModal={setModal}
  >
    <View />
  </ModalWrapperHOC>
);

export const EditCategoryModal = ({ setModal }: Props) => (
  <ModalWrapperHOC
    {...editCategoryProps}
    clearModal={() => setModal('')}
    setModal={setModal}
  >
    <View />
  </ModalWrapperHOC>
);

export const DeleteCategoryModal = ({ setModal, text }: DeleteProps) => (
  <ModalWrapperHOC
    {...deleteCategoryProps}
    clearModal={() => setModal('')}
    setModal={setModal}
  >
    <DeleteModalView text={text} />
  </ModalWrapperHOC>
);
