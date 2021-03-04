import { useDispatch } from 'react-redux';
import { close } from 'assets';
import { actions } from 'ducks';
import './styles.sass';

type ModalWrapperHOCProps = {
  cancelText: string;
  cancelWidth: number;
  children: JSX.Element;
  modalWidth: number;
  onSubmit: () => void;
  submitText: string;
  submitWidth: number;
  title: string;
};

export const ModalWrapperHOC = ({
  cancelText,
  cancelWidth,
  children,
  onSubmit,
  modalWidth,
  submitText,
  submitWidth,
  title,
}: ModalWrapperHOCProps) => {
  const { closeModal } = actions;
  const dispatch = useDispatch();

  return (
    <div className={'modal--background'}>
      <div className={'modal--wrapper'} style={{ width: modalWidth }}>
        <div className={'modal--close'}>
          <img src={close} alt='close' onClick={() => dispatch(closeModal())} />
        </div>
        <h2 className={'modal--title'}>{title}</h2>
        {children}
        <div className={'modal--footer'}>
          <span
            onClick={() => dispatch(onSubmit())}
            className={'modal--button modal--button-submit'}
            style={{ width: submitWidth }}
          >
            {submitText}
          </span>
          <span
            className={'modal--button modal--button-cancel'}
            onClick={() => dispatch(closeModal())}
            style={{ width: cancelWidth }}
          >
            {cancelText}
          </span>
        </div>
      </div>
    </div>
  );
};
