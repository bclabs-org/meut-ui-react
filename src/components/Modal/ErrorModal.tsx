import React from 'react';

import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

import Button from '../Button';

type ModalProps = {
  title: string;
  message: string;
  leftButtonText: string;
  rightButtonText: string;
  leftButtonOnClick: () => void;
  rightButtonOnClick?: () => void;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ErrorModal: React.FC<ModalProps> = ({
  title,
  message,
  leftButtonText,
  rightButtonText,
  rightButtonOnClick,
  setIsModalOpen,
  leftButtonOnClick,
}) => (
  <div className="flex flex-col gap-6">
    <div className="flex flex-col gap-5 items-center ">
      <div>
        <div className={`p-3 bg-pink-50 rounded-full`}>
          <ExclamationTriangleIcon className="w-6 h-6 text-pink-600 font-bold" />
        </div>
      </div>
      <div className={`flex flex-col items-center justify-center gap-2`}>
        <p className={`text-base text-gray-900 font-semibold`}>{title}</p>
        <p className={`text-sm font-normal text-center`}>{message}</p>
      </div>
    </div>
    <div className={`flex items-center justify-center w-full gap-3`}>
      <Button full={true} size={`large`} color={`tertiary`} onClick={leftButtonOnClick}>
        {leftButtonText}
      </Button>
      <Button
        full={true}
        size={`large`}
        color={`primary-error`}
        onClick={(): void => {
          if (rightButtonOnClick) {
            rightButtonOnClick();
          }
          setIsModalOpen(false);
        }}
      >
        <p className={`whitespace-nowrap`}>{rightButtonText}</p>
      </Button>
    </div>
  </div>
);

export default ErrorModal;
