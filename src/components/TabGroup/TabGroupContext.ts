import { createContext } from 'react';

interface TabsGroupContextProps {
  activeTab: string;
  onChange: (tabName: string) => void;
}

const TabGroupContext = createContext<TabsGroupContextProps>({
  activeTab: '',
  onChange: () => {},
});

export { TabGroupContext };
