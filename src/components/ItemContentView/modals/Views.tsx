import { Input, Select } from 'components';
import { actions } from 'ducks';
import { useDispatch, useSelector } from 'react-redux';
import { Category, State } from 'types';

export const View = () => {
  const { changeField } = actions;
  const { categories, categoryId, formData, isNameError } = useSelector(
    ({ categoryReducer, modalReducer }: State) => ({
      categories: categoryReducer.categories,
      categoryId: modalReducer.modalData.categoryId,
      formData: modalReducer.modalData,
      isNameError: modalReducer.isNameError,
    })
  );
  const dispatch = useDispatch();
  const onSelect = (category: Category) => {
    dispatch(changeField({ field: 'categoryId', value: category.id }));
  };

  return (
    <div>
      <div className={'modal--row'}>
        <div className={'modal--col'}>
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
        <div className={'modal--col'}>
          <Select
            name={'Категория'}
            categories={categories}
            categoryId={categoryId}
            onSelect={onSelect}
          />
        </div>
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
          placeholder={'Введите описание задачи'}
        />
      </div>
    </div>
  );
};
