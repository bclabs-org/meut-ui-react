import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: '버튼',
  color: 'primary',
  size: 'large',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: '버튼 비활성화',
  color: 'primary',
  size: 'large',
  disabled: true,
};

export const Full = Template.bind({});
Full.args = {
  children: '버튼 width full',
  color: 'primary',
  size: 'large',
  full: true,
};
