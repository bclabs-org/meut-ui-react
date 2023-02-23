import React from 'react';
type TabsProps = {
    tabNames: string[];
    selectedTab: string;
    setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
    className?: string;
};
declare const Tabs: React.FC<TabsProps>;
export default Tabs;
