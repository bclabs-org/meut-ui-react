import React, {useEffect} from 'react';
import { XCircleIcon, XMarkIcon, ExclamationTriangleIcon } from '@heroicons/react/20/solid';

type AlertProps = {
  text: string;
  subText?: string;
  color?: 'error' | 'attention';
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

  const renderIcon = () => {
    if (color === 'error') {
      return <XCircleIcon className={`${alertIcon} w-5 h-5`} aria-hidden="true" />;
    }
    return <ExclamationTriangleIcon className={`${alertIcon} w-5 h-5`} aria-hidden="true" />;
  };

  return (
    <div
      className={`${alertBackground} ${className} rounded-md p-4 w-max fixed z-10 shadow-xl`}
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
