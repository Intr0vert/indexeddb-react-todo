import { Input } from 'components';
import { actions } from 'ducks';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'types';
import { validateInput } from '../handlers';

export const View = () => {
  const { formData, isNameError } = useSelector(({ modalReducer }: State) => ({
    formData: modalReducer.modalData,
    isNameError: modalReducer.isNameError,
  }));
  const dispatch = useDispatch();
  const { changeField } = actions;

  return (
    <div>
      <div className={'modal--row'}>
        <Input
          isError={isNameError}
          value={formData.name}
          onBlur={() => dispatch(validateInput())}
          onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(changeField({ field: 'name', value: e.target.value }));
          }}
          name={'Имя'}
          maxLength={255}
          isRequired
          placeholder={'Введите имя категории'}
        />
      </div>
      <div className={'modal--row'}>
        <Input
          value={formData.description}
          onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(
              changeField({ field: 'description', value: e.target.value })
            );
          }}
          name={'Описание'}
          maxLength={1536}
          placeholder={'Введите описание категории'}
        />
      </div>
    </div>
  );
};
