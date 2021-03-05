import { useDispatch } from 'react-redux';
import { close } from 'assets';
import './styles.sass';

type ModalWrapperHOCProps = {
  cancelText: string;
  cancelWidth: number;
  clearModal: () => void;
  children: JSX.Element;
  modalWidth: number;
  onSubmit: Function;
  setModal: Function;
  submitText: string;
  submitWidth: number;
  title: string;
};

export const ModalWrapperHOC = ({
  cancelText,
  cancelWidth,
  clearModal,
  children,
  onSubmit,
  modalWidth,
  submitText,
  submitWidth,
  title,
}: ModalWrapperHOCProps) => {
  const dispatch = useDispatch();

  return (
    <div className={'modal--background'}>
      <div className={'modal--wrapper'} style={{ width: modalWidth }}>
        <div className={'modal--close'}>
          <img src={close} alt='close' onClick={clearModal} />
        </div>
        <h2 className={'modal--title'}>{title}</h2>
        {children}
        <div className={'modal--footer'}>
          <span
            onClick={() => dispatch(onSubmit(clearModal))}
            className={'modal--button modal--button-submit'}
            style={{ width: submitWidth }}
          >
            {submitText}
          </span>
          <span
            className={'modal--button modal--button-cancel'}
            onClick={clearModal}
            style={{ width: cancelWidth }}
          >
            {cancelText}
          </span>
        </div>
      </div>
    </div>
  );
};
