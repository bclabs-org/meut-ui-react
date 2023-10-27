import React from 'react';
import classNames from 'classnames';
import { TabGroupContext } from './TabGroupContext';

type TabsGroupProps = {
  activeTab: string;
  onChange: (tab: string) => void;
  borderTop?: boolean;
  borderBottom?: boolean;
  bgColor?: boolean;
  shadow?: boolean;
  children?: React.ReactNode;
};

const TabGroup: React.FC<TabsGroupProps> = ({
  activeTab,
  onChange,
  borderTop = false,
  borderBottom = false,
  bgColor = false,
  shadow = false,
  children,
}) => {
  return (
    <TabGroupContext.Provider value={{ activeTab, onChange }}>
      <div
        className={classNames('flex', 'h-16', {
          'border-t': borderTop,
          'border-b': borderBottom,
          'bg-gray-50': bgColor,
          'bg-white': !bgColor,
          'shadow-[0_1px_1px_0_rgba(0,0,0,0.06),0_1px_2px_0_rgba(0,0,0,0.1)]': shadow,
        })}
      >
        {children}
      </div>
    </TabGroupContext.Provider>
  );
};

export default TabGroup;
