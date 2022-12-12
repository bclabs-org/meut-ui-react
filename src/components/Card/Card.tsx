import React from 'react';

type CardProps = {
  children: React.ReactNode
}

const Card: React.FC<CardProps> = ({children}) => {
  return <div className="border border-white shadow-light-100 rounded-200 hover:shadow-light-400 hover:cursor-pointer active:shadow-light-300">
    {children}
  </div>
}

export default Card;