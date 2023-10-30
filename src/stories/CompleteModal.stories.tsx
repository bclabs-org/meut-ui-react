import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CompleteModal } from '../components/Modal';

export default {
  title: 'Components/CompleteModal',
  component: CompleteModal,
} as ComponentMeta<typeof CompleteModal>;

const Template: ComponentStory<typeof CompleteModal> = (args) => <CompleteModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Completed',
  message:
    'Your transaction has been completed.Your transaction has been completed.Your transaction has been completed.Your transaction has been completed.',
  buttonText: 'Close',
};
