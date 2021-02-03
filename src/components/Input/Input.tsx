import { useState } from 'react';
import './styles.sass';

type InputProps = {
  isRequired?: boolean;
  maxLength: number;
  name?: string;
  placeholder: string;
};

export const Input = ({
  isRequired,
  maxLength,
  name,
  placeholder,
}: InputProps) => {
  const [text, changeText] = useState('');

  return (
    <label className={`input--wrapper`}>
      {name && (
        <span className={'input--name'}>
          {name}
          {isRequired && <span className={'input--name-red'}>*</span>}
        </span>
      )}
      <input
        type='text'
        value={text}
        onChange={(e) => changeText(e.target.value)}
        className={'input--input'}
        placeholder={placeholder}
        maxLength={maxLength}
      />
    </label>
  );
};
