import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Dropdown } from '../components/Dropdown/Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: ['a', 'b', 'c'],
  placeholder: 'placeholder',
};
