import React, { useState } from 'react';
import classNames from 'classnames';

type TabsPropsType = {
  color?: string,
  tabNames: string[]
}
const Tabs: React.FC<TabsPropsType> = ({ color = 'primary', tabNames }: TabsPropsType) => {
  const initialTabs = tabNames.map((name, index) => ({
    name,
    current: index === 0,
  }));

  const [tabs, setTabs] = useState(initialTabs);
  const handleClick = (idx) => {
    setTabs(tabs.map((tab, index) => ({
      name: tab.name,
      current: idx === index,
    })));
  };

  let clickedStyle = '';
  const idleStyle = 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300';

  if (color === 'primary') {
    clickedStyle = 'border-primary text-primary';
  }

  return (
    <div>
      <div className={''}>
        <nav className={'flex -mb-px space-x-8'}>
          {tabs.map((tab, index) => (
            <div key={tab.name} onClick={() => handleClick(index)} style={{ cursor: 'pointer' }}
                 className={classNames(
                   tab.current ? clickedStyle : idleStyle,
                   'text-[16px] font-montserrat justify-center items-center border-b-2 py-[12px]',
                 )}>{tab.name}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Tabs;
