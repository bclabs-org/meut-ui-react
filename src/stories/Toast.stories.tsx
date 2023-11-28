import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import ToastProvider from '../components/Toast/ToastProvider';
import useToast from '../components/Toast/useToast';

import Button from '../components/Button';
import { ToastState } from '../components/Toast/types';

export default {
  title: 'Components/Toast',
  component: ToastProvider,
} as ComponentMeta<typeof ToastProvider>;

const Template = ({ toastState }: { toastState: ToastState }) => {
  const toast = useToast();

  const handleToast = () => {
    toast(toastState.message, toastState.color, toastState.subMessage);
  };

  return (
    <div>
      <Button onClick={handleToast} size={'large'}>
        Popup Toast
      </Button>
    </div>
  );
};

const ProviderTemplate = (args) => (
  <ToastProvider>
    <Template toastState={args.toastState} />
  </ToastProvider>
);

export const Default: ComponentStory<any> = ProviderTemplate.bind({});
Default.args = {
  toastState: {
    message: 'This is a toast message',
    subMessage: 'This is a sub message',
    color: 'error',
    isAlertOpen: true,
  },
};
