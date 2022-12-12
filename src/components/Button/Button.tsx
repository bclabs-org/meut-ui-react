import React from 'react';
import classNames from 'classnames';

type ButtonProps = {
    children: React.ReactNode,
    color: string,
    size: string
};

const Button = ({ children, color, size }: ButtonProps) => {
  let btnSize = '';
  if (size === 'large') {
    btnSize = 'min-w-[142px] h-[64px] text-[20px] py-[20px] px-[40px]';
  } else if (size === 'medium') {
    btnSize = 'min-w-[98px] h-[48px] text-[16px] py-[14px] px-[24px]';
  } else if (size === 'small') {
    btnSize = 'min-w-[76px] h-[32px] text-[14px] py-[8px] px-[16px]';
  }

  let btnColor;
  if (color === 'bg-primary') {
    btnColor = 'bg-primary hover:bg-primary-hover active:bg-primary-active';
  } else if (color === 'bg-secondary') {
    btnColor = 'bg-secondary hover:bg-secondary-hover active:bg-secondary-active';
  } else if (color === 'bg-tertiary') {
    btnColor = 'bg-tertiary hover:bg-tertiary-hover active:bg-tertiary-active';
  }
  const styleClass = classNames(btnColor, btnSize);

  const handleClick = (e: React.MouseEvent) => {

  };

  return <button onClick={handleClick} className={`${styleClass} text-white rounded-100 font-bold`}>
        {children}
    </button>;
};
export default Button;
