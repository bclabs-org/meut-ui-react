import React, { useState } from 'react';
import classNames from 'classnames';

type ButtonProps = {
    children: React.ReactNode,
    color: string,
    size: string
};

const Button = ({ children, color, size }: ButtonProps) => {
  let minWidth = '';
  let height = '';

  if (size === 'large') {
    minWidth = 'min-w-[142px]';
    height = 'h-[63px]';
  } else if (size === 'medium') {
    minWidth = 'min-w-[98px]';
    height = 'h-[48px]';
  } else if (size === 'small') {
    minWidth = 'min-w-[76px]';
    height = 'h-[32px]';
  }

  let btnColor;
  if (color === 'bg-primary') {
    btnColor = 'bg-primary hover:bg-primary-hover active:bg-primary-active';
  } else if (color === 'bg-secondary') {
    btnColor = 'bg-secondary hover:bg-secondary-hover active:bg-secondary-active';
  } else if (color === 'bg-tertiary') {
    btnColor = 'bg-tertiary hover:bg-tertiary-hover active:bg-tertiary-active';
  }
  const styleClass = classNames(btnColor, minWidth, height);

  const handleClick = (e: React.MouseEvent) => {

  };

  return <button onClick={handleClick} className={`${styleClass} inline-flex justify-center items-center text-white rounded-100 px-4 py-2`}>
        {children}
    </button>;
};

export default Button;