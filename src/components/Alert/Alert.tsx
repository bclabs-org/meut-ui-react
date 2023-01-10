import React from 'react';
import { XCircleIcon, XMarkIcon, ExclamationTriangleIcon } from '@heroicons/react/20/solid';

type AlertProps = {
  text: string;
  subText?: string;
  color?: string;
  setIsAlertOpen: React.Dispatch<React.SetStateAction<boolean>>;
  closeBtn?: boolean;
  animation?: string;
  className?: string;
};

const Alert: React.FC<AlertProps> = ({
  text,
  subText,
  color = 'error',
  setIsAlertOpen,
  closeBtn = false,
  animation = '',
  className,
}: AlertProps) => {
  let alertBackground;
  let alertIcon;
  let alertText;
  let alertSubText;
  switch (color) {
    case 'error':
      alertBackground = 'bg-pink-50';
      alertIcon = 'text-pink-600';
      alertText = 'text-pink-800';
      alertSubText = 'text-pink-700';
      break;
    case 'attention':
      alertBackground = 'bg-yellow-50';
      alertIcon = 'text-yellow-400';
      alertText = 'text-yellow-800';
      alertSubText = 'text-yellow-700';
      break;
    default:
      throw Error('invalid color value');
  }

  let alertAnimation;
  switch (animation) {
    case 'fromTop':
      alertAnimation = 'top-24 show';
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
      className={`${alertBackground} ${alertAnimation} ${className} rounded-md p-4 w-max fixed z-10 shadow-xl`}
    >
      <div className={`flex ${!subText && 'h-5'}`}>
        <div>{renderIcon()}</div>
        <div className={`ml-3 text-sm`}>
          <p className={`${alertText} font-medium`}>{text}</p>
          {subText && <p className={`mt-2 ${alertSubText}`}>{subText}</p>}
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
