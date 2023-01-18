import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Alert from '../components/Alert/Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: 'error',
  text: 'Error Alert',
};

export const WithSubText = Template.bind({});
WithSubText.args = {
  color: 'error',
  text: 'Error Alert',
  subText: 'subText It has survived not only five centuries subText It has survived not only five centuries subText It has survived not only five centuries',
};

export const WithCloseBtn = Template.bind({});
WithCloseBtn.args = {
  color: 'error',
  text: 'Error Alert',
  closeBtn: true,
};

export const WithAnimation = Template.bind({});
WithAnimation.args = {
  color: 'error',
  text: 'Error Alert',
  closeBtn: true,
};
