import React from 'react';

type CardProps = {
  children: React.ReactNode
}

const Card: React.FC<CardProps> = ({ children }) => <div className="border font-montserrat border-white shadow-light-100 rounded-200 hover:shadow-light-400 hover:cursor-pointer active:shadow-light-300">
    {children}
  </div>;

export default Card;