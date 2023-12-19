import React from 'react';
import classNames from 'classnames';
import RadioButtonGroupContext from './RadioButtonGroupContext';

type RadioButtonGroupProps = {
  legend: string;
  defaultCheckedId: string;
  groupDirection?: 'row' | 'col';
  labelDirection?: 'row' | 'col';
  className?: string;
  children?: React.ReactNode;
  onChange: (value: string) => void;
};

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  legend,
  defaultCheckedId,
  groupDirection = 'col',
  labelDirection = 'row',
  className,
  children,
  onChange,
}: RadioButtonGroupProps) => (
  <fieldset className={className}>
    <legend className="sr-only">{legend}</legend>
    <div
      className={classNames(
        groupDirection === 'row' ? 'flex items-center space-x-4' : 'flex-col space-y-4'
      )}
    >
      <RadioButtonGroupContext.Provider value={{ labelDirection, onChange, defaultCheckedId }}>
        {children}
      </RadioButtonGroupContext.Provider>
    </div>
  </fieldset>
);

export default RadioButtonGroup;
