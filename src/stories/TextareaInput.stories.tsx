import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import TextareaInput from '../components/TextareaInput/TextareaInput';

export default {
  title: 'Components/TextareaInput',
  component: TextareaInput,
} as ComponentMeta<typeof TextareaInput>;

const Template: ComponentStory<typeof TextareaInput> = (args) => <TextareaInput {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: 'Default',
  name: 'name',
  placeholder: '텍스트를 입력해주세요',
  error: false,
};

export const Disabled = Template.bind({});

Disabled.args = {
  label: 'Disabled',
  name: 'disabled',
  placeholder: '비활성화 된 텍스트 에어리어',
  disabled: true,
};

export const Error = Template.bind({});

Error.args = {
  label: 'Error',
  name: 'error',
  value: '잘못된 텍스트',
  error: true,
};

export const WithCounter = Template.bind({});

WithCounter.args = {
  label: 'With Counter',
  name: 'withCounter',
  placeholder: '텍스트를 입력해주세요',
  value: 'Test text',
  byteSize: 9,
  maxByteSize: 100,
  enableByteCount: true,
};

export const WithSaveButton = Template.bind({});

WithSaveButton.args = {
  label: 'With Save Button',
  name: 'withSaveButton',
  placeholder: '텍스트를 입력해주세요',
  value: 'Test text',
  byteSize: 9,
  maxByteSize: 100,
  enableByteCount: true,
  enableSaveButton: true,
};

export const WithImageUploadButton = Template.bind({});

WithImageUploadButton.args = {
  label: 'With Image Upload Button',
  name: 'withImageUploadButton',
  placeholder: '텍스트를 입력해주세요',
  value: 'Test text',
  byteSize: 9,
  maxByteSize: 100,
  enableByteCount: true,
  enableSaveButton: true,
  enableImageUpload: true,
};
