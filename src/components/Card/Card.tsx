import React from 'react';

type CardProps = {
  children: React.ReactNode;
  size?: 'medium' | 'large';
};

const Card: React.FC<CardProps> = ({ children, size = 'medium' }) => {
  let cardSize;
  switch (size) {
    case 'medium':
      cardSize = 'w-[343px]';
      break;
    case 'large':
      cardSize = 'w-[389.5px]';
      break;
    default:
      cardSize = 'w-[343px]';
  }
  return (
  <div className={`${cardSize} grid gap-y-5 cursor-pointer p-5 rounded-400 border border-gray-300 bg-tertiary hover:border-2 hover:border-primary hover:bg-white hover:active:border hover:active:border-gray-300 hover:active:bg-tertiary`}>
    {children}
  </div>
)};

export default Card;
