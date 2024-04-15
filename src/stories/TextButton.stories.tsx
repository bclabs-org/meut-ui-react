import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextButton from '../components/TextButton';

export default {
  title: 'Components/TextButton',
  component: TextButton,
} as ComponentMeta<typeof TextButton>;

const Template: ComponentStory<typeof TextButton> = (args) => (
  <div className={`my-5`}>
    <TextButton {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  text: 'Default TextButton',
  color: 'default',
  size: 'large',
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Disabled Icon Left Large',
  color: 'pink-600',
  size: 'large',
  disabled: true,
  icon: 'left-arrow',
};

export const BlueSmall = Template.bind({});
BlueSmall.args = {
  text: '버튼 blue small underline',
  color: 'blue-700',
  size: 'small',
  underline: true,
  icon: 'right-arrow',
};
