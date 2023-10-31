import React from 'react';

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

import classNames from 'classnames';

type ButtonProps = {
  text: string;
  disabled?: boolean;
  color?:
    | 'default'
    | 'emerald-500'
    | 'emerald-600'
    | 'emerald-700'
    | 'emerald-900'
    | 'pink-600'
    | 'pink-700'
    | 'pink-900'
    | 'blue-700'
    | 'blue-800'
    | 'blue-900'
    | 'gray-700'
    | 'gray-800'
    | 'gray-900';

  onClick?: () => void;
  underline?: boolean;
  size?: 'small' | 'large';
  icon?: 'right-arrow' | 'left-arrow' | 'top-right-square';
};

const TextButton: React.FC<ButtonProps> = ({
  text,
  color = 'default',
  size = 'small',
  disabled,
  onClick,
  underline,
  icon,
}: ButtonProps) => {
  const isIconRight = icon === 'right-arrow';
  const isIconLeft = icon === 'left-arrow';
  const isIconTopRightSquare = icon === 'top-right-square';

  let btnColor;
  switch (color) {
    case 'emerald-500':
      btnColor = 'text-emerald-500';
      break;
    case 'emerald-600':
      btnColor = 'text-emerald-600';
      break;
    case 'emerald-700':
      btnColor = 'text-emerald-700';
      break;
    case 'emerald-900':
      btnColor = 'text-emerald-900';
      break;
    case 'pink-600':
      btnColor = 'text-pink-600';
      break;
    case 'pink-700':
      btnColor = 'text-pink-700';
      break;
    case 'pink-900':
      btnColor = 'text-pink-900';
      break;
    case 'blue-700':
      btnColor = 'text-blue-700';
      break;
    case 'blue-800':
      btnColor = 'text-blue-800';
      break;
    case 'blue-900':
      btnColor = 'text-blue-900';
      break;
    case 'gray-700':
      btnColor = 'text-gray-700';
      break;
    case 'gray-800':
      btnColor = 'text-gray-800';
      break;
    case 'gray-900':
      btnColor = 'text-gray-900';
      break;
    case 'default':
      btnColor = 'text-gray-700';
      break;
    default:
      throw Error('invalid color value');
  }

  let fontSize;
  switch (size) {
    case 'small':
      fontSize = 'text-sm';
      break;
    case 'large':
      fontSize = 'text-base';
      break;
    default:
      throw Error('invalid size value');
  }

  const fontClass = classNames(btnColor, fontSize, underline ? 'underline' : '');

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex justify-center items-center h-6 ${
        size === 'large' ? 'gap-2' : 'gap-1'
      } ${fontClass}  disabled:opacity-40`}
    >
      {isIconLeft && <ChevronLeftIcon className={`w-6 h-6`} />}
      <p className={`leading-5 text-center font-medium`}>{text}</p>
      {isIconRight && <ChevronRightIcon className={`w-6 h-6 `} />}
      {isIconTopRightSquare && (
        <div>
          <ArrowTopRightOnSquareIcon className={`relative -top-0.5 w-6 h-6`} />
        </div>
      )}
    </button>
  );
};

export default TextButton;
