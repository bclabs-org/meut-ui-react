import React from 'react';

import classNames from 'classnames';

type ButtonProps = {
  children: React.ReactNode;
  size: 'small' | 'medium' | 'large';
  full?: boolean;
  disabled?: boolean;
  color?: 'primary' | 'secondary' | 'tertiary' | 'primary-error' | 'secondary-error';
  onClick?: () => void;
  isProcessing?: boolean;
  [key: string]: any;
};

const Button: React.FC<ButtonProps> = ({
  children,
  color = 'primary',
  size,
  full = false,
  disabled,
  onClick,
  isProcessing,
  ...rest
}: ButtonProps) => {
  let btnSize;
  switch (size) {
    case 'small':
      btnSize = 'h-9 text-sm py-2 px-4';
      break;
    case 'medium':
      btnSize = 'h-10 py-2 px-5';
      break;
    case 'large':
      btnSize = 'h-12 py-3 px-6';
      break;
    default:
      throw Error('invalid size value');
  }

  let btnColor;
  switch (color) {
    case 'primary':
      btnColor =
        'bg-primary text-onPrimary hover:bg-primary-hover active:bg-primary-focus disabled:hover:bg-primary';
      break;
    case 'secondary':
      btnColor =
        'bg-secondary text-onSecondary hover:bg-secondary-hover active:bg-secondary-focus disabled:hover:bg-secondary';
      break;
    case 'tertiary':
      btnColor =
        'bg-tertiary text-onTertiary hover:bg-tertiary-hover active:bg-tertiary-focus disabled:hover:bg-tertiary';
      break;
    case 'primary-error':
      btnColor =
        'bg-primary-error text-onPrimaryError hover:bg-primary-error-hover active:bg-primary-error-focus disabled:hover:bg-error';
      break;
    case 'secondary-error':
      btnColor =
        'bg-secondary-error text-onSecondaryError hover:bg-secondary-error-hover active:bg-secondary-error-focus disabled:hover:bg-error';
      break;
    default:
      throw Error('invalid color value');
  }

  const styleClass = classNames(btnSize, btnColor);

  return (
    <button
      {...rest}
      disabled={disabled}
      onClick={isProcessing ? undefined : onClick}
      className={`${styleClass} ${full ? 'w-full' : ''} ${
        isProcessing ? 'opacity-40 cursor-not-allowed' : ''
      } rounded font-semibold flex justify-center items-center disabled:opacity-40`}
    >
      {isProcessing ? (
        <>
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <span>Processing...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
