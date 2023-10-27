import React from 'react';
import classNames from 'classnames';
import { TabGroupContext } from './TabGroupContext';

type TabsGroupProps = {
  activeTab: string;
  onChange: (tab: string) => void;
  bgColor?: boolean;
  children?: React.ReactNode;
};

const TabGroup: React.FC<TabsGroupProps> = ({
  activeTab,
  onChange,
  bgColor = true,
  children,
}) => {
  return (
    <TabGroupContext.Provider value={{ activeTab, onChange }}>
      <div
        className={classNames('flex', 'h-16', {
          'bg-gray-50 border-t shadow-[0_1px_1px_0_rgba(0,0,0,0.06),0_1px_2px_0_rgba(0,0,0,0.1)]': bgColor,
          'bg-white border-b': !bgColor,
        })}
      >
        {children}
      </div>
    </TabGroupContext.Provider>
  );
};

export default TabGroup;
