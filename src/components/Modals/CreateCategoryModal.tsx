import { Input } from 'components';
import { MODAL_PROPS } from './constants';
import { ModalWrapperHOC } from './ModalWrapperHOC';

const CreateCategoryModalView = () => {
  return (
    <div>
      <div className='modal--row'>
        <Input
          name={'Имя'}
          maxLength={255}
          isRequired
          placeholder={'Введите имя категории'}
        />
      </div>
      <div className='modal--row'>
        <Input
          name={'Описание'}
          maxLength={1536}
          placeholder={'Введите описание категории'}
        />
      </div>
    </div>
  );
};

const createCategoryProps = {
  ...MODAL_PROPS.DEFAULT,
  title: 'Создание категории',
};

export const CreateCategoryModal = () => {
  return (
    <ModalWrapperHOC View={CreateCategoryModalView} {...createCategoryProps} />
  );
};
