import { arrow } from 'assets';
import './styles.sass';

type SelectProps = {
  name: string;
  placeholder: string;
};

export const Select = ({ name, placeholder }: SelectProps) => {
  const active = false;
  return (
    <label className={`input--wrapper`}>
      {name && <span className={'input--name'}>{name}</span>}
      <div className={'select--placeholder'}>
        <div className={'select--placeholder-name'}>{placeholder}</div>
        <img
          className={active ? 'select--arrow-active' : ''}
          src={arrow}
          alt='arrow'
        />
      </div>
      {active && (
        <div className={'select--options'}>
          <div className={'select--option'}>text</div>
        </div>
      )}
    </label>
  );
};
