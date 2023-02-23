import React from 'react';
type TabsProps = {
    tabNames: string[];
    selectedTab: string;
    className?: string;
    setSelectedTab?: React.Dispatch<React.SetStateAction<string>>;
    onClick?: (param: string) => void;
};
declare const Tabs: React.FC<TabsProps>;
export default Tabs;
