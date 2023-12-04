import React from 'react';
import classNames from 'classnames';
import './buttonsGroup.css';

type ButtonsGroupContextProps = {
  onChange: (value: string) => void;
  selected: string;
};

const ButtonsGroupContext = React.createContext<ButtonsGroupContextProps>({
  onChange: () => null,
  selected: '',
});

type ButtonsGroupItemProps = {
  value: string;
  label: string;
  children?: React.ReactNode;
};

const ButtonsGroupItem = ({ value, label, children }: ButtonsGroupItemProps) => {
  const { onChange, selected } = React.useContext(ButtonsGroupContext);
  return (
    <button
      type="button"
      onClick={() => onChange(value)}
      className={classNames(
        'relative -ml-px py-2 inline-flex items-center flex-1 justify-center',
        'border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-secondary',
        'first:rounded-l-md',
        'last:rounded-r-md',
        selected === value && 'btn-group-focus'
      )}
    >
      {children || label}
    </button>
  );
};

type ButtonsGroupProps = ButtonsGroupContextProps & {
  width?: number | 'full';
  children?: React.ReactNode;
  className?: string;
};

const ButtonsGroup = ({
  onChange,
  selected,
  children,
  width = 336,
  className,
}: ButtonsGroupProps) => (
  <ButtonsGroupContext.Provider value={{ onChange, selected }}>
    <span
      className={classNames('isolate flex rounded-md shadow-sm w-full', className)}
      style={{ maxWidth: width === 'full' ? 'unset' : width }}
    >
      {children}
    </span>
  </ButtonsGroupContext.Provider>
);

ButtonsGroup.Item = ButtonsGroupItem;

export default ButtonsGroup;
