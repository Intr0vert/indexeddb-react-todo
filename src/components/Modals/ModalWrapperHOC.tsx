import { close } from 'assets';
import { actions } from 'ducks';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import './styles.sass';

type ModalWrapperHOCProps = {
  cancelText: string;
  cancelWidth: number;
  modalWidth: number;
  submitText: string;
  submitWidth: number;
  title: string;
  View: FC;
};

export const ModalWrapperHOC = ({
  cancelText,
  cancelWidth,
  modalWidth,
  submitText,
  submitWidth,
  title,
  View,
}: ModalWrapperHOCProps) => {
  const { closeModal } = actions;
  const dispatch = useDispatch();
  return (
    <div className={'modal--background'}>
      <div className={'modal--wrapper'} style={{ width: modalWidth }}>
        <div className='modal--close'>
          <img src={close} alt='close' onClick={() => dispatch(closeModal())} />
        </div>
        <h2 className={'modal--title'}>{title}</h2>
        <View />
        <div className='modal--footer'>
          <span
            className='modal--button modal--button-submit'
            style={{ width: submitWidth }}
          >
            {submitText}
          </span>
          <span
            className='modal--button modal--button-cancel'
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
