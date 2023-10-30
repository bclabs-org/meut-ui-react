import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ErrorModal } from '../components/Modal';

export default {
  title: 'Components/ErrorModal',
  component: ErrorModal,
} as ComponentMeta<typeof ErrorModal>;

const Template: ComponentStory<typeof ErrorModal> = (args) => <ErrorModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Network error',
  message: 'An unknown network error has occured. Please try again later.',
  isModalOpen: true,
  leftButtonText: 'My purchases',
  rightButtonText: 'Continue browsing',
};
