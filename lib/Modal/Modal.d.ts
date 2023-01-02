import React from "react";
type ModalProps = {
    children: React.ReactNode;
    isModalOpen: boolean;
    displayType?: string;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
declare const Modal: React.FC<ModalProps>;
export default Modal;
