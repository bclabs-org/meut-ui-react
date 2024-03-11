import React from 'react';

import { CheckIcon } from '@heroicons/react/24/outline';

import Button from '../Button';

type ModalProps = {
  title: string;
  message: string;
  buttonText: string;
  setIsModalOpen: (value: boolean) => void;
  onButtonClick?: () => void;
};

const CompleteModal: React.FC<ModalProps> = ({
  title,
  message,
  buttonText,
  onButtonClick,
  setIsModalOpen,
}) => (
  <div className="flex flex-col gap-6">
    <div className="flex flex-col gap-5 items-center ">
      <div>
        <div className={`p-3 bg-emerald-100 rounded-full`}>
          <CheckIcon className="w-6 h-6 text-emerald-600 font-bold" />
        </div>
      </div>
      <div className={`flex flex-col items-center gap-2`}>
        <p className={`text-base text-gray-900 font-semibold`}>{title}</p>
        <p className={`text-sm font-normal text-center`}>{message}</p>
      </div>
    </div>
    <div className={`w-full`}>
      <Button
        full={true}
        size={`large`}
        color={`primary`}
        onClick={() => {
          if (onButtonClick) {
            onButtonClick();
          }
          setIsModalOpen(false);
        }}
      >
        {buttonText}
      </Button>
    </div>
  </div>
);

export default CompleteModal;
