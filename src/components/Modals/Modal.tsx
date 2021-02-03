import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal');

type ModalProps = {
  children: JSX.Element;
};

export const Modal = ({ children }: ModalProps) => {
  const el = document.createElement('div');

  useEffect(() => {
    modalRoot?.append(el);
    return () => {
      modalRoot?.removeChild(el);
    };
  }, [children, el]);

  return createPortal(children, el);
};
