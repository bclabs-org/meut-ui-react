import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../components/Button/index';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'radio' },
    },
    size: {
      options: ['large', 'small'],
      control: { type: 'radio' },
    },
  },
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
};
