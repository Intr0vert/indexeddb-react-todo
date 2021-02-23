import './styles.sass';

type InputProps = {
  isError?: boolean;
  isRequired?: boolean;
  maxLength: number;
  name?: string;
  onBlur?: () => void;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string;
};

export const Input = ({
  isError,
  isRequired,
  maxLength,
  name,
  onBlur,
  onChangeHandler,
  placeholder,
  value,
}: InputProps) => {
  return (
    <label
      className={`input--wrapper ${isError ? 'input--wrapper-error' : ''}`}
    >
      {name && (
        <span className={'input--name'}>
          {name}
          {isRequired && <span className={'input--name-red'}>*</span>}
        </span>
      )}
      <input
        type='text'
        value={value}
        onBlur={onBlur}
        onChange={onChangeHandler}
        className={'input--input'}
        placeholder={placeholder}
        maxLength={maxLength}
      />
    </label>
  );
};
