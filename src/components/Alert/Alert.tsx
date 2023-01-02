import React from 'react';
import { XCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'

type AlertProps = {
  text: string;
  color?: string;
};

const Alert: React.FC<AlertProps> = ({ text, color = 'error' }: AlertProps) => {
  let alertBackground;
  let alertIcon;
  let alertText;

  switch (color) {
    case 'error':
      alertBackground = 'bg-pink-50';
      alertIcon = 'text-pink-600';
      alertText = 'text-pink-800';
      break;
    default:
      throw Error('invalid color value');
  }

  return (
    <div className={`${alertBackground} rounded-md p-4 w-max`}>
      <div className="flex h-[20px]">
        <div>
          <XCircleIcon className={`${alertIcon} h-5 w-5`} aria-hidden="true" />
        </div>
        <div className="ml-3">
          <p className={`${alertText} text-sm font-medium`}>{text}</p>
        </div>
        <div className="ml-3">
            <button
              type="button"
              className={`inline-flex items-center ${alertBackground} ${alertIcon}`}
            >
              <XMarkIcon className="h-5 w-5" aria-hidden="true" />
            </button>
        </div>
      </div>
    </div>
  )
};

export default Alert;
