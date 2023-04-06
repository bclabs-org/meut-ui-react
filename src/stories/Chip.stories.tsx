import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Chip from '../components/Chip/Chip';

export default {
  title: 'Components/Chip',
  component: Chip,
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'medium',
  selected: false,
  label: 'All Strategies',
  count: 18,
};

export const selected = Template.bind({});
selected.args = {
  size: 'medium',
  selected: true,
  label: 'All Strategies',
  count: undefined,
};
