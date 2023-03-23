import React from 'react';
type ModalProps = {
    children: React.ReactNode;
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    widthSize?: string;
    onOutsideClick?: boolean;
};
declare const Modal: React.FC<ModalProps>;
export default Modal;
