interface TabsGroupContextProps {
  activeTab: string;
  onChange: (tabName: string) => void;
}
declare const TabGroupContext: import('react').Context<TabsGroupContextProps>;
export default TabGroupContext;
