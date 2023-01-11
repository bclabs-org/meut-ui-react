import React from 'react';
import classNames from 'classnames';

type ButtonProps = {
  children: React.ReactNode;
  size: 'small' | 'large';
  full?: boolean;
  disabled?: boolean;
  color?: 'primary' | 'secondary' | 'tertiary';
  handleClick?: () => void;
  [key: string]: any;
};

const Button: React.FC<ButtonProps> = ({
  children,
  color = 'primary',
  size,
  full = false,
  disabled,
  handleClick,
  ...rest
}: ButtonProps) => {
  let btnSize;
  switch (size) {
    case 'small':
      btnSize = 'h-9 text-sm py-2 px-4';
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
      btnColor = 'bg-primary text-onPrimary hover:bg-primary-hover active:bg-primary-active';
      break;
    case 'secondary':
      btnColor =
        'bg-secondary text-onSecondary hover:bg-secondary-hover active:bg-secondary-active';
      break;
    case 'tertiary':
      btnColor = 'bg-tertiary text-onTertiary hover:bg-tertiary-hover active:bg-tertiary-active';
      break;
    default:
      throw Error('invalid color value');
  }

  const styleClass = classNames(btnSize, btnColor);

  return (
    <button
      {...rest}
      disabled={disabled}
      onClick={handleClick}
      className={`${styleClass} ${
        full && 'w-full'
      } rounded font-semibold flex justify-center items-center disabled:opacity-40`}
    >
      {children}
      원복
    </button>
  );
};

export default Button;
