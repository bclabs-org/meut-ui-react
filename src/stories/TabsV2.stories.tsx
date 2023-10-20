import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TabsV2 from '../components/TabsV2/TabsV2';
import TabV2 from '../components/TabV2/TabV2';
import Button from '../components/Button/Button';
import Toggle from '../components/Toggle/Toggle';
import Card from "../components/Card/Card";

export default {
  title: 'Components/TabsV2',
  component: TabsV2,
} as ComponentMeta<typeof TabsV2>;

const translationData = {
  ko: {
    performance: '퍼포먼스',
    risk: '리스크',
    analytics: '분석',
  },
  en: {
    performance: 'Performance',
    risk: 'Risk',
    analytics: 'Analytics',
  },
};

const Template: ComponentStory<typeof TabsV2> = (args) => {
  const [selectedTab, setSelectedTab] = React.useState(args.activeTab);
  const [currentLanguage, setCurrentLanguage] = React.useState<'en' | 'ko'>('en');

  const mockT = (key: string): string => {
    return translationData[currentLanguage][key];
  };

  const handleClick = (tabName: string): void => {
    setSelectedTab(tabName);
  };

  return (
    <>
      <TabsV2 {...args} activeTab={selectedTab} onChange={handleClick}>
        <TabV2 label={'performance'}>{mockT('performance')}</TabV2>
        <TabV2 label={'risk'}>{mockT('risk')}</TabV2>
        <TabV2 label={'analytics'}>{mockT('analytics')}</TabV2>
      </TabsV2>
      <Card className="mt-12 flex justify-between">
        <div className="py-2 flex justify-between font-medium text-gray-700">
          <p>activeTab</p>
          <p className="text-emerald-500 font-semibold">{selectedTab}</p>
        </div>
        <div className="flex items-center gap-2 justify-between">
          <span className="font-medium text-gray-700">{currentLanguage === 'ko' ? '번역 해제' : '한국어로 번역'}</span>
          <Toggle
            enabled={currentLanguage === 'ko'}
            setEnabled={() => setCurrentLanguage(currentLanguage === 'ko' ? 'en' : 'ko')}
            text={'한국어로 번역'}
          />
        </div>
      </Card>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  activeTab: 'performance',
  borderTop: true,
  bgColor: true,
};

export const WithShadow = Template.bind({});
WithShadow.args = {
  activeTab: 'performance',
  shadow: 'default',
};

export const WithBorder = Template.bind({});
WithBorder.args = {
  activeTab: 'performance',
  borderTop: true,
  borderBottom: true,
};

export const WithBackgroundColor = Template.bind({});
WithBackgroundColor.args = {
  activeTab: 'performance',
  bgColor: true,
  shadow: 'default',
};
