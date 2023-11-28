import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import ToastProvider from '../components/Toast/ToastProvider';
import useToast from '../components/Toast/useToast';
import Toast from '../components/Toast';
import Button from '../components/Button';
import { ToastState } from '../components/Toast/types';

export default {
  title: 'Components/Toast',
  component: Toast,
} as ComponentMeta<typeof Toast>;

const Template = ({ toastState }: { toastState: ToastState }) => {
  const toast = useToast();

  const handleToast = () => {
    toast('This is a toast message', 'error', 'This is a sub message');
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

export const Default: ComponentStory<typeof Toast> = ProviderTemplate.bind({});
Default.args = {
  toastState: {
    message: 'This is a toast message',
    subMessage: 'This is a sub message',
    color: 'error',
    isAlertOpen: true,
  },
};
