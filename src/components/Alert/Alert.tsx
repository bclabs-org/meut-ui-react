import React from 'react';
import { XCircleIcon, XMarkIcon, ExclamationTriangleIcon } from '@heroicons/react/20/solid';

type AlertProps = {
  text: string;
  color?: string;
  setIsAlertOpen: React.Dispatch<React.SetStateAction<boolean>>;
  closeBtn?: boolean;
  animation?: string;
  className?: string;
};

const Alert: React.FC<AlertProps> = ({
  text,
  color = 'error',
  setIsAlertOpen,
  closeBtn = false,
  animation = '',
  className,
}: AlertProps) => {
  let alertBackground;
  let alertIcon;
  let alertText;
  switch (color) {
    case 'error':
      alertBackground = 'bg-pink-50';
      alertIcon = 'text-pink-600';
      alertText = 'text-pink-800';
      break;
    case 'attention':
      alertBackground = 'bg-yellow-50';
      alertIcon = 'text-yellow-400';
      alertText = 'text-yellow-800';
      break;
    default:
      throw Error('invalid color value');
  }

  let alertAnimation;
  switch (animation) {
    case 'fromTop':
      alertAnimation = 'top-[96px] show';
      break;
    case '':
      alertAnimation = '';
      break;
    default:
      throw Error('invalid animation value');
  }

  const renderIcon = () => {
    if (color === 'error') {
      return <XCircleIcon className={`${alertIcon} w-5 h-5`} aria-hidden="true" />;
    }
    return <ExclamationTriangleIcon className={`${alertIcon} w-5 h-5`} aria-hidden="true" />;
  };

  return (
    <div
      className={`${alertBackground} rounded-md p-4 w-max fixed z-10 ${alertAnimation} shadow-xl${
        className && ` ${className}`
      }`}
    >
      <div className="flex h-[20px]">
        <div>{renderIcon()}</div>
        <div className="ml-3">
          <p className={`${alertText} text-sm`}>{text}</p>
        </div>
        {closeBtn && (
          <div className="ml-3">
            <button
              type="button"
              className={`inline-flex items-center ${alertBackground} ${alertIcon}`}
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
