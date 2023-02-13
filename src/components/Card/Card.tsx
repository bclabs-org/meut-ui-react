import React from 'react';

type CardProps = {
  children: React.ReactNode;
  color?: string;
  className?: string;
  size?: string;
};

const Card: React.FC<CardProps> = ({ children, color, className, size='medium' }) => {
  let cardColor = 'bg-tertiary';
  let cardHoverColor = 'hover:bg-white';
  let cardActiveColor = 'hover:active:bg-tertiary';
  let borderHoverColor = 'hover:border-primary';
  switch (color) {
    case 'BuyRequest':
      cardColor = 'bg-gradient-buy';
      cardHoverColor = 'hover:bg-gradient-buy-hover';
      cardActiveColor = 'hover:active:bg-gradient-buy';
      break;
    case 'BuySell':
      cardColor = 'bg-gradient-sell';
      cardHoverColor = 'hover:bg-gradient-sell-hover';
      cardHoverColor = 'hover:active:bg-gradient-sell';
      borderHoverColor = 'hover:border-pink-600';
      break;
    default:
      cardColor = 'bg-tertiary';
      cardHoverColor = 'hover:bg-white';
      cardActiveColor = 'hover:active:bg-tertiary';
      break;
  }

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
    <div
      className={`flex flex-col col-span-3 ${cardSize} gap-y-5 cursor-pointer p-5 rounded-xl border border-gray-300 ${cardColor} hover:border-2 ${borderHoverColor} hover:m-[-1px] ${cardHoverColor} hover:active:border hover:active:border-gray-300 ${cardActiveColor} hover:active:m-0 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
