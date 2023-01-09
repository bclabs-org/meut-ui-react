import React from 'react';

type CardProps = {
  children: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ children }) => (
  <div className="w-[343px] cursor-pointer p-5 rounded-400 border border-gray-300 bg-tertiary hover:border-2 hover:border-primary hover:bg-white active:border active:border-gray-300 active:bg-tertiary">
    {children}
  </div>
);

export default Card;
