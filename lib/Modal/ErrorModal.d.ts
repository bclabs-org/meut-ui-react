import React from 'react';

type ModalProps = {
    title: string;
    message: string;
    leftButtonText: string;
    rightButtonText: string;
    leftButtonOnClick: () => void;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
declare const ErrorModal: React.FC<ModalProps>;
export default ErrorModal;
