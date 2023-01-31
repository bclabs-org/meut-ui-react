import React from 'react';

type CardProps = {
  children: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ children }) => (
  <div className="flex flex-col col-span-3 gap-y-5 cursor-pointer p-5 rounded-xl border border-gray-300 bg-tertiary hover:border-2 hover:border-primary hover:m-[-1px] hover:bg-white hover:active:border hover:active:border-gray-300 hover:active:bg-tertiary hover:active:m-0">
    {children}
  </div>
);

export default Card;
