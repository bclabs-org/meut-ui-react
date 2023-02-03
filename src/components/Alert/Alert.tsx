import React from 'react';
import {
  XCircleIcon,
  XMarkIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
} from '@heroicons/react/20/solid';

type AlertProps = {
  text: string;
  subText?: string;
  color?: 'error' | 'attention' | 'completion';
  isAlertOpen: boolean;
  setIsAlertOpen: React.Dispatch<React.SetStateAction<boolean>>;
  closeBtn?: boolean;
  className?: string;
};

const Alert: React.FC<AlertProps> = ({
  text,
  subText,
  color = 'error',
  isAlertOpen,
  setIsAlertOpen,
  closeBtn = false,
  className,
}: AlertProps) => {
  let alertBackground;
  let alertIcon;
  let alertCloseBtn;
  let alertText;
  let alertSubText;
  switch (color) {
    case 'error':
      alertBackground = 'bg-pink-50';
      alertIcon = 'text-warning';
      alertCloseBtn = 'text-warning';
      alertText = 'text-pink-800';
      alertSubText = 'text-pink-700';
      break;
    case 'attention':
      alertBackground = 'bg-yellow-50';
      alertIcon = 'text-yellow-400';
      alertCloseBtn = 'text-yellow-600';
      alertText = 'text-yellow-800';
      alertSubText = 'text-yellow-700';
      break;
    case 'completion':
      alertBackground = 'bg-secondary';
      alertIcon = 'text-emerald-400';
      alertCloseBtn = 'text-primary';
      alertText = 'text-emerald-800';
      alertSubText = 'text-emerald-700';
      break;
    default:
      throw Error('invalid color value');
  }

  const renderIcon = () => {
    if (color === 'error') {
      return <XCircleIcon className={`${alertIcon} w-5 h-5`} aria-hidden="true" />;
    }
    if (color === 'attention') {
      return <ExclamationTriangleIcon className={`${alertIcon} w-5 h-5`} aria-hidden="true" />;
    }
    return <CheckCircleIcon className={`${alertIcon} w-5 h-5`} aria-hidden="true" />;
  };

  return (
    <div
      className={`${alertBackground} rounded-md p-4 max-w-[343px] fixed z-10 shadow-xl ${className}`}
    >
      <div className="flex gap-x-3">
        <div>{renderIcon()}</div>
        <div className="text-sm flex flex-col justify-center">
          <p className={`${alertText} font-medium break-words text-left`}>{text}</p>
          {subText && <p className={`mt-2 break-words ${alertSubText}`}>{subText}</p>}
        </div>
        {closeBtn && (
          <div className="h-5 w-5">
            <button
              type="button"
              className={`${alertBackground} ${alertIcon}`}
              onClick={() => setIsAlertOpen(false)}
            >
              <XMarkIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Alert;
