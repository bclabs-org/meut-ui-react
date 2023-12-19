import React from 'react';
import classNames from 'classnames';
import RadioButtonGroupContext from './RadioButtonGroupContext';

type RadioButtonProps = {
  legend: string;
  defaultCheckedId: string;
  groupDirection?: 'row' | 'column';
  labelDirection?: 'row' | 'column';
  className?: string;
  children?: React.ReactNode;
  onChange: (value: string) => void;
};

const RadioButtonGroup = ({
  legend,
  defaultCheckedId,
  groupDirection = 'column',
  labelDirection = 'row',
  className,
  children,
  onChange,
}: RadioButtonProps) => (
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
