import React from 'react';

type Props = {
  children: React.ReactNode
}

export const Card: React.FC<Props> = ({children}) => {
  return <div className="border border-white shadow-light-100 rounded-200">
      {children}
    </div>
}