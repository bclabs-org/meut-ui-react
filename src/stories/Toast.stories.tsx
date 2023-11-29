import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import ToastProvider from '../components/Toast/ToastProvider';

import Button from '../components/Button';
import { toast } from '../components/Toast/ToastStore';

type DefaultArgs = {
  message: string;
  subMessage: string;
  type: "error" | "attention" | "completion" | "information"
};

export default {
  title: 'Components/Toast',
  component: ToastProvider,
} as ComponentMeta<typeof React.Component<DefaultArgs>>;

const Template: ComponentStory<typeof React.Component<DefaultArgs>> = (args) => {
  const abc = 123;

  return (
    <div>
      <ToastProvider />
      <div className="flex flex-col gap-4">
        <div>
          <h2>Toast information</h2>
          <code className="rounded bg-gray-100 text-xs p-1">
            toast.info(&#39;info msg&#39;, &#39;subMessage?&#39;)
          </code>
         <Button size={'large'} onClick={() => toast.info('info msg')}>
          Popup info
         </Button>
        </div>
        <div>
         <Button size={'large'} onClick={() => toast.completion('completion msg')}>
          Popup completion
         </Button>
        </div>
        <div>
         <Button size={'large'} onClick={() => toast.attention('attention msg')}>
          Popup attention
         </Button>
        </div>
        <div>
         <Button size={'large'} onClick={() => toast.error('error msg')}>
          Popup error
         </Button>
        </div>
        <div>
        <Button size={'large'} onClick={() => toast(args.message, args.type, args.subMessage)}>
          Popup Custom Toast!
        </Button>
        </div>
      </div>
    </div>
  );
};


export const Default: ComponentStory<typeof React.Component<DefaultArgs>> = Template.bind({});
Default.args = {
  message: 'This is a toast message',
  subMessage: 'This is a sub message',
  type: 'error',
};
