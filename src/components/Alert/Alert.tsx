import React, { ReactElement } from 'react';

import {
  XCircleIcon,
  XMarkIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/20/solid';

type AlertProps = {
  text: string;
  subText?: string;
  color?: 'error' | 'attention' | 'completion' | 'information';
  setIsAlertOpen: React.Dispatch<React.SetStateAction<boolean>>;
  closeBtn?: boolean;
  className?: string;
  isBackgroundShow?: boolean;
  textSmaller?: boolean;
  subTextSmaller?: boolean;
  timer?: string;
};

const Alert: React.FC<AlertProps> = ({
  text,
  subText,
  color = 'error',
  setIsAlertOpen,
  closeBtn = false,
  className,
  isBackgroundShow = true,
  textSmaller = false,
  subTextSmaller = false,
  timer,
}: AlertProps) => {
  let alertBackground;
  let alertIcon;
  let alertText;
  let alertSubText;
  switch (color) {
    case 'error':
      if (isBackgroundShow) {
        alertBackground = 'bg-pink-50';
      }
      alertIcon = 'text-warning';
      alertText = 'text-pink-800';
      alertSubText = 'text-pink-700';
      break;
    case 'attention':
      if (isBackgroundShow) {
        alertBackground = 'bg-amber-50';
      }
      alertIcon = 'text-amber-400';
      alertText = 'text-amber-800';
      alertSubText = 'text-amber-700';
      break;
    case 'completion':
      if (isBackgroundShow) {
        alertBackground = 'bg-secondary';
      }
      alertIcon = 'text-emerald-400';
      alertText = 'text-emerald-800';
      alertSubText = 'text-emerald-700';
      break;
    case 'information':
      if (isBackgroundShow) {
        alertBackground = 'bg-blue-50';
      }
      alertIcon = 'text-blue-400';
      alertText = 'text-blue-800';
      alertSubText = 'text-blue-800';
      break;
    default:
      throw Error('invalid color value');
  }

  const renderIcon = (): ReactElement => {
    if (color === 'error') {
      return <XCircleIcon className={`${alertIcon} w-5 h-5`} aria-hidden="true" />;
    }
    if (color === 'attention') {
      return <ExclamationTriangleIcon className={`${alertIcon} w-5 h-5`} aria-hidden="true" />;
    }
    if (color === 'completion') {
      return <CheckCircleIcon className={`${alertIcon} w-5 h-5`} aria-hidden="true" />;
    }
    return <InformationCircleIcon className={`${alertIcon} w-5 h-5`} aria-hidden="true" />;
  };

  return (
    <div
      className={`${alertBackground} rounded-md p-4 max-w-[343px] w-max ${
        isBackgroundShow && 'shadow-xl'
      } ${className}`}
    >
      <div className="flex gap-x-3">
        <div>{renderIcon()}</div>
        <div className="flex flex-col justify-center">
          <div className="flex">
            <p
              className={`${alertText} ${
                textSmaller ? 'text-xs' : 'text-sm'
              } font-medium break-words text-left`}
            >
              {text}
            </p>
            {timer && (
              <span
                className={`${textSmaller ? 'text-xs' : 'text-sm'} text-warning font-medium ml-1`}
              >
                {timer}
              </span>
            )}
          </div>
          {subText && (
            <p
              className={`mt-2 break-words ${alertSubText} ${
                subTextSmaller ? 'text-xs leading-5' : 'text-sm'
              }`}
            >
              {subText}
            </p>
          )}
        </div>
        {closeBtn && (
          <div className="h-5 w-5">
            <button
              type="button"
              className={`${alertBackground} ${alertIcon}`}
              onClick={(): void => setIsAlertOpen(false)}
              aria-label="Close Alert"
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
