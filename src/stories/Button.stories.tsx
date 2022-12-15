import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../components/Button/index';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    color: {
      options: ['bg-primary', 'bg-secondary', 'bg-tertiary'],
      control: { type: 'radio' },
    },
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: '버튼',
  color: 'bg-primary',
  size: 'large',
};
