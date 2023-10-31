import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextInput from '../components/TextInput/index';

export default {
  title: 'Components/TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'text',
  name: 'default',
  placeholder: '텍스트를 입력해주세요',
  maxLength: 20,
};

export const Disabled = Template.bind({});
Disabled.args = {
  type: 'text',
  name: 'disabled',
  placeholder: '텍스트를 입력해주세요',
  maxLength: 20,
  disabled: true,
};

export const Helper = Template.bind({});
Helper.args = {
  type: 'text',
  name: 'helper',
  label: 'Email*',
  placeholder: '텍스트를 입력해주세요',
  helperMessage: '이메일을 입력하는 곳입니다',
  maxLength: 20,
};

export const Error = Template.bind({});
Error.args = {
  type: 'text',
  name: 'error',
  label: 'Email*',
  placeholder: '텍스트를 입력해주세요',
  errorMessage: '다시 입력해주세요',
  maxLength: 20,
};

export const Extra = Template.bind({});
Extra.args = {
  type: 'text',
  name: 'extra',
  label: 'Email*',
  placeholder: '텍스트를 입력해주세요',
  extraMessage: 'Resend',
  verificationTime: '0:01',
  maxLength: 20,
  flag: true,
};

export const DropdownInput = Template.bind({});
DropdownInput.args = {
  type: 'text',
  name: 'default',
  placeholder: '텍스트를 입력해주세요',
  maxLength: 20,
  miniButton: 'button',
  dropdownProps: {
    content: ['BTC', 'ETH', 'USDT'],
    label: '',
    selected: 'BTC',
    handleChange: ():void => console.log('handleChange'),
    placeholder: '텍스트를 입력해주세요',
  }
};
