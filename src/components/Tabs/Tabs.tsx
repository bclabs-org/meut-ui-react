import React from 'react';

type TabsProps = {
  tabNames: string[];
  selectedTab: string;
  className?: string;
  setSelectedTab?: React.Dispatch<React.SetStateAction<string>>;
  isBorderTop?: boolean;
  backgroundColor?: string;
  isBottomShadow?: boolean;
  onClick?: (param: string) => void;
};

const Tabs: React.FC<TabsProps> = ({
  tabNames,
  selectedTab = '탭 이름1',
  setSelectedTab,
  isBorderTop = false,
  backgroundColor = 'bg-white',
  isBottomShadow = false,
  className = '',
  onClick,
}: TabsProps) => {
  let gridCols;
  switch (tabNames.length) {
    case 1:
      gridCols = 'grid-cols-1';
      break;
    case 2:
      gridCols = 'grid-cols-2';
      break;
    case 3:
      gridCols = 'grid-cols-3';
      break;
    case 4:
      gridCols = 'grid-cols-4';
      break;
    case 5:
      gridCols = 'grid-cols-5';
      break;
    case 6:
      gridCols = 'grid-cols-6';
      break;
    case 7:
      gridCols = 'grid-cols-7';
      break;
    case 8:
      gridCols = 'grid-cols-8';
      break;
    default:
      throw Error('invalid tabs length value');
  }

  const getHandClick = () => {
    let temporaryFunc;
    if (onClick) {
      temporaryFunc = onClick;
    } else if (setSelectedTab) {
      temporaryFunc = setSelectedTab;
    }

    return temporaryFunc;
  }

  return (
    <div className={`grid ${gridCols} ${backgroundColor} ${isBorderTop ? 'border-t' : ''} ${isBottomShadow ? 'shadow-[0_1px_1px_0_rgba(0,0,0,0.06),0_1px_2px_0_rgba(0,0,0,0.1)]' : ''} h-16 ${className}`}>
      {tabNames.map((tab) => (
        <div
          key={tab}
          onClick={() => getHandClick()(tab)}
          className={`h-16 flex text-base justify-center hover:border-b-2 hover:border-emerald-400 font-medium hover:font-semibold active:font-semibold items-center cursor-pointer py-2 ${
            selectedTab === tab ? 'font-semibold text-black border-b-2 border-primary hover:border-primary' : 'text-gray-700 border-b border-gray-200'              
          }`}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
