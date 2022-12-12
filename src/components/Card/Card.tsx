import React from 'react';

type Props = {
  children: React.ReactNode
}

export const Card: React.FC<Props> = ({children}) => {
  return <div className="border border-white shadow-light-100 rounded-200 hover:shadow-light-400 hover:cursor-pointer active:shadow-light-300">
    {children}
  </div>
}