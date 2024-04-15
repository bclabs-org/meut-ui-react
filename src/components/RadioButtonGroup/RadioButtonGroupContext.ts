import React from 'react';

type RadioButtonGroupContextType = {
  legend: string;
  defaultCheckedId: string;
  labelDirection: 'row' | 'col';
  onChange: (value: string) => void;
};

const RadioButtonGroupContext = React.createContext<RadioButtonGroupContextType>({
  legend: '',
  defaultCheckedId: '',
  labelDirection: 'col',
  onChange: () => null,
});

export default RadioButtonGroupContext;
