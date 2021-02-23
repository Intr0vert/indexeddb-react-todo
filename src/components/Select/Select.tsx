import { arrow } from 'assets';
import { actions } from 'ducks';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'types';
import './styles.sass';

type SelectProps = {
  name: string;
};

export const Select = ({ name }: SelectProps) => {
  const dispatch = useDispatch();
  const { changeField } = actions;
  const { categories, categoryId } = useSelector(
    ({ categoryReducer, modalReducer }: State) => ({
      categories: categoryReducer.categories,
      categoryId: modalReducer.modalData.categoryId,
    })
  );
  const [isOpen, changeIsOpen] = useState(false);
  const actual = categoryId
    ? categories.find((el) => el.id === categoryId)?.name
    : 'Выберите категорию';

  return (
    <label
      className={`input--wrapper select--wrapper`}
      onClick={() => {
        changeIsOpen((s) => !s);
      }}
    >
      {name && <span className={'input--name'}>{name}</span>}
      <div className={'select--placeholder'}>
        <div
          className={
            categoryId
              ? 'select--placeholder-nameChanged'
              : 'select--placeholder-name'
          }
        >
          {actual}
        </div>
        <img
          className={isOpen ? 'select--arrow-active' : ''}
          src={arrow}
          alt='arrow'
        />
      </div>
      {isOpen && (
        <>
          <div className={'select--options'}>
            {categories.map((category) => (
              <div
                key={category.id}
                onClick={(e) => {
                  e.stopPropagation();

                  dispatch(
                    changeField({ field: 'categoryId', value: category.id })
                  );
                  changeIsOpen(false);
                }}
                className={'select--option'}
              >
                {category.name}
              </div>
            ))}
          </div>
        </>
      )}
    </label>
  );
};
