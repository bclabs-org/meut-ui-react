import React from 'react';

type TabsProps = {
  tabNames: string[];
  selectedTab: string;
  className?: string;
  setSelectedTab?: React.Dispatch<React.SetStateAction<string>>;
  onClick?: (param: string) => void;
};

const Tabs: React.FC<TabsProps> = ({
  tabNames,
  selectedTab = '탭 이름1',
  setSelectedTab,
  className = '',
    onClick
}: TabsProps) => {
  let gridCols;
  switch (tabNames.length) {
    case 2:
      gridCols = 'grid-cols-2';
      break;
    case 3:
      gridCols = 'grid-cols-3';
      break;
    default:
      throw Error('invalid length value');
  }

  const getHandClick = () => {
    let temporaryFunc;
    if (onClick) {
      temporaryFunc = onClick;
    } else if (setSelectedTab) {
      temporaryFunc = selectedTab;
    }

    return temporaryFunc;
  }

  return (
    <div className={`grid ${gridCols} border-b border-gray-200 h-16 ${className}`}>
      {tabNames.map((tab) => (
        <div
          key={tab}
          onClick={() => getHandClick()(tab)}
          className={`h-16 flex justify-center items-center cursor-pointer py-2 ${
            selectedTab === tab
              ? 'border-b-2 border-primary hover:border-primary'
              : 'hover:border-b-2 hover:border-emerald-200'
          }`}
        >
          <p
            className={`text-lg font-medium text-onTertiary ${
              selectedTab === tab ? 'font-semibold text-gray-900' : 'hover:text-gray-800'
            }`}
          >
            {tab}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
