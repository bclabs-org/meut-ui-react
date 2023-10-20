import React from 'react';
import classNames from 'classnames';
import { TabGroupContext } from '../TabGroup/TabGroupContext';

interface TabProps {
  label: string;
  children?: React.ReactNode;
}

const Tab = ({ label, children }: TabProps) => {
  const { activeTab, onChange } = React.useContext(TabGroupContext);

  return (
    <button
      key={label}
      onClick={(): void => onChange(label)}
      className={classNames(
        'flex text-base justify-center hover:border-b-2 hover:border-emerald-400 font-medium hover:font-semibold active:font-semibold items-center cursor-pointer py-2',
        label === activeTab
          ? 'font-semibold text-black border-b-2 border-primary hover:border-primary'
          : 'text-gray-700 border-b-2 border-transparent'
      )}
      aria-label={label}
    >
      {children}
    </button>
  );
};

export default Tab;
