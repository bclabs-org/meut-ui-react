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
  label: 'Label',
  name: 'name',
  maxByteSize: 100,
  error: false,
};
