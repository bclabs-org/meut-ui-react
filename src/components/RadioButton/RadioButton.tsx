import classNames from 'classnames';
import React from 'react';
import RadioButtonGroupContext from '../RadioButtonGroup/RadioButtonGroupContext';

type RadioButtonProps = {
  label: string;
  id: string;
  disabled?: boolean;
};

const RadioButton: React.FC<RadioButtonProps> = ({ label, id, disabled }: RadioButtonProps) => {
  const { labelDirection, onChange, defaultCheckedId } = React.useContext(RadioButtonGroupContext);

  return (
    <div
      key={id}
      className={`flex items-center ${labelDirection === 'column' ? 'flex-col' : 'flex-row'}`}
    >
      <input
        id={id}
        name="notification-method"
        type="radio"
        defaultChecked={id === defaultCheckedId}
        className={classNames(
          'transition-all h-[18px] w-[18px] border-gray-300 text-emerald-500',
          'hover:ring-emerald-100 hover:ring-offset-0 hover:ring-[7px] hover:border-emerald-500',
          'focus:ring-emerald-200 focus:ring-offset-0 focus:ring-[7px] focus:border-emerald-500',
          'disabled:opacity-40 disabled:hover:ring-0'
        )}
        onChange={(): void => onChange(id)}
        disabled={disabled}
      />
      <label
        htmlFor={id}
        className={classNames(
          'block text-sm font-medium leading-5 text-gray-700',
          labelDirection === 'column' ? 'mt-2' : 'ml-3'
        )}
      >
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
