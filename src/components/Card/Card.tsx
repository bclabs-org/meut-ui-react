import React from 'react';

type Props = {
  children: React.ReactNode
}

const Card: React.FC<Props> = ({ children }) => <div className="border border-white shadow-light-100 rounded-200">
      {children}
    </div>;

export default Card;
