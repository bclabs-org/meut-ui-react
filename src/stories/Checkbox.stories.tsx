import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Checkbox from '../components/Checkbox/Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'checkbox label',
  checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'checkbox label',
  disabled: true,
};

export const NotClickable = Template.bind({});
NotClickable.args = {
  label: 'click 안되는 checkbox',
  isDisabled: true,
  isComplete: true,
};



