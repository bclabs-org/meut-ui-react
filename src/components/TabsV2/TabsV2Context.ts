import React from 'react';
interface TabsV2ContextProps {
    activeTab: string;
    onChange: (tabName: string) => void;
}

const TabsV2Context = React.createContext<TabsV2ContextProps>({
    activeTab: '',
    onChange: () => {},
})

export { TabsV2Context }