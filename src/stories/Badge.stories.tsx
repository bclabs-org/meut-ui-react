import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Badge from '../components/Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'default',
  text: 'Default Badge',
};

export const WithSubText = Template.bind({});
WithSubText.args = {
  type: 'default',
  text: 'Yellow Badge',
  color: 'yellow',
};

export const WithCloseBtn = Template.bind({});
WithCloseBtn.args = {
  color: 'emerald',
  text: 'Emerald Badge',
};

export const WithAnimation = Template.bind({});
WithAnimation.args = {
  text: 'Pink Badge',
  color: 'pink',
};
