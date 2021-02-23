import { Input, Select } from 'components';
import { actions } from 'ducks';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'types';

export const View = () => {
  const { formData, isNameError } = useSelector(({ modalReducer }: State) => ({
    formData: modalReducer.modalData,
    isNameError: modalReducer.isNameError,
  }));
  const dispatch = useDispatch();
  const { changeField } = actions;
  return (
    <div>
      <div className='modal--row'>
        <div className='modal--col'>
          <Input
            isError={isNameError}
            value={formData.name}
            onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) => {
              dispatch(changeField({ field: 'name', value: e.target.value }));
            }}
            name={'Имя'}
            maxLength={255}
            isRequired
            placeholder={'Введите имя задачи'}
          />
        </div>
        <div className='modal--col'>
          <Select name={'Категория'} />
        </div>
      </div>
      <div className='modal--row'>
        <Input
          value={formData.description}
          onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(
              changeField({ field: 'description', value: e.target.value })
            );
          }}
          name={'Описание'}
          maxLength={1536}
          placeholder={'Введите описание задачи'}
        />
      </div>
    </div>
  );
};
