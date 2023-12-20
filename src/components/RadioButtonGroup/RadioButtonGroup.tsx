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

/**
 * RadioButtonGroup
 * @caution - legend 값은 컴포넌트마다 고유한 값이어야 합니다. legend 가 같다면 체크상태를 공유하게 됩니다.
 */
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
        groupDirection === 'row' ? 'flex items-center space-x-4' : 'w-fit space-y-4'
      )}
    >
      <RadioButtonGroupContext.Provider
        value={{ legend, labelDirection, onChange, defaultCheckedId }}
      >
        {children}
      </RadioButtonGroupContext.Provider>
    </div>
  </fieldset>
);

export default RadioButtonGroup;
