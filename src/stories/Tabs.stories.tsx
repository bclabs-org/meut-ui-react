import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tabs from '../components/Tabs/index';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    color: {
      options: ['primary'],
      control: { type: 'radio' },
    },
    tabNames: { control: 'object' },
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: 'primary',
  tabNames: ['탭 이름1', '탭 이름2', '탭 이름3'],
};
