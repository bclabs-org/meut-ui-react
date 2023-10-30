import React from 'react';

type ModalProps = {
  children: React.ReactNode;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  widthSize?: 'x-small' | 'small' | 'medium' | 'large' | 'x-large';
  onOutsideClick?: boolean;
  isCoverHeader?: boolean;
};
declare const Modal: React.FC<ModalProps>;
export default Modal;
