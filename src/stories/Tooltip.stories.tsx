import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tooltip from '../components/Tooltip/Tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />;

export const Default = Template.bind({});
Default.args = {
  tooltipText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
};
