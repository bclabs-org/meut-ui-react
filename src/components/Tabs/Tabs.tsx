import React, { useState } from 'react';
import classNames from 'classnames';

type TabsProps = {
  color?: string;
  tabNames: string[];
};

const Tabs: React.FC<TabsProps> = ({ color = 'primary', tabNames }: TabsProps) => {
  const initialTabs = tabNames.map((name, index) => ({
    name,
    current: index === 0,
  }));

  const [tabs, setTabs] = useState(initialTabs);
  const handleClick = (idx) => {
    setTabs(
      tabs.map((tab, index) => ({
        name: tab.name,
        current: idx === index,
      }))
    );
  };

  let clickedStyle = '';
  const idleStyle =
    'border-transparent text-neutral hover:text-neutral-focus hover:border-gray-300';

  if (color === 'primary') {
    clickedStyle = 'border-primary text-primary';
  }

  return (
    <nav className={'flex -mb-px space-x-8'}>
      {tabs.map((tab, index) => (
        <div
          key={tab.name}
          onClick={() => handleClick(index)}
          style={{ cursor: 'pointer' }}
          className={classNames(
            tab.current ? clickedStyle : idleStyle,
            'justify-center items-center border-b-2 py-3'
          )}
        >
          {tab.name}
        </div>
      ))}
    </nav>
  );
};

export default Tabs;
