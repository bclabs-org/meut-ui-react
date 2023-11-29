import { ToastColor, ToastState } from './types';

let nextId = 0;
let toasts: ToastState[] = [];
let listeners: Function[] = [];

const toastStore = {
  addToast(message: string, type: ToastColor, subMessage) {
    const isMessageExists = toasts.some((t) => t.message === message);
    if (isMessageExists) {
      return;
    }
    toasts = [...toasts, { id: nextId, message, type, subMessage }];
    listeners.forEach((listener) => listener(toasts));
    nextId += 1;
  },
  subscribe(listener: Function) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot() {
    return toasts;
  },
  getServerSnapshot() {
    return toasts;
  },
  removeToast(message: string) {
    toasts = toasts.filter((t) => t.message !== message);
    listeners.forEach((listener) => listener(toasts));
  },
};

const toast = (message: string, type: ToastColor, subMessage = '', delay = 2000) => {
  toastStore.addToast(message, type, subMessage);
};

toast.error = (message: string, subMessage?: string) => toast(message, 'error', subMessage);
toast.attention = (message: string, subMessage?: string) => toast(message, 'attention', subMessage);
toast.completion = (message: string, subMessage?: string) =>
  toast(message, 'completion', subMessage);
toast.info = (message: string, subMessage?: string) => toast(message, 'information', subMessage);

export { toastStore, toast };
