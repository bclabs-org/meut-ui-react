import React from 'react';

type CardProps = {
  children: React.ReactNode;
  color?: string;
  className?: string;
  size?: string;
};

const Card: React.FC<CardProps> = ({ children, color, className, size = 'w-[343px]' }) => {
  let cardColor = 'bg-tertiary';
  let cardHoverColor = 'hover:bg-white';
  let cardActiveColor = 'hover:active:bg-tertiary';
  let borderHoverColor = 'hover:ring-2 hover:ring-primary';
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
      borderHoverColor = 'hover:ring-2 hover:ring-warning';
      break;
    default:
      cardColor = 'bg-tertiary';
      cardHoverColor = 'hover:bg-white';
      cardActiveColor = 'hover:active:bg-tertiary';
      break;
  }

  return (
    <div
      className={`flex flex-col col-span-3 ${size} gap-y-5 cursor-pointer p-5 rounded-xl ring-1 ring-gray-300 ${cardColor} hover:ring-2 hover:ring-primary ${borderHoverColor} ${cardHoverColor} hover:active:ring-1 hover:active:ring-gray-300 ${cardActiveColor} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
