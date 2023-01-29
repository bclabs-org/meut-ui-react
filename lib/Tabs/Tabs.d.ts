import React from 'react';
type TabsProps = {
    tabNames: string[];
    selectedTab: string;
    setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
};
declare const Tabs: React.FC<TabsProps>;
export default Tabs;
