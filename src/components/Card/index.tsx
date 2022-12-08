import React from 'react';

type Props = {
  children: React.ReactNode
}
export const Card: React.FC<Props> = ({children}) => {
  return (
    <div className="border border-white boxShadow-light-100 borderRadius-200">
      {children}
    </div>
  )
}