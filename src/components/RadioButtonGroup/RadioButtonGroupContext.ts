import React from 'react';

type RadioButtonGroupContextType = {
  defaultCheckedId: string;
  labelDirection: 'row' | 'col';
  onChange: (value: string) => void;
};

const RadioButtonGroupContext = React.createContext<RadioButtonGroupContextType>({
  defaultCheckedId: '',
  labelDirection: 'col',
  onChange: () => null,
});

export default RadioButtonGroupContext;
