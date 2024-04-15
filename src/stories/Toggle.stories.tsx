import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Toggle from '../components/Toggle/Toggle';

export default {
  title: 'Components/Toggle',
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'test용 text',
};
