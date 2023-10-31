import React from 'react';

type TabProps = {
  label: string;
  children?: React.ReactNode;
};
declare const Tab: ({ label, children }: TabProps) => React.FC<TabProps>;
export default Tab;
