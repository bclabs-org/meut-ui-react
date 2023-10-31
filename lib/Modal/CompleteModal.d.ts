import React from 'react';

type CompleteModalProps = {
  title: string;
  message: string;
  buttonText: string;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
declare const CompleteModal: React.FC<CompleteModalProps>;
export default CompleteModal;
