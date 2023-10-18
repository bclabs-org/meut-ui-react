import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TabsV2 from '../components/TabsV2/TabsV2';

export default {
    title: 'Components/TabsV2',
    component: TabsV2,
} as ComponentMeta<typeof TabsV2>;

const Template: ComponentStory<typeof TabsV2> = (args) => {
    const [selectedTab, setSelectedTab] = React.useState(args.selectedTab);

    const handleClick = (tabName: string):void => {
        setSelectedTab(tabName);
    }

    return <TabsV2 {...args} selectedTab={selectedTab} handleClick={handleClick} />
};

const SampleTabData = [{key:'performance', label:"Performance", }, {key:'risk', label:"Risk", }, {key:'analytics', label:"Analytics",}]
export const Default = Template.bind({});
Default.args = {
    tabData: SampleTabData,
    selectedTab: 'performance',
    borderTop: true,
    bgColor: true,
}

export const Shadow = Template.bind({});
Shadow.args = {
    tabData: SampleTabData,
    selectedTab: 'performance',
    shadow: true,
}

export const Border = Template.bind({});
Border.args = {
    tabData: SampleTabData,
    selectedTab: 'performance',
    borderTop: true,
    borderBottom: true,
}

export  const BackgroundColor = Template.bind({});
BackgroundColor.args = {
    tabData: SampleTabData,
    selectedTab: 'performance',
    bgColor: true,
    shadow: true,
}