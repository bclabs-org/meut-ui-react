import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextInput from '../components/TextInput/index';

export default {
  title: 'Components/TextInput',
  component: TextInput,
  argTypes: {
    type: { control: { type: 'text' } },
    name: { control: { type: 'text' } },
    placeholder: { control: { type: 'text' } },
    helperMessage: { control: { type: 'text' } },
    errorMessage: { control: { type: 'text' } },
    onChange: { action: 'onChange' },
    value: { control: { type: 'text' } },
    maxLength: {control: { type: 'number' } },
  },
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'text',
  name: 'default',
  placeholder: '텍스트를 입력해주세요!!!',
};

export const Helper = Template.bind({});
Helper.args = {
  type: 'text',
  name: 'default',
  placeholder: '텍스트를 입력해주세요',
  helperMessage: '10글자 이상 입력해야 됩니다',
  maxLength: 10,
};

export const Error = Template.bind({});
Error.args = {
  type: 'text',
  name: 'default',
  placeholder: '텍스트를 입력해주세요',
  errorMessage: '다시 입력해주세요',
};
