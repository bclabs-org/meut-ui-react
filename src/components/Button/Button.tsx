import React from 'react';
import classNames from 'classnames';

type ButtonProps = {
  children: React.ReactNode;
  size: string;
  disabled?: boolean;
  color?: string;
  handleClick?: () => void;
  [key: string]: any;
};

const Button: React.FC<ButtonProps> = ({
  children,
  color = 'primary',
  size,
  disabled,
  handleClick,
  ...rest
}: ButtonProps) => {
  let btnSize;
  switch (size) {
    case 'x-large':
      btnSize = 'w-full h-[64px] text-[20px]';
      break;
    case 'large':
      btnSize = 'h-[64px] text-[20px] py-[20px] px-[40px]';
      break;
    case 'medium':
      btnSize = 'h-[48px] text-[16px] py-[14px] px-[24px]';
      break;
    case 'small':
      btnSize = 'h-[32px] text-[14px] py-[8px] px-[16px]';
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
      btnColor = 'bg-secondary text-onSecondary hover:bg-secondary-hover active:bg-secondary-active';
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
      className={`${styleClass} rounded-100 font-bold flex justify-center items-center disabled:opacity-40`}
    >
      {children}
    </button>
  );
};

export default Button;
