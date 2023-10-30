import React from 'react';

import classNames from 'classnames';

export type BadgeColor = 'yellow' | 'pink' | 'indigo' | 'gray' | 'emerald' | 'white';

type BadgeProps = {
  text?: string;
  color: BadgeColor;
  type?: 'default' | 'increase';
  customClassName?: string;
};

const Badge: React.FC<BadgeProps> = ({
  text = '',
  color = 'white',
  type = 'default',
  customClassName = '',
}: BadgeProps) => {
  let textColor;
  let bgColor;
  let borderColor;
  let border = 'border';
  let rounded = 'rounded-3xl';
  let fontSize = 'text-xs leading-4';
  let fontWeight = 'font-semibold';
  let paddingY = 'py-1';
  let paddingX = 'px-3';

  switch (color) {
    case 'yellow':
      bgColor = 'bg-yellow-50';
      textColor = 'text-yellow-600';
      borderColor = 'border-yellow-100';
      break;
    case 'pink':
      bgColor = 'bg-pink-50';
      textColor = 'text-pink-600';
      borderColor = 'border-pink-100';
      break;
    case 'indigo':
      bgColor = 'bg-indigo-50';
      textColor = 'text-indigo-600';
      borderColor = 'border-indigo-100';
      break;
    case 'gray':
      bgColor = 'bg-gray-50';
      textColor = 'text-gray-600';
      borderColor = 'border-gray-100';
      break;
    case 'emerald':
      bgColor = 'bg-emerald-50';
      textColor = 'text-emerald-600';
      borderColor = 'border-emerald-100';
      break;
    default:
      bgColor = 'bg-white';
      textColor = 'text-gray-700';
      borderColor = 'border-gray-200';
      break;
  }

  if (type === 'increase') {
    bgColor = 'bg-emerald-100';
    textColor = 'text-emerald-800';
    borderColor = '';
    border = '';
    rounded = 'rounded-xl';
    fontSize = 'text-sm';
    fontWeight = 'font-medium';
    paddingY = 'py-[2px]';
    paddingX = 'px-[10px]';
  }

  if (text) {
    return (
      <span
        className={classNames(
          paddingX,
          paddingY,
          fontSize,
          fontWeight,
          border,
          rounded,
          bgColor,
          textColor,
          borderColor,
          customClassName
        )}
      >
        {text}
      </span>
    );
  }

  return null;
};

export default Badge;
