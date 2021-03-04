import { arrow } from 'assets';
import { useState } from 'react';
import { Category } from 'types';
import './styles.sass';

type SelectProps = {
  categories: Category[];
  categoryId: number;
  name: string;
  onSelect: Function;
};

export const Select = ({
  categories,
  categoryId,
  name,
  onSelect,
}: SelectProps) => {
  const [isOpen, changeIsOpen] = useState(false);
  const actual = categoryId
    ? categories.find((el) => el.id === categoryId)?.name
    : 'Выберите категорию';

  const onSelectClick = (e: React.MouseEvent, category: Category) => {
    e.stopPropagation();

    onSelect(category);
    changeIsOpen(false);
  };
  const onLabelClick = () => changeIsOpen((s) => !s);

  return (
    <label className={`input--wrapper select--wrapper`} onClick={onLabelClick}>
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
      {isOpen && Boolean(categories.length) && (
        <>
          <div className={'select--options'}>
            {categories.map((category) => (
              <div
                key={category.id}
                onClick={(e) => onSelectClick(e, category)}
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
