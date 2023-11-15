import React from 'react';

type DropdownContextProps = {
  activeItem?: string;
  fontSize?: 'text-xs' | 'text-sm' | 'text-base';
};

const DropdownContext = React.createContext<DropdownContextProps>({
  activeItem: '',
  fontSize: 'text-base',
});

export default DropdownContext;
