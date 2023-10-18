import React from 'react';
import classNames from 'classnames';

type TabsV2Props = {
  tabData: Array<{ key: string; label: string }>;
  selectedTab: string;
  handleClick: (tab: string) => void;
  borderTop?: boolean;
  borderBottom?: boolean;
  bgColor?: boolean;
  shadow?: boolean;
};

const TabsV2: React.FC<TabsV2Props> = ({
  tabData,
  selectedTab,
  handleClick,
  borderTop = false,
  borderBottom = false,
  bgColor = false,
  shadow = false,
}) => (
  <div
    className={classNames(
      'grid',
      `grid-cols-${tabData.length}`,
      'h-16',
      borderTop ? 'border-t' : '',
      borderBottom ? 'border-b' : '',
      bgColor ? 'bg-gray-50' : 'bg-white',
      shadow ? 'shadow-[-2px_0_1px_-1px_rgba(0,0,0,0.1),3px_0_1px_-1px_rgba(0,0,0,0.1)]' : ''
    )}
  >
    {tabData.map((tab) => (
      <button
        key={tab.key}
        onClick={(): void => handleClick(tab.key)}
        className={classNames(
          'flex text-base justify-center hover:border-b-2 hover:border-emerald-400 font-medium hover:font-semibold active:font-semibold items-center cursor-pointer py-2',
          selectedTab === tab.key
            ? 'font-semibold text-black border-b-2 border-primary hover:border-primary'
            : 'text-gray-700 border-b-2 border-transparent border-gray-200'
        )}
        aria-label={tab.label}
      >
        {tab.label}
      </button>
    ))}
  </div>
);

export default TabsV2;
