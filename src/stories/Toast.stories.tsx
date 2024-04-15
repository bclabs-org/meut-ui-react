import React from 'react';

import {ComponentMeta, ComponentStory} from '@storybook/react';
import {toast} from '../components/Toast';
import ToastProvider from '../components/Toast/ToastProvider';

import Button from '../components/Button';

type DefaultArgs = {
    message: string;
    subMessage: string;
    type: "error" | "attention" | "completion" | "information"
    duration: number;
};

export default {
    title: 'Components/Toast',
    component: ToastProvider,
} as ComponentMeta<typeof React.Component<DefaultArgs>>;

type ToastOptionProps = {
    toastType: string;
    displayText: string;
    onClick: () => void;
    codeText?: string;
    closeBtn?: boolean;
};

const ToastOption: React.FC<ToastOptionProps> = ({ toastType, displayText, onClick, codeText,  }) => (
        <div className="py-2 flex flex-col gap-y-2">
            <code className="w-fit rounded bg-gray-100 text-xs p-1">
                {codeText || `toast.${toastType}('message', 'subMessage')`}
            </code>
            <Button size={'large'} onClick={onClick}>
                {displayText}
            </Button>
        </div>
    );

const Template: ComponentStory<typeof React.Component<DefaultArgs>> = (args) => (
        <div>
            <ToastProvider/>
            <div className="grid grid-cols-2 w-3/4 mx-auto">
                <div className="flex flex-col gap-4 p-10">
                    <h2 className="text-xl font-semibold text-emerald-500">
                        Without Duration
                        <span className="px-4 text-sm font-medium text-gray-400">default duration = 2000</span>
                    </h2>
                    <ToastOption
                        toastType="info"
                        displayText="Popup info"
                        onClick={() => toast.info('info msg')}
                    />
                    <ToastOption
                        toastType="completion"
                        displayText="Popup completion"
                        onClick={() => toast.completion('completion msg')}
                    />
                    <ToastOption
                        toastType="attention"
                        displayText="Popup attention"
                        onClick={() => toast.attention('attention msg')}
                    />
                    <ToastOption
                        toastType="error"
                        displayText="Popup error"
                        onClick={() => toast.error('error msg')}
                    />
                    <ToastOption
                        toastType=""
                        displayText="Popup Custom Toast!"
                        onClick={() => toast(args.message, args.type, args.subMessage)}
                        codeText={`toast('${args.message}', '${args.subMessage}')`}
                    />
                </div>
                <div className="flex flex-col gap-4 p-10">
                    <h2 className="text-xl font-semibold text-emerald-500">WithDuration</h2>
                    <ToastOption
                        toastType="info"
                        displayText="Popup info"
                        onClick={() => toast.info('info msg', 'sub message', 5000)}
                        codeText="toast.info('info msg', 'sub message', 5000)"
                    />
                    <ToastOption
                        toastType="completion"
                        displayText="Popup completion"
                        onClick={() => toast.completion('completion msg', '', 2000)}
                        codeText="toast.completion('completion msg', '', 2000)"
                    />
                    <ToastOption
                        toastType="attention"
                        displayText="Popup attention"
                        onClick={() => toast.attention('attention msg', '', 1000)}
                        codeText="toast.attention('attention msg', '', 1000)"
                    />
                    <ToastOption
                        toastType="attention"
                        displayText="Popup attention - no close button"
                        onClick={() => toast.attention('attention msg - no close button', '', 1000, false)}
                        codeText="toast.attention('attention msg - no close button', '', 1000)"
                    />
                    <ToastOption
                        toastType="error"
                        displayText="Popup error"
                        onClick={() => toast.error('error msg', '', 6500)}
                        codeText="toast.error('error msg', '', 6500)"
                    />
                    <ToastOption
                        toastType=""
                        displayText="Popup Custom Toast!"
                        onClick={() => toast(args.message, args.type, args.subMessage, args.duration)}
                        codeText={`toast('${args.message}', '${args.type}', '${args.subMessage}', ${args.duration})`}
                    />
                </div>
            </div>
        </div>
    );


export const Default: ComponentStory<typeof React.Component<DefaultArgs>> = Template.bind({});
Default.args = {
    message: 'This is a toast message',
    subMessage: 'This is a sub message',
    type: 'error',
    duration: 2000
};
