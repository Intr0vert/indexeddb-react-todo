import { Input, Select } from 'components';
import { MODAL_PROPS } from './constants';
import { ModalWrapperHOC } from './ModalWrapperHOC';

const CreateModalView = () => {
  return (
    <div>
      <div className='modal--row'>
        <div className='modal--col'>
          <Input
            name={'Имя'}
            maxLength={255}
            isRequired
            placeholder={'Введите имя задачи'}
          />
        </div>
        <div className='modal--col'>
          <Select name={'Категория'} placeholder={'Выберите категорию'} />
        </div>
      </div>
      <div className='modal--row'>
        <Input
          name={'Описание'}
          maxLength={1536}
          placeholder={'Введите описание задачи'}
        />
      </div>
    </div>
  );
};

const createTaskProps = {
  ...MODAL_PROPS.DEFAULT,
  title: 'Создание задачи',
};

export const CreateItemModal = () => {
  return <ModalWrapperHOC View={CreateModalView} {...createTaskProps} />;
};
