import React from 'react';

type RadioButtonGroupContextType = {
  defaultCheckedId: string;
  labelDirection: 'row' | 'column';
  onChange: (value: string) => void;
};

const RadioButtonGroupContext = React.createContext<RadioButtonGroupContextType>({
  defaultCheckedId: '',
  labelDirection: 'column',
  onChange: () => null,
});

export default RadioButtonGroupContext;
