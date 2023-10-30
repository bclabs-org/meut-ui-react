import React from 'react';

type TabsGroupProps = {
    activeTab: string;
    onChange: (tab: string) => void;
    borderTop?: boolean;
    borderBottom?: boolean;
    bgColor?: boolean;
    shadow?: 'default' | 'side';
    children?: React.ReactNode;
};
declare const TabGroup: React.FC<TabsGroupProps>;
export default TabGroup;
